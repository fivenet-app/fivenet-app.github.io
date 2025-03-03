import{f as D,q as j,o as l,l as w,w as L,r as v,V as G,m as o,P as J,H as Ce,I as $e,M as E,N as Q,c as $,J as r,z as I,b as O,L as K,y as V,K as R,a0 as F,$ as ne,X as Ie,b9 as Le,B as we,aD as ze,aH as X,aK as Se,aG as Te,aI as re,C as Be,D as le,aZ as Oe,ab as ye,W as Y,ay as Ue,A as ee,aB as se,a as C,U as _e,b0 as He,b1 as je,j as oe,Z as Ae,ba as Re,bb as Ee,aa as De,bc as Ve,bd as Me,av as Ne,aq as qe,ar as We,at as ce,as as Fe,be as Ge,bf as Ke,al as Ze,bg as ue,bh as Je,bi as Xe,a_ as de,bj as pe,bk as Qe,bl as Ye,bm as et}from"./BEHr5xEm.js";import{a as me,_ as tt}from"./lP0z3Pgj.js";import{_ as ot}from"./pnak1aw6.js";import"./C2bHYaEW.js";const st=D({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(k){const e=k,t=["horizontal","vertical"];function b(a){return t.includes(a)}const s=j(()=>b(e.orientation)?e.orientation:"horizontal"),n=j(()=>s.value==="vertical"?e.orientation:void 0),m=j(()=>e.decorative?{role:"none"}:{"aria-orientation":n.value,role:"separator"});return(a,h)=>(l(),w(o(J),G({as:a.as,"as-child":a.asChild,"data-orientation":s.value},m.value),{default:L(()=>[v(a.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),nt=D({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(k){const e=k;return(t,b)=>(l(),w(st,Ce($e(e)),{default:L(()=>[v(t.$slots,"default")]),_:3},16))}}),at={slots:{root:"relative border-b border-(--ui-border) py-8",container:"",wrapper:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",headline:"mb-2.5 text-sm font-semibold text-(--ui-primary) flex items-center gap-1.5",title:"text-3xl sm:text-4xl text-pretty font-bold text-(--ui-text-highlighted)",description:"text-lg text-pretty text-(--ui-text-muted)",links:"flex flex-wrap items-center gap-1.5"},variants:{title:{true:{description:"mt-4"}}}},it=K;var ge;const rt=E({extend:E(at),...((ge=it.uiPro)==null?void 0:ge.pageHeader)||{}}),lt=D({__name:"PageHeader",props:{as:{},headline:{},title:{},description:{},links:{},class:{},ui:{}},setup(k){const e=k,t=Q(),b=j(()=>rt({title:!!e.title||!!t.title}));return(s,n)=>{var a;const m=Ie;return l(),w(o(J),{as:s.as,class:r(b.value.root({class:[e.class,(a=e.ui)==null?void 0:a.root]}))},{default:L(()=>{var h,U,T,f,z,g,u;return[s.headline||t.headline?(l(),$("div",{key:0,class:r(b.value.headline({class:(h=e.ui)==null?void 0:h.headline}))},[v(s.$slots,"headline",{},()=>[V(R(s.headline),1)])],2)):I("",!0),O("div",{class:r(b.value.container({class:(U=e.ui)==null?void 0:U.container}))},[O("div",{class:r(b.value.wrapper({class:(T=e.ui)==null?void 0:T.wrapper}))},[s.title||t.title?(l(),$("h1",{key:0,class:r(b.value.title({class:(f=e.ui)==null?void 0:f.title}))},[v(s.$slots,"title",{},()=>[V(R(s.title),1)])],2)):I("",!0),(z=s.links)!=null&&z.length||t.links?(l(),$("div",{key:1,class:r(b.value.links({class:(g=e.ui)==null?void 0:g.links}))},[v(s.$slots,"links",{},()=>[(l(!0),$(F,null,ne(s.links,(H,x)=>(l(),w(m,G({key:x,color:"neutral",variant:"outline",ref_for:!0},H),null,16))),128))])],2)):I("",!0)],2),s.description||t.description?(l(),$("div",{key:0,class:r(b.value.description({class:(u=e.ui)==null?void 0:u.description}))},[v(s.$slots,"description",{},()=>[V(R(s.description),1)])],2)):I("",!0),v(s.$slots,"default")],2)]}),_:3},8,["as","class"])}}}),ct=Object.assign(lt,{__name:"UPageHeader"}),xe=["Mermaid","UButton","UIcon","ProseA","ProseAccordion","ProseAccordionItem","ProseBadge","ProseBlockquote","ProseCallout","ProseCard","ProseCardGroup","ProseCode","ProseCodeCollapse","ProseCodeGroup","ProseCodeIcon","ProseCodePreview","ProseCodeTree","ProseCollapsible","ProseEm","ProseField","ProseFieldGroup","ProseH1","ProseH2","ProseH3","ProseH4","ProseHr","ProseIcon","ProseImg","ProseKbd","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseSteps","ProseStrong","ProseTable","ProseTabs","ProseTabsItem","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","ProseCaution","ProseNote","ProseTip","ProseWarning","ProseH5","ProseH6","Icon"],Pe=[],ut=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:xe,localComponents:Pe},Symbol.toStringTag,{value:"Module"})),dt=D({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(k){var x,A,c,B;const e=["render","ssrRender","__ssrInlineRender"],t=k,b=!1,s=j(()=>{let i=t.value.body||t.value;return t.excerpt&&t.value.excerpt&&(i=t.value.excerpt),i.type==="minimal"?Le(i):i}),n=j(()=>{var i,d;return!((d=(i=s.value)==null?void 0:i.children)!=null&&d.length)}),m=j(()=>{const{body:i,excerpt:d,...p}=t.value;return{...p,...t.data}}),a=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(i=>[i,`prose-${i}`])),{mdc:h}=we().public||{},U={...(x=h==null?void 0:h.components)!=null&&x.prose&&t.prose!==!1?a:{},...((A=h==null?void 0:h.components)==null?void 0:A.map)||{},...ze(((B=(c=t.data)==null?void 0:c.mdc)==null?void 0:B.components)||{}),...t.components},T=j(()=>{}),f=j(()=>s.value?g(s.value,{tags:U}):{});function z(i){let d=i;if(typeof i=="string"){if(me.includes(i))return i;if(xe.includes(X(i))?d=Te(i,!1):Pe.includes(X(i))&&(d=re(()=>Be(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(P=>{const _=P[X(i)];return _?_():void 0}))),typeof d=="string")return d}if(!d)return d;const p=d;return"__asyncLoader"in p?p:"setup"in p?re(()=>Promise.resolve(p)):p}function g(i,d){if(!i)return;const p=Array.from(new Set(u(i,d))),y={};for(const[P,_]of p)if(!y[P]){if(typeof _=="object"&&e.some(S=>Object.hasOwnProperty.call(_,S))){y[P]=_;continue}y[P]=z(_)}return y}function u(i,d){const p=i.tag;if(i.type==="text"||p==="binding"||i.type==="comment")return[];const y=H(i,d.tags),P=[];i.type!=="root"&&!me.includes(y)&&P.push([p,y]);for(const _ of i.children||[])P.push(...u(_,d));return P}function H(i,d){var y;const p=i.tag;return!p||typeof((y=i.props)==null?void 0:y.__ignoreMap)<"u"?p:d[p]||d[X(p)]||d[Se(i.tag)]||p}return(i,d)=>n.value?v(i.$slots,"empty",{key:1,body:s.value,data:m.value,dataContentId:o(b)?k.value.id:void 0}):(l(),w(tt,{key:T.value,body:s.value,data:m.value,class:r(t.class),tag:t.tag,prose:t.prose,unwrap:t.unwrap,components:f.value,"data-content-id":o(b)?k.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),pt=Object.assign(dt,{__name:"ContentRenderer"}),mt={slots:{root:"flex items-center align-center text-center",border:"",container:"font-medium text-(--ui-text) flex",icon:"shrink-0 size-5",avatar:"shrink-0",avatarSize:"2xs",label:"text-sm"},variants:{color:{primary:{border:"border-(--ui-primary)"},secondary:{border:"border-(--ui-secondary)"},success:{border:"border-(--ui-success)"},info:{border:"border-(--ui-info)"},warning:{border:"border-(--ui-warning)"},error:{border:"border-(--ui-error)"},neutral:{border:"border-(--ui-border)"}},orientation:{horizontal:{root:"w-full flex-row",border:"w-full",container:"mx-3 whitespace-nowrap"},vertical:{root:"h-full flex-col",border:"h-full",container:"my-2"}},size:{xs:"",sm:"",md:"",lg:"",xl:""},type:{solid:{border:"border-solid"},dashed:{border:"border-dashed"},dotted:{border:"border-dotted"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{border:"border-t"}},{orientation:"horizontal",size:"sm",class:{border:"border-t-[2px]"}},{orientation:"horizontal",size:"md",class:{border:"border-t-[3px]"}},{orientation:"horizontal",size:"lg",class:{border:"border-t-[4px]"}},{orientation:"horizontal",size:"xl",class:{border:"border-t-[5px]"}},{orientation:"vertical",size:"xs",class:{border:"border-s"}},{orientation:"vertical",size:"sm",class:{border:"border-s-[2px]"}},{orientation:"vertical",size:"md",class:{border:"border-s-[3px]"}},{orientation:"vertical",size:"lg",class:{border:"border-s-[4px]"}},{orientation:"vertical",size:"xl",class:{border:"border-s-[5px]"}}],defaultVariants:{color:"neutral",size:"xs",type:"solid"}},gt=K;var fe;const ft=le({extend:le(mt),...((fe=gt.ui)==null?void 0:fe.separator)||{}}),bt=D({__name:"Separator",props:{as:{},label:{},icon:{},avatar:{},color:{},size:{},type:{},orientation:{default:"horizontal"},class:{},ui:{},decorative:{type:Boolean}},setup(k){const e=k,t=Q(),b=Oe(ye(e,"as","decorative","orientation")),s=j(()=>ft({color:e.color,orientation:e.orientation,size:e.size,type:e.type}));return(n,m)=>{var a;return l(),w(o(nt),G(o(b),{class:s.value.root({class:[e.class,(a=e.ui)==null?void 0:a.root]})}),{default:L(()=>{var h,U,T;return[O("div",{class:r(s.value.border({class:(h=e.ui)==null?void 0:h.border}))},null,2),n.label||n.icon||n.avatar||t.default?(l(),$(F,{key:0},[O("div",{class:r(s.value.container({class:(U=e.ui)==null?void 0:U.container}))},[v(n.$slots,"default",{},()=>{var f,z,g,u;return[n.label?(l(),$("span",{key:0,class:r(s.value.label({class:(f=e.ui)==null?void 0:f.label}))},R(n.label),3)):n.icon?(l(),w(Y,{key:1,name:n.icon,class:r(s.value.icon({class:(z=e.ui)==null?void 0:z.icon}))},null,8,["name","class"])):n.avatar?(l(),w(Ue,G({key:2,size:((g=e.ui)==null?void 0:g.avatarSize)||s.value.avatarSize()},n.avatar,{class:s.value.avatar({class:(u=e.ui)==null?void 0:u.avatar})}),null,16,["size","class"])):I("",!0)]})],2),O("div",{class:r(s.value.border({class:(T=e.ui)==null?void 0:T.border}))},null,2)],64)):I("",!0)]}),_:3},16,["class"])}}}),ht=Object.assign(bt,{__name:"USeparator"}),vt={slots:{root:"grid sm:grid-cols-2 gap-8",link:["group block px-6 py-8 rounded-[calc(var(--ui-radius)*2)] border border-(--ui-border) hover:bg-(--ui-bg-elevated)/50 focus-visible:outline-(--ui-primary)","transition-colors"],linkLeading:["inline-flex items-center rounded-full p-1.5 bg-(--ui-bg-elevated) group-hover:bg-(--ui-primary)/10 ring ring-(--ui-border-accented) mb-4 group-hover:ring-(--ui-primary)/50","transition"],linkLeadingIcon:["size-5 shrink-0 text-(--ui-text-highlighted) group-hover:text-(--ui-primary)","transition-[color,translate]"],linkTitle:"font-medium text-[15px] text-(--ui-text-highlighted) mb-1 truncate",linkDescription:"text-sm text-(--ui-text-muted) line-clamp-2"},variants:{direction:{left:{linkLeadingIcon:["group-active:-translate-x-0.5"]},right:{link:"text-right",linkLeadingIcon:["group-active:translate-x-0.5"]}}}},kt={key:1,class:"hidden lg:block"},yt=K;var be;const _t=E({extend:E(vt),...((be=yt.uiPro)==null?void 0:be.contentSurround)||{}}),xt=D({__name:"ContentSurround",props:{as:{},prevIcon:{},nextIcon:{},surround:{},class:{},ui:{}},setup(k){const e=k,t=ee(),[b,s]=se({props:{link:Object,icon:String,direction:String}}),n=_t();return(m,a)=>{var T;const h=Y,U=_e;return l(),$(F,null,[C(o(b),null,{default:L(({link:f,icon:z,direction:g})=>{var u;return[f?(l(),w(U,{key:0,to:f.path,raw:"",class:r(o(n).link({class:[(u=e.ui)==null?void 0:u.link,f.class],direction:g}))},{default:L(()=>[v(m.$slots,"link",{link:f},()=>{var H,x,A;return[O("div",{class:r(o(n).linkLeading({class:(H=e.ui)==null?void 0:H.linkLeading}))},[v(m.$slots,"link-leading",{link:f},()=>{var c;return[C(h,{name:f.icon||z,class:r(o(n).linkLeadingIcon({class:(c=e.ui)==null?void 0:c.linkLeadingIcon,direction:g}))},null,8,["name","class"])]})],2),O("p",{class:r(o(n).linkTitle({class:(x=e.ui)==null?void 0:x.linkTitle}))},[v(m.$slots,"link-title",{link:f},()=>[V(R(f.title),1)])],2),O("p",{class:r(o(n).linkDescription({class:(A=e.ui)==null?void 0:A.linkDescription}))},[v(m.$slots,"link-description",{link:f},()=>[V(R(f.description),1)])],2)]})]),_:2},1032,["to","class"])):(l(),$("span",kt," "))]}),_:3}),m.surround?(l(),w(o(J),{key:0,as:m.as,class:r(o(n).root({class:[e.class,(T=e.ui)==null?void 0:T.root]}))},{default:L(()=>[C(o(s),{link:m.surround[0],icon:m.prevIcon||o(t).ui.icons.arrowLeft,direction:"left"},null,8,["link","icon"]),C(o(s),{link:m.surround[1],icon:m.nextIcon||o(t).ui.icons.arrowRight,direction:"right"},null,8,["link","icon"])]),_:1},8,["as","class"])):I("",!0)],64)}}}),Pt=Object.assign(xt,{__name:"UContentSurround"}),Ct={base:"mt-8 pb-24 space-y-12"},$t=K;var he;const It=E({extend:E(Ct),...((he=$t.uiPro)==null?void 0:he.pageBody)||{}}),Lt=D({__name:"PageBody",props:{as:{},class:{}},setup(k){const e=k;return(t,b)=>(l(),w(o(J),{as:t.as,class:r(o(It)({class:e.class}))},{default:L(()=>[v(t.$slots,"default")]),_:3},8,["as","class"]))}}),wt=Object.assign(Lt,{__name:"UPageBody"}),zt={slots:{root:"flex flex-col gap-3",title:"text-sm font-semibold flex items-center gap-1.5",list:"flex flex-col gap-2",item:"relative",link:"group text-sm flex items-center gap-1.5 focus-visible:outline-(--ui-primary)",linkLeadingIcon:"size-5 shrink-0",linkLabel:"truncate",linkLabelExternalIcon:"size-3 absolute top-0 text-(--ui-text-dimmed)"},variants:{active:{true:{link:"text-(--ui-primary) font-medium"},false:{link:["text-(--ui-text-muted) hover:text-(--ui-text)","transition-colors"]}}}},St=K;var ve;const Tt=E({extend:E(zt),...((ve=St.uiPro)==null?void 0:ve.pageLinks)||{}}),Bt=D({__name:"PageLinks",props:{as:{default:"nav"},title:{},links:{},class:{},ui:{}},setup(k){const e=k,t=Q(),b=ee(),s=Tt();return(n,m)=>{var T;const a=Y,h=je,U=_e;return l(),w(o(J),{as:n.as,class:r(o(s).root({class:[e.class,(T=e.ui)==null?void 0:T.root]}))},{default:L(()=>{var f,z;return[n.title?(l(),$("p",{key:0,class:r(o(s).title({class:(f=e.ui)==null?void 0:f.title}))},[v(n.$slots,"title",{},()=>[V(R(n.title),1)])],2)):I("",!0),O("ul",{class:r(o(s).list({class:(z=e.ui)==null?void 0:z.list}))},[(l(!0),$(F,null,ne(n.links,(g,u)=>{var H;return l(),$("li",{key:u,class:r(o(s).item({class:(H=e.ui)==null?void 0:H.item}))},[C(U,G({ref_for:!0},o(He)(g),{custom:""}),{default:L(({active:x,...A})=>{var c;return[C(h,G({ref_for:!0},A,{class:o(s).link({class:[(c=e.ui)==null?void 0:c.link,g.class],active:x})}),{default:L(()=>[v(n.$slots,"link",{link:g,active:x},()=>{var B,i;return[v(n.$slots,"link-leading",{link:g,active:x},()=>{var d;return[g.icon?(l(),w(a,{key:0,name:g.icon,class:r(o(s).linkLeadingIcon({class:(d=e.ui)==null?void 0:d.linkLeadingIcon,active:x}))},null,8,["name","class"])):I("",!0)]}),g.label||t["link-label"]?(l(),$("span",{key:0,class:r(o(s).linkLabel({class:(B=e.ui)==null?void 0:B.linkLabel,active:x}))},[v(n.$slots,"link-label",{link:g,active:x},()=>[V(R(g.label),1)]),g.target==="_blank"?(l(),w(a,{key:0,name:o(b).ui.icons.external,class:r(o(s).linkLabelExternalIcon({class:(i=e.ui)==null?void 0:i.linkLabelExternalIcon,active:x}))},null,8,["name","class"])):I("",!0)],2)):I("",!0),v(n.$slots,"link-trailing",{link:g,active:x})]})]),_:2},1040,["class"])]}),_:2},1040)],2)}),128))],2)]}),_:3},8,["as","class"])}}}),Ot=Object.assign(Bt,{__name:"UPageLinks"});function Ut(){const k=oe(),e=oe([]),t=oe([]);function b(n){n.forEach(m=>{const a=m.target.id;a&&(m.isIntersecting?e.value=[...e.value,a]:e.value=e.value.filter(h=>h!==a))})}function s(n){n.forEach(m=>{k.value&&k.value.observe(m)})}return Ae(e,(n,m)=>{n.length===0?t.value=m:t.value=n}),Re(()=>k.value=new IntersectionObserver(b)),Ee(()=>{var n;return(n=k.value)==null?void 0:n.disconnect()}),{visibleHeadings:e,activeHeadings:t,updateHeadings:s}}const Ht={slots:{root:"sticky top-(--ui-header-height) bg-(--ui-bg)/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",container:"pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-(--ui-border) lg:border-0 flex flex-col",top:"",bottom:"mt-6 hidden lg:flex lg:flex-col gap-6",trigger:"group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-(--ui-primary)",title:"truncate",trailing:"ms-auto inline-flex gap-1.5 items-center",trailingIcon:"size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden",content:"data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none",list:"",listWithChildren:"ms-3",item:"",itemWithChildren:"",link:"group text-sm block truncate focus-visible:outline-(--ui-primary) py-1",indicator:"absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},highlightColor:{primary:{indicator:"bg-(--ui-primary)"},secondary:{indicator:"bg-(--ui-secondary)"},success:{indicator:"bg-(--ui-success)"},info:{indicator:"bg-(--ui-info)"},warning:{indicator:"bg-(--ui-warning)"},error:{indicator:"bg-(--ui-error)"},neutral:{indicator:"bg-(--ui-bg-inverted)"}},active:{false:{link:["text-(--ui-text-muted) hover:text-(--ui-text)","transition-colors"]}},highlight:{true:{list:"ms-2.5 ps-4 border-s border-(--ui-border)",item:"-ms-px"}}},compoundVariants:[{color:"primary",active:!0,class:{link:"text-(--ui-primary)",linkLeadingIcon:"text-(--ui-primary)"}},{color:"secondary",active:!0,class:{link:"text-(--ui-secondary)",linkLeadingIcon:"text-(--ui-secondary)"}},{color:"success",active:!0,class:{link:"text-(--ui-success)",linkLeadingIcon:"text-(--ui-success)"}},{color:"info",active:!0,class:{link:"text-(--ui-info)",linkLeadingIcon:"text-(--ui-info)"}},{color:"warning",active:!0,class:{link:"text-(--ui-warning)",linkLeadingIcon:"text-(--ui-warning)"}},{color:"error",active:!0,class:{link:"text-(--ui-error)",linkLeadingIcon:"text-(--ui-error)"}},{color:"neutral",active:!0,class:{link:"text-(--ui-text-highlighted)",linkLeadingIcon:"text-(--ui-text-highlighted)"}}],defaultVariants:{color:"primary",highlightColor:"primary"}},jt=["href","onClick"],At=K;var ke;const Rt=E({extend:E(Ht),...((ke=At.uiPro)==null?void 0:ke.contentToc)||{}}),Et=D({__name:"ContentToc",props:{as:{default:"nav"},trailingIcon:{},title:{default:"On this page"},color:{},highlight:{type:Boolean},highlightColor:{},links:{},class:{},ui:{},defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open","move"],setup(k,{emit:e}){const t=k,b=e,s=Q(),n=De(ye(t,"as","open","defaultOpen"),b),m=Ve(),a=ee(),{activeHeadings:h,updateHeadings:U}=Ut(),[T,f]=se({props:{links:Array,level:Number}}),[z,g]=se(),u=j(()=>Rt({color:t.color,highlight:t.highlight,highlightColor:t.highlightColor||t.color}));function H(c){const B=encodeURIComponent(c);m.push(`#${B}`),b("move",c)}Me().hooks.hookOnce("page:finish",()=>{U([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});function x(c){return c.flatMap(B=>[B,...B.children?x(B.children):[]])}const A=j(()=>{var p;if(!((p=h.value)!=null&&p.length))return;const B=x(t.links||[]).findIndex(y=>h.value.includes(y.id)),i=28,d=0;return{"--indicator-size":`${i*h.value.length+d*(h.value.length-1)}px`,"--indicator-position":B>=0?`${B*(i+d)}px`:"0px"}});return(c,B)=>{var d;const i=Y;return l(),$(F,null,[C(o(T),null,{default:L(({links:p,level:y})=>{var P,_;return[O("ul",{class:r(y>0?u.value.listWithChildren({class:(P=t.ui)==null?void 0:P.listWithChildren}):u.value.list({class:(_=t.ui)==null?void 0:_.list}))},[(l(!0),$(F,null,ne(p,(S,W)=>{var M,N,q,Z;return l(),$("li",{key:W,class:r(S.children&&S.children.length>0?u.value.itemWithChildren({class:(M=t.ui)==null?void 0:M.itemWithChildren}):u.value.item({class:(N=t.ui)==null?void 0:N.item}))},[O("a",{href:`#${S.id}`,class:r(u.value.link({class:[(q=t.ui)==null?void 0:q.link,S.class],active:o(h).includes(S.id)})),onClick:Ne(te=>H(S.id),["prevent"])},[v(c.$slots,"link",{link:S},()=>[V(R(S.text),1)])],10,jt),(Z=S.children)!=null&&Z.length?(l(),w(o(f),{key:0,links:S.children,level:y+1},null,8,["links","level"])):I("",!0)],2)}),128))],2)]}),_:3}),C(o(z),null,{default:L(({open:p})=>{var y,P;return[v(c.$slots,"leading",{open:p}),O("span",{class:r(u.value.title({class:(y=t.ui)==null?void 0:y.title}))},[v(c.$slots,"default",{open:p},()=>[V(R(c.title),1)])],2),O("span",{class:r(u.value.trailing({class:(P=t.ui)==null?void 0:P.trailing}))},[v(c.$slots,"trailing",{open:p},()=>{var _;return[C(i,{name:c.trailingIcon||o(a).ui.icons.chevronDown,class:r(u.value.trailingIcon({class:(_=t.ui)==null?void 0:_.trailingIcon}))},null,8,["name","class"])]})],2)]}),_:3}),C(o(Fe),G(o(n),{"default-open":c.defaultOpen,class:u.value.root({class:[t.class,(d=t.ui)==null?void 0:d.root]})}),{default:L(({open:p})=>{var y,P,_,S,W,M,N;return[O("div",{class:r(u.value.container({class:(y=t.ui)==null?void 0:y.container}))},[s.top?(l(),$("div",{key:0,class:r(u.value.top({class:(P=t.ui)==null?void 0:P.top}))},[v(c.$slots,"top",{links:c.links})],2)):I("",!0),(_=c.links)!=null&&_.length?(l(),$(F,{key:1},[C(o(qe),{class:r(u.value.trigger({class:"lg:hidden"}))},{default:L(()=>[C(o(g),{open:p},null,8,["open"])]),_:2},1032,["class"]),C(o(We),{class:r(u.value.content({class:[(S=t.ui)==null?void 0:S.content,"lg:hidden"]}))},{default:L(()=>{var q;return[c.highlight?(l(),$("div",{key:0,class:r(u.value.indicator({class:(q=t.ui)==null?void 0:q.indicator})),style:ce(A.value)},null,6)):I("",!0),v(c.$slots,"content",{links:c.links},()=>[C(o(f),{links:c.links,level:0},null,8,["links"])])]}),_:3},8,["class"]),O("p",{class:r(u.value.trigger({class:"hidden lg:flex"}))},[C(o(g),{open:p},null,8,["open"])],2),O("div",{class:r(u.value.content({class:[(W=t.ui)==null?void 0:W.content,"hidden lg:flex"]}))},[c.highlight?(l(),$("div",{key:0,class:r(u.value.indicator({class:(M=t.ui)==null?void 0:M.indicator})),style:ce(A.value)},null,6)):I("",!0),v(c.$slots,"content",{links:c.links},()=>[C(o(f),{links:c.links,level:0},null,8,["links"])])],2)],64)):I("",!0),s.bottom?(l(),$("div",{key:2,class:r(u.value.bottom({class:(N=t.ui)==null?void 0:N.bottom}))},[v(c.$slots,"bottom",{links:c.links})],2)):I("",!0)],2)]}),_:3},16,["default-open","class"])],64)}}}),Dt=Object.assign(Et,{__name:"UContentToc"}),Wt=D({__name:"[...slug]",async setup(k){let e,t;const{t:b}=Ge(),s=Ke(),{toc:n}=ee(),m=Ze("navigation"),{data:a}=([e,t]=ue(()=>pe(s.path,()=>Ye("docs").path(s.path).first(),"$vHqkxevve1")),e=await e,t(),e);if(!a.value)throw Je({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:h}=([e,t]=ue(()=>pe(`${s.path}-surround`,()=>et("docs",s.path,{fields:["description"]}))),e=await e,t(),e);Xe({title:a.value.title,ogTitle:`${a.value.title} - FiveNet`,description:a.value.description,ogDescription:a.value.description});const U=j(()=>Qe(m.value,a.value)),T=j(()=>{var f,z,g;return[((f=n==null?void 0:n.bottom)==null?void 0:f.edit)&&{icon:"i-mdi-pencil-box",label:b("docs.toc.bottom.edit"),to:`${n.bottom.edit}/${(z=a==null?void 0:a.value)==null?void 0:z.stem}.${(g=a==null?void 0:a.value)==null?void 0:g.extension}`,target:"_blank"},{icon:"i-mdi-star",label:b("docs.toc.bottom.star"),to:"https://github.com/fivenet-app/fivenet",target:"_blank"}].filter(Boolean)});return(f,z)=>{var d,p,y,P;const g=ct,u=pt,H=ht,x=Pt,A=wt,c=Ot,B=Dt,i=ot;return o(a)?(l(),w(i,{key:0},de({default:L(()=>[C(g,{title:o(a).title,description:o(a).description,links:o(a).links,headline:o(U)},null,8,["title","description","links","headline"]),C(A,null,{default:L(()=>{var _;return[o(a)?(l(),w(u,{key:0,value:o(a)},null,8,["value"])):I("",!0),(_=o(h))!=null&&_.length?(l(),w(H,{key:1})):I("",!0),C(x,{surround:o(h)},null,8,["surround"])]}),_:1})]),_:2},[(P=(y=(p=(d=o(a))==null?void 0:d.body)==null?void 0:p.toc)==null?void 0:y.links)!=null&&P.length?{name:"right",fn:L(()=>{var _,S,W,M;return[C(B,{title:(_=o(n))==null?void 0:_.title,links:(W=(S=o(a).body)==null?void 0:S.toc)==null?void 0:W.links},de({_:2},[(M=o(n))!=null&&M.bottom?{name:"bottom",fn:L(()=>{var N,q,Z,te,ae,ie;return[O("div",{class:r(["hidden space-y-6 lg:block",{"!mt-6":(Z=(q=(N=o(a).body)==null?void 0:N.toc)==null?void 0:q.links)==null?void 0:Z.length}])},[(ie=(ae=(te=o(a).body)==null?void 0:te.toc)==null?void 0:ae.links)!=null&&ie.length?(l(),w(H,{key:0,type:"dashed"})):I("",!0),C(c,{title:o(n).bottom.title,links:o(T)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)):I("",!0)}}});export{Wt as default};
