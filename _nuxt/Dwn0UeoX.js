import{d,t as l,c as f,a as v,b as p,e as g,f as m,g as h,u as _,h as u,_ as y}from"./Dw4v9OJe.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(i){const t=_(),{navigation:n}=i,o=e=>u(y,{to:e._path},()=>e.title),a=(e,r)=>u("ul",r?{"data-level":r}:null,e.map(s=>s.children?u("li",null,[o(s),a(s.children,r+1)]):u("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),N=C;export{N as default};