import{e as f,E as g,y as k,o as n,c as i,L as l,s as c,r,N as d,M as _}from"./DAX8_Io3.js";const b={slots:{base:"text-4xl text-(--ui-text-highlighted) font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",link:"inline-flex items-center gap-2"}},C=["id"],H=["href"],x=_;var p,h;const y=d({extend:d(b),...((h=(p=x.uiPro)==null?void 0:p.prose)==null?void 0:h.h1)||{}}),v=f({__name:"H1",props:{id:{},class:{},ui:{}},setup(u){const t=u,o=y(),{headings:s}=g().public.mdc,m=k(()=>t.id&&typeof(s==null?void 0:s.anchorLinks)=="object"&&s.anchorLinks.h1);return(e,L)=>{var a;return n(),i("h1",{id:e.id,class:l(c(o).base({class:t.class}))},[e.id&&m.value?(n(),i("a",{key:0,href:`#${e.id}`,class:l(c(o).link({class:(a=t.ui)==null?void 0:a.link}))},[r(e.$slots,"default")],10,H)):r(e.$slots,"default",{key:1})],10,C)}}}),$=Object.assign(v,{__name:"ProseH1"});export{$ as default};
