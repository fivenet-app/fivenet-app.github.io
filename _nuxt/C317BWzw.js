import{c as M,r as w,w as j,t as y,a as b,i as S,b as X,o as Y,n as q,d as B,e as T,g as C}from"./C_W-vE-C.js";function V(t){var s;const n=y(t);return(s=n==null?void 0:n.$el)!=null?s:n}const x=X?window:void 0;function E(...t){let s,n,l,a;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,l,a]=t,s=x):[s,n,l,a]=t,!s)return q;Array.isArray(n)||(n=[n]),Array.isArray(l)||(l=[l]);const o=[],i=()=>{o.forEach(e=>e()),o.length=0},f=(e,r,c,h)=>(e.addEventListener(r,c,h),()=>e.removeEventListener(r,c,h)),d=B(()=>[V(s),y(a)],([e,r])=>{if(i(),!e)return;const c=T(r)?{...r}:r;o.push(...n.flatMap(h=>l.map(g=>f(e,h,g,c))))},{immediate:!0,flush:"post"}),m=()=>{d(),i()};return b(m),m}function G(){const t=w(!1),s=C();return s&&Y(()=>{t.value=!0},s),t}function I(t){const s=G();return M(()=>(s.value,!!t()))}function v(t,s={}){const{window:n=x}=s,l=I(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const o=w(!1),i=m=>{o.value=m.matches},f=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},d=j(()=>{l.value&&(f(),a=n.matchMedia(y(t)),"addEventListener"in a?a.addEventListener("change",i):a.addListener(i),o.value=a.matches)});return b(()=>{d(),f(),a=void 0}),o}const _={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function D(t,s={}){function n(e,r){let c=y(t[y(e)]);return r!=null&&(c=S(c,r)),typeof c=="number"&&(c=`${c}px`),c}const{window:l=x,strategy:a="min-width"}=s;function o(e){return l?l.matchMedia(e).matches:!1}const i=e=>v(()=>`(min-width: ${n(e)})`,s),f=e=>v(()=>`(max-width: ${n(e)})`,s),d=Object.keys(t).reduce((e,r)=>(Object.defineProperty(e,r,{get:()=>a==="min-width"?i(r):f(r),enumerable:!0,configurable:!0}),e),{});function m(){const e=Object.keys(t).map(r=>[r,i(r)]);return M(()=>e.filter(([,r])=>r.value).map(([r])=>r))}return Object.assign(d,{greaterOrEqual:i,smallerOrEqual:f,greater(e){return v(()=>`(min-width: ${n(e,.1)})`,s)},smaller(e){return v(()=>`(max-width: ${n(e,-.1)})`,s)},between(e,r){return v(()=>`(min-width: ${n(e)}) and (max-width: ${n(r,-.1)})`,s)},isGreater(e){return o(`(min-width: ${n(e,.1)})`)},isGreaterOrEqual(e){return o(`(min-width: ${n(e)})`)},isSmaller(e){return o(`(max-width: ${n(e,-.1)})`)},isSmallerOrEqual(e){return o(`(max-width: ${n(e)})`)},isInBetween(e,r){return o(`(min-width: ${n(e)}) and (max-width: ${n(r,-.1)})`)},current:m,active(){const e=m();return M(()=>e.value.length===0?"":e.value.at(-1))}})}const Q={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function F(t={}){const{type:s="page",touch:n=!0,resetOnTouchEnds:l=!1,initialValue:a={x:0,y:0},window:o=x,target:i=o,scroll:f=!0,eventFilter:d}=t;let m=null;const e=w(a.x),r=w(a.y),c=w(null),h=typeof s=="function"?s:Q[s],g=u=>{const p=h(u);m=u,p&&([e.value,r.value]=p,c.value="mouse")},$=u=>{if(u.touches.length>0){const p=h(u.touches[0]);p&&([e.value,r.value]=p,c.value="touch")}},O=()=>{if(!m||!o)return;const u=h(m);m instanceof MouseEvent&&u&&(e.value=u[0]+o.scrollX,r.value=u[1]+o.scrollY)},L=()=>{e.value=a.x,r.value=a.y},W=d?u=>d(()=>g(u),{}):u=>g(u),A=d?u=>d(()=>$(u),{}):u=>$(u),H=d?()=>d(()=>O(),{}):()=>O();if(i){const u={passive:!0};E(i,["mousemove","dragover"],W,u),n&&s!=="movement"&&(E(i,["touchstart","touchmove"],A,u),l&&E(i,"touchend",L,u)),f&&s==="page"&&E(o,"scroll",H,{passive:!0})}return{x:e,y:r,sourceType:c}}export{V as a,D as b,_ as c,x as d,F as u};