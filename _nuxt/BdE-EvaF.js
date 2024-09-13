import{h as g,r as p,I as P,G as I,H as d,J as k,K as T,c as D,L as S,M as m,o as w,N as C,w as j,O as H,P as L,Q as h,R as $,S as v}from"./DmcxZUP-.js";var N=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(N||{});let E=Symbol("DisclosureContext");function O(l){let o=$(E,null);if(o===null){let r=new Error(`<${l} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,O),r}return o}let B=Symbol("DisclosurePanelContext");function Q(){return $(B,null)}let U=g({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(l,{slots:o,attrs:r}){let n=p(l.defaultOpen?0:1),e=p(null),i=p(null),s={buttonId:p(`headlessui-disclosure-button-${P()}`),panelId:p(`headlessui-disclosure-panel-${P()}`),disclosureState:n,panel:e,button:i,toggleDisclosure(){n.value=I(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(t){s.closeDisclosure();let u=t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?d(t):d(s.button):d(s.button);u==null||u.focus()}};return k(E,s),T(D(()=>I(n.value,{0:S.Open,1:S.Closed}))),()=>{let{defaultOpen:t,...u}=l,c={open:n.value===0,close:s.close};return m({theirProps:u,ourProps:{},slot:c,slots:o,attrs:r,name:"Disclosure"})}}}),A=g({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(l,{attrs:o,slots:r,expose:n}){let e=O("DisclosureButton"),i=Q(),s=D(()=>i===null?!1:i.value===e.panelId.value);w(()=>{s.value||l.id!==null&&(e.buttonId.value=l.id)}),C(()=>{s.value||(e.buttonId.value=null)});let t=p(null);n({el:t,$el:t}),s.value||j(()=>{e.button.value=t.value});let u=H(D(()=>({as:l.as,type:o.type})),t);function c(){var a;l.disabled||(s.value?(e.toggleDisclosure(),(a=d(e.button))==null||a.focus()):e.toggleDisclosure())}function f(a){var b;if(!l.disabled)if(s.value)switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure(),(b=d(e.button))==null||b.focus();break}else switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure();break}}function y(a){switch(a.key){case v.Space:a.preventDefault();break}}return()=>{var a;let b={open:e.disclosureState.value===0},{id:x,...K}=l,M=s.value?{ref:t,type:u.value,onClick:c,onKeydown:f}:{id:(a=e.buttonId.value)!=null?a:x,ref:t,type:u.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||d(e.panel)?e.panelId.value:void 0,disabled:l.disabled?!0:void 0,onClick:c,onKeydown:f,onKeyup:y};return m({ourProps:M,theirProps:K,slot:b,attrs:o,slots:r,name:"DisclosureButton"})}}}),G=g({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(l,{attrs:o,slots:r,expose:n}){let e=O("DisclosurePanel");w(()=>{l.id!==null&&(e.panelId.value=l.id)}),C(()=>{e.panelId.value=null}),n({el:e.panel,$el:e.panel}),k(B,e.panelId);let i=L(),s=D(()=>i!==null?(i.value&S.Open)===S.Open:e.disclosureState.value===0);return()=>{var t;let u={open:e.disclosureState.value===0,close:e.close},{id:c,...f}=l,y={id:(t=e.panelId.value)!=null?t:c,ref:e.panel};return m({ourProps:y,theirProps:f,slot:u,attrs:o,slots:r,features:h.RenderStrategy|h.Static,visible:s.value,name:"DisclosurePanel"})}}});export{U as N,A as Q,G as V};
