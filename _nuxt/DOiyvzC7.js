import m from"./BZVo13Me.js";import u from"./CyH7Oemf.js";import{d as f,P as p,F as n,G as r,T as a,a1 as o,H as s,I as g,V as y,Y as b,r as v}from"./CG-tzwBD.js";const _=f({__name:"ProseCode",props:{code:{type:String,required:!0},icon:{type:String,default:void 0},language:{type:String,default:void 0},hideHeader:{type:Boolean,default:!1},filename:{type:String,default:void 0},highlights:{type:Array,default:void 0},meta:{type:String,default:void 0}},setup(e){const d={wrapper:"[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5",header:"flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose",icon:{base:""},button:{base:"absolute top-2.5 right-2.5"},filename:"text-gray-700 dark:text-gray-200 text-sm/6"},{ui:t}=p("content.prose.code",void 0,d,void 0,!0);return(i,h)=>{const l=m,c=u;return n(),r("div",{class:a(["relative",!!e.filename&&o(t).wrapper])},[e.filename&&!e.hideHeader?(n(),r("div",{key:0,class:a(o(t).header)},[s(l,{icon:e.icon,filename:e.filename,class:a(o(t).icon.base)},null,8,["icon","filename","class"]),g("span",{class:a(o(t).filename)},y(e.filename),3)],2)):b("",!0),s(c,{code:e.code,class:a(o(t).button.base)},null,8,["code","class"]),v(i.$slots,"default")],2)}}}),k=Object.assign(_,{__name:"ProseCode"});export{k as default};
