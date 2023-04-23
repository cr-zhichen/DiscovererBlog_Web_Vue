import{E as T,a as B,m as P}from"./markdown-css-19544c01.js";import{ag as E,A as b,an as I,o as s,e as a,x as o,ai as x,t as l,a1 as y,Y as i,w as _,f as $,z as M,W as L,u as C,aj as R,$ as V,a0 as A,ao as S,X as q,q as F,al as H,am as D}from"./index-c6265097.js";import{e as U,d as k,p as j,b as O,f as W,h as z,v as X}from"./PostAPI-4860ac4c.js";import{a as Y,E as G}from"./el-form-item-8e79aee8.js";import{E as J}from"./el-button-ea1d5f19.js";import"./focus-trap-5803272a.js";import"./scroll-a4cff4db.js";import"./index-7e9c6dec.js";const K={class:"comment-div"},Q={class:"comment-div-h2"},Z={key:0},ee={__name:"Comment",props:{msg:Object},setup(p){const m=p,e=b({name:"",email:"",comment:""}),d=b(!1),t=async()=>{if(e.value.name===""||e.value.email===""||e.value.comment===""){k({title:"发表评论失败",type:"error",message:"请填写完整信息"});return}j(m.msg.articleId,e.value.name,e.value.email,m.msg.parentId,e.value.comment,I(),n=>{k({title:"发表成功",type:"success",message:n.message}),window.location.reload()},n=>{k({title:"发表评论失败",type:"error",message:n})})};(I()!=null||I()!="")&&U(I(),n=>{e.value.email=n.data.email,e.value.name=n.data.userName,d.value=!0},n=>{});const u=[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],v=[{required:!0,message:"评论不能为空",trigger:"blur"}],r=[{required:!0,message:"昵称不能为空",trigger:"blur"}];return(n,c)=>{const g=O,f=Y,w=J,N=G;return s(),a("div",K,[o("h2",Q,[x("评论 "),m.msg.parentId!=null&&m.msg.parentId!=""?(s(),a("span",Z," @"+l(m.msg.parentId),1)):y("",!0)]),i(N,{model:e.value,"label-position":n.left,ref:"commentForm",onSubmit:M(t,["prevent"]),class:"comment-form"},{default:_(()=>[i(f,{label:"昵称：",class:"comment-form-item",prop:"name",rules:r},{default:_(()=>[i(g,{modelValue:e.value.name,"onUpdate:modelValue":c[0]||(c[0]=h=>e.value.name=h),class:"comment-form-item",disabled:d.value},null,8,["modelValue","disabled"])]),_:1}),i(f,{label:"邮箱：",class:"comment-form-item",prop:"email",rules:u},{default:_(()=>[i(g,{modelValue:e.value.email,"onUpdate:modelValue":c[1]||(c[1]=h=>e.value.email=h),class:"comment-form-item",disabled:d.value},null,8,["modelValue","disabled"])]),_:1}),i(f,{label:"评论：",class:"comment-form-item",prop:"comment",rules:v},{default:_(()=>[i(g,{type:"textarea",modelValue:e.value.comment,"onUpdate:modelValue":c[2]||(c[2]=h=>e.value.comment=h),class:"comment-form-item comment-form-textarea"},null,8,["modelValue"])]),_:1}),i(f,{class:"comment-form-item"},{default:_(()=>[i(w,{type:"primary",onClick:t,class:"comment-form-primary"},{default:_(()=>[x("发送评论 ")]),_:1})]),_:1}),m.msg.parentId!=null&&m.msg.parentId!=""?(s(),$(f,{key:0,class:"comment-form-item"},{default:_(()=>[i(w,{type:"danger",onClick:c[3]||(c[3]=h=>m.msg.parentId=null),class:"comment-form-cancel"},{default:_(()=>[x(" 取消回复 ")]),_:1})]),_:1})):y("",!0)]),_:1},8,["model","label-position","onSubmit"])])}}},te=E(ee,[["__scopeId","data-v-1317f22f"]]);const oe={class:"comment"},se={class:"comentIten-userName"},ne={class:"comentIten-content"},ae={key:0,class:"replies"},me={__name:"CommentItem",props:{comment:Object},emits:["response"],setup(p,{emit:m}){const e=p,d=async()=>{T.confirm("确定删除该评论吗？","Warning",{confirmButtonText:"确实",cancelButtonText:"取消",type:"warning"}).then(()=>{W(e.comment.id,I(),u=>{window.location.reload()},u=>{k({title:"删除失败",type:"error",message:u})})}).catch(()=>{B({type:"info",message:"已取消删除"})})},t=async()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),m("response",e.comment.id)};return(u,v)=>{const r=L("CommentItem",!0);return s(),a("div",null,[o("div",oe,[o("h5",se,l(e.comment.userName)+" /@"+l(e.comment.id),1),o("h5",{class:"comentIten-reply",onClick:t},"回复"),o("p",ne,l(e.comment.content),1),C(I)()!=null?(s(),a("h5",{key:0,class:"comentIten-delete",onClick:d},"删除")):y("",!0),o("small",null,l(C(R)(e.comment.createdAt)),1)]),e.comment.comments.length>0?(s(),a("div",ae,[(s(!0),a(V,null,A(e.comment.comments,(n,c)=>(s(),$(r,{onResponse:v[0]||(v[0]=g=>{e.comment.id=g,m("response",e.comment.id)}),key:c,comment:n},null,8,["comment"]))),128))])):y("",!0)])}}},le=E(me,[["__scopeId","data-v-3f334452"]]);const re=p=>(H("data-v-9f9e02bb"),p=p(),D(),p),ce={key:0,class:"article-content"},ie={key:0},ue=["innerHTML"],de={key:1,class:"article-content"},pe={key:0},_e=["innerHTML"],ve={key:2},ge=re(()=>o("h2",null,"评论",-1)),fe={class:"article-contents"},ye={__name:"ArticlePage",props:{},emits:["response"],setup(p,{emit:m}){m("response","文章");const e=S(),d=b(e.params.id),t=b({}),u=b(),v=b({articleId:d.value,parentId:""});return z(d.value,r=>{t.value=r.data},r=>{k({title:"获取文章失败",type:"error",message:r})}),X(d.value,r=>{u.value=r.data},r=>{k({title:"获取评论失败",type:"error",message:r})}),(r,n)=>{const c=q("highlight");return s(),a(V,null,[t.value.markdownContent==""?(s(),a("div",ce,[o("p",null," / "+l(C(e).params.id),1),t.value.tags!=""?(s(),a("p",ie,"文章分类："+l(t.value.tags),1)):y("",!0),o("p",null,"更新时间："+l(t.value.updatedAt),1),o("h1",null,l(t.value.title),1),o("div",{innerHTML:t.value.content,class:"markdown-body"},null,8,ue)])):(s(),a("div",de,[o("p",null," / "+l(C(e).params.id),1),t.value.tags!=""?(s(),a("p",pe,"文章分类："+l(t.value.tags),1)):y("",!0),o("p",null,"更新时间："+l(t.value.updatedAt),1),o("h1",null,l(t.value.title),1),F(o("div",{innerHTML:C(P)(t.value.markdownContent??""),class:"markdown-body"},null,8,_e),[[c]])])),u.value&&u.value.comments?(s(),a("div",ve,[ge,o("div",fe,[(s(!0),a(V,null,A(u.value.comments,(g,f)=>(s(),a("div",{key:f,class:"article-contents-item"},[i(le,{comment:g,onResponse:n[0]||(n[0]=w=>v.value.parentId=w)},null,8,["comment"])]))),128))])])):y("",!0),i(te,{msg:v.value},null,8,["msg"])],64)}}},Ee=E(ye,[["__scopeId","data-v-9f9e02bb"]]);export{Ee as default};
