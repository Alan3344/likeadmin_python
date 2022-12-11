import{_ as y}from"./index.ba5f4adb.js";import{B as V,a0 as k,D as w,t as W,I as x,w as L,F as O}from"./element-plus.f12e93f2.js";import{g as q,s as M}from"./user.63fddcf9.js";import{f as U}from"./index.84673fea.js";import{d as g,r as P,a1 as A,an as S,o as f,c as $,X as t,P as l,a as e,u as n,U as r,V as E,Q as j,O as N}from"./@vue.a137a740.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.b0476e70.js";import"./axios.9640b842.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.3fb3ef02.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.a13f8320.js";import"./color.7afdf413.js";import"./clone.8bef1d37.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.d3ae6d3f.js";import"./vue-clipboard3.0f0c7a0b.js";import"./clipboard.863e7101.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";const R={class:"login-register"},I=e("div",{class:"font-medium mb-7"},"\u901A\u7528\u8BBE\u7F6E",-1),G=e("div",{class:"form-tips"},"\u7CFB\u7EDF\u901A\u7528\u767B\u5F55\u65B9\u5F0F\uFF0C\u81F3\u5C11\u9009\u62E9\u4E00\u9879",-1),Q={class:"mt-1 ml-2"},T=e("div",{class:"form-tips"},[r(" 1\u3001\u5982\u679C\u5F00\u542F\uFF0C\u5219\u65B0\u7528\u6237\u5728\u6CE8\u518C\u5B8C\u6210\u4E4B\u540E\u8981\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A\u53F7"),e("br"),r(" 2\u3001\u8001\u7528\u6237\u767B\u5F55\u65F6\u5982\u679C\u68C0\u6D4B\u5230\u6CA1\u6709\u7ED1\u5B9A\u624B\u673A\uFF0C\u5219\u8981\u91CD\u65B0\u7ED1\u5B9A\u624B\u673A\u53F7 ")],-1),X={class:"mt-1 ml-2"},z=e("div",{class:"form-tips"},"\u767B\u5F55/\u6CE8\u518C\u4F1A\u5458\u65F6\uFF0C\u662F\u5426\u663E\u793A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56",-1),H=e("div",{class:"font-medium mb-7"},"\u7B2C\u4E09\u65B9\u8BBE\u7F6E",-1),J={class:"mt-1 ml-2"},K=e("div",{class:"form-tips"},"\u767B\u5F55\u65F6\u652F\u6301\u7B2C\u4E09\u65B9\u767B\u5F55\uFF0C\u65B0\u7528\u6237\u6388\u6743\u5373\u81EA\u52A8\u6CE8\u518C\u8D26\u53F7",-1),Y={href:"https://open.weixin.qq.com/",target:"_blank"},Z=e("div",{class:"form-tips"},[r(" 1\u3001\u5728\u5404\u6E20\u9053\u4F7F\u7528\u5FAE\u4FE1\u6388\u6743\u767B\u5F55\u65F6\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"),e("br"),r(" 2\u3001\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5173\u8054\u516C\u4F17\u53F7\u3001\u5C0F\u7A0B\u5E8F\u548CAPP\u540E\uFF0C\u53EF\u5B9E\u73B0\u5404\u7AEF\u7528\u6237\u8D26\u53F7\u7EDF\u4E00\uFF0C\u8BC6\u522B\u4E70\u5BB6\u552F\u4E00\u5FAE\u4FE1\u8EAB\u4EFD"),e("br"),r(" 3\u3001\u6CA1\u6709\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\uFF0C\u540C\u4E00\u5FAE\u4FE1\u53F7\u4F1A\u751F\u6210\u591A\u4E2A\u7528\u6237\uFF0C\u914D\u7F6E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u540E\u5DF2\u751F\u6210\u7684\u7528\u6237\u8D26\u53F7\u65E0\u6CD5\u5408\u5E76 ")],-1),uu=g({name:"loginRegister"}),Uu=g({...uu,setup(eu){const d=P(),u=A({loginWay:[],forceBindMobile:0,openAgreement:0,openOtherAuth:0,autoLoginAuth:[1,2]}),C=A({loginWay:[{required:!0,validator:(a,o,i)=>{if(u.loginWay.join("").length===0)i(new Error("\u767B\u5F55\u65B9\u5F0F\u81F3\u5C11\u9009\u62E9\u4E00\u9879\uFF01"));else{if(u.loginWay!==""){if(!d.value)return;d.value.validateField("checkPass",()=>null)}i()}},trigger:"change"}],forceBindMobile:[{required:!0,trigger:"blur"}],openAgreement:[{required:!0,trigger:"blur"}],openOtherAuth:[{required:!0,trigger:"blur"}]}),c=async()=>{try{const a=await q();for(const o in u)u[o]=a[o]}catch(a){console.log("\u83B7\u53D6=>",a)}},h=async()=>{var i;const a=u.loginWay.join(""),o=u.autoLoginAuth.join("");await((i=d.value)==null?void 0:i.validate());try{await M({...u,loginWay:a.length==2?`${a[0]},${a[1]}`:a,autoLoginAuth:o.length==2?`${o[0]},${o[1]}`:o}),U.msgSuccess("\u64CD\u4F5C\u6210\u529F"),c()}catch(F){console.log("\u4FDD\u5B58=>",F)}};return c(),(a,o)=>{const i=V,F=k,m=w,p=W,_=x,B=L,v=O,D=y,b=S("perms");return f(),$("div",R,[t(v,{ref_key:"formRef",ref:d,rules:n(C),model:n(u),"label-width":"120px"},{default:l(()=>[t(_,{shadow:"never",class:"!border-none"},{default:l(()=>[I,t(m,{label:"\u767B\u5F55\u65B9\u5F0F",prop:"loginWay"},{default:l(()=>[e("div",null,[t(F,{modelValue:n(u).loginWay,"onUpdate:modelValue":o[0]||(o[0]=s=>n(u).loginWay=s)},{default:l(()=>[t(i,{label:1},{default:l(()=>[r("\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")]),_:1}),t(i,{label:2},{default:l(()=>[r("\u624B\u673A\u9A8C\u8BC1\u7801\u767B\u5F55")]),_:1})]),_:1},8,["modelValue"]),G])]),_:1}),t(m,{label:"\u5F3A\u5236\u7ED1\u5B9A\u624B\u673A",prop:"forceBindMobile"},{default:l(()=>[e("div",null,[t(p,{modelValue:n(u).forceBindMobile,"onUpdate:modelValue":o[1]||(o[1]=s=>n(u).forceBindMobile=s),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e("span",Q,E(n(u).forceBindMobile?"\u5F00\u542F":"\u5173\u95ED"),1),T])]),_:1}),t(m,{label:"\u653F\u7B56\u534F\u8BAE",prop:"openAgreement"},{default:l(()=>[e("div",null,[t(p,{modelValue:n(u).openAgreement,"onUpdate:modelValue":o[2]||(o[2]=s=>n(u).openAgreement=s),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e("span",X,E(n(u).openAgreement?"\u5F00\u542F":"\u5173\u95ED"),1),z])]),_:1})]),_:1}),t(_,{shadow:"never",class:"!border-none mt-4"},{default:l(()=>[H,t(m,{label:"\u7B2C\u4E09\u65B9\u767B\u5F55",prop:"openOtherAuth"},{default:l(()=>[e("div",null,[t(p,{modelValue:n(u).openOtherAuth,"onUpdate:modelValue":o[3]||(o[3]=s=>n(u).openOtherAuth=s),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e("span",J,E(n(u).openOtherAuth?"\u5F00\u542F":"\u5173\u95ED"),1),K,e("div",null,[t(F,{modelValue:n(u).autoLoginAuth,"onUpdate:modelValue":o[4]||(o[4]=s=>n(u).autoLoginAuth=s)},{default:l(()=>[t(i,{label:1},{default:l(()=>[r("\u5FAE\u4FE1\u767B\u5F55")]),_:1})]),_:1},8,["modelValue"])])])]),_:1}),t(m,{label:"\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0"},{default:l(()=>[e("div",null,[e("a",Y,[t(B,{type:"primary",link:"",class:"underline"},{default:l(()=>[r(" \u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0 ")]),_:1})]),Z])]),_:1})]),_:1})]),_:1},8,["rules","model"]),j((f(),N(D,null,{default:l(()=>[t(B,{type:"primary",onClick:h},{default:l(()=>[r("\u4FDD\u5B58")]),_:1})]),_:1})),[[b,["setting:login:save"]]])])}}});export{Uu as default};
