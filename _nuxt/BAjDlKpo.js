import{n as e}from"./6qCGA5yR.js";import{n as t}from"./D1nzEUn-.js";import{t as n}from"./Cayr-38q.js";import{E as r,J as i,Q as a,S as o,Y as s,b as c,k as l,l as u,m as d,o as f,x as p}from"./kxv79vUE.js";import{t as m}from"./C3WJUzcS2.js";import{t as h}from"./CV8Yohfm2.js";import"./CyfxaSxc2.js";import{n as g}from"./DZA8JR3M2.js";import"./CMBzyh312.js";import"./phByd5iF2.js";import"./D5nVXiNm2.js";import"./BPQ0nN0c2.js";import"./E1mA_sHe2.js";import"./DPHbD1872.js";import"./y3QOc8Ex2.js";import"./CShDxzz72.js";import"./CogjT6Bd2.js";import"./BF9-VOKM2.js";import"./CClEbWqj2.js";import"./AkL40m162.js";import"./DFliQRRi2.js";import"./D5E2OYm72.js";import"./kmDswgAV2.js";import"./ejKqxZC6.js";import{i as _}from"./Doh4pvOO.js";var v={showLegend:!0,ticks:5,max:null,min:0,graticule:`circle`},y=32,b={axes:[],curves:[],options:v},x=structuredClone(b),S=d.radar,C=t(()=>_({...S,...o().radar}),`getConfig`),w=t(()=>x.axes,`getAxes`),T=t(()=>x.curves,`getCurves`),E=t(()=>x.options,`getOptions`),D=t(e=>{x.axes=e.map(e=>({name:e.name,label:e.label??e.name}))},`setAxes`),O=t(e=>{x.curves=e.map(e=>({name:e.name,label:e.label??e.name,entries:k(e.entries)}))},`setCurves`),k=t(e=>{if(e[0].axis==null)return e.map(e=>e.value);let t=w();if(t.length===0)throw Error(`Axes must be populated before curves for reference entries`);return t.map(t=>{let n=e.find(e=>e.axis?.$refText===t.name);if(n===void 0)throw Error(`Missing entry for axis `+t.label);return n.value})},`computeCurveEntries`),A={getAxes:w,getCurves:T,getOptions:E,setAxes:D,setCurves:O,setOptions:t(e=>{let t=e.reduce((e,t)=>(e[t.name]=t,e),{});x.options={showLegend:t.showLegend?.value??v.showLegend,ticks:t.ticks?.value??v.ticks,max:t.max?.value??v.max,min:t.min?.value??v.min,graticule:t.graticule?.value??v.graticule},x.options.ticks>y&&(n.warn(`Radar diagram ticks (${x.options.ticks}) exceeds maximum allowed (${y}). Using ${y} instead.`),x.options.ticks=y)},`setOptions`),getConfig:C,clear:t(()=>{f(),x=structuredClone(b)},`clear`),setAccTitle:s,getAccTitle:p,setDiagramTitle:a,getDiagramTitle:r,getAccDescription:c,setAccDescription:i},j=t(e=>{h(e,A);let{axes:t,curves:n,options:r}=e;A.setAxes(t),A.setCurves(n),A.setOptions(r)},`populate`),M={parse:t(async e=>{let t=await g(`radar`,e);n.debug(t),j(t)},`parse`)},N=t((e,t,n,r)=>{let i=r.db,a=i.getAxes(),o=i.getCurves(),s=i.getOptions(),c=i.getConfig(),l=i.getDiagramTitle(),u=P(m(t),c),d=s.max??Math.max(...o.map(e=>Math.max(...e.entries))),f=s.min,p=Math.min(c.width,c.height)/2;F(u,a,p,s.ticks,s.graticule),I(u,a,p,c),L(u,a,o,f,d,s.graticule,c),B(u,o,s.showLegend,c),u.append(`text`).attr(`class`,`radarTitle`).text(l).attr(`x`,0).attr(`y`,-c.height/2-c.marginTop)},`draw`),P=t((e,t)=>{let n=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return u(e,r,n,t.useMaxWidth??!0),e.attr(`viewBox`,`0 0 ${n} ${r}`).attr(`overflow`,`visible`),e.append(`g`).attr(`transform`,`translate(${i.x}, ${i.y})`)},`drawFrame`),F=t((e,t,n,r,i)=>{if(i===`circle`)for(let t=0;t<r;t++){let i=n*(t+1)/r;e.append(`circle`).attr(`r`,i).attr(`class`,`radarGraticule`)}else if(i===`polygon`){let i=t.length;for(let a=0;a<r;a++){let o=n*(a+1)/r,s=t.map((e,t)=>{let n=2*t*Math.PI/i-Math.PI/2;return`${o*Math.cos(n)},${o*Math.sin(n)}`}).join(` `);e.append(`polygon`).attr(`points`,s).attr(`class`,`radarGraticule`)}}},`drawGraticule`),I=t((e,t,n,r)=>{let i=t.length;for(let a=0;a<i;a++){let o=t[a].label,s=2*a*Math.PI/i-Math.PI/2,c=Math.cos(s),l=Math.sin(s);e.append(`line`).attr(`x1`,0).attr(`y1`,0).attr(`x2`,n*r.axisScaleFactor*c).attr(`y2`,n*r.axisScaleFactor*l).attr(`class`,`radarAxisLine`);let u=c>.01?`start`:c<-.01?`end`:`middle`,d=l>.01?`hanging`:l<-.01?`auto`:`central`;e.append(`text`).text(o).attr(`x`,n*r.axisLabelFactor*c+4*c).attr(`y`,n*r.axisLabelFactor*l+4*l).attr(`text-anchor`,u).attr(`dominant-baseline`,d).attr(`class`,`radarAxisLabel`)}},`drawAxes`);function L(e,t,n,r,i,a,o){let s=t.length,c=Math.min(o.width,o.height)/2;n.forEach((t,n)=>{if(t.entries.length!==s)return;let l=t.entries.map((e,t)=>{let n=2*Math.PI*t/s-Math.PI/2,a=R(e,r,i,c);return{x:a*Math.cos(n),y:a*Math.sin(n)}});a===`circle`?e.append(`path`).attr(`d`,z(l,o.curveTension)).attr(`class`,`radarCurve-${n}`):a===`polygon`&&e.append(`polygon`).attr(`points`,l.map(e=>`${e.x},${e.y}`).join(` `)).attr(`class`,`radarCurve-${n}`)})}e(L,`drawCurves`),t(L,`drawCurves`);function R(e,t,n,r){return r*(Math.min(Math.max(e,t),n)-t)/(n-t)}e(R,`relativeRadius`),t(R,`relativeRadius`);function z(e,t){let n=e.length,r=`M${e[0].x},${e[0].y}`;for(let i=0;i<n;i++){let a=e[(i-1+n)%n],o=e[i],s=e[(i+1)%n],c=e[(i+2)%n],l={x:o.x+(s.x-a.x)*t,y:o.y+(s.y-a.y)*t},u={x:s.x-(c.x-o.x)*t,y:s.y-(c.y-o.y)*t};r+=` C${l.x},${l.y} ${u.x},${u.y} ${s.x},${s.y}`}return`${r} Z`}e(z,`closedRoundCurve`),t(z,`closedRoundCurve`);function B(e,t,n,r){if(!n)return;let i=(r.width/2+r.marginRight)*3/4,a=-(r.height/2+r.marginTop)*3/4;t.forEach((t,n)=>{let r=e.append(`g`).attr(`transform`,`translate(${i}, ${a+n*20})`);r.append(`rect`).attr(`width`,12).attr(`height`,12).attr(`class`,`radarLegendBox-${n}`),r.append(`text`).attr(`x`,16).attr(`y`,0).attr(`class`,`radarLegendText`).text(t.label)})}e(B,`drawLegend`),t(B,`drawLegend`);var V={draw:N},H=t((e,t)=>{let n=``;for(let r=0;r<e.THEME_COLOR_LIMIT;r++){let i=e[`cScale${r}`];n+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return n},`genIndexStyles`),U=t(e=>{let t=_(l(),o().themeVariables);return{themeVariables:t,radarOptions:_(t.radar,e)}},`buildRadarStyleOptions`),W={parser:M,db:A,renderer:V,styles:t(({radar:e}={})=>{let{themeVariables:t,radarOptions:n}=U(e);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${n.axisColor};
		stroke-width: ${n.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${n.axisLabelFontSize}px;
		color: ${n.axisColor};
	}
	.radarGraticule {
		fill: ${n.graticuleColor};
		fill-opacity: ${n.graticuleOpacity};
		stroke: ${n.graticuleColor};
		stroke-width: ${n.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${n.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${H(t,n)}
	`},`styles`)};export{W as diagram};