import M from"./BkZvT_dm.js";import{f as L,E as z,N,F as P,j,q as D,s as E,Y as F,Z as k,O as K,o as u,l as m,w as f,a as g,m as t,J as c,c as w,$ as S,b as O,K as U,a0 as $,Q as q,M as B,L as J}from"./BEHr5xEm.js";import{_ as Q,a as Y,b as Z,c as A,d as H}from"./BYUXHnBN.js";import"./PVkR4zyh.js";import"./DmB3lY8e.js";const R={slots:{root:"relative group *:not-first:!my-0 *:not-first:!static my-5",list:"relative flex items-center gap-1 border border-(--ui-border-muted) bg-(--ui-bg) border-b-0 rounded-t-[calc(var(--ui-radius)*1.5)] overflow-x-auto p-2",indicator:"absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*1.5)] shadow-xs",trigger:["relative inline-flex items-center gap-1.5 text-(--ui-text) data-[state=active]:text-(--ui-text-highlighted) hover:bg-(--ui-bg-elevated)/50 px-2 py-1.5 text-sm rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary) focus:outline-none","transition-colors"],triggerIcon:"size-4 shrink-0",triggerLabel:"truncate"}},T=J;var G,I;const W=B({extend:B(R),...((I=(G=T.uiPro)==null?void 0:G.prose)==null?void 0:I.codeGroup)||{}}),X=L({__name:"CodeGroup",props:z({defaultValue:{default:"0"},sync:{},class:{},ui:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const s=v,p=N(),r=P(v,"modelValue"),n=W(),b=j(1),y=D(()=>{var e,a;return b.value,((a=(e=p.default)==null?void 0:e.call(p))==null?void 0:a.flatMap(_).filter(Boolean))||[]});function _(e,a){var d,l,i,o;return typeof e.type=="symbol"?(d=e.children)==null?void 0:d.map(_):{label:((l=e.props)==null?void 0:l.filename)||((i=e.props)==null?void 0:i.label)||`${a}`,icon:(o=e.props)==null?void 0:o.icon,component:e}}return E(()=>{if(s.sync){const e=`code-group-${s.sync}`,a=F(e,()=>localStorage.getItem(e));k(a,()=>{a.value&&(r.value=a.value)},{immediate:!0}),k(r,()=>{r.value&&(a.value=r.value,localStorage.setItem(e,r.value))})}}),K(()=>b.value++),(e,a)=>{var d;return u(),m(t(H),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),"default-value":e.defaultValue,"unmount-on-hide":!1,class:c(t(n).root({class:[s.class,(d=s.ui)==null?void 0:d.root]}))},{default:f(()=>{var l;return[g(t(Z),{class:c(t(n).list({class:(l=s.ui)==null?void 0:l.list}))},{default:f(()=>{var i;return[g(t(Q),{class:c(t(n).indicator({class:(i=s.ui)==null?void 0:i.indicator}))},null,8,["class"]),(u(!0),w($,null,S(y.value,(o,h)=>{var x;return u(),m(t(Y),{key:h,value:String(h),class:c(t(n).trigger({class:(x=s.ui)==null?void 0:x.trigger}))},{default:f(()=>{var C,V;return[g(M,{icon:o.icon,filename:o.label,class:c(t(n).triggerIcon({class:(C=s.ui)==null?void 0:C.triggerIcon}))},null,8,["icon","filename","class"]),O("span",{class:c(t(n).triggerLabel({class:(V=s.ui)==null?void 0:V.triggerLabel}))},U(o.label),3)]}),_:2},1032,["value","class"])}),128))]}),_:1},8,["class"]),(u(!0),w($,null,S(y.value,(i,o)=>(u(),m(t(A),{key:o,value:String(o),"as-child":""},{default:f(()=>[(u(),m(q(i.component),{"hide-header":"",tabindex:"-1"}))]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue","default-value","class"])}}}),re=Object.assign(X,{__name:"ProseCodeGroup"});export{re as default};
