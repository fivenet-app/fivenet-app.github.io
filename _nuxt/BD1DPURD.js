import{_ as e,l as o,I as i,k as n,K as p}from"./Cc9StYty.js";import{p as g}from"./DARKiTqx.js";import"./4zQ8dSyU.js";import"./Cpj98o6Y.js";import"./8zMDAx2c.js";import"./CdQTyZDb.js";import"./ksDTcs36.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},D={parser:m,db:c,renderer:f};export{D as diagram};