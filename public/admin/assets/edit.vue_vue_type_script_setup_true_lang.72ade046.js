import{O as k,P as x,C as R,D as B,v as y,F as g}from"./element-plus.ef27c94c.js";import{a as U,c as h,b as I}from"./role.73de2cb0.js";import{P}from"./index.12c77328.js";import{f as N}from"./index.4eaac8c2.js";import{d as S,s as f,r as T,e as j,a1 as q,o as z,c as A,X as a,P as u,u as t,U as _}from"./@vue.a137a740.js";const G={class:"edit-popup"},W=S({__name:"edit",emits:["success","close"],setup(O,{expose:F,emit:p}){const i=f(),m=f(),d=T("add"),b=j(()=>d.value=="edit"?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),o=q({id:"",name:"",remark:"",sort:0,isDisable:0,menus:[]}),D={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},V=async()=>{var e,l;await((e=i.value)==null?void 0:e.validate());const s={...o,menuIds:o.menus.join()};d.value=="edit"?await U(s):await h(s),(l=m.value)==null||l.close(),N.msgSuccess("\u64CD\u4F5C\u6210\u529F"),p("success")},E=()=>{p("close")};return F({open:(s="add")=>{var e;d.value=s,(e=m.value)==null||e.open()},setFormData:async s=>{const e=await I({id:s.id});for(const l in o)e[l]!=null&&e[l]!=null&&(o[l]=e[l])}}),(s,e)=>{const l=R,r=B,w=y,c=k,v=x,C=g;return z(),A("div",G,[a(P,{ref_key:"popupRef",ref:m,title:t(b),async:!0,width:"550px",onConfirm:V,onClose:E},{default:u(()=>[a(C,{class:"ls-form",ref_key:"formRef",ref:i,rules:D,model:t(o),"label-width":"60px"},{default:u(()=>[a(r,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[a(l,{class:"ls-input",modelValue:t(o).name,"onUpdate:modelValue":e[0]||(e[0]=n=>t(o).name=n),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),a(r,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[a(l,{modelValue:t(o).remark,"onUpdate:modelValue":e[1]||(e[1]=n=>t(o).remark=n),type:"textarea",autosize:{minRows:4,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),a(r,{label:"\u6392\u5E8F",prop:"sort"},{default:u(()=>[a(w,{modelValue:t(o).sort,"onUpdate:modelValue":e[2]||(e[2]=n=>t(o).sort=n)},null,8,["modelValue"])]),_:1}),a(r,{label:"\u72B6\u6001",prop:"sort"},{default:u(()=>[a(v,{modelValue:t(o).isDisable,"onUpdate:modelValue":e[3]||(e[3]=n=>t(o).isDisable=n)},{default:u(()=>[a(c,{label:0},{default:u(()=>[_("\u6B63\u5E38")]),_:1}),a(c,{label:1},{default:u(()=>[_("\u505C\u7528")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{W as _};