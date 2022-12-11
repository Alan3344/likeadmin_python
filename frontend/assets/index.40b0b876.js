import{_ as N}from"./index.ba5f4adb.js";import{O as P,P as R,D as T,F as z,I as O,w as $,C as q,J as G,K as J}from"./element-plus.f12e93f2.js";import{r as C,f as K,b as L,d as M}from"./index.84673fea.js";import{d as B,a1 as Q,e as W,an as X,o as i,c as h,X as e,P as t,u,a as s,U as m,Q as g,O as x,W as j,a8 as Y,V as Z,b7 as ee,b6 as te}from"./@vue.a137a740.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.b0476e70.js";import"./axios.9640b842.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.3fb3ef02.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.a13f8320.js";import"./color.7afdf413.js";import"./clone.8bef1d37.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.d3ae6d3f.js";import"./vue-clipboard3.0f0c7a0b.js";import"./clipboard.863e7101.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";function oe(){return C.get({url:"/setting/search/detail"})}function se(r){return C.post({url:"/setting/search/save",params:r})}const d=r=>(ee("data-v-998cfa7c"),r=r(),te(),r),ae={class:"hot-search"},le=d(()=>s("div",{class:"form-tips"},"\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5173\u95ED\u5219\u524D\u7AEF\u4E0D\u663E\u793A\u8BE5\u529F\u80FD",-1)),ne={class:"lg:flex"},re={class:"flex-1 min-w-0"},ce={class:"flex-none hot-search-phone mt-4 lg:mt-0 lg:ml-4"},ie=d(()=>s("div",{class:"mb-4 text-center"},"- \u70ED\u641C\u9884\u89C8\u56FE -",-1)),ue={class:"hot-search-phone-content"},me={class:"search-com"},de={class:"search-con flex items-center px-[15px]"},_e=d(()=>s("span",{class:"ml-[5px]"},"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",-1)),pe=d(()=>s("div",{class:"hot-search-title"},"\u70ED\u95E8\u641C\u7D22",-1)),he={class:"hot-search-text"},fe=B({name:"search"}),De=B({...fe,setup(r){const l=Q({isHotSearch:1,list:[]}),y=W(()=>l.list.filter(o=>o.name).sort((o,n)=>n.sort-o.sort)),f=async()=>{try{const o=await oe();for(const n in l)l[n]=o[n]}catch(o){console.log("\u83B7\u53D6=>",o)}},V=()=>{l.list.push({name:"",sort:0})},w=o=>{l.list.splice(o,1)},S=async()=>{try{await se(l),K.msgSuccess("\u64CD\u4F5C\u6210\u529F"),f()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return f(),(o,n)=>{const D=P,k=R,I=T,U=z,b=O,v=L,_=$,F=q,p=G,A=J,H=N,E=X("perms");return i(),h("div",ae,[e(b,{class:"!border-none",shadow:"never"},{default:t(()=>[e(U,{ref:"formRef",model:u(l),"label-width":"100px"},{default:t(()=>[e(I,{label:"\u529F\u80FD\u72B6\u6001",style:{"margin-bottom":"0"}},{default:t(()=>[s("div",null,[e(k,{modelValue:u(l).isHotSearch,"onUpdate:modelValue":n[0]||(n[0]=a=>u(l).isHotSearch=a)},{default:t(()=>[e(D,{label:1},{default:t(()=>[m("\u5F00\u542F")]),_:1}),e(D,{label:0},{default:t(()=>[m("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),le])]),_:1})]),_:1},8,["model"])]),_:1}),e(b,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[s("div",ne,[s("div",re,[e(_,{type:"primary",class:"mb-4",onClick:V},{icon:t(()=>[e(v,{name:"el-icon-Plus"})]),default:t(()=>[m(" \u6DFB\u52A0 ")]),_:1}),e(A,{size:"large",data:u(l).list},{default:t(()=>[e(p,{label:"\u5173\u952E\u8BCD",prop:"describe","min-width":"200"},{default:t(({row:a})=>[e(F,{modelValue:a.name,"onUpdate:modelValue":c=>a.name=c,modelModifiers:{trim:!0},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(p,{label:"\u6392\u5E8F",prop:"describe","min-width":"80"},{default:t(({row:a})=>[e(F,{modelValue:a.sort,"onUpdate:modelValue":c=>a.sort=c,type:"number",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(p,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:t(({$index:a})=>[g((i(),x(_,{type:"danger",link:"",onClick:c=>w(a)},{default:t(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[E,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),s("div",ce,[ie,s("div",ue,[s("div",me,[s("div",de,[e(v,{name:"el-icon-Search",size:17}),_e])]),pe,s("div",he,[(i(!0),h(j,null,Y(u(y),(a,c)=>(i(),h("span",{class:"truncate max-w-full",key:c},Z(a.name),1))),128))])])])])]),_:1}),g((i(),x(H,null,{default:t(()=>[e(_,{type:"primary",onClick:S},{default:t(()=>[m("\u4FDD\u5B58")]),_:1})]),_:1})),[[E,["setting:search:save"]]])])}}});const je=M(De,[["__scopeId","data-v-998cfa7c"]]);export{je as default};
