import{h as m,W as d,c as f,B as b,a6 as g,z as x,D as v,Z as o,T as n,C as t,$ as s,U as y,a1 as i,a7 as _,F as h}from"./DmcxZUP-.js";import"./B4Dk0jw_.js";import{r as C}from"./Cq40sohi.js";import{Q as S,V as T,N as k}from"./BdE-EvaF.js";import"./Dnd51l0P.js";const $=m({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(a){const c=d(),l=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:e}=b("content.collapsible",void 0,l,void 0,!0);return g(()=>_("$g2XBVGJTJM")),(p,B)=>{const u=h;return x(),v(t(k),{as:"div"},{default:o(({open:r})=>[n(t(S),{class:s(t(e).button.base)},{default:o(()=>[n(u,{name:t(e).button.icon.name,class:s([t(e).button.icon.base,r?t(e).button.icon.active:t(e).button.icon.inactive])},null,8,["name","class"]),y("span",null,i(r?a.closeText:a.openText)+" "+i(a.name),1)]),_:2},1032,["class"]),n(t(T),{class:s(t(e).panel)},{default:o(()=>[C(p.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{$ as default};
