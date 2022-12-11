import{C,d as w,f as G}from"./element-plus.f12e93f2.js";import{d as F,b as H}from"./index.84673fea.js";import{d as v,r as S,o as p,c as _,a as E,W as O,a8 as g,R as D,V as B,u as o,U as $,X as y,e as b,w as V,P as h,O as A,k as x,T as k,s as I,$ as L}from"./@vue.a137a740.js";import{P as M}from"./index.4750317e.js";var u=(l=>(l.SHOP_PAGES="shop",l.CUSTOM_LINK="custom",l))(u||{});const N={class:"shop-pages"},U={class:"link-list flex flex-wrap"},q=["onClick"],R=v({__name:"shop-pages",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(l,{emit:m}){const d=S([{path:"/pages/index/index",name:"\u5546\u57CE\u9996\u9875",type:u.SHOP_PAGES},{path:"/pages/news/news",name:"\u6587\u7AE0\u8D44\u8BAF",type:u.SHOP_PAGES},{path:"/pages/user/user",name:"\u4E2A\u4EBA\u4E2D\u5FC3",type:u.SHOP_PAGES},{path:"/pages/collection/collection",name:"\u6211\u7684\u6536\u85CF",type:u.SHOP_PAGES},{path:"/pages/customer_service/customer_service",name:"\u8054\u7CFB\u5BA2\u670D",type:u.SHOP_PAGES},{path:"/pages/user_set/user_set",name:"\u4E2A\u4EBA\u8BBE\u7F6E",type:u.SHOP_PAGES},{path:"/pages/as_us/as_us",name:"\u5173\u4E8E\u6211\u4EEC",type:u.SHOP_PAGES},{path:"/pages/user_data/user_data",name:"\u4E2A\u4EBA\u8D44\u6599",type:u.SHOP_PAGES},{path:"/pages/agreement/agreement",name:"\u9690\u79C1\u653F\u7B56",query:{type:"privacy"},type:u.SHOP_PAGES},{path:"/pages/agreement/agreement",name:"\u670D\u52A1\u534F\u8BAE",query:{type:"service"},type:u.SHOP_PAGES},{path:"/pages/search/search",name:"\u641C\u7D22",type:u.SHOP_PAGES}]),r=a=>{m("update:modelValue",a)};return(a,n)=>(p(),_("div",N,[E("div",U,[(p(!0),_(O,null,g(o(d),(i,e)=>(p(),_("div",{class:D(["link-item border border-br px-5 py-[5px] rounded-[3px] cursor-pointer mr-[10px] mb-[10px]",{"border-primary text-primary":l.modelValue.path==i.path&&l.modelValue.name==i.name}]),key:e,onClick:t=>r(i)},B(i.name),11,q))),128))])]))}}),T={class:"custom-link mt-[30px]"},K={class:"flex flex-wrap items-center"},j={class:"ml-4 flex-1 min-w-[100px]"},z=E("div",{class:"form-tips"}," \u8BF7\u586B\u5199\u5B8C\u6574\u7684\u5E26\u6709\u201Chttps://\u201D\u6216\u201Chttp://\u201D\u7684\u94FE\u63A5\u5730\u5740\uFF0C\u94FE\u63A5\u7684\u57DF\u540D\u5FC5\u987B\u5728\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u8BBE\u7F6E\u4E1A\u52A1\u57DF\u540D ",-1),W=v({__name:"custom-link",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(l,{emit:m}){const d=r=>{m("update:modelValue",{path:"/pages/webview/webview",query:{url:r},type:u.CUSTOM_LINK})};return(r,a)=>{var i;const n=C;return p(),_("div",T,[E("div",K,[$(" \u81EA\u5B9A\u4E49\u94FE\u63A5 "),E("div",j,[y(n,{"model-value":(i=l.modelValue.query)==null?void 0:i.url,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740",onInput:d},null,8,["model-value"])])]),z])}}}),X={class:"link flex"},J={class:"flex-1 pl-4"},Q=v({__name:"index",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(l,{emit:m}){const d=l,r=S([{name:"\u5546\u57CE\u9875\u9762",type:u.SHOP_PAGES,link:{}},{name:"\u81EA\u5B9A\u4E49\u94FE\u63A5",type:u.CUSTOM_LINK,link:{}}]),a=b({get(){var e;return(e=r.value.find(t=>t.type==n.value))==null?void 0:e.link},set(e){r.value.forEach(t=>{t.type==n.value&&(t.link=e)})}}),n=S(u.SHOP_PAGES),i=e=>{n.value=e};return V(a,e=>{!e.type||m("update:modelValue",e)}),V(()=>d.modelValue,e=>{n.value=e.type,a.value=e},{immediate:!0}),(e,t)=>{const c=w,P=G;return p(),_("div",X,[y(P,{"default-active":o(n),class:"w-[160px] min-h-[350px] link-menu",onSelect:i},{default:h(()=>[(p(!0),_(O,null,g(o(r),(s,f)=>(p(),A(c,{index:s.type,key:f},{default:h(()=>[E("span",null,B(s.name),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"]),E("div",J,[o(u).SHOP_PAGES==o(n)?(p(),A(R,{key:0,modelValue:o(a),"onUpdate:modelValue":t[0]||(t[0]=s=>x(a)?a.value=s:null)},null,8,["modelValue"])):k("",!0),o(u).CUSTOM_LINK==o(n)?(p(),A(W,{key:1,modelValue:o(a),"onUpdate:modelValue":t[1]||(t[1]=s=>x(a)?a.value=s:null)},null,8,["modelValue"])):k("",!0)])])}}});const Y=F(Q,[["__scopeId","data-v-2f26c0ad"]]),Z=v({__name:"picker",props:{modelValue:{type:Object},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:m}){const d=l,r=I(),a=S({path:"",type:u.SHOP_PAGES}),n=()=>{m("update:modelValue",a.value)},i=b(()=>{var e,t,c;switch((e=d.modelValue)==null?void 0:e.type){case u.SHOP_PAGES:return d.modelValue.name;case u.CUSTOM_LINK:return(t=d.modelValue.query)==null?void 0:t.url;default:return(c=d.modelValue)==null?void 0:c.name}});return V(()=>d.modelValue,e=>{e!=null&&e.type&&(a.value=e)},{immediate:!0}),(e,t)=>{const c=H,P=C;return p(),_("div",{class:"link-picker flex-1",onClick:t[2]||(t[2]=s=>{var f;return!l.disabled&&((f=o(r))==null?void 0:f.open())})},[y(P,{"model-value":o(i),placeholder:"\u8BF7\u9009\u62E9\u94FE\u63A5",readonly:"",disabled:l.disabled},{suffix:h(()=>{var s;return[(s=l.modelValue)!=null&&s.path?(p(),A(c,{key:1,name:"el-icon-Close",onClick:t[0]||(t[0]=L(f=>!l.disabled&&m("update:modelValue",{}),["stop"]))})):(p(),A(c,{key:0,name:"el-icon-ArrowRight"}))]}),_:1},8,["model-value","disabled"]),y(M,{ref_key:"popupRef",ref:r,width:"700px",title:"\u94FE\u63A5\u9009\u62E9",onConfirm:n},{default:h(()=>[y(Y,{modelValue:o(a),"onUpdate:modelValue":t[1]||(t[1]=s=>x(a)?a.value=s:null)},null,8,["modelValue"])]),_:1},512)])}}});const le=F(Z,[["__scopeId","data-v-a42918e4"]]);export{le as _};
