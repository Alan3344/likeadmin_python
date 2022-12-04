import io
import logging
import zipfile
from abc import ABC, abstractmethod
from pathlib import Path
from typing import List, Dict

from databases.interfaces import Record
from fastapi_pagination.bases import AbstractPage
from fastapi_pagination.ext.databases import paginate

from like.dependencies.database import db
from like.exceptions.base import AppException
from like.generator.constants import GenConstants
from like.generator.schemas.generate import (DbTablesIn, EditTableIn, DbTableOut, GenTableOut)
from like.generator.tpl_util import TemplateUtil
from like.generator.utils.gen import GenUtil
from like.http_base import HttpResp
from like.models.gen import gen_table, gen_table_column, GenTable, GenTableColumn


class IGenerateService(ABC):
    """代码生成服务抽象类"""

    @abstractmethod
    async def db_tables(self, db_in: DbTablesIn) -> AbstractPage[DbTableOut]:
        pass

    @abstractmethod
    async def list(self) -> AbstractPage[GenTableOut]:
        pass

    @abstractmethod
    async def detail(self, id_: int) -> dict:
        pass

    @abstractmethod
    async def import_table(self, table_names: List[str]):
        pass

    @abstractmethod
    async def edit_table(self, edit_in: EditTableIn):
        pass

    @abstractmethod
    async def delete_table(self, ids: List[int]):
        pass

    @abstractmethod
    async def sync_table(self, id_: int):
        pass

    @abstractmethod
    async def preview_code(self, id_: int) -> dict:
        pass

    @abstractmethod
    async def download_code(self, table_names: List[str]) -> io.BytesIO:
        pass

    @abstractmethod
    async def gen_code(self, table_name: str):
        pass

    @abstractmethod
    async def gen_zip_code(self, table_name: str, zf: zipfile.ZipFile):
        pass


class GenerateService(IGenerateService):
    """代码生成服务实现类"""

    async def db_tables(self, db_in: DbTablesIn) -> AbstractPage[DbTableOut]:
        """库表列表"""
        pager = await paginate(db, GenUtil.get_db_tables_query(db_in.table_name, db_in.table_comment))
        return pager

    async def list(self) -> AbstractPage[GenTableOut]:
        return

    async def detail(self, id_: int) -> dict:
        pass

    @db.transaction()
    async def import_table(self, table_names: List[str]):
        """导入表结构"""
        tables = await db.fetch_all(GenUtil.get_db_tables_query_by_names(table_names))
        assert tables, '表不存在!'
        try:
            for table in tables:
                # 生成表信息
                tbl_dict = GenUtil.init_table(table)
                row_id = await db.execute(gen_table.insert().values(**tbl_dict))
                tbl_dict['id'] = row_id
                # 生成列信息
                if row_id > 0:
                    columns = await db.fetch_all(GenUtil.get_db_table_columns_query_by_name(table.table_name))
                    for column in columns:
                        await db.execute(gen_table_column.insert().values(**GenUtil.init_column(tbl_dict, column)))
        except Exception as e:
            logging.error(e)
            raise AppException(HttpResp.FAILED, msg=f'导入失败： {e}')

    @db.transaction()
    async def edit_table(self, edit_in: EditTableIn):
        pass

    @db.transaction()
    async def delete_table(self, ids: List[int]):
        pass

    @db.transaction()
    async def sync_table(self, id_: int):
        pass

    async def get_sub_table_info(self, table: GenTable) -> (Record, List[Record]):
        """根据主表获取子表主键和列信息"""
        origin_pri_col = None
        origin_cols = []
        if table.sub_table_name and table.sub_table_fk:
            origin_table = await db.fetch_one(GenUtil.get_db_tables_query_by_names([table.table_name]))
            assert origin_table, '子表记录丢失!'
            origin_columns = await db.fetch_all(GenUtil.get_db_table_columns_query_by_name(table.table_name))
            origin_pri_col = GenTableColumn(**GenUtil.init_column(
                GenUtil.init_table(origin_table), GenUtil.get_table_pri_col(origin_columns)))
            origin_cols = [c.column_name for c in origin_columns]
        return origin_pri_col, origin_cols

    async def render_code_by_table(self, table: GenTable) -> Dict[str, str]:
        """根据主表和模板文件渲染模板代码"""
        columns = await db.fetch_all(
            gen_table_column.select().where(gen_table_column.c.table_id == table.id).order_by(gen_table_column.c.sort))
        # 获取子表信息
        origin_pri_col, origin_cols = await self.get_sub_table_info(table)
        # 获取模板变量信息
        kwargs = TemplateUtil.prepare_vars(table, columns, origin_pri_col, origin_cols)
        # 生成模板内容
        tpl_code_map = {}
        for tpl_path in TemplateUtil.get_template_paths(table.gen_tpl):
            tpl_code_map[tpl_path] = TemplateUtil.get_template(tpl_path).render(**kwargs)
        return tpl_code_map

    async def preview_code(self, id_: int) -> Dict[str, str]:
        """预览代码"""
        table = await db.fetch_one(gen_table.select().where(gen_table.c.id == id_))
        assert table, '记录丢失！'
        # 获取模板内容
        tpl_code_map = await self.render_code_by_table(table)
        return {tpl.replace('.tpl', ''): code for tpl, code in tpl_code_map.items()}

    async def download_code(self, table_names: List[str]) -> io.BytesIO:
        """下载代码"""
        bio = io.BytesIO()
        zf = zipfile.ZipFile(bio, 'w')
        for table_name in table_names:
            await self.gen_zip_code(table_name, zf)
        zf.close()
        return bio

    async def gen_code(self, table_name: str):
        """生成代码 (自定义路径)"""
        table = await db.fetch_one(
            gen_table.select().where(gen_table.c.table_name == table_name).order_by(gen_table.c.id.desc()).limit(1))
        assert table, '记录丢失！'
        # 获取模板内容
        tpl_code_map = await self.render_code_by_table(table)
        # 获取生成根路径
        base_path = Path(TemplateUtil.get_gen_path(table))
        # 生成代码文件
        module_name = table.module_name
        for tpl_path, code in tpl_code_map.items():
            filepath = base_path / TemplateUtil.get_file_path(tpl_path, module_name)
            filepath.parent.mkdir(parents=True, exist_ok=True)
            with filepath.open('w', encoding=GenConstants.UTF8) as f:
                f.write(code)
        for module_file in TemplateUtil.get_module_file_paths(module_name):
            (base_path / module_file).touch()

    async def gen_zip_code(self, table_name: str, zf: zipfile.ZipFile):
        """生成代码 (压缩包下载)"""
        table = await db.fetch_one(
            gen_table.select().where(gen_table.c.table_name == table_name).order_by(gen_table.c.id.desc()).limit(1))
        assert table, '记录丢失！'
        # 获取模板内容
        tpl_code_map = await self.render_code_by_table(table)
        # 生成代码文件
        zf_file_names = zf.namelist()
        module_name = table.module_name
        for tpl_path, code in tpl_code_map.items():
            code_path = TemplateUtil.get_file_path(tpl_path, module_name)
            if code_path in zf_file_names:
                continue
            zf.writestr(code_path, code)
        for module_file in TemplateUtil.get_module_file_paths(module_name):
            if module_file in zf_file_names:
                continue
            zf.writestr(module_file, '')

    @classmethod
    async def instance(cls):
        """实例化"""
        return cls()
