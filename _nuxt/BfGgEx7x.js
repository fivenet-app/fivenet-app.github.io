import{N as c,e as C,O as S,y as V,o as l,f as m,w as $,c as o,r as n,L as i,C as r,b as B,s as g,P as H,M as N,i as u,t as d,a1 as L,a0 as z,W as D,Y as E}from"./DAX8_Io3.js";const F={slots:{root:"relative border-b border-(--ui-border) py-8",container:"",wrapper:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",headline:"mb-2.5 text-sm font-semibold text-(--ui-primary) flex items-center gap-1.5",title:"text-3xl sm:text-4xl text-pretty font-bold text-(--ui-text-highlighted)",description:"text-lg text-pretty text-(--ui-text-muted)",links:"flex flex-wrap items-center gap-1.5"},variants:{title:{true:{description:"mt-4"}}}},M=N;var P;const T=c({extend:c(F),...((P=M.uiPro)==null?void 0:P.pageHeader)||{}}),W=C({__name:"PageHeader",props:{as:{},headline:{},title:{},description:{},links:{},class:{},ui:{}},setup(p){const s=p,t=S(),a=V(()=>T({title:!!s.title||!!t.title}));return(e,I)=>{var f;const U=E;return l(),m(g(H),{as:e.as,class:i(a.value.root({class:[s.class,(f=s.ui)==null?void 0:f.root]}))},{default:$(()=>{var h,y,v,k,_,b,x;return[e.headline||t.headline?(l(),o("div",{key:0,class:i(a.value.headline({class:(h=s.ui)==null?void 0:h.headline}))},[n(e.$slots,"headline",{},()=>[u(d(e.headline),1)])],2)):r("",!0),B("div",{class:i(a.value.container({class:(y=s.ui)==null?void 0:y.container}))},[B("div",{class:i(a.value.wrapper({class:(v=s.ui)==null?void 0:v.wrapper}))},[e.title||t.title?(l(),o("h1",{key:0,class:i(a.value.title({class:(k=s.ui)==null?void 0:k.title}))},[n(e.$slots,"title",{},()=>[u(d(e.title),1)])],2)):r("",!0),(_=e.links)!=null&&_.length||t.links?(l(),o("div",{key:1,class:i(a.value.links({class:(b=s.ui)==null?void 0:b.links}))},[n(e.$slots,"links",{},()=>[(l(!0),o(L,null,z(e.links,(j,O)=>(l(),m(U,D({key:O,color:"neutral",variant:"outline",ref_for:!0},j),null,16))),128))])],2)):r("",!0)],2),e.description||t.description?(l(),o("div",{key:0,class:i(a.value.description({class:(x=s.ui)==null?void 0:x.description}))},[n(e.$slots,"description",{},()=>[u(d(e.description),1)])],2)):r("",!0),n(e.$slots,"default")],2)]}),_:3},8,["as","class"])}}}),K=Object.assign(W,{__name:"UPageHeader"}),Y={base:"mt-8 pb-24 space-y-12"},q=N;var w;const A=c({extend:c(Y),...((w=q.uiPro)==null?void 0:w.pageBody)||{}}),G=C({__name:"PageBody",props:{as:{},class:{}},setup(p){const s=p;return(t,a)=>(l(),m(g(H),{as:t.as,class:i(g(A)({class:s.class}))},{default:$(()=>[n(t.$slots,"default")]),_:3},8,["as","class"]))}}),Q=Object.assign(G,{__name:"UPageBody"});export{K as _,Q as a};
