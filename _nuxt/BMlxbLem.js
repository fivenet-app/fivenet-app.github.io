import{h as l,k as d,c as v,l as f,m as p,p as m,q as g,s as h,u as _,j as u,_ as y}from"./C_W-vE-C.js";const q=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=d(i),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&f("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await m(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(i){const t=_(),{navigation:n}=i,o=e=>u(y,{to:e._path},()=>e.title),a=(e,r)=>u("ul",r?{"data-level":r}:null,e.map(s=>s.children?u("li",null,[o(s),a(s.children,r+1)]):u("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),N=q;export{N as default};