import{f as i}from"./Dnd51l0P.js";import{d as l,u as f,c,h as a,J as d}from"./BoW9yNmM.js";const p=l({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:r}=d(),{default:o}=f(),s=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:s,parent:r}},render({use:t,unwrap:r,fallbackSlot:o,tags:s,parent:e}){var u;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((u=e==null?void 0:e.parent)==null?void 0:u.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?r?i(n(),s):[n()]:o?o():a("div")}catch{return a("div")}}}),g=l({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return a(p,t)}});export{g as default};