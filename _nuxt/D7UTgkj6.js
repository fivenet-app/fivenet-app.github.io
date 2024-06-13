import{d as T,D as A,as as B,ao as V,ap as L,b as i,c as l,ai as g,g as h,w as b,e as w,n as o,E as t,f as u,j as I,t as x,F as U,ag as j,ah as z,aj as S,an as F,aT as Y,z as q,aG as J,ab as H,aU as Q,aV as Z,r as P,aW as D,aX as K,aY as ee,aZ as te,a_ as se,a$ as E,b0 as ie,b1 as ne,b2 as ae,aF as le,b3 as R,p as re,i as oe,l as ce,aN as de,b4 as ue,aM as ge,aQ as pe,s as fe,b5 as me,aI as ye}from"./wzUgRSrQ.js";const he=T({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const n=e,m=A(()=>{const a=B("gap-16 sm:gap-y-24",n.orientation==="vertical"&&"flex flex-col",n.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),r=n.orientation==="vertical"?"text-center":"",y=B("mt-10 flex flex-wrap gap-x-6 gap-y-3",n.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:a,base:r,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:y}}),{ui:c,attrs:s}=V("landing.hero",L(n,"ui"),m,L(n,"class"),!0);return(a,r)=>{const y=F,k=Y;return i(),l("div",S({class:t(c).wrapper},t(s)),[g(a.$slots,"top"),h(k,{class:o(t(c).container)},{default:b(()=>{var d;return[w("div",{class:o(t(c).base)},[a.$slots.headline?(i(),l("div",{key:0,class:o(t(c).headline)},[g(a.$slots,"headline")],2)):u("",!0),w("h1",{class:o(t(c).title)},[g(a.$slots,"title",{},()=>[I(x(e.title),1)])],2),e.description||a.$slots.description?(i(),l("p",{key:1,class:o(t(c).description)},[g(a.$slots,"description",{},()=>[I(x(e.description),1)])],2)):u("",!0),(d=e.links)!=null&&d.length||a.$slots.links?(i(),l("div",{key:2,class:o(t(c).links)},[g(a.$slots,"links",{},()=>[(i(!0),l(U,null,j(e.links,(v,$)=>(i(),z(y,S({key:$,ref_for:!0},v,{onClick:v.click}),null,16,["onClick"]))),128))])],2)):u("",!0)],2),g(a.$slots,"default")]}),_:3},8,["class"]),g(a.$slots,"bottom")],16)}}}),ke={class:"bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4"},be={class:"aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden"},xe=["src"],ve=T({__name:"ImagePlaceholder",props:{src:{default:"/images/screenshots/overview.png"}},setup(e){return(n,m)=>(i(),l("div",ke,[w("div",be,[w("img",{class:"absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10",src:n.src},null,8,xe)])]))}}),$e={key:0},we={key:2},Se={key:0},Ce=T({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const n=q(),m=e,c=A(()=>{const r=B("gap-16 sm:gap-y-24",m.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),y=B("",m.align==="center"&&"text-center flex flex-col items-center",m.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:r,base:y,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:n.ui.icons.check}}}}),{ui:s,attrs:a}=V("landing.section",L(m,"ui"),c,L(m,"class"),!0);return(r,y)=>{const k=H,d=F,v=Y;return i(),l("div",S({class:t(s).wrapper},t(a)),[g(r.$slots,"top"),h(v,{class:o(t(s).container)},{default:b(()=>{var $,M,p,_,N;return[e.icon||r.$slots.icon||e.headline||r.$slots.headline||e.title||r.$slots.title||e.description||r.$slots.description||($=e.links)!=null&&$.length||r.$slots.links?(i(),l("div",{key:0,class:o(t(s).base)},[e.icon||r.$slots.icon?(i(),l("div",{key:0,class:o(t(s).icon.wrapper)},[g(r.$slots,"icon",{},()=>[h(k,{name:e.icon,class:o(t(s).icon.base)},null,8,["name","class"])])],2)):e.headline||r.$slots.headline?(i(),l("div",{key:1,class:o(t(s).headline)},[g(r.$slots,"headline",{},()=>[I(x(e.headline),1)])],2)):u("",!0),e.title||r.$slots.title?(i(),l("h2",{key:2,class:o(t(s).title)},[g(r.$slots,"title",{},()=>[I(x(e.title),1)])],2)):u("",!0),e.description||r.$slots.description?(i(),l("p",{key:3,class:o(t(s).description)},[g(r.$slots,"description",{},()=>[I(x(e.description),1)])],2)):u("",!0),e.align!=="center"&&((M=e.features)!=null&&M.length)?(i(),l("dl",{key:4,class:o([t(s).features.wrapper.base,t(s).features.wrapper.list])},[(i(!0),l(U,null,j(e.features,f=>(i(),l("div",{key:f.name,class:o(t(s).features.base)},[w("dt",{class:o(t(s).features.name)},[h(k,{name:f.icon||t(s).features.icon.name,class:o(t(s).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),f.name?(i(),l("span",$e,x(f.name),1)):u("",!0)],2),f.description?(i(),l("dd",{key:0,class:o(t(s).features.description)},x(f.description),3)):u("",!0)],2))),128))],2)):u("",!0),e.align!=="center"&&((p=e.links)!=null&&p.length||r.$slots.links)?(i(),l("div",{key:5,class:o(t(s).links)},[g(r.$slots,"links",{},()=>[(i(!0),l(U,null,j(e.links,(f,O)=>(i(),z(d,S({key:O,ref_for:!0},f,{onClick:f.click}),null,16,["onClick"]))),128))])],2)):u("",!0)],2)):u("",!0),r.$slots[e.slot||"default"]?g(r.$slots,e.slot||"default",{key:1}):e.align==="right"?(i(),l("div",we)):u("",!0),e.align==="center"&&((_=e.features)!=null&&_.length)?(i(),l("dl",{key:3,class:o([t(s).features.wrapper.base,t(s).features.wrapper.grid])},[(i(!0),l(U,null,j(e.features,f=>(i(),l("div",{key:f.name,class:o(t(s).features.base)},[w("dt",{class:o(t(s).features.name)},[h(k,{name:f.icon||t(s).features.icon.name,class:o(t(s).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),f.name?(i(),l("span",Se,x(f.name),1)):u("",!0)],2),f.description?(i(),l("dd",{key:0,class:o(t(s).features.description)},x(f.description),3)):u("",!0)],2))),128))],2)):u("",!0),e.align==="center"&&((N=e.links)!=null&&N.length||r.$slots.links)?(i(),l("div",{key:4,class:o(t(J)(t(s).links,"mt-0 justify-center"))},[g(r.$slots,"links",{},()=>[(i(!0),l(U,null,j(e.links,(f,O)=>(i(),z(d,S({key:O,ref_for:!0},f,{onClick:f.click}),null,16,["onClick"]))),128))])],2)):u("",!0)]}),_:3},8,["class"]),g(r.$slots,"bottom")],16)}}}),Le=Q(Z);function _e(e,n={}){const{x:m,y:c}=Le(n),s=P(e??(window==null?void 0:window.document.body)),a=P(0),r=P(0);return D&&K([s,m,c],()=>{const y=ee(s);if(!y)return;const{left:k,top:d}=y.getBoundingClientRect(),v=m.value-(k+D.scrollX),$=c.value-(d+D.scrollY);Math.abs(v)>1500||Math.abs($)>1500||D.screen.width<=800||(a.value=v,r.value=$)},{immediate:!0,throttle:50}),{x:m,y:c,elementX:a,elementY:r}}const Ae=e=>(re("data-v-d2c299f1"),e=e(),oe(),e),Ue=Ae(()=>w("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),je=T({inheritAttrs:!1,__name:"LandingCard",props:{...te,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){se(p=>({"174ba611":t(m),"2a06f31b":t(c)}));const n=e,m=A(()=>{var p;return n.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((p=E[n.color])==null?void 0:p["500"])||E[n.color]||n.color}),c=A(()=>{var p;return n.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((p=E[n.color])==null?void 0:p["400"])||E[n.color]||n.color}),s=A(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:B("gap-x-8 gap-y-4 rounded-xl flex-1",n.orientation==="vertical"&&"flex flex-col",!!r.default&&n.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),a=P(),r=ie(),{elementX:y,elementY:k}=_e(a),{ui:d,attrs:v}=V("landing.card",L(n,"ui"),s,L(n,"class"),!0),$=A(()=>ne(n)),M=A(()=>(n.title||r.title&&ae(r.title())||"Card link").trim());return(p,_)=>{const N=le,f=H,O=R;return i(),l("div",S({ref_key:"el",ref:a,style:{"--x":`${t(y)}px`,"--y":`${t(k)}px`},class:[t(d).wrapper,p.to&&t(d).to]},t(v)),[h(O,{ui:t(d)},{default:b(()=>[w("div",{class:o(t(d).container)},[p.to?(i(),z(N,S({key:0,"aria-label":t(M)},t($),{class:"focus:outline-none",tabindex:"-1"}),{default:b(()=>[Ue]),_:1},16,["aria-label"])):u("",!0),e.icon||p.$slots.icon?(i(),l("div",{key:1,class:o(t(d).icon.wrapper)},[g(p.$slots,"icon",{},()=>[h(f,{name:e.icon,class:o(t(d).icon.base)},null,8,["name","class"])],!0)],2)):u("",!0),e.title||p.$slots.title?(i(),l("p",{key:2,class:o(t(d).title)},[g(p.$slots,"title",{},()=>[I(x(e.title),1)],!0)],2)):u("",!0),e.description||p.$slots.description?(i(),l("p",{key:3,class:o(t(d).description)},[g(p.$slots,"description",{},()=>[I(x(e.description),1)],!0)],2)):u("",!0),g(p.$slots,"container",{},void 0,!0)],2),p.$slots.default?g(p.$slots,"default",{key:0},void 0,!0):u("",!0)]),_:3},8,["ui"])],16)}}}),Ie=ce(je,[["__scopeId","data-v-d2c299f1"]]),ze=T({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const n=e,m=A(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[n.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:c,attrs:s}=V("landing.logos",L(n,"ui"),m,L(n,"class"),!0);return(a,r)=>(i(),l("div",S({class:t(c).wrapper},t(s)),[e.title?(i(),l("h2",{key:0,class:o(t(c).title)},x(e.title),3)):u("",!0),w("div",{class:o(t(c).images)},[g(a.$slots,"default")],2)],16))}}),Be={key:1},Oe=T({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const n=e,m=A(()=>{const a={};n.card?a.rounded="rounded-xl":(a.ring="",a.rounded="",a.background="",a.shadow="",a.divide="");const r=B("",n.align==="center"&&"text-center",n.align==="right"&&"lg:order-last"),y=B("flex flex-col",n.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),k=n.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",d=B("mt-10 flex items-center gap-x-6",n.align==="center"&&"justify-center");return{...a,wrapper:"relative",container:r,body:{base:y,padding:k},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:d}}),{ui:c,attrs:s}=V("landing.cta",L(n,"ui"),m,L(n,"class"),!0);return(a,r)=>{const y=F,k=R;return i(),z(k,S({class:t(c).wrapper},t(s),{ui:t(c)}),{default:b(()=>{var d;return[w("div",{class:o(t(c).container)},[e.title||a.$slots.title?(i(),l("h2",{key:0,class:o(t(c).title)},[g(a.$slots,"title",{},()=>[I(x(e.title),1)])],2)):u("",!0),e.description||a.$slots.description?(i(),l("p",{key:1,class:o(t(c).description)},[g(a.$slots,"description",{},()=>[I(x(e.description),1)])],2)):u("",!0),(d=e.links)!=null&&d.length||a.$slots.links?(i(),l("div",{key:2,class:o(t(c).links)},[g(a.$slots,"links",{},()=>[(i(!0),l(U,null,j(e.links,(v,$)=>(i(),z(y,S({key:$,ref_for:!0},v,{onClick:v.click}),null,16,["onClick"]))),128))])],2)):u("",!0)],2),a.$slots.default?g(a.$slots,"default",{key:0}):e.align==="right"?(i(),l("div",Be)):u("",!0)]}),_:3},16,["class","ui"])}}}),Te=w("div",{class:"absolute inset-0 z-[-1] [mask-image:radial-gradient(100%_100%_at_top,white,transparent)] hero"},null,-1),Me=["src","alt"],Ve=T({__name:"index",async setup(e){let n,m;const{data:c}=([n,m]=de(()=>pe("index",()=>fe("/").findOne())),n=await n,m(),n);ue({title:"common.home"});const{t:s}=ge(),a="v0.9.1-8-ge5c3869ae".split("-")[0],r=[{label:s("common.docs"),icon:"i-mdi-book-open-variant-outline",size:"lg",to:"/getting-started"}],y={title:s("docs.features.title"),description:void 0,links:[{label:s("docs.features.links.explore.label"),trailingIcon:"i-mdi-arrow-right",color:"gray",to:"/getting-started",size:"lg"}],items:[{title:s("docs.features.items.citizens.title"),description:s("docs.features.items.citizens.description"),icon:"i-mdi-account-multiple-outline",to:"/user-guides/citizens"},{title:s("docs.features.items.vehicles.title"),description:s("docs.features.items.vehicles.description"),icon:"i-mdi-car-outline",to:"/user-guides/vehicles"},{title:s("docs.features.items.documents.title"),description:s("docs.features.items.documents.description"),icon:"i-mdi-file-document-box-multiple-outline",to:"/user-guides/documents"},{title:s("docs.features.items.jobs.title"),description:s("docs.features.items.jobs.description"),icon:"i-mdi-briefcase-outline",to:"/user-guides/jobs"},{title:s("docs.features.items.calendar.title"),description:s("docs.features.items.calendar.description"),icon:"i-mdi-calendar-outline",to:"/user-guides/calendar"},{title:s("docs.features.items.livemap.title"),description:s("docs.features.items.livemap.description"),icon:"i-mdi-map-outline",to:"/user-guides/livemap"},{title:s("docs.features.items.centrum.title"),description:s("docs.features.items.centrum.description"),icon:"i-mdi-car-emergency",to:"/user-guides/centrum"},{title:s("docs.features.items.i18n.title"),description:s("docs.features.items.i18n.description"),icon:"i-mdi-language",to:"/user-guides/i18n"},{title:s("docs.features.items.nuxt3_ui.title"),description:s("docs.features.items.nuxt3_ui.description"),icon:"i-simple-icons-nuxtdotjs",to:"https://nuxt.com"},{title:s("docs.features.items.open_source.title"),description:s("docs.features.items.open_source.description"),icon:"i-simple-icons-git",to:"https://github.com/fivenet-app/fivenet"}]},k={title:s("docs.features.links.explore.label")};return(d,v)=>{const $=F,M=he,p=ve,_=Ce,N=Ie,f=me,O=ye,G=ze,W=Oe;return i(),l("div",null,[h(M,{title:d.$t("pages.index.welcome"),description:d.$t("pages.index.subtext"),links:r},{headline:b(()=>[h($,{color:"gray",to:`https://github.com/fivenet-app/fivenet/releases/tag/${t(a)}`,external:!0,label:d.$t("pages.index.whats_new_in",{version:t(a)}),"trailing-icon":"i-mdi-arrow-right",size:"xs",class:"rounded-full"},null,8,["to","label"])]),default:b(()=>[Te]),_:1},8,["title","description"]),h(_,{class:"!pt-0"},{default:b(()=>[h(p)]),_:1}),h(_,{title:y.title,description:void 0,class:"!pt-0"},{default:b(()=>[h(f,null,{default:b(()=>[(i(!0),l(U,null,j(y.items,(C,X)=>(i(),z(N,S({key:X,ref_for:!0},C),null,16))),128))]),_:1})]),_:1},8,["title","description"]),h(_,{title:d.$t("pages.index.logos"),class:"!pt-0"},{default:b(()=>[h(G,{align:"center"},{default:b(()=>[(i(!0),l(U,null,j(t(c).logos.icons,C=>(i(),z(O,{key:C,variant:"link"},{default:b(()=>[w("img",{src:`/images/communities/${C.image}`,alt:C.alt,class:"h-12 w-12 flex-shrink-0 text-gray-900 lg:h-20 lg:w-20 dark:text-white"},null,8,Me)]),_:2},1024))),128))]),_:1})]),_:1},8,["title"]),(i(!0),l(U,null,j(t(c).sections,(C,X)=>(i(),z(_,{key:X,title:C.title,description:C.description,align:C.align,features:C.features},{default:b(()=>[h(p)]),_:2},1032,["title","description","align","features"]))),128)),h(_,null,{default:b(()=>[h(W,{title:k.title,links:y.links,class:"bg-gray-100/50 dark:bg-gray-800/50"},null,8,["title","links"])]),_:1})])}}});export{Ve as default};
