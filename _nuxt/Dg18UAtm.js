import{d as m,Q as d,c as f,k as b,a0 as g,o as x,m as y,T as o,M as n,l as e,U as s,O as v,W as i,a1 as _,p as h}from"./iHH62CoL.js";import"./DqQktfAi.js";import{r as k}from"./IX3Dgrx8.js";import{Q as C,V as S,N as T}from"./DeRcndpa.js";import"./Dnd51l0P.js";const A=m({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(a){const c=d(),l=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:t}=b("content.collapsible",void 0,l,void 0,!0);return g(()=>_("$ijeybAyg4g")),(p,w)=>{const u=h;return x(),y(e(T),{as:"div"},{default:o(({open:r})=>[n(e(C),{class:s(e(t).button.base)},{default:o(()=>[n(u,{name:e(t).button.icon.name,class:s([e(t).button.icon.base,r?e(t).button.icon.active:e(t).button.icon.inactive])},null,8,["name","class"]),v("span",null,i(r?a.closeText:a.openText)+" "+i(a.name),1)]),_:2},1032,["class"]),n(e(S),{class:s(e(t).panel)},{default:o(()=>[k(p.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{A as default};
