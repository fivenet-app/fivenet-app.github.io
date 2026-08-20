import{t as e}from"./CGhzzHe4.js";import"./C9XlS5Fr.js";import{t}from"./DGGDsJA5.js";import{t as n}from"./CoXKLeGU2.js";import{n as r}from"./DsF7k-Jl.js";import{t as i}from"./B_i6dUa4.js";import{H as a,K as o,U as s,a as c,c as l,f as u,v as d,w as f,x as p,y as m}from"./BuIoD13X.js";import{t as h}from"./BZeETIgb.js";import{t as g}from"./KythIMN8.js";import{n as _}from"./DxgeCCJE.js";import{i as v,p as y}from"./PdEYtiFr2.js";var b=u.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:r(()=>structuredClone(w),`getConfig`),clear:r(()=>{S=new Map,C=x.showData,c()},`clear`),setDiagramTitle:o,getDiagramTitle:f,setAccTitle:s,getAccTitle:m,setAccDescription:a,getAccDescription:d,addSection:r(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);S.has(e)||(S.set(e,t),i.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:r(()=>S,`getSections`),setShowData:r(e=>{C=e},`setShowData`),getShowData:r(()=>C,`getShowData`)},E=r((e,t)=>{g(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),D={parse:r(async e=>{let t=await _(`pie`,e);i.debug(t),E(t,T)},`parse`)},O=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),k=r(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),r=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return n().value(e=>e.value).sort(null)(r)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:r((n,r,a,o)=>{i.debug(`rendering pie chart
`+n);let s=o.db,c=p(),u=v(s.getConfig(),c.pie),d=h(r),f=d.append(`g`);f.attr(`transform`,`translate(225,225)`);let{themeVariables:m}=c,[g]=y(m.pieOuterStrokeWidth);g??=2;let _=u.legendPosition,b=u.textPosition,x=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,S=t().innerRadius(x*185).outerRadius(185),C=t().innerRadius(185*b).outerRadius(185*b),w=f.append(`g`);w.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+g/2).attr(`class`,`pieOuterCircle`);let T=s.getSections(),E=k(T),D=[m.pie1,m.pie2,m.pie3,m.pie4,m.pie5,m.pie6,m.pie7,m.pie8,m.pie9,m.pie10,m.pie11,m.pie12],O=0;T.forEach(e=>{O+=e});let A=E.filter(e=>(e.data.value/O*100).toFixed(0)!==`0`),j=e(D).domain([...T.keys()]);w.selectAll(`mySlices`).data(A).enter().append(`path`).attr(`d`,S).attr(`fill`,e=>j(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return u.highlightSlice===`hover`?t+=` highlightedOnHover`:u.highlightSlice===e.data.label&&(t+=` highlighted`),t}),w.selectAll(`mySlices`).data(A).enter().append(`text`).text(e=>(e.data.value/O*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+C.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let M=f.append(`text`).text(s.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),N=[...T.entries()].map(([e,t])=>({label:e,value:t})),P=f.selectAll(`.legend`).data(N).enter().append(`g`).attr(`class`,`legend`);P.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>j(e.label)).style(`stroke`,e=>j(e.label)),P.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let F=Math.max(...P.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),I=450,L=490,R=N.length*22;switch(_){case`center`:P.attr(`transform`,(e,t)=>{let n=22*N.length/2,r=-F/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:I+=R,P.attr(`transform`,(e,t)=>`translate(${-F/2-22}, ${t*22-185})`),w.attr(`transform`,()=>`translate(0, ${R+22})`);break;case`bottom`:I+=R,P.attr(`transform`,(e,t)=>{let n=-F/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:L+=22+F,P.attr(`transform`,(e,t)=>{let n=22*N.length/2;return`translate(-207,`+(t*22-n)+`)`}),w.attr(`transform`,()=>`translate(${F+18+4}, 0)`);break;default:L+=22+F,P.attr(`transform`,(e,t)=>{let n=22*N.length/2;return`translate(216,`+(t*22-n)+`)`});break}let z=M.node()?.getBoundingClientRect().width??0,B=450/2-z/2,V=450/2+z/2,H=Math.min(0,B),U=Math.max(L,V)-H;d.attr(`viewBox`,`${H} 0 ${U} ${I}`),l(d,I,U,u.useMaxWidth)},`draw`)},styles:O};export{A as diagram};