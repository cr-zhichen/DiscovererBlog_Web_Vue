import{M as P}from"./index-f5b80f59.js";import{ag as $,A as I,al as b,o,e as a,x as l,ah as V,t as u,a1 as k,Y as r,w as p,f as N,z as M,W as T,u as w,ai as L,$ as x,a0 as A,am as R,aj as S,ak as B}from"./index-caa57ff3.js";import{e as F,d as g,p as H,b as q,f as U,h as j,v as D}from"./PostAPI-3885f7e1.js";import{a as O,E as z}from"./el-form-item-933b76d8.js";import{E as W}from"./el-button-ac52835b.js";import"./index-3cc30637.js";const Y={class:"comment-div"},G={class:"comment-div-h2"},J={key:0},K={__name:"Comment",props:{msg:Object},setup(d){const s=d,e=I({name:"",email:"",comment:""}),i=I(!1),n=async()=>{if(e.value.name===""||e.value.email===""||e.value.comment===""){g({title:"发表评论失败",type:"error",message:"请填写完整信息"});return}H(s.msg.articleId,e.value.name,e.value.email,s.msg.parentId,e.value.comment,b(),t=>{g({title:"发表成功",type:"success",message:t.message}),window.location.reload()},t=>{g({title:"发表评论失败",type:"error",message:t})})};(b()!=null||b()!="")&&F(b(),t=>{e.value.email=t.data.email,e.value.name=t.data.userName,i.value=!0},t=>{});const c=[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],_=[{required:!0,message:"评论不能为空",trigger:"blur"}],h=[{required:!0,message:"昵称不能为空",trigger:"blur"}];return(t,m)=>{const v=q,f=O,C=W,E=z;return o(),a("div",Y,[l("h2",G,[V("评论 "),s.msg.parentId!=null&&s.msg.parentId!=""?(o(),a("span",J," @"+u(s.msg.parentId),1)):k("",!0)]),r(E,{model:e.value,"label-position":t.left,ref:"commentForm",onSubmit:M(n,["prevent"]),class:"comment-form"},{default:p(()=>[r(f,{label:"昵称：",class:"comment-form-item",prop:"name",rules:h},{default:p(()=>[r(v,{modelValue:e.value.name,"onUpdate:modelValue":m[0]||(m[0]=y=>e.value.name=y),class:"comment-form-item",disabled:i.value},null,8,["modelValue","disabled"])]),_:1}),r(f,{label:"邮箱：",class:"comment-form-item",prop:"email",rules:c},{default:p(()=>[r(v,{modelValue:e.value.email,"onUpdate:modelValue":m[1]||(m[1]=y=>e.value.email=y),class:"comment-form-item",disabled:i.value},null,8,["modelValue","disabled"])]),_:1}),r(f,{label:"评论：",class:"comment-form-item",prop:"comment",rules:_},{default:p(()=>[r(v,{type:"textarea",modelValue:e.value.comment,"onUpdate:modelValue":m[2]||(m[2]=y=>e.value.comment=y),class:"comment-form-item comment-form-textarea"},null,8,["modelValue"])]),_:1}),r(f,{class:"comment-form-item"},{default:p(()=>[r(C,{type:"primary",onClick:n,class:"comment-form-primary"},{default:p(()=>[V("发送评论 ")]),_:1})]),_:1}),s.msg.parentId!=null&&s.msg.parentId!=""?(o(),N(f,{key:0,class:"comment-form-item"},{default:p(()=>[r(C,{type:"danger",onClick:m[3]||(m[3]=y=>s.msg.parentId=null),class:"comment-form-cancel"},{default:p(()=>[V(" 取消回复 ")]),_:1})]),_:1})):k("",!0)]),_:1},8,["model","label-position","onSubmit"])])}}},Q=$(K,[["__scopeId","data-v-1317f22f"]]);const X={class:"comment"},Z={class:"comentIten-userName"},ee={class:"comentIten-content"},te={key:0,class:"replies"},oe={__name:"CommentItem",props:{comment:Object},emits:["response"],setup(d,{emit:s}){const e=d,i=async()=>{confirm("确定删除该评论吗？")&&U(e.comment.id,b(),c=>{g({title:"删除成功",type:"success",message:c.message}),window.location.reload()},c=>{g({title:"删除失败",type:"error",message:c})})},n=async()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),s("response",e.comment.id)};return(c,_)=>{const h=T("CommentItem",!0);return o(),a("div",null,[l("div",X,[l("h5",Z,u(e.comment.userName)+" /@"+u(e.comment.id),1),l("h5",{class:"comentIten-reply",onClick:n},"回复"),l("p",ee,u(e.comment.content),1),w(b)()!=null?(o(),a("h5",{key:0,class:"comentIten-delete",onClick:i},"删除")):k("",!0),l("small",null,u(w(L)(e.comment.createdAt)),1)]),e.comment.comments.length>0?(o(),a("div",te,[(o(!0),a(x,null,A(e.comment.comments,(t,m)=>(o(),N(h,{onResponse:_[0]||(_[0]=v=>{e.comment.id=v,s("response",e.comment.id)}),key:m,comment:t},null,8,["comment"]))),128))])):k("",!0)])}}},se=$(oe,[["__scopeId","data-v-75d40270"]]);const ne=d=>(S("data-v-8e07e868"),d=d(),B(),d),me={key:0},ae={key:1,class:"article-content"},le=["innerHTML"],re={key:2,class:"article-content"},ce=["innerHTML"],ie={key:3},ue=ne(()=>l("h2",null,"评论",-1)),de={class:"article-contents"},pe={__name:"ArticlePage",props:{},emits:["response"],setup(d,{emit:s}){s("response","文章");const e=R(),i=I(e.params.id),n=I({}),c=I(),_=I({articleId:i.value,parentId:""}),h=new P;return j(i.value,t=>{n.value=t.data},t=>{g({title:"获取文章失败",type:"error",message:t})}),D(i.value,t=>{c.value=t.data},t=>{g({title:"获取评论失败",type:"error",message:t})}),(t,m)=>(o(),a(x,null,[l("p",null," / "+u(w(e).params.id),1),n.value.tags!=""?(o(),a("p",me,"文章分类："+u(n.value.tags),1)):k("",!0),l("p",null,"更新时间："+u(n.value.updatedAt),1),l("h1",null,u(n.value.title),1),n.value.markdownContent==""?(o(),a("div",ae,[l("div",{innerHTML:n.value.content,class:"markdown-body"},null,8,le)])):(o(),a("div",re,[l("div",{innerHTML:w(h).render(n.value.markdownContent??""),class:"markdown-body"},null,8,ce)])),c.value&&c.value.comments?(o(),a("div",ie,[ue,l("div",de,[(o(!0),a(x,null,A(c.value.comments,(v,f)=>(o(),a("div",{key:f,class:"article-contents-item"},[r(se,{comment:v,onResponse:m[0]||(m[0]=C=>_.value.parentId=C)},null,8,["comment"])]))),128))])])):k("",!0),r(Q,{msg:_.value},null,8,["msg"])],64))}},be=$(pe,[["__scopeId","data-v-8e07e868"]]);export{be as default};