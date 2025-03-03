import{f as U,N as _,A as V,q as i,o as t,c as m,l as n,w as z,b as v,V as B,z as a,J as s,m as L,K as P,M as h,U as A,W as N,L as S}from"./BEHr5xEm.js";import{r as W}from"./BYLSrUG7.js";import"./C2bHYaEW.js";const $={slots:{base:["group relative block p-4 sm:p-6 border border-(--ui-border) rounded-[calc(var(--ui-radius)*1.5)] bg-(--ui-bg)","transition-colors"],icon:"size-6 mb-2 block",title:"text-(--ui-text-highlighted) font-semibold",description:"text-[15px] text-(--ui-text-muted)",externalIcon:["size-4 align-top absolute right-2 top-2 text-(--ui-text-dimmed) pointer-events-none","transition-colors"]},variants:{color:{primary:{icon:"text-(--ui-primary)"},secondary:{icon:"text-(--ui-secondary)"},success:{icon:"text-(--ui-success)"},info:{icon:"text-(--ui-info)"},warning:{icon:"text-(--ui-warning)"},error:{icon:"text-(--ui-error)"},neutral:{icon:"text-(--ui-text-highlighted)"}},to:{true:""},title:{true:{description:"mt-1"}}},compoundVariants:[{color:"primary",to:!0,class:{base:"hover:bg-(--ui-primary)/10 hover:border-(--ui-primary)",externalIcon:"group-hover:text-(--ui-primary)"}},{color:"secondary",to:!0,class:{base:"hover:bg-(--ui-secondary)/10 hover:border-(--ui-secondary)",externalIcon:"group-hover:text-(--ui-secondary)"}},{color:"success",to:!0,class:{base:"hover:bg-(--ui-success)/10 hover:border-(--ui-success)",externalIcon:"group-hover:text-(--ui-success)"}},{color:"info",to:!0,class:{base:"hover:bg-(--ui-info)/10 hover:border-(--ui-info)",externalIcon:"group-hover:text-(--ui-info)"}},{color:"warning",to:!0,class:{base:"hover:bg-(--ui-warning)/10 hover:border-(--ui-warning)",externalIcon:"group-hover:text-(--ui-warning)"}},{color:"error",to:!0,class:{base:"hover:bg-(--ui-error)/10 hover:border-(--ui-error)",externalIcon:"group-hover:text-(--ui-error)"}},{color:"neutral",to:!0,class:{base:"hover:bg-(--ui-bg-elevated)/50 hover:border-(--ui-border-inverted)",externalIcon:"group-hover:text-(--ui-text-highlighted)"}}],defaultVariants:{color:"primary"}},j=S;var x,f;const q=h({extend:h($),...((f=(x=j.uiPro)==null?void 0:x.prose)==null?void 0:f.card)||{}}),D=U({inheritAttrs:!1,__name:"Card",props:{to:{},target:{},icon:{},title:{},color:{},class:{},ui:{}},setup(y){const e=y,k=_(),C=V(),r=i(()=>q({color:e.color,to:!!e.to,title:!!e.title})),l=i(()=>e.target||(e.to&&typeof e.to=="string"&&e.to.startsWith("http")?"_blank":void 0)),I=i(()=>(e.title||"Card link").trim());return(o,c)=>{var d,p,b,g;const w=A,u=N;return t(),m("div",{class:s(r.value.base({class:e.class}))},[o.to?(t(),n(w,B({key:0,"aria-label":I.value},{to:o.to,target:l.value,...o.$attrs},{class:"focus:outline-none",tabindex:"-1",raw:""}),{default:z(()=>c[0]||(c[0]=[v("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):a("",!0),o.icon?(t(),n(u,{key:1,name:o.icon,class:s(r.value.icon({class:(d=e.ui)==null?void 0:d.icon}))},null,8,["name","class"])):a("",!0),o.to&&l.value==="_blank"?(t(),n(u,{key:2,name:L(C).ui.icons.external,class:s(r.value.externalIcon({class:(p=e.ui)==null?void 0:p.externalIcon}))},null,8,["name","class"])):a("",!0),v("p",{class:s(r.value.title({class:(b=e.ui)==null?void 0:b.title}))},P(o.title),3),k.default?(t(),m("p",{key:3,class:s(r.value.description({class:(g=e.ui)==null?void 0:g.description}))},[W(o.$slots,"default",{mdcUnwrap:"p"})],2)):a("",!0)],2)}}}),M=Object.assign(D,{__name:"ProseCard"});export{M as default};
