import{d,t as l,c as v,a as f,b as g,e as p,f as m,g as _,u as h,h as i,_ as y}from"./CG-tzwBD.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=l(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&f("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await p(`content-navigation-${_(n.value)}`,()=>m(n.value));return{navigation:o}},render(u){const t=h(),{navigation:n}=u,o=e=>i(y,{to:e._path},()=>e.title),a=(e,r)=>i("ul",r?{"data-level":r}:null,e.map(s=>s.children?i("li",null,[o(s),a(s.children,r+1)]):i("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),N=C,q=Object.assign(N,{__name:"ContentNavigation"});export{q as default};
