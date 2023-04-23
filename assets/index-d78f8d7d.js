import{b as Y,_ as j,d as P,i as Q,k as I,at as ee,A as u,a as w,n as te,aT as A,b0 as K,o as k,f as D,w as F,q as ae,x as W,y as T,u as m,D as $,v as le,Z as se,L as oe,e as Z,Y as X,$ as re,a7 as ne,M as E,ay as U,h as V,C as ie,p as q,T as ue,l as ce,B as ve,au as fe,s as me,r as de,a1 as pe,O as he,a5 as be}from"./index-b8e46c06.js";import{B as ye,r as ge,G as g}from"./el-popper-adeab8a7.js";const J=Symbol("scrollbarContextKey"),we=Y({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Se="Thumb",_e=P({__name:"thumb",props:we,setup(d){const c=d,i=Q(J),l=I("scrollbar");i||ee(Se,"can not inject scrollbar context");const n=u(),v=u(),o=u({}),f=u(!1);let a=!1,h=!1,b=oe?document.onselectstart:null;const t=w(()=>ye[c.vertical?"vertical":"horizontal"]),S=w(()=>ge({size:c.size,move:c.move,bar:t.value})),_=w(()=>n.value[t.value.offset]**2/i.wrapElement[t.value.scrollSize]/c.ratio/v.value[t.value.offset]),C=s=>{var e;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(e=window.getSelection())==null||e.removeAllRanges(),M(s);const r=s.currentTarget;r&&(o.value[t.value.axis]=r[t.value.offset]-(s[t.value.client]-r.getBoundingClientRect()[t.value.direction]))},L=s=>{if(!v.value||!n.value||!i.wrapElement)return;const e=Math.abs(s.target.getBoundingClientRect()[t.value.direction]-s[t.value.client]),r=v.value[t.value.offset]/2,p=(e-r)*100*_.value/n.value[t.value.offset];i.wrapElement[t.value.scroll]=p*i.wrapElement[t.value.scrollSize]/100},M=s=>{s.stopImmediatePropagation(),a=!0,document.addEventListener("mousemove",H),document.addEventListener("mouseup",y),b=document.onselectstart,document.onselectstart=()=>!1},H=s=>{if(!n.value||!v.value||a===!1)return;const e=o.value[t.value.axis];if(!e)return;const r=(n.value.getBoundingClientRect()[t.value.direction]-s[t.value.client])*-1,p=v.value[t.value.offset]-e,z=(r-p)*100*_.value/n.value[t.value.offset];i.wrapElement[t.value.scroll]=z*i.wrapElement[t.value.scrollSize]/100},y=()=>{a=!1,o.value[t.value.axis]=0,document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",y),B(),h&&(f.value=!1)},x=()=>{h=!1,f.value=!!c.size},O=()=>{h=!0,f.value=a};te(()=>{B(),document.removeEventListener("mouseup",y)});const B=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return A(K(i,"scrollbarElement"),"mousemove",x),A(K(i,"scrollbarElement"),"mouseleave",O),(s,e)=>(k(),D(se,{name:m(l).b("fade"),persisted:""},{default:F(()=>[ae(W("div",{ref_key:"instance",ref:n,class:T([m(l).e("bar"),m(l).is(m(t).key)]),onMousedown:L},[W("div",{ref_key:"thumb",ref:v,class:T(m(l).e("thumb")),style:$(m(S)),onMousedown:C},null,38)],34),[[le,s.always||f.value]])]),_:1},8,["name"]))}});var G=j(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const ze=Y({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ee=P({__name:"bar",props:ze,setup(d,{expose:c}){const i=d,l=u(0),n=u(0);return c({handleScroll:o=>{if(o){const f=o.offsetHeight-g,a=o.offsetWidth-g;n.value=o.scrollTop*100/f*i.ratioY,l.value=o.scrollLeft*100/a*i.ratioX}}}),(o,f)=>(k(),Z(re,null,[X(G,{move:l.value,ratio:o.ratioX,size:o.width,always:o.always},null,8,["move","ratio","size","always"]),X(G,{move:n.value,ratio:o.ratioY,size:o.height,vertical:"",always:o.always},null,8,["move","ratio","size","always"])],64))}});var ke=j(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Te=Y({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ne([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Ce={scroll:({scrollTop:d,scrollLeft:c})=>[d,c].every(E)},He="ElScrollbar",Be=P({name:He}),Ne=P({...Be,props:Te,emits:Ce,setup(d,{expose:c,emit:i}){const l=d,n=I("scrollbar");let v,o;const f=u(),a=u(),h=u(),b=u("0"),t=u("0"),S=u(),_=u(1),C=u(1),L=w(()=>{const e={};return l.height&&(e.height=U(l.height)),l.maxHeight&&(e.maxHeight=U(l.maxHeight)),[l.wrapStyle,e]}),M=w(()=>[l.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!l.native}]),H=w(()=>[n.e("view"),l.viewClass]),y=()=>{var e;a.value&&((e=S.value)==null||e.handleScroll(a.value),i("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function x(e,r){he(e)?a.value.scrollTo(e):E(e)&&E(r)&&a.value.scrollTo(e,r)}const O=e=>{E(e)&&(a.value.scrollTop=e)},B=e=>{E(e)&&(a.value.scrollLeft=e)},s=()=>{if(!a.value)return;const e=a.value.offsetHeight-g,r=a.value.offsetWidth-g,p=e**2/a.value.scrollHeight,z=r**2/a.value.scrollWidth,N=Math.max(p,l.minSize),R=Math.max(z,l.minSize);_.value=p/(e-p)/(N/(e-N)),C.value=z/(r-z)/(R/(r-R)),t.value=N+g<e?`${N}px`:"",b.value=R+g<r?`${R}px`:""};return V(()=>l.noresize,e=>{e?(v==null||v(),o==null||o()):({stop:v}=ie(h,s),o=A("resize",s))},{immediate:!0}),V(()=>[l.maxHeight,l.height],()=>{l.native||q(()=>{var e;s(),a.value&&((e=S.value)==null||e.handleScroll(a.value))})}),ue(J,ce({scrollbarElement:f,wrapElement:a})),ve(()=>{l.native||q(()=>{s()})}),fe(()=>s()),c({wrapRef:a,update:s,scrollTo:x,setScrollTop:O,setScrollLeft:B,handleScroll:y}),(e,r)=>(k(),Z("div",{ref_key:"scrollbarRef",ref:f,class:T(m(n).b())},[W("div",{ref_key:"wrapRef",ref:a,class:T(m(M)),style:$(m(L)),onScroll:y},[(k(),D(de(e.tag),{ref_key:"resizeRef",ref:h,class:T(m(H)),style:$(e.viewStyle)},{default:F(()=>[me(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?pe("v-if",!0):(k(),D(ke,{key:0,ref_key:"barRef",ref:S,height:t.value,width:b.value,always:e.always,"ratio-x":C.value,"ratio-y":_.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Re=j(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Me=be(Re);export{Me as E};