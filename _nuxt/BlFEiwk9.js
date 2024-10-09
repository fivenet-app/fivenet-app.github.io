import{d as P,c as j,R as O,j as M,S as T,o as r,L as u,r as y,M as x,U as $,O as A,V as m,k as s,m as k,W as D,X as V,$ as F,a0 as L,l as _,Z as U,a1 as q,aT as Z,Q as st,a6 as at,n as tt,al as ot,bc as rt,p as N,bd as I,be as lt,bf as ct,bg as ut,bh as dt,a7 as z,u as pt,bi as mt,bj as ft,_ as gt,a2 as et,K as ht,aC as nt,w as K,C as yt,D as kt,aD as vt,ag as bt,e as wt,q as xt,bk as $t,ay as Vt,bl as St}from"./DGqELzRw.js";const Ct=P({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const e=n,l=j(()=>{const a=O("gap-16 sm:gap-y-24",e.orientation==="vertical"&&"flex flex-col",e.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),o=e.orientation==="vertical"?"text-center":"",p=O("mt-10 flex flex-wrap gap-x-6 gap-y-3",e.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:a,base:o,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:p}}),{ui:i,attrs:t}=M("landing.hero",T(e,"ui"),l,T(e,"class"),!0);return(a,o)=>{const p=q,f=Z;return r(),u("div",U({class:s(i).wrapper},s(t)),[y(a.$slots,"top"),x(f,{class:m(s(i).container)},{default:$(()=>{var c;return[A("div",{class:m(s(i).base)},[a.$slots.headline?(r(),u("div",{key:0,class:m(s(i).headline)},[y(a.$slots,"headline")],2)):k("",!0),A("h1",{class:m(s(i).title)},[y(a.$slots,"title",{},()=>[D(V(n.title),1)])],2),n.description||a.$slots.description?(r(),u("div",{key:1,class:m(s(i).description)},[y(a.$slots,"description",{},()=>[D(V(n.description),1)])],2)):k("",!0),(c=n.links)!=null&&c.length||a.$slots.links?(r(),u("div",{key:2,class:m(s(i).links)},[y(a.$slots,"links",{},()=>[(r(!0),u(F,null,L(n.links,(v,b)=>(r(),_(p,U({key:b,ref_for:!0},v,{onClick:v.click}),null,16,["onClick"]))),128))])],2)):k("",!0)],2),y(a.$slots,"default")]}),_:3},8,["class"]),y(a.$slots,"bottom")],16)}}}),At={class:"bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4"},Ft={class:"aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden"},Et=["src"],_t=P({__name:"ImagePlaceholder",props:{src:{default:"/images/screenshots/overview.png"}},setup(n){return(e,l)=>(r(),u("div",At,[A("div",Ft,[A("img",{class:"absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10",src:e.src},null,8,Et)])]))}}),Dt={key:0},Ut={key:2},Lt={key:0},Tt=P({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const e=st(),l=n,i=j(()=>{const o=O("gap-16 sm:gap-y-24",l.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),p=O("",l.align==="center"&&"text-center flex flex-col items-center",l.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:o,base:p,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:e.ui.icons.check}}}}),{ui:t,attrs:a}=M("landing.section",T(l,"ui"),i,T(l,"class"),!0);return(o,p)=>{const f=tt,c=q,v=Z;return r(),u("div",U({class:s(t).wrapper},s(a)),[y(o.$slots,"top"),x(v,{class:m(s(t).container)},{default:$(()=>{var b,S,d,h,C;return[n.icon||o.$slots.icon||n.headline||o.$slots.headline||n.title||o.$slots.title||n.description||o.$slots.description||(b=n.links)!=null&&b.length||o.$slots.links?(r(),u("div",{key:0,class:m(s(t).base)},[n.icon||o.$slots.icon?(r(),u("div",{key:0,class:m(s(t).icon.wrapper)},[y(o.$slots,"icon",{},()=>[x(f,{name:n.icon,class:m(s(t).icon.base)},null,8,["name","class"])])],2)):n.headline||o.$slots.headline?(r(),u("div",{key:1,class:m(s(t).headline)},[y(o.$slots,"headline",{},()=>[D(V(n.headline),1)])],2)):k("",!0),n.title||o.$slots.title?(r(),u("h2",{key:2,class:m(s(t).title)},[y(o.$slots,"title",{},()=>[D(V(n.title),1)])],2)):k("",!0),n.description||o.$slots.description?(r(),u("div",{key:3,class:m(s(t).description)},[y(o.$slots,"description",{},()=>[D(V(n.description),1)])],2)):k("",!0),n.align!=="center"&&((S=n.features)!=null&&S.length)?(r(),u("dl",{key:4,class:m([s(t).features.wrapper.base,s(t).features.wrapper.list])},[(r(!0),u(F,null,L(n.features,g=>(r(),u("div",{key:g.name,class:m(s(t).features.base)},[A("dt",{class:m(s(t).features.name)},[x(f,{name:g.icon||s(t).features.icon.name,class:m(s(t).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),g.name?(r(),u("span",Dt,V(g.name),1)):k("",!0)],2),g.description?(r(),u("dd",{key:0,class:m(s(t).features.description)},V(g.description),3)):k("",!0)],2))),128))],2)):k("",!0),n.align!=="center"&&((d=n.links)!=null&&d.length||o.$slots.links)?(r(),u("div",{key:5,class:m(s(t).links)},[y(o.$slots,"links",{},()=>[(r(!0),u(F,null,L(n.links,(g,E)=>(r(),_(c,U({key:E,ref_for:!0},g,{onClick:g.click}),null,16,["onClick"]))),128))])],2)):k("",!0)],2)):k("",!0),o.$slots[n.slot||"default"]?y(o.$slots,n.slot||"default",{key:1}):n.align==="right"?(r(),u("div",Ut)):k("",!0),n.align==="center"&&((h=n.features)!=null&&h.length)?(r(),u("dl",{key:3,class:m([s(t).features.wrapper.base,s(t).features.wrapper.grid])},[(r(!0),u(F,null,L(n.features,g=>(r(),u("div",{key:g.name,class:m(s(t).features.base)},[A("dt",{class:m(s(t).features.name)},[x(f,{name:g.icon||s(t).features.icon.name,class:m(s(t).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),g.name?(r(),u("span",Lt,V(g.name),1)):k("",!0)],2),g.description?(r(),u("dd",{key:0,class:m(s(t).features.description)},V(g.description),3)):k("",!0)],2))),128))],2)):k("",!0),n.align==="center"&&((C=n.links)!=null&&C.length||o.$slots.links)?(r(),u("div",{key:4,class:m(s(at)(s(t).links,"mt-0 justify-center"))},[y(o.$slots,"links",{},()=>[(r(!0),u(F,null,L(n.links,(g,E)=>(r(),_(c,U({key:E,ref_for:!0},g,{onClick:g.click}),null,16,["onClick"]))),128))])],2)):k("",!0)]}),_:3},8,["class"]),y(o.$slots,"bottom")],16)}}}),jt=ot(rt);function Nt(n,e={}){const{x:l,y:i}=jt(e),t=N(n??(window==null?void 0:window.document.body)),a=N(0),o=N(0);return I&&lt([t,l,i],()=>{var S;const p=ct(t);if(!p)return;const{left:f,top:c}=p.getBoundingClientRect(),v=l.value-(f+I.scrollX),b=i.value-(c+I.scrollY);Math.abs(v)>1500||Math.abs(b)>1500||((S=I.screen)==null?void 0:S.width)<=800||(a.value=v,o.value=b)},{immediate:!0,throttle:50}),{x:l,y:i,elementX:a,elementY:o}}const Ot=P({inheritAttrs:!1,__name:"LandingCard",props:{...ut,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){dt(d=>({dce0d91c:s(l),ee6154cc:s(i)}));const e=n,l=j(()=>{var d;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((d=z[e.color])==null?void 0:d["500"])||z[e.color]||e.color}),i=j(()=>{var d;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((d=z[e.color])==null?void 0:d["400"])||z[e.color]||e.color}),t=j(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:O("gap-x-8 gap-y-4 rounded-xl flex-1",e.orientation==="vertical"&&"flex flex-col",!!o.default&&e.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),a=N(),o=pt(),{elementX:p,elementY:f}=Nt(a),{ui:c,attrs:v}=M("landing.card",T(e,"ui"),t,T(e,"class"),!0),b=j(()=>mt(e)),S=j(()=>(e.title||o.title&&ft(o.title())||"Card link").trim());return(d,h)=>{const C=gt,g=tt,E=et;return r(),u("div",U({ref_key:"el",ref:a,style:{"--x":`${s(p)}px`,"--y":`${s(f)}px`},class:[s(c).wrapper,d.to&&[s(c).to,"to"]]},s(v)),[x(E,{ui:s(c)},{default:$(()=>[A("div",{class:m(s(c).container)},[d.to?(r(),_(C,U({key:0,"aria-label":s(S)},s(b),{class:"focus:outline-none",tabindex:"-1"}),{default:$(()=>h[0]||(h[0]=[A("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):k("",!0),n.icon||d.$slots.icon?(r(),u("div",{key:1,class:m(s(c).icon.wrapper)},[y(d.$slots,"icon",{},()=>[x(g,{name:n.icon,class:m(s(c).icon.base)},null,8,["name","class"])],!0)],2)):k("",!0),n.title||d.$slots.title?(r(),u("p",{key:2,class:m(s(c).title)},[y(d.$slots,"title",{},()=>[D(V(n.title),1)],!0)],2)):k("",!0),n.description||d.$slots.description?(r(),u("div",{key:3,class:m(s(c).description)},[y(d.$slots,"description",{},()=>[D(V(n.description),1)],!0)],2)):k("",!0),y(d.$slots,"container",{},void 0,!0)],2),d.$slots.default?y(d.$slots,"default",{key:0},void 0,!0):k("",!0)]),_:3},8,["ui"])],16)}}}),Pt=ht(Ot,[["__scopeId","data-v-a987065a"]]),Mt=P({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const e=n,l=j(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[e.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:i,attrs:t}=M("landing.logos",T(e,"ui"),l,T(e,"class"),!0);return(a,o)=>(r(),u("div",U({class:s(i).wrapper},s(t)),[n.title?(r(),u("h2",{key:0,class:m(s(i).title)},V(n.title),3)):k("",!0),A("div",{class:m(s(i).images)},[y(a.$slots,"default")],2)],16))}}),Bt={key:1},It=P({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const e=n,l=j(()=>{const a={};e.card?a.rounded="rounded-xl":(a.ring="",a.rounded="",a.background="",a.shadow="",a.divide="");const o=O("",e.align==="center"&&"text-center",e.align==="right"&&"lg:order-last"),p=O("flex flex-col",e.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),f=e.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",c=O("mt-10 flex items-center gap-x-6",e.align==="center"&&"justify-center");return{...a,wrapper:"relative",container:o,body:{base:p,padding:f},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:c}}),{ui:i,attrs:t}=M("landing.cta",T(e,"ui"),l,T(e,"class"),!0);return(a,o)=>{const p=q,f=et;return r(),_(f,U({class:s(i).wrapper},s(t),{ui:s(i)}),{default:$(()=>{var c;return[A("div",{class:m(s(i).container)},[n.title||a.$slots.title?(r(),u("h2",{key:0,class:m(s(i).title)},[y(a.$slots,"title",{},()=>[D(V(n.title),1)])],2)):k("",!0),n.description||a.$slots.description?(r(),u("div",{key:1,class:m(s(i).description)},[y(a.$slots,"description",{},()=>[D(V(n.description),1)])],2)):k("",!0),(c=n.links)!=null&&c.length||a.$slots.links?(r(),u("div",{key:2,class:m(s(i).links)},[y(a.$slots,"links",{},()=>[(r(!0),u(F,null,L(n.links,(v,b)=>(r(),_(p,U({key:b,ref_for:!0},v,{onClick:v.click}),null,16,["onClick"]))),128))])],2)):k("",!0)],2),a.$slots.default?y(a.$slots,"default",{key:0}):n.align==="right"?(r(),u("div",Bt)):k("",!0)]}),_:3},16,["class","ui"])}}}),X=60,G=X*60,W=G*24,J=W*7,Q=J*52;function zt(n,e){const{t:l}=nt(),i=Math.floor(n/Q);n-=i*Q;const t=Math.floor(n/J);n-=t*J;const a=Math.floor(n/W);n-=a*W;const o=Math.floor(n/G);n-=o*G;const p=Math.floor(n/X);n-=p*X;const f=[];i>0&&f.push(`${i} ${l("common.time_ago.year",i)}`),t>0&&f.push(`${t} ${l("common.time_ago.week",t)}`),a>0&&f.push(`${a} ${l("common.time_ago.day",a)}`),o>0&&f.push(`${o} ${l("common.time_ago.hour",o)}`),p>0&&f.push(`${p} ${l("common.time_ago.minute",p)}`),(!e||e.seconds)&&n>0&&f.push(`${n} ${l("common.time_ago.second",n)}`);const c=f.join(", ");return c.length>0?c:l((e==null?void 0:e.emptyText)??"common.unknown")}var Y=function(){return Y=Object.assign||function(n){for(var e,l=1,i=arguments.length;l<i;l++)for(var t in e=arguments[l])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},Y.apply(this,arguments)},Yt=function(){function n(e,l,i){var t=this;this.endVal=l,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){t.startTime||(t.startTime=a);var o=a-t.startTime;t.remaining=t.duration-o,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(o,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(o,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(o/t.duration);var p=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=p?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),o<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(a){var o,p,f,c,v=a<0?"-":"";o=Math.abs(a).toFixed(t.options.decimalPlaces);var b=(o+="").split(".");if(p=b[0],f=b.length>1?t.options.decimal+b[1]:"",t.options.useGrouping){c="";for(var S=3,d=0,h=0,C=p.length;h<C;++h)t.options.useIndianSeparators&&h===4&&(S=2,d=1),h!==0&&d%S==0&&(c=t.options.separator+c),d++,c=p[C-h-1]+c;p=c}return t.options.numerals&&t.options.numerals.length&&(p=p.replace(/[0-9]/g,function(g){return t.options.numerals[+g]}),f=f.replace(/[0-9]/g,function(g){return t.options.numerals[+g]})),v+t.options.prefix+p+f+t.options.suffix},this.easeOutExpo=function(a,o,p,f){return p*(1-Math.pow(2,-10*a/f))*1024/1023+o},this.options=Y(Y({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(l),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return n.prototype.handleScroll=function(e){if(e&&window&&!e.once){var l=window.innerHeight+window.scrollY,i=e.el.getBoundingClientRect(),t=i.top+window.pageYOffset,a=i.top+i.height+window.pageYOffset;a<l&&a>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>a||t>l)&&!e.paused&&e.reset()}},n.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var l=e-this.startVal;if(Math.abs(l)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var i=this.countDown?1:-1;this.endVal=e+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},n.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(e){var l;if(this.el){var i=this.formattingFn(e);(l=this.options.plugin)!==null&&l!==void 0&&l.render?this.options.plugin.render(this.el,i):this.el.tagName==="INPUT"?this.el.value=i:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=i:this.el.innerHTML=i}},n.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},n.prototype.validateValue=function(e){var l=Number(e);return this.ensureNumber(l)?l:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();const qt={class:"countup-wrap"},Rt=P({name:"CountUp",props:{endVal:{},startVal:{default:0},duration:{default:2.5},decimalPlaces:{default:0},autoplay:{type:Boolean,default:!0},loop:{type:[Boolean,Number],default:!1},delay:{default:0},options:{default:void 0}},emits:["init","finished"],setup(n,{expose:e,emit:l}){const i=n,t=l;let a=N(),o=N(),p=0;const f=N(!1);let c;function v(){if(!a.value)return void console.warn("[vue-countup-v3]","elRef can't found");p=0,f.value=!1;const d=Number(i.startVal),h=Number(i.endVal),C=Number(i.duration);o.value=new Yt(a.value,h,{startVal:d,duration:C,decimalPlaces:i.decimalPlaces,...i.options}),o.value.error?console.error("[vue-countup-v3]",o.value.error):t("init",o.value)}function b(){var d;o.value||v(),(d=o.value)==null||d.start(function(){typeof i.loop=="boolean"&&i.loop||i.loop>p?c=function(h,C=1){const g=N(-1);let E;return g.value=requestAnimationFrame(function R(B){E||(E=B),B-E<1e3*C?g.value=requestAnimationFrame(R):h()}),{cancel:function(){window.cancelAnimationFrame(g.value)}}}(()=>{var h;(h=o.value)==null||h.reset(),b()},i.delay):f.value=!0}),p++}function S(){c==null||c.cancel(),v(),b()}return K([()=>i.startVal,()=>i.endVal],()=>{i.autoplay&&S()}),K(f,d=>{var h;d&&((h=i.options)!=null&&h.onCompleteCallback&&i.options.onCompleteCallback(),t("finished"))}),yt(()=>{v(),i.autoplay&&b()}),kt(()=>{var d;c==null||c.cancel(),(d=o.value)==null||d.reset()}),e({init:v,restart:S}),(d,h)=>(r(),u("div",qt,[y(d.$slots,"prefix"),A("span",{ref_key:"elRef",ref:a},null,512),y(d.$slots,"suffix")]))}}),Ht=["src","alt"],Xt={class:"mt-2 flex w-full items-center gap-x-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"},Gt={key:3},Jt=P({__name:"index",async setup(n){let e,l;const{data:i}=([e,l]=vt(()=>wt("index",()=>xt("/").findOne())),e=await e,l(),e);bt({title:"common.home"});const{t}=nt(),a="v0.9.2-10-ge180ce7e9".split("-")[0],o=[{label:t("common.docs"),icon:"i-mdi-book-open-variant-outline",size:"lg",to:"/getting-started"}],p={title:t("docs.features.title"),description:void 0,links:[{label:t("docs.features.links.explore.label"),trailingIcon:"i-mdi-arrow-right",color:"gray",to:"/getting-started",size:"lg"}],items:[{title:t("docs.features.items.citizens.title"),description:t("docs.features.items.citizens.description"),icon:"i-mdi-account-multiple-outline",to:"/user-guides/citizens"},{title:t("docs.features.items.vehicles.title"),description:t("docs.features.items.vehicles.description"),icon:"i-mdi-car-outline",to:"/user-guides/vehicles"},{title:t("docs.features.items.documents.title"),description:t("docs.features.items.documents.description"),icon:"i-mdi-file-document-box-multiple-outline",to:"/user-guides/documents"},{title:t("docs.features.items.jobs.title"),description:t("docs.features.items.jobs.description"),icon:"i-mdi-briefcase-outline",to:"/user-guides/jobs"},{title:t("docs.features.items.calendar.title"),description:t("docs.features.items.calendar.description"),icon:"i-mdi-calendar-outline",to:"/user-guides/calendar"},{title:t("docs.features.items.livemap.title"),description:t("docs.features.items.livemap.description"),icon:"i-mdi-map-outline",to:"/user-guides/livemap"},{title:t("docs.features.items.centrum.title"),description:t("docs.features.items.centrum.description"),icon:"i-mdi-car-emergency",to:"/user-guides/centrum"},{title:t("docs.features.items.i18n.title"),description:t("docs.features.items.i18n.description"),icon:"i-mdi-language",to:"/user-guides/i18n"},{title:t("docs.features.items.nuxt3_ui.title"),description:t("docs.features.items.nuxt3_ui.description"),icon:"i-simple-icons-nuxtdotjs",to:"https://nuxt.com"},{title:t("docs.features.items.open_source.title"),description:t("docs.features.items.open_source.description"),icon:"i-simple-icons-git",to:"https://github.com/fivenet-app/fivenet"}]},f={title:t("docs.features.links.explore.label")};return(c,v)=>{const b=q,S=Ct,d=_t,h=Tt,C=Pt,g=$t,E=Vt,R=Mt,B=St,it=It;return r(),u("div",null,[x(S,{title:c.$t("pages.index.welcome"),description:c.$t("pages.index.subtext"),links:o},{headline:$(()=>[x(b,{color:"gray",to:`https://github.com/fivenet-app/fivenet/releases/tag/${s(a)}`,external:!0,label:c.$t("pages.index.whats_new_in",{version:s(a)}),"trailing-icon":"i-mdi-arrow-right",size:"xs",class:"rounded-full"},null,8,["to","label"])]),default:$(()=>[v[0]||(v[0]=A("div",{class:"absolute inset-0 z-[-1] [mask-image:radial-gradient(100%_100%_at_top,white,transparent)] hero"},null,-1))]),_:1},8,["title","description"]),x(h,{class:"!pt-0"},{default:$(()=>[x(d)]),_:1}),x(h,{title:p.title,description:void 0,class:"!pt-0"},{default:$(()=>[x(g,null,{default:$(()=>[(r(!0),u(F,null,L(p.items,(w,H)=>(r(),_(C,U({key:H,ref_for:!0},w),null,16))),128))]),_:1})]),_:1},8,["title","description"]),x(h,{title:c.$t("pages.index.logos"),class:"!pt-0"},{default:$(()=>[x(R,{align:"center"},{default:$(()=>[(r(!0),u(F,null,L(s(i).logos.icons,w=>(r(),_(E,{key:w,variant:"link"},{default:$(()=>[A("img",{src:`/images/communities/${w.image}`,alt:w.alt,class:"h-12 w-12 flex-shrink-0 text-gray-900 lg:h-20 lg:w-20 dark:text-white"},null,8,Ht)]),_:2},1024))),128))]),_:1})]),_:1},8,["title"]),x(h,{title:c.$t("components.stats.title"),class:"!pt-0"},{default:$(()=>[x(g,null,{default:$(()=>[(r(!0),u(F,null,L(s(i).stats,w=>(r(),_(C,{key:w.key,title:c.$t(`components.stats.stats.${w.key}`),icon:w.icon},{description:$(()=>[A("p",Xt,[w.type==="seconds"?(r(),u(F,{key:0},[D(V(("fromSecondsToFormattedDuration"in c?c.fromSecondsToFormattedDuration:s(zt))(w.number,{seconds:!1,emptyText:"common.none"})),1)],64)):w.type==="unit"?(r(),u(F,{key:1},[D(V(w.number)+" "+V(c.$t(w.unit??"common.time_ago.week",2)),1)],64)):(r(),_(B,{key:2},{default:$(()=>[x(s(Rt),{"end-val":w.number,options:{enableScrollSpy:!0}},null,8,["end-val"])]),_:2},1024)),w.hidePlus?k("",!0):(r(),u("span",Gt," + "))])]),_:2},1032,["title","icon"]))),128))]),_:1})]),_:1},8,["title"]),(r(!0),u(F,null,L(s(i).sections,(w,H)=>(r(),_(h,{key:H,title:w.title,description:w.description,align:w.align,features:w.features},{default:$(()=>[x(d)]),_:2},1032,["title","description","align","features"]))),128)),x(h,null,{default:$(()=>[x(it,{title:f.title,links:p.links,class:"bg-gray-100/50 dark:bg-gray-800/50"},null,8,["title","links"])]),_:1})])}}});export{Jt as default};
