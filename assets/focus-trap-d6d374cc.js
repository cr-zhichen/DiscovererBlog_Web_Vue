import{a8 as te,B as R,L as H,n as k,A as y,d as ne,T as se,h as w,u as T,_ as oe,p as $,P as ce,s as re}from"./index-c9e2cc77.js";import{E as Q,aj as ae}from"./PostAPI-dfc4f8d5.js";const Le=e=>["",...te].includes(e);let p=[];const j=e=>{const n=e;n.key===Q.esc&&p.forEach(s=>s(n))},ue=e=>{R(()=>{p.length===0&&document.addEventListener("keydown",j),H&&p.push(e)}),k(()=>{p=p.filter(n=>n!==e),p.length===0&&H&&document.removeEventListener("keydown",j)})},O="focus-trap.focus-after-trapped",g="focus-trap.focus-after-released",ie="focus-trap.focusout-prevented",M={cancelable:!0,bubbles:!1},de={cancelable:!0,bubbles:!1},q="focusAfterTrapped",z="focusAfterReleased",fe=Symbol("elFocusTrap"),N=y(),P=y(0),A=y(0);let F=0;const X=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},W=(e,n)=>{for(const s of e)if(!le(s,n))return s},le=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},ve=e=>{const n=X(e),s=W(n,e),o=W(n.reverse(),e);return[s,o]},pe=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),A.value=window.performance.now(),e!==s&&pe(e)&&n&&e.select()}};function J(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const Ee=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=J(e,o),e.unshift(o)},remove:o=>{var r,d;e=J(e,o),(d=(r=e[0])==null?void 0:r.resume)==null||d.call(r)}}},me=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(l(o,n),document.activeElement!==s)return},Y=Ee(),Te=()=>P.value>A.value,_=()=>{N.value="pointer",P.value=window.performance.now()},G=()=>{N.value="keyboard",P.value=window.performance.now()},Fe=()=>(R(()=>{F===0&&(document.addEventListener("mousedown",_),document.addEventListener("touchstart",_),document.addEventListener("keydown",G)),F++}),k(()=>{F--,F<=0&&(document.removeEventListener("mousedown",_),document.removeEventListener("touchstart",_),document.removeEventListener("keydown",G))}),{focusReason:N,lastUserFocusTimestamp:P,lastAutomatedFocusTimestamp:A}),b=e=>new CustomEvent(ie,{...de,detail:e}),_e=ne({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[q,z,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=y();let o,r;const{focusReason:d}=Fe();ue(t=>{e.trapped&&!v.paused&&n("release-requested",t)});const v={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||v.paused)return;const{key:c,altKey:a,ctrlKey:u,metaKey:i,currentTarget:V,shiftKey:x}=t,{loop:B}=e,ee=c===Q.tab&&!a&&!u&&!i,m=document.activeElement;if(ee&&m){const L=V,[h,C]=ve(L);if(h&&C){if(!x&&m===C){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),B&&l(h,!0))}else if(x&&[h,L].includes(m)){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||(t.preventDefault(),B&&l(C,!0))}}else if(m===L){const f=b({focusReason:d.value});n("focusout-prevented",f),f.defaultPrevented||t.preventDefault()}}};se(fe,{focusTrapRef:s,onKeydown:E}),w(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),w([s],([t],[c])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",I),t.addEventListener("focusout",U)),c&&(c.removeEventListener("keydown",E),c.removeEventListener("focusin",I),c.removeEventListener("focusout",U))});const S=t=>{n(q,t)},Z=t=>n(z,t),I=t=>{const c=T(s);if(!c)return;const a=t.target,u=t.relatedTarget,i=a&&c.contains(a);e.trapped||u&&c.contains(u)||(o=u),i&&n("focusin",t),!v.paused&&e.trapped&&(i?r=a:l(r,!0))},U=t=>{const c=T(s);if(!(v.paused||!c))if(e.trapped){const a=t.relatedTarget;!ae(a)&&!c.contains(a)&&setTimeout(()=>{if(!v.paused&&e.trapped){const u=b({focusReason:d.value});n("focusout-prevented",u),u.defaultPrevented||l(r,!0)}},0)}else{const a=t.target;a&&c.contains(a)||n("focusout",t)}};async function K(){await $();const t=T(s);if(t){Y.push(v);const c=t.contains(document.activeElement)?o:document.activeElement;if(o=c,!t.contains(c)){const u=new Event(O,M);t.addEventListener(O,S),t.dispatchEvent(u),u.defaultPrevented||$(()=>{let i=e.focusStartEl;ce(i)||(l(i),document.activeElement!==i&&(i="first")),i==="first"&&me(X(t),!0),(document.activeElement===c||i==="container")&&l(t)})}}}function D(){const t=T(s);if(t){t.removeEventListener(O,S);const c=new CustomEvent(g,{...M,detail:{focusReason:d.value}});t.addEventListener(g,Z),t.dispatchEvent(c),!c.defaultPrevented&&(d.value=="keyboard"||!Te()||t.contains(document.activeElement))&&l(o??document.body),t.removeEventListener(g,S),Y.remove(v)}}return R(()=>{e.trapped&&K(),w(()=>e.trapped,t=>{t?K():D()})}),k(()=>{e.trapped&&D()}),{onKeydown:E}}});function be(e,n,s,o,r,d){return re(e.$slots,"default",{handleKeydown:e.onKeydown})}var he=oe(_e,[["render",be],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{he as E,fe as F,Le as i};
