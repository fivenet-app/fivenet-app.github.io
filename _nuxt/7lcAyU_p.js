import{e as x,D as h,o as v,f as w,w as l,b as c,a as I,s,L as a,t as p,N as u,X as L,a2 as T,M as U}from"./DAX8_Io3.js";import{r as k}from"./DeZeNu7-.js";import"./C2bHYaEW.js";const B={slots:{base:"",trigger:["group relative rounded-[calc(var(--ui-radius)/2)] inline-flex items-center gap-1.5 text-(--ui-text-muted) hover:text-(--ui-text) text-sm focus-visible:ring-2 focus-visible:ring-(--ui-primary) focus:outline-none","transition-colors"],triggerIcon:"size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",triggerLabel:"truncate"}},D=U;var g,m;const N=u({extend:u(B),...((m=(g=D.uiPro)==null?void 0:g.prose)==null?void 0:m.collapsible)||{}}),P=x({__name:"Collapsible",props:{icon:{},name:{default:"properties"},openText:{default:"Show"},closeText:{default:"Hide"},class:{},ui:{}},setup(f){const o=f,d=h(),t=N();return(e,S)=>{const b=L,_=T;return v(),w(_,{"unmount-on-hide":!1,class:a(s(t).base({class:o.class}))},{default:l(({open:C})=>{var n,r,i;return[c("button",{class:a(s(t).trigger({class:(n=o.ui)==null?void 0:n.trigger}))},[I(b,{name:e.icon||s(d).ui.icons.chevronDown,class:a(s(t).triggerIcon({class:(r=o.ui)==null?void 0:r.triggerIcon}))},null,8,["name","class"]),c("span",{class:a(s(t).triggerLabel({class:(i=o.ui)==null?void 0:i.triggerLabel}))},p(C?e.closeText:e.openText)+" "+p(e.name),3)],2)]}),content:l(()=>[k(e.$slots,"default",{mdcUnwrap:"p"})]),_:3},8,["class"])}}}),j=Object.assign(P,{__name:"ProseCollapsible"});export{j as default};
