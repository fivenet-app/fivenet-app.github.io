import{_ as _e,a as xe}from"./BfGgEx7x.js";import{e as M,y as B,o as d,f as S,w as $,r as x,W,s as o,P as oe,J as Pe,K as Ce,aB as Ie,E as $e,aC as Le,aD as J,aE as ze,L as l,aF as we,aG as ae,am as Se,F as ie,O as ne,aH as Te,ad as he,b as O,c as w,a1 as F,C as z,M as X,t as V,X as Q,ax as Oe,N as q,D as Y,aA as te,a as _,U as ve,i as G,a0 as be,aI as Ue,aJ as Be,p as ee,$ as Re,aK as Ae,aL as He,ac as je,aM as Ee,aN as De,au as Me,aO as Ne,aP as Ve,as as re,aQ as Fe,aR as We,aS as qe,ao as Ge,aT as le,aU as Ke,u as Je,aV as ce,aW as ue,aX as Xe,aY as Qe,aZ as Ye}from"./DAX8_Io3.js";import{h as de,_ as Ze}from"./DCbQi8_1.js";import{_ as et}from"./BdPvG_ft.js";import"./C2bHYaEW.js";const tt=M({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(k){const e=k,t=["horizontal","vertical"];function P(a){return t.includes(a)}const i=B(()=>P(e.orientation)?e.orientation:"horizontal"),n=B(()=>i.value==="vertical"?e.orientation:void 0),m=B(()=>e.decorative?{role:"none"}:{"aria-orientation":n.value,role:"separator"});return(a,h)=>(d(),S(o(oe),W({as:a.as,"as-child":a.asChild,"data-orientation":i.value},m.value),{default:$(()=>[x(a.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),ot=M({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(k){const e=k;return(t,P)=>(d(),S(tt,Pe(Ce(e)),{default:$(()=>[x(t.$slots,"default")]),_:3},16))}}),ke=["Mermaid","UButton","UIcon","ProseA","ProseAccordion","ProseAccordionItem","ProseBadge","ProseBlockquote","ProseCallout","ProseCard","ProseCardGroup","ProseCode","ProseCodeCollapse","ProseCodeGroup","ProseCodeIcon","ProseCodePreview","ProseCodeTree","ProseCollapsible","ProseEm","ProseField","ProseFieldGroup","ProseH1","ProseH2","ProseH3","ProseH4","ProseHr","ProseIcon","ProseImg","ProseKbd","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseSteps","ProseStrong","ProseTable","ProseTabs","ProseTabsItem","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","ProseCaution","ProseNote","ProseTip","ProseWarning","ProseH5","ProseH6","Icon"],ye=[],nt=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:ke,localComponents:ye},Symbol.toStringTag,{value:"Module"})),st=M({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(k){var C,H,r,L;const e=["render","ssrRender","__ssrInlineRender"],t=k,P=!1,i=B(()=>{let s=t.value.body||t.value;return t.excerpt&&t.value.excerpt&&(s=t.value.excerpt),s.type==="minimal"?Ie(s):s}),n=B(()=>{var s,c;return!((c=(s=i.value)==null?void 0:s.children)!=null&&c.length)}),m=B(()=>{const{body:s,excerpt:c,...u}=t.value;return{...u,...t.data}}),a=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(s=>[s,`prose-${s}`])),{mdc:h}=$e().public||{},R={...(C=h==null?void 0:h.components)!=null&&C.prose&&t.prose!==!1?a:{},...((H=h==null?void 0:h.components)==null?void 0:H.map)||{},...Le(((L=(r=t.data)==null?void 0:r.mdc)==null?void 0:L.components)||{}),...t.components},U=B(()=>{}),g=B(()=>i.value?f(i.value,{tags:R}):{});function T(s){let c=s;if(typeof s=="string"){if(de.includes(s))return s;if(ke.includes(J(s))?c=we(s,!1):ye.includes(J(s))&&(c=ae(()=>Se(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(y=>{const b=y[J(s)];return b?b():void 0}))),typeof c=="string")return c}if(!c)return c;const u=c;return"__asyncLoader"in u?u:"setup"in u?ae(()=>Promise.resolve(u)):u}function f(s,c){if(!s)return;const u=Array.from(new Set(p(s,c))),v={};for(const[y,b]of u)if(!v[y]){if(typeof b=="object"&&e.some(I=>Object.hasOwnProperty.call(b,I))){v[y]=b;continue}v[y]=T(b)}return v}function p(s,c){const u=s.tag;if(s.type==="text"||u==="binding"||s.type==="comment")return[];const v=A(s,c.tags),y=[];s.type!=="root"&&!de.includes(v)&&y.push([u,v]);for(const b of s.children||[])y.push(...p(b,c));return y}function A(s,c){var v;const u=s.tag;return!u||typeof((v=s.props)==null?void 0:v.__ignoreMap)<"u"?u:c[u]||c[J(u)]||c[ze(s.tag)]||u}return(s,c)=>n.value?x(s.$slots,"empty",{key:1,body:i.value,data:m.value,dataContentId:o(P)?k.value.id:void 0}):(d(),S(Ze,{key:U.value,body:i.value,data:m.value,class:l(t.class),tag:t.tag,prose:t.prose,unwrap:t.unwrap,components:g.value,"data-content-id":o(P)?k.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),at=Object.assign(st,{__name:"ContentRenderer"}),it={slots:{root:"flex items-center align-center text-center",border:"",container:"font-medium text-(--ui-text) flex",icon:"shrink-0 size-5",avatar:"shrink-0",avatarSize:"2xs",label:"text-sm"},variants:{color:{primary:{border:"border-(--ui-primary)"},secondary:{border:"border-(--ui-secondary)"},success:{border:"border-(--ui-success)"},info:{border:"border-(--ui-info)"},warning:{border:"border-(--ui-warning)"},error:{border:"border-(--ui-error)"},neutral:{border:"border-(--ui-border)"}},orientation:{horizontal:{root:"w-full flex-row",border:"w-full",container:"mx-3 whitespace-nowrap"},vertical:{root:"h-full flex-col",border:"h-full",container:"my-2"}},size:{xs:"",sm:"",md:"",lg:"",xl:""},type:{solid:{border:"border-solid"},dashed:{border:"border-dashed"},dotted:{border:"border-dotted"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{border:"border-t"}},{orientation:"horizontal",size:"sm",class:{border:"border-t-[2px]"}},{orientation:"horizontal",size:"md",class:{border:"border-t-[3px]"}},{orientation:"horizontal",size:"lg",class:{border:"border-t-[4px]"}},{orientation:"horizontal",size:"xl",class:{border:"border-t-[5px]"}},{orientation:"vertical",size:"xs",class:{border:"border-s"}},{orientation:"vertical",size:"sm",class:{border:"border-s-[2px]"}},{orientation:"vertical",size:"md",class:{border:"border-s-[3px]"}},{orientation:"vertical",size:"lg",class:{border:"border-s-[4px]"}},{orientation:"vertical",size:"xl",class:{border:"border-s-[5px]"}}],defaultVariants:{color:"neutral",size:"xs",type:"solid"}},rt=X;var pe;const lt=ie({extend:ie(it),...((pe=rt.ui)==null?void 0:pe.separator)||{}}),ct=M({__name:"Separator",props:{as:{},label:{},icon:{},avatar:{},color:{},size:{},type:{},orientation:{default:"horizontal"},class:{},ui:{},decorative:{type:Boolean}},setup(k){const e=k,t=ne(),P=Te(he(e,"as","decorative","orientation")),i=B(()=>lt({color:e.color,orientation:e.orientation,size:e.size,type:e.type}));return(n,m)=>{var a;return d(),S(o(ot),W(o(P),{class:i.value.root({class:[e.class,(a=e.ui)==null?void 0:a.root]})}),{default:$(()=>{var h,R,U;return[O("div",{class:l(i.value.border({class:(h=e.ui)==null?void 0:h.border}))},null,2),n.label||n.icon||n.avatar||t.default?(d(),w(F,{key:0},[O("div",{class:l(i.value.container({class:(R=e.ui)==null?void 0:R.container}))},[x(n.$slots,"default",{},()=>{var g,T,f,p;return[n.label?(d(),w("span",{key:0,class:l(i.value.label({class:(g=e.ui)==null?void 0:g.label}))},V(n.label),3)):n.icon?(d(),S(Q,{key:1,name:n.icon,class:l(i.value.icon({class:(T=e.ui)==null?void 0:T.icon}))},null,8,["name","class"])):n.avatar?(d(),S(Oe,W({key:2,size:((f=e.ui)==null?void 0:f.avatarSize)||i.value.avatarSize()},n.avatar,{class:i.value.avatar({class:(p=e.ui)==null?void 0:p.avatar})}),null,16,["size","class"])):z("",!0)]})],2),O("div",{class:l(i.value.border({class:(U=e.ui)==null?void 0:U.border}))},null,2)],64)):z("",!0)]}),_:3},16,["class"])}}}),ut=Object.assign(ct,{__name:"USeparator"}),dt={slots:{root:"grid sm:grid-cols-2 gap-8",link:["group block px-6 py-8 rounded-[calc(var(--ui-radius)*2)] border border-(--ui-border) hover:bg-(--ui-bg-elevated)/50 focus-visible:outline-(--ui-primary)","transition-colors"],linkLeading:["inline-flex items-center rounded-full p-1.5 bg-(--ui-bg-elevated) group-hover:bg-(--ui-primary)/10 ring ring-(--ui-border-accented) mb-4 group-hover:ring-(--ui-primary)/50","transition"],linkLeadingIcon:["size-5 shrink-0 text-(--ui-text-highlighted) group-hover:text-(--ui-primary)","transition-[color,translate]"],linkTitle:"font-medium text-[15px] text-(--ui-text-highlighted) mb-1 truncate",linkDescription:"text-sm text-(--ui-text-muted) line-clamp-2"},variants:{direction:{left:{linkLeadingIcon:["group-active:-translate-x-0.5"]},right:{link:"text-right",linkLeadingIcon:["group-active:translate-x-0.5"]}}}},pt={key:1,class:"hidden lg:block"},mt=X;var me;const gt=q({extend:q(dt),...((me=mt.uiPro)==null?void 0:me.contentSurround)||{}}),ft=M({__name:"ContentSurround",props:{as:{},prevIcon:{},nextIcon:{},surround:{},class:{},ui:{}},setup(k){const e=k,t=Y(),[P,i]=te({props:{link:Object,icon:String,direction:String}}),n=gt();return(m,a)=>{var U;const h=Q,R=ve;return d(),w(F,null,[_(o(P),null,{default:$(({link:g,icon:T,direction:f})=>{var p;return[g?(d(),S(R,{key:0,to:g.path,raw:"",class:l(o(n).link({class:[(p=e.ui)==null?void 0:p.link,g.class],direction:f}))},{default:$(()=>[x(m.$slots,"link",{link:g},()=>{var A,C,H;return[O("div",{class:l(o(n).linkLeading({class:(A=e.ui)==null?void 0:A.linkLeading}))},[x(m.$slots,"link-leading",{link:g},()=>{var r;return[_(h,{name:g.icon||T,class:l(o(n).linkLeadingIcon({class:(r=e.ui)==null?void 0:r.linkLeadingIcon,direction:f}))},null,8,["name","class"])]})],2),O("p",{class:l(o(n).linkTitle({class:(C=e.ui)==null?void 0:C.linkTitle}))},[x(m.$slots,"link-title",{link:g},()=>[G(V(g.title),1)])],2),O("p",{class:l(o(n).linkDescription({class:(H=e.ui)==null?void 0:H.linkDescription}))},[x(m.$slots,"link-description",{link:g},()=>[G(V(g.description),1)])],2)]})]),_:2},1032,["to","class"])):(d(),w("span",pt," "))]}),_:3}),m.surround?(d(),S(o(oe),{key:0,as:m.as,class:l(o(n).root({class:[e.class,(U=e.ui)==null?void 0:U.root]}))},{default:$(()=>[_(o(i),{link:m.surround[0],icon:m.prevIcon||o(t).ui.icons.arrowLeft,direction:"left"},null,8,["link","icon"]),_(o(i),{link:m.surround[1],icon:m.nextIcon||o(t).ui.icons.arrowRight,direction:"right"},null,8,["link","icon"])]),_:1},8,["as","class"])):z("",!0)],64)}}}),ht=Object.assign(ft,{__name:"UContentSurround"}),vt={slots:{root:"flex flex-col gap-3",title:"text-sm font-semibold flex items-center gap-1.5",list:"flex flex-col gap-2",item:"relative",link:"group text-sm flex items-center gap-1.5 focus-visible:outline-(--ui-primary)",linkLeadingIcon:"size-5 shrink-0",linkLabel:"truncate",linkLabelExternalIcon:"size-3 absolute top-0 text-(--ui-text-dimmed)"},variants:{active:{true:{link:"text-(--ui-primary) font-medium"},false:{link:["text-(--ui-text-muted) hover:text-(--ui-text)","transition-colors"]}}}},bt=X;var ge;const kt=q({extend:q(vt),...((ge=bt.uiPro)==null?void 0:ge.pageLinks)||{}}),yt=M({__name:"PageLinks",props:{as:{default:"nav"},title:{},links:{},class:{},ui:{}},setup(k){const e=k,t=ne(),P=Y(),i=kt();return(n,m)=>{var U;const a=Q,h=Be,R=ve;return d(),S(o(oe),{as:n.as,class:l(o(i).root({class:[e.class,(U=e.ui)==null?void 0:U.root]}))},{default:$(()=>{var g,T;return[n.title?(d(),w("p",{key:0,class:l(o(i).title({class:(g=e.ui)==null?void 0:g.title}))},[x(n.$slots,"title",{},()=>[G(V(n.title),1)])],2)):z("",!0),O("ul",{class:l(o(i).list({class:(T=e.ui)==null?void 0:T.list}))},[(d(!0),w(F,null,be(n.links,(f,p)=>{var A;return d(),w("li",{key:p,class:l(o(i).item({class:(A=e.ui)==null?void 0:A.item}))},[_(R,W({ref_for:!0},o(Ue)(f),{custom:""}),{default:$(({active:C,...H})=>{var r;return[_(h,W({ref_for:!0},H,{class:o(i).link({class:[(r=e.ui)==null?void 0:r.link,f.class],active:C})}),{default:$(()=>[x(n.$slots,"link",{link:f,active:C},()=>{var L,s;return[x(n.$slots,"link-leading",{link:f,active:C},()=>{var c;return[f.icon?(d(),S(a,{key:0,name:f.icon,class:l(o(i).linkLeadingIcon({class:(c=e.ui)==null?void 0:c.linkLeadingIcon,active:C}))},null,8,["name","class"])):z("",!0)]}),f.label||t["link-label"]?(d(),w("span",{key:0,class:l(o(i).linkLabel({class:(L=e.ui)==null?void 0:L.linkLabel,active:C}))},[x(n.$slots,"link-label",{link:f,active:C},()=>[G(V(f.label),1)]),f.target==="_blank"?(d(),S(a,{key:0,name:o(P).ui.icons.external,class:l(o(i).linkLabelExternalIcon({class:(s=e.ui)==null?void 0:s.linkLabelExternalIcon,active:C}))},null,8,["name","class"])):z("",!0)],2)):z("",!0),x(n.$slots,"link-trailing",{link:f,active:C})]})]),_:2},1040,["class"])]}),_:2},1040)],2)}),128))],2)]}),_:3},8,["as","class"])}}}),_t=Object.assign(yt,{__name:"UPageLinks"});function xt(){const k=ee(),e=ee([]),t=ee([]);function P(n){n.forEach(m=>{const a=m.target.id;a&&(m.isIntersecting?e.value=[...e.value,a]:e.value=e.value.filter(h=>h!==a))})}function i(n){n.forEach(m=>{k.value&&k.value.observe(m)})}return Re(e,(n,m)=>{n.length===0?t.value=m:t.value=n}),Ae(()=>k.value=new IntersectionObserver(P)),He(()=>{var n;return(n=k.value)==null?void 0:n.disconnect()}),{visibleHeadings:e,activeHeadings:t,updateHeadings:i}}const Pt={slots:{root:"sticky top-(--ui-header-height) bg-(--ui-bg)/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",container:"pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-(--ui-border) lg:border-0 flex flex-col",top:"",bottom:"mt-6 hidden lg:flex lg:flex-col gap-6",trigger:"group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-(--ui-primary)",title:"truncate",trailing:"ms-auto inline-flex gap-1.5 items-center",trailingIcon:"size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden",content:"data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none",list:"",listWithChildren:"ms-3",item:"",itemWithChildren:"",link:"group text-sm block truncate focus-visible:outline-(--ui-primary) py-1",indicator:"absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},highlightColor:{primary:{indicator:"bg-(--ui-primary)"},secondary:{indicator:"bg-(--ui-secondary)"},success:{indicator:"bg-(--ui-success)"},info:{indicator:"bg-(--ui-info)"},warning:{indicator:"bg-(--ui-warning)"},error:{indicator:"bg-(--ui-error)"},neutral:{indicator:"bg-(--ui-bg-inverted)"}},active:{false:{link:["text-(--ui-text-muted) hover:text-(--ui-text)","transition-colors"]}},highlight:{true:{list:"ms-2.5 ps-4 border-s border-(--ui-border)",item:"-ms-px"}}},compoundVariants:[{color:"primary",active:!0,class:{link:"text-(--ui-primary)",linkLeadingIcon:"text-(--ui-primary)"}},{color:"secondary",active:!0,class:{link:"text-(--ui-secondary)",linkLeadingIcon:"text-(--ui-secondary)"}},{color:"success",active:!0,class:{link:"text-(--ui-success)",linkLeadingIcon:"text-(--ui-success)"}},{color:"info",active:!0,class:{link:"text-(--ui-info)",linkLeadingIcon:"text-(--ui-info)"}},{color:"warning",active:!0,class:{link:"text-(--ui-warning)",linkLeadingIcon:"text-(--ui-warning)"}},{color:"error",active:!0,class:{link:"text-(--ui-error)",linkLeadingIcon:"text-(--ui-error)"}},{color:"neutral",active:!0,class:{link:"text-(--ui-text-highlighted)",linkLeadingIcon:"text-(--ui-text-highlighted)"}}],defaultVariants:{color:"primary",highlightColor:"primary"}},Ct=["href","onClick"],It=X;var fe;const $t=q({extend:q(Pt),...((fe=It.uiPro)==null?void 0:fe.contentToc)||{}}),Lt=M({__name:"ContentToc",props:{as:{default:"nav"},trailingIcon:{},title:{default:"On this page"},color:{},highlight:{type:Boolean},highlightColor:{},links:{},class:{},ui:{},defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open","move"],setup(k,{emit:e}){const t=k,P=e,i=ne(),n=je(he(t,"as","open","defaultOpen"),P),m=Ee(),a=Y(),{activeHeadings:h,updateHeadings:R}=xt(),[U,g]=te({props:{links:Array,level:Number}}),[T,f]=te(),p=B(()=>$t({color:t.color,highlight:t.highlight,highlightColor:t.highlightColor||t.color}));function A(r){const L=encodeURIComponent(r);m.push(`#${L}`),P("move",r)}De().hooks.hookOnce("page:finish",()=>{R([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});function C(r){return r.flatMap(L=>[L,...L.children?C(L.children):[]])}const H=B(()=>{var u;if(!((u=h.value)!=null&&u.length))return;const L=C(t.links||[]).findIndex(v=>h.value.includes(v.id)),s=28,c=0;return{"--indicator-size":`${s*h.value.length+c*(h.value.length-1)}px`,"--indicator-position":L>=0?`${L*(s+c)}px`:"0px"}});return(r,L)=>{var c;const s=Q;return d(),w(F,null,[_(o(U),null,{default:$(({links:u,level:v})=>{var y,b;return[O("ul",{class:l(v>0?p.value.listWithChildren({class:(y=t.ui)==null?void 0:y.listWithChildren}):p.value.list({class:(b=t.ui)==null?void 0:b.list}))},[(d(!0),w(F,null,be(u,(I,N)=>{var j,E,D,K;return d(),w("li",{key:N,class:l(I.children&&I.children.length>0?p.value.itemWithChildren({class:(j=t.ui)==null?void 0:j.itemWithChildren}):p.value.item({class:(E=t.ui)==null?void 0:E.item}))},[O("a",{href:`#${I.id}`,class:l(p.value.link({class:[(D=t.ui)==null?void 0:D.link,I.class],active:o(h).includes(I.id)})),onClick:Me(Z=>A(I.id),["prevent"])},[x(r.$slots,"link",{link:I},()=>[G(V(I.text),1)])],10,Ct),(K=I.children)!=null&&K.length?(d(),S(o(g),{key:0,links:I.children,level:v+1},null,8,["links","level"])):z("",!0)],2)}),128))],2)]}),_:3}),_(o(T),null,{default:$(({open:u})=>{var v,y;return[x(r.$slots,"leading",{open:u}),O("span",{class:l(p.value.title({class:(v=t.ui)==null?void 0:v.title}))},[x(r.$slots,"default",{open:u},()=>[G(V(r.title),1)])],2),O("span",{class:l(p.value.trailing({class:(y=t.ui)==null?void 0:y.trailing}))},[x(r.$slots,"trailing",{open:u},()=>{var b;return[_(s,{name:r.trailingIcon||o(a).ui.icons.chevronDown,class:l(p.value.trailingIcon({class:(b=t.ui)==null?void 0:b.trailingIcon}))},null,8,["name","class"])]})],2)]}),_:3}),_(o(Fe),W(o(n),{"default-open":r.defaultOpen,class:p.value.root({class:[t.class,(c=t.ui)==null?void 0:c.root]})}),{default:$(({open:u})=>{var v,y,b,I,N,j,E;return[O("div",{class:l(p.value.container({class:(v=t.ui)==null?void 0:v.container}))},[i.top?(d(),w("div",{key:0,class:l(p.value.top({class:(y=t.ui)==null?void 0:y.top}))},[x(r.$slots,"top",{links:r.links})],2)):z("",!0),(b=r.links)!=null&&b.length?(d(),w(F,{key:1},[_(o(Ne),{class:l(p.value.trigger({class:"lg:hidden"}))},{default:$(()=>[_(o(f),{open:u},null,8,["open"])]),_:2},1032,["class"]),_(o(Ve),{class:l(p.value.content({class:[(I=t.ui)==null?void 0:I.content,"lg:hidden"]}))},{default:$(()=>{var D;return[r.highlight?(d(),w("div",{key:0,class:l(p.value.indicator({class:(D=t.ui)==null?void 0:D.indicator})),style:re(H.value)},null,6)):z("",!0),x(r.$slots,"content",{links:r.links},()=>[_(o(g),{links:r.links,level:0},null,8,["links"])])]}),_:3},8,["class"]),O("p",{class:l(p.value.trigger({class:"hidden lg:flex"}))},[_(o(f),{open:u},null,8,["open"])],2),O("div",{class:l(p.value.content({class:[(N=t.ui)==null?void 0:N.content,"hidden lg:flex"]}))},[r.highlight?(d(),w("div",{key:0,class:l(p.value.indicator({class:(j=t.ui)==null?void 0:j.indicator})),style:re(H.value)},null,6)):z("",!0),x(r.$slots,"content",{links:r.links},()=>[_(o(g),{links:r.links,level:0},null,8,["links"])])],2)],64)):z("",!0),i.bottom?(d(),w("div",{key:2,class:l(p.value.bottom({class:(E=t.ui)==null?void 0:E.bottom}))},[x(r.$slots,"bottom",{links:r.links})],2)):z("",!0)],2)]}),_:3},16,["default-open","class"])],64)}}}),zt=Object.assign(Lt,{__name:"UContentToc"}),Bt=M({__name:"[...slug]",async setup(k){let e,t;const{t:P}=We(),i=qe(),{toc:n}=Y(),m=Ge("navigation"),{data:a}=([e,t]=le(()=>ue(i.path,()=>Qe("docs").path(i.path).first(),"$vHqkxevve1")),e=await e,t(),e);if(!a.value)throw Ke({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:h}=([e,t]=le(()=>ue(`${i.path}-surround`,()=>Ye("docs",i.path,{fields:["description"]}))),e=await e,t(),e);Je({title:a.value.title,ogTitle:`${a.value.title} - FiveNet`,description:a.value.description,ogDescription:a.value.description});const R=B(()=>Xe(m.value,a.value)),U=B(()=>{var g,T,f;return[((g=n==null?void 0:n.bottom)==null?void 0:g.edit)&&{icon:"i-mdi-pencil-box",label:P("docs.toc.bottom.edit"),to:`${n.bottom.edit}/${(T=a==null?void 0:a.value)==null?void 0:T.stem}.${(f=a==null?void 0:a.value)==null?void 0:f.extension}`,target:"_blank"},{icon:"i-mdi-star",label:P("docs.toc.bottom.star"),to:"https://github.com/fivenet-app/fivenet",target:"_blank"}].filter(Boolean)});return(g,T)=>{var c,u,v,y;const f=_e,p=at,A=ut,C=ht,H=xe,r=_t,L=zt,s=et;return o(a)?(d(),S(s,{key:0},ce({default:$(()=>[_(f,{title:o(a).title,description:o(a).description,links:o(a).links,headline:o(R)},null,8,["title","description","links","headline"]),_(H,null,{default:$(()=>{var b;return[o(a)?(d(),S(p,{key:0,value:o(a)},null,8,["value"])):z("",!0),(b=o(h))!=null&&b.length?(d(),S(A,{key:1})):z("",!0),_(C,{surround:o(h)},null,8,["surround"])]}),_:1})]),_:2},[(y=(v=(u=(c=o(a))==null?void 0:c.body)==null?void 0:u.toc)==null?void 0:v.links)!=null&&y.length?{name:"right",fn:$(()=>{var b,I,N;return[_(L,{title:g.$t("common.toc"),links:(I=(b=o(a).body)==null?void 0:b.toc)==null?void 0:I.links},ce({_:2},[(N=o(n))!=null&&N.bottom?{name:"bottom",fn:$(()=>{var j,E,D,K,Z,se;return[O("div",{class:l(["hidden space-y-6 lg:block",{"!mt-6":(D=(E=(j=o(a).body)==null?void 0:j.toc)==null?void 0:E.links)==null?void 0:D.length}])},[(se=(Z=(K=o(a).body)==null?void 0:K.toc)==null?void 0:Z.links)!=null&&se.length?(d(),S(A,{key:0,type:"dashed"})):z("",!0),_(r,{title:g.$t("common.community"),links:o(U)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)):z("",!0)}}});export{Bt as default};
