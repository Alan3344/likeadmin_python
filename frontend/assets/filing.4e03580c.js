import{_ as V}from"./index.ba5f4adb.js";import{C as A,D as U,w as x,F as I,I as N}from"./element-plus.f12e93f2.js";import{f as _,b as P}from"./index.84673fea.js";import{_ as S}from"./index.673746f0.js";import{g as $,s as L}from"./website.05ff7a23.js";import{d as v,r as O,an as Q,o as s,c as d,X as e,P as o,W as T,a8 as W,u as F,O as f,a as t,U as h,Q as X}from"./@vue.a137a740.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.b0476e70.js";import"./axios.9640b842.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.3fb3ef02.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.a13f8320.js";import"./color.7afdf413.js";import"./clone.8bef1d37.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.d3ae6d3f.js";import"./vue-clipboard3.0f0c7a0b.js";import"./clipboard.863e7101.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";const j={class:"website-filing"},q=t("div",{class:"mb-5"},"\u7AD9\u70B9\u5E95\u90E8\u7248\u6743\u5907\u6848\u4FE1\u606F\u8BBE\u7F6E",-1),z={class:"bg-fill-lighter py-4"},G={class:"w-80"},H={class:"w-80"},J=t("div",{class:"form-tips"},"\u8DF3\u8F6C\u94FE\u63A5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E0D\u8DF3\u8F6C",-1),K=v({name:"webFilling"}),Ne=v({...K,setup(M){const u=O([{name:"",link:""}]),r=async()=>{const n=await $();!n.length||(u.value=n)},E=()=>{u.value.push({name:"",link:""})},g=n=>{if(u.value.length<=1)return _.msgError("\u81F3\u5C11\u4FDD\u7559\u4E00\u4E2A");u.value.splice(n,1)},B=async()=>{await L(u.value),_.msgSuccess("\u64CD\u4F5C\u6210\u529F"),r()};return r(),(n,R)=>{const i=A,m=U,C=S,D=P,p=x,w=I,b=N,k=V,y=Q("perms");return s(),d("div",j,[e(b,{shadow:"never",class:"!border-none"},{default:o(()=>[q,e(w,{ref:"form",class:"ls-form","label-width":"100px"},{default:o(()=>[(s(!0),d(T,null,W(F(u),(a,c)=>(s(),f(C,{class:"mb-4",key:c,"show-close":F(u).length>1,onClose:l=>g(c)},{default:o(()=>[t("div",z,[e(m,{label:"\u663E\u793A\u5185\u5BB9",prop:"name"},{default:o(()=>[t("div",G,[t("div",null,[e(i,{modelValue:a.name,"onUpdate:modelValue":l=>a.name=l,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9 \uFF0C\u4F8B\u5982\uFF1A ICP\u5907\u6848\u53F7"},null,8,["modelValue","onUpdate:modelValue"])])])]),_:2},1024),e(m,{label:"\u8DF3\u8F6C\u94FE\u63A5",prop:"link"},{default:o(()=>[t("div",H,[t("div",null,[e(i,{modelValue:a.link,"onUpdate:modelValue":l=>a.link=l,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\uFF0C\u4F8B\u5982\uFF1Ahttp://www.beian.gov.cn"},null,8,["modelValue","onUpdate:modelValue"])]),J])]),_:2},1024)])]),_:2},1032,["show-close","onClose"]))),128)),t("div",null,[e(p,{type:"primary",onClick:E},{default:o(()=>[e(D,{name:"el-icon-Plus"}),h(" \u6DFB\u52A0 ")]),_:1})])]),_:1},512)]),_:1}),X((s(),f(k,null,{default:o(()=>[e(p,{type:"primary",onClick:B},{default:o(()=>[h("\u4FDD\u5B58")]),_:1})]),_:1})),[[y,["setting:copyright:save"]]])])}}});export{Ne as default};
