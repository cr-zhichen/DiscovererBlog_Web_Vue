import{ak as b,al as w,D as s,o as r,e as i,a1 as v,a6 as x,A as u,a3 as _,a4 as T,t as p,am as k,g as L,an as N}from"./index-dbb8a374.js";import{g as S,q as C,a as P,b as g}from"./PostAPI-c8a8d84d.js";import"./el-popper-98213a5e.js";import{a as E}from"./el-select-v2-19d29871.js";import"./focus-trap-f1b0e5c6.js";const B=["onClick"],D=["innerHTML"],H={__name:"SearchPage",props:{},emits:["response"],setup($,{emit:f}){const y=w(),V=s(999999999),c=s();f("response","搜索");const n=s(null),o=s([]),d=s([]);S(a=>{d.value=a.data.tags.map((e,l)=>({value:e,label:e}))},a=>{g({title:"获取标签失败",message:a,type:"error"})});const m=a=>{let e="";o.value.length>0&&(e=o.value.join(",")),console.log(o),C(a,V.value,e,n.value,l=>{c.value=l.data.articleList,window.scrollTo({top:0,behavior:"smooth"})},l=>{g({title:"获取文章列表失败",message:l.message,type:"error"})})},h=a=>{y(a)};return(a,e)=>{const l=P,A=E;return r(),i(_,null,[v(l,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),placeholder:"请在此搜索",onKeyup:e[1]||(e[1]=x(t=>m(1),["enter","native"]))},null,8,["modelValue"]),u("p",null,[v(A,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t),filterable:"",options:d.value,placeholder:"请选择标签",style:{width:"100%"},multiple:"",clearable:"",onChange:e[3]||(e[3]=t=>m(1))},null,8,["modelValue","options"])]),(r(!0),i(_,null,T(c.value,(t,q)=>(r(),i("div",{class:"home-content",onClick:F=>h(t.id)},[u("h2",null,p(t.title),1),u("div",{innerHTML:t.introduction,class:"previewHtml"},null,8,D),k(" 发布者："+p(t.userName)+"      修改时间："+p(L(N)(t.updatedAt)),1)],8,B))),256))],64)}}},z=b(H,[["__scopeId","data-v-d5b5228f"]]);export{z as default};
