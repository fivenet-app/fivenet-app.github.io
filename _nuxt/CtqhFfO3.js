import{d,z as m,D as f,ao as b,ad as g,c as x,ah as v,w as o,h as n,E as t,n as s,f as y,t as i,ae as _,ab as h}from"./B-XQQdJH.js";import"./B0646GHm.js";import{r as C}from"./B3cms1RT.js";import{Q as S,V as k,N as w}from"./CrqrHGRs.js";import"./Dnd51l0P.js";const D=d({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(a){const c=m(),l=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:e}=b("content.collapsible",void 0,l,void 0,!0);return g(()=>_("$b2g9F3213F")),(p,T)=>{const u=h;return x(),v(t(w),{as:"div"},{default:o(({open:r})=>[n(t(S),{class:s(t(e).button.base)},{default:o(()=>[n(u,{name:t(e).button.icon.name,class:s([t(e).button.icon.base,r?t(e).button.icon.active:t(e).button.icon.inactive])},null,8,["name","class"]),y("span",null,i(r?a.closeText:a.openText)+" "+i(a.name),1)]),_:2},1032,["class"]),n(t(k),{class:s(t(e).panel)},{default:o(()=>[C(p.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{D as default};
