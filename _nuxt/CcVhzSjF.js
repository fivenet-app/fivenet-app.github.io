import{C as e,L as t,R as n}from"./BGfQ8fzZ.js";import{t as r}from"./B2J2w5EN.js";import{t as i}from"./BVRDxJne.js";import{n as a}from"./mlYO-roB.js";import{n as o}from"./DsF7k-Jl.js";import{t as s}from"./BGOfXQiy.js";import{C as c,H as l,U as u,_ as d,a as f,b as p,c as m,f as h,q as g,v as _}from"./BLNQnaPu.js";import{t as v}from"./KythIMN8.js";import{i as y,m as b}from"./DMUmpSk6.js";import{a as x}from"./eHarVcTi.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var r=C,i=S,a=null,o=n(0),s=n(t),c=n(0);function l(n){var l,u=(n=e(n)).length,d,f,p=0,m=Array(u),h=Array(u),g=+o.apply(this,arguments),_=Math.min(t,Math.max(-t,s.apply(this,arguments)-g)),v,y=Math.min(Math.abs(_)/u,c.apply(this,arguments)),b=y*(_<0?-1:1),x;for(l=0;l<u;++l)(x=h[m[l]=l]=+r(n[l],l,n))>0&&(p+=x);for(i==null?a!=null&&m.sort(function(e,t){return a(n[e],n[t])}):m.sort(function(e,t){return i(h[e],h[t])}),l=0,f=p?(_-u*b)/p:0;l<u;++l,g=v)d=m[l],x=h[d],v=g+(x>0?x*f:0)+b,h[d]={data:n[d],index:l,value:x,startAngle:g,endAngle:v,padAngle:y};return h}return l.value=function(e){return arguments.length?(r=typeof e==`function`?e:n(+e),l):r},l.sortValues=function(e){return arguments.length?(i=e,a=null,l):i},l.sort=function(e){return arguments.length?(a=e,i=null,l):a},l.startAngle=function(e){return arguments.length?(o=typeof e==`function`?e:n(+e),l):o},l.endAngle=function(e){return arguments.length?(s=typeof e==`function`?e:n(+e),l):s},l.padAngle=function(e){return arguments.length?(c=typeof e==`function`?e:n(+e),l):c},l}var T=h.pie,E={sections:new Map,showData:!1,config:T},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:o(()=>structuredClone(k),`getConfig`),clear:o(()=>{D=new Map,O=E.showData,f()},`clear`),setDiagramTitle:g,getDiagramTitle:c,setAccTitle:u,getAccTitle:_,setAccDescription:l,getAccDescription:d,addSection:o(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(e)||(D.set(e,t),s.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:o(()=>D,`getSections`),setShowData:o(e=>{O=e},`setShowData`),getShowData:o(()=>O,`getShowData`)},j=o((e,t)=>{v(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),M={parse:o(async e=>{let t=await a(`pie`,e);s.debug(t),j(t,A)},`parse`)},N=o(e=>`
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
`,`getStyles`),P=o(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return w().value(e=>e.value).sort(null)(n)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:o((e,t,n,a)=>{s.debug(`rendering pie chart
`+e);let o=a.db,c=p(),l=y(o.getConfig(),c.pie),u=x(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:f}=c,[h]=b(f.pieOuterStrokeWidth);h??=2;let g=l.legendPosition,_=l.textPosition,v=l.donutHole>0&&l.donutHole<=.9?l.donutHole:0,S=i().innerRadius(v*185).outerRadius(185),C=i().innerRadius(185*_).outerRadius(185*_),w=d.append(`g`);w.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+h/2).attr(`class`,`pieOuterCircle`);let T=o.getSections(),E=P(T),D=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],O=0;T.forEach(e=>{O+=e});let k=E.filter(e=>(e.data.value/O*100).toFixed(0)!==`0`),A=r(D).domain([...T.keys()]);w.selectAll(`mySlices`).data(k).enter().append(`path`).attr(`d`,S).attr(`fill`,e=>A(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return l.highlightSlice===`hover`?t+=` highlightedOnHover`:l.highlightSlice===e.data.label&&(t+=` highlighted`),t}),w.selectAll(`mySlices`).data(k).enter().append(`text`).text(e=>(e.data.value/O*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+C.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let j=d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`),M=[...T.entries()].map(([e,t])=>({label:e,value:t})),N=d.selectAll(`.legend`).data(M).enter().append(`g`).attr(`class`,`legend`);N.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>A(e.label)).style(`stroke`,e=>A(e.label)),N.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let F=Math.max(...N.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),I=450,L=490,R=M.length*22;switch(g){case`center`:N.attr(`transform`,(e,t)=>{let n=22*M.length/2,r=-F/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:I+=R,N.attr(`transform`,(e,t)=>`translate(${-F/2-22}, ${t*22-185})`),w.attr(`transform`,()=>`translate(0, ${R+22})`);break;case`bottom`:I+=R,N.attr(`transform`,(e,t)=>{let n=-F/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:L+=22+F,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(-207,`+(t*22-n)+`)`}),w.attr(`transform`,()=>`translate(${F+18+4}, 0)`);break;default:L+=22+F,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(216,`+(t*22-n)+`)`})}let z=j.node()?.getBoundingClientRect().width??0,B=225-z/2,V=225+z/2,H=Math.min(0,B),U=Math.max(L,V)-H;u.attr(`viewBox`,`${H} 0 ${U} ${I}`),m(u,I,U,l.useMaxWidth)},`draw`)},styles:N};export{F as diagram};