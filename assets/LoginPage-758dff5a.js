import{ak as y,ao as V,D as p,x,o as h,e as E,a1 as o,w as a,C as I,am as k,ap as S,aq as B,A as F,ar as L}from"./index-ec820e65.js";/* empty css                   */import{E as N,a as P}from"./el-form-item-fc59a934.js";import{v as T,l as q,a as C,c as d}from"./PostAPI-4404aa8b.js";import"./_initCloneObject-fe4e4dda.js";const M=s=>(S("data-v-3a8ff600"),s=s(),B(),s),D={class:"login-div"},R=M(()=>F("h1",{class:"login-form-loginText"},"登录",-1)),U={__name:"LoginPage",emits:["response"],setup(s,{emit:c}){const _=V();c("response","登录");const e=p({email:"",password:""}),t=p(!1),g=[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],f=[{required:!0,message:"密码不能为空",trigger:"blur"}],u=async()=>{t.value=!0,q(e.value.email,e.value.password,l=>{t.value=!1,localStorage.setItem("token",l.data.token),d({title:"登录成功",type:"success",message:"欢迎回来"}),_()},l=>{t.value=!1,d({title:"登录失败",type:"error",message:l})})};return(l,r)=>{const m=C,n=P,v=L,w=N,b=T;return x((h(),E("div",D,[R,o(w,{model:e.value,onSubmit:I(u,["prevent"]),class:"login-form"},{default:a(()=>[o(n,{label:"邮箱",prop:"email",rules:g},{default:a(()=>[o(m,{modelValue:e.value.email,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value.email=i),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),o(n,{label:"密码",prop:"password",rules:f},{default:a(()=>[o(m,{modelValue:e.value.password,"onUpdate:modelValue":r[1]||(r[1]=i=>e.value.password=i),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[o(v,{type:"primary",onClick:u,class:"login-button"},{default:a(()=>[k("登录 ")]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])])),[[b,t.value]])}}},J=y(U,[["__scopeId","data-v-3a8ff600"]]);export{J as default};
