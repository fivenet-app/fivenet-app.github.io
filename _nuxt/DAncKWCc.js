import{d as X,ao as F,ap as Z,j as M,s as j,aq as ee,v as te,F as b,G as q,T as ne,U as oe,I as v,a7 as ae,Y as K,H as U,a0 as B,ar as H,V as ie,as as J,E as se,at as re,a as de,q as le,i as ue,ab as O,au as z,Z as W,av as pe,b as ce,aw as $}from"./CG-tzwBD.js";const we={key:0},ve={key:0},fe={id:"__preview_loader"},me=X({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const s=i,t=["__nuxt_preview","__preview_enabled"],p=F(),g=Z(),c=M(!0),k=M(!1),e=M(!1),o=M("");let n;const a=async()=>{J("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await g.replace({query:{preview:void 0}}),window.location.reload()},y=async w=>{const r=await s.syncPreview(w);if(e.value!==!0){if(!r){setTimeout(()=>y(w),1e3);return}J("previewToken").value&&(e.value=!0,await g.replace({query:{}}),p.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&n.disconnect())}};return j(async()=>{n=(await ee(()=>import("./ce1gcSEv.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let r;n.on("connect",()=>{r=setTimeout(()=>{e.value||(r=setTimeout(()=>{o.value="Preview sync timed out",e.value=!1},3e4),n.emit("draft:requestSync"))},3e4)});const x=()=>{r&&(clearTimeout(r),r=null)};n.on("draft:sync",async S=>{if(x(),!S){try{n.once("draft:ready",()=>{n.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(T){switch(x(),T.response.status){case 404:o.value="Preview draft not found",e.value=!1;break;default:o.value="An error occurred while syncing preview",e.value=!1}}return}y(S)}),n.on("draft:unauthorized",()=>{x(),o.value="Unauthorized preview",e.value=!1}),n.on("disconnect",()=>{x()}),document.body.classList.add(...t),n.on("draft:update",S=>{k.value=!0,s.syncPreview(S),k.value=!1})}),te(()=>{document.body.classList.remove(...t)}),(w,r)=>(b(),q("div",null,[c.value?(b(),q("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:e.value,__preview_refreshing:k.value})},[e.value?(b(),q(oe,{key:0},[r[0]||(r[0]=v("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[v("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),r[1]||(r[1]=v("span",null,[v("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),ae(": Preview enabled")],-1)),v("button",{onClick:a}," Close ")],64)):K("",!0)],2)):K("",!0),U(H,{name:"preview-loading"},{default:B(()=>[c.value&&!e.value&&!o.value?(b(),q("div",we,[r[4]||(r[4]=v("div",{id:"__preview_background"},null,-1)),v("div",{id:"__preview_loader"},[r[2]||(r[2]=v("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[v("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),r[3]||(r[3]=v("p",null,"Initializing the preview...",-1)),v("button",{onClick:a}," Cancel ")])])):K("",!0)]),_:1}),U(H,{name:"preview-loading"},{default:B(()=>[o.value?(b(),q("div",ve,[r[5]||(r[5]=v("div",{id:"__preview_background"},null,-1)),v("div",fe,[v("p",null,ie(o.value),1),v("button",{onClick:a}," Exit preview ")])])):K("",!0)]),_:1})]))}}),ye=Object.assign(se(me,[["__scopeId","data-v-57ba20ac"]]),{__name:"ContentPreviewMode"}),he=(i=[],s,t)=>{const p=[...s||[]],g=[...t||[]],c=JSON.parse(JSON.stringify(i));for(const e of p)if(e.new)c.push({path:e.path,parsed:e.parsed});else if(e.oldPath)if(g.splice(g.findIndex(n=>n.path===e.oldPath),1),p.find(n=>n.path===e.oldPath))c.push({path:e.path,parsed:e.parsed});else{const n=c.find(a=>a.path===e.oldPath);n&&(n.path=e.path,e.parsed?n.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(a=>{n.parsed[a]=e.pathMeta[a]}))}else{const o=c.find(n=>n.path===e.path);o?Object.assign(o,{path:e.path,parsed:e.parsed}):c.push({path:e.path,parsed:e.parsed})}for(const e of g)c.splice(c.findIndex(o=>o.path===e.path),1);const k=new Intl.Collator(void 0,{numeric:!0});return c.sort((e,o)=>k.compare(e.path,o.path)),c},C={appConfig:"app.config.ts",appConfigV4:"app/app.config.ts",nuxtConfig:"nuxt.config.ts"},ge=re((i,s,t)=>{if(Array.isArray(i[s])&&Array.isArray(t))return i[s]=t,!0}),_e=i=>{let s;return t=>(s||(s=i()),s)};function G(i,s){for(const t in i){const p=s[t];t in s||delete i[t],p!==null&&typeof p=="object"&&G(i[t],s[t])}}function Y(i,s){for(const t in s){const p=s[t];p!==null&&typeof p=="object"?Array.isArray(p)&&Array.isArray(i[t])?i[t]=p:(i[t]=i[t]||{},Y(i[t],p)):i[t]=p}}const Ce=()=>{const i=F(),s={},t=de("studio-client-db",()=>null);t.value||(i.hook("content:storage",o=>{t.value=o}),le("/non-existing-path").findOne());const p=async o=>{var y,w,r;const n=window.sessionStorage.getItem("previewToken");if(!o)return null;o=o.replace(/\/$/,"");let a=await((y=t.value)==null?void 0:y.getItem(`${n}:${o}`));return a||(a=await((w=t.value)==null?void 0:w.getItem(`cached:${o}`))),a||(a=a=await((r=t.value)==null?void 0:r.getItem(o))),a||(a=s[o||"/"]),a};return{storage:t,findContentItem:p,updateContentItem:(o,n)=>{var a;t.value&&(s[n.parsed._path]=n.parsed,t.value.setItem(`${o}:${(a=n.parsed)==null?void 0:a._id}`,JSON.stringify(n.parsed)))},removeContentItem:async(o,n)=>{var y;const a=await p(n);if(await((y=t.value)==null?void 0:y.removeItem(`${o}:${n}`)),a){delete s[a._path];const w=await p(a._id);w&&(s[w._path]=w)}},removeAllContentItems:async o=>{const n=await t.value.getKeys(`${o}:`);await Promise.all(n.map(a=>t.value.removeItem(a)))},setPreviewMetaItems:async(o,n)=>{const a=new Set(n.map(y=>y.parsed._id.split(":").shift()));await t.value.setItem(`${o}$`,JSON.stringify({ignoreSources:Array.from(a)}))}}},ke=_e(()=>JSON.parse(JSON.stringify(W())));let V=[];const Pe=()=>{const i=F(),{storage:s,findContentItem:t,updateContentItem:p,removeContentItem:g,removeAllContentItems:c,setPreviewMetaItems:k}=Ce(),{studio:e,content:o}=ue().public,n=window.sessionStorage.getItem("previewAPI")||(e==null?void 0:e.apiURL),a=ke(),y=async u=>{const d=window.sessionStorage.getItem("previewToken");c(d),k(d,u),await Promise.all(u.map(f=>{p(d,f)}))},w=u=>{const d=z(i,W);d!=null&&d.ui&&(d.ui.icons={...d.ui.icons,dynamic:!0}),Y(d,ge(u,a)),u||G(d,a)},r=async u=>{if(V=u.files=u.files||V||[],!s.value)return!1;V=[];const d=he(u.files,u.additions,u.deletions),f=d.filter(I=>![C.appConfig,C.appConfigV4,C.nuxtConfig].includes(I.path));await y(f);const h=d.find(I=>[C.appConfig,C.appConfigV4].includes(I.path));return w(h==null?void 0:h.parsed),T(),!0},x=async()=>{const u=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:n,method:"POST",params:{token:u}})},S=()=>{const u=window.sessionStorage.getItem("previewToken"),d=document.createElement("div");d.id="__nuxt_preview_wrapper",document.body.appendChild(d),pe(ye,{previewToken:u,apiURL:n,syncPreview:r,requestPreviewSyncAPI:x}).mount(d)},T=async()=>{if(o!=null&&o.documentDriven){const{pages:u}=z(i,ce),d=await Promise.all(Object.keys(u.value).map(async f=>{var h;return await t(((h=u.value[f])==null?void 0:h._id)??f)}));u.value=d.reduce((f,h,I)=>(h&&(f[Object.keys(u.value)[I]]=h),f),{})}await i.hooks.callHookParallel("app:data:refresh")};return{mountPreviewUI:S,initiateIframeCommunication:Q};function Q(){if(!window.parent||window.self===window.parent)return;const u=Z(),d=O(),f=M(""),h=l=>({path:l.path,query:$(l.query),params:$(l.params),fullPath:l.fullPath,meta:$(l.meta)});window.addEventListener("keydown",l=>{(l.metaKey||l.ctrlKey||l.altKey||l.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:l.key,metaKey:l.metaKey,ctrlKey:l.ctrlKey,shiftKey:l.shiftKey,altKey:l.altKey}},"*")}),window.addEventListener("message",async l=>{var D;if(!["https://nuxt.studio","https://new.nuxt.studio","https://new.dev.nuxt.studio","https://dev.nuxt.studio","http://localhost:3000",...((D=e==null?void 0:e.iframeMessagingAllowedOrigins)==null?void 0:D.split(",").map(m=>m.trim()))||[]].includes(l.origin))return;const{type:L,payload:R={}}=l.data||{};switch(L){case"nuxt-studio:editor:file-selected":{const m=await t(R.path);if(!m||m._partial)return;if(!String(R.path).endsWith(".md")){const P=u.resolve(m._path);if(!P||!P.matched||P.matched.length===0)return}m._path!==O().path&&(f.value=m._path,u.push(m._path));break}case"nuxt-studio:editor:media-changed":case"nuxt-studio:editor:file-changed":{const m=window.sessionStorage.getItem("previewToken"),{additions:P=[],deletions:A=[]}=R;for(const E of P)await p(m,E);for(const E of A)await g(m,E.path);T();break}case"nuxt-studio:config:file-changed":{const{additions:m=[],deletions:P=[]}=R,A=m.find(N=>[C.appConfig,C.appConfigV4].includes(N.path));A&&w(A==null?void 0:A.parsed),P.find(N=>[C.appConfig,C.appConfigV4].includes(N.path))&&w(void 0)}}}),i.hook("page:finish",()=>{I(),i.payload.prerenderedAt&&T()}),i.hook("content:document-driven:finish",({route:l,page:_})=>{l.meta.studio_page_contentId=_==null?void 0:_._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:h(O())},"*"),setTimeout(()=>{I()},100)});function I(){const l=Array.from(window.document.querySelectorAll("[data-content-id]")).map(L=>L.getAttribute("data-content-id")),_=Array.from(new Set([d.meta.studio_page_contentId,...l])).filter(Boolean);if(f.value===_[0]){f.value="";return}window.openContentInStudioEditor(_,{navigate:!0,pageContentId:d.meta.studio_page_contentId})}window.openContentInStudioEditor=(l,_={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...h(d),contentIds:l,..._}},"*")}}};export{Pe as useStudio};
