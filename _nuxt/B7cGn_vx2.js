import{n as e}from"./6qCGA5yR.js";import{n as t}from"./D1nzEUn-.js";import"./Cayr-38q.js";import{C as n,E as r,J as i,Q as a,Y as o,b as s,l as c,o as l,x as u}from"./kxv79vUE.js";import{p as d}from"./C9XlS5Fr.js";import{t as f}from"./DGGDsJA5.js";import"./ejKqxZC6.js";import{t as p}from"./B3t0Yi0q.js";import{a as m,n as h,o as g,s as _}from"./DerwNht1.js";var v=(function(){var n=t(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),r=[6,8,10,11,12,14,16,17,18],i=[1,9],a=[1,10],o=[1,11],s=[1,12],c=[1,13],l=[1,14],u={trace:t(e(function(){},`trace`),`trace`),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:`error`,4:`journey`,6:`EOF`,8:`SPACE`,10:`NEWLINE`,11:`title`,12:`acc_title`,13:`acc_title_value`,14:`acc_descr`,15:`acc_descr_value`,16:`acc_descr_multiline_value`,17:`section`,18:`taskName`,19:`taskData`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:t(e(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 9:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 10:case 11:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 12:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 13:r.addTask(a[s-1],a[s]),this.$=`task`;break}},`anonymous`),`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},n(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:i,12:a,14:o,16:s,17:c,18:l},n(r,[2,7],{1:[2,1]}),n(r,[2,3]),{9:15,11:i,12:a,14:o,16:s,17:c,18:l},n(r,[2,5]),n(r,[2,6]),n(r,[2,8]),{13:[1,16]},{15:[1,17]},n(r,[2,11]),n(r,[2,12]),{19:[1,18]},n(r,[2,4]),n(r,[2,9]),n(r,[2,10]),n(r,[2,13])],defaultActions:{},parseError:t(e(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),`parseError`),parse:t(e(function(n){var r=this,i=[0],a=[],o=[null],s=[],c=this.table,l=``,u=0,d=0,f=0,p=2,m=1,h=s.slice.call(arguments,1),g=Object.create(this.lexer),_={yy:{}};for(var v in this.yy)Object.prototype.hasOwnProperty.call(this.yy,v)&&(_.yy[v]=this.yy[v]);g.setInput(n,_.yy),_.yy.lexer=g,_.yy.parser=this,g.yylloc===void 0&&(g.yylloc={});var y=g.yylloc;s.push(y);var b=g.options&&g.options.ranges;typeof _.yy.parseError==`function`?this.parseError=_.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function x(e){i.length-=2*e,o.length-=e,s.length-=e}e(x,`popStack`),t(x,`popStack`);function S(){var e=a.pop()||g.lex()||m;return typeof e!=`number`&&(e instanceof Array&&(a=e,e=a.pop()),e=r.symbols_[e]||e),e}e(S,`lex`),t(S,`lex`);for(var C,w,T,E,D,O={},k,A,j,M;;){if(T=i[i.length-1],this.defaultActions[T]?E=this.defaultActions[T]:(C??=S(),E=c[T]&&c[T][C]),E===void 0||!E.length||!E[0]){var N=``;for(k in M=[],c[T])this.terminals_[k]&&k>p&&M.push(`'`+this.terminals_[k]+`'`);N=g.showPosition?`Parse error on line `+(u+1)+`:
`+g.showPosition()+`
Expecting `+M.join(`, `)+`, got '`+(this.terminals_[C]||C)+`'`:`Parse error on line `+(u+1)+`: Unexpected `+(C==m?`end of input`:`'`+(this.terminals_[C]||C)+`'`),this.parseError(N,{text:g.match,token:this.terminals_[C]||C,line:g.yylineno,loc:y,expected:M})}if(E[0]instanceof Array&&E.length>1)throw Error(`Parse Error: multiple actions possible at state: `+T+`, token: `+C);switch(E[0]){case 1:i.push(C),o.push(g.yytext),s.push(g.yylloc),i.push(E[1]),C=null,w?(C=w,w=null):(d=g.yyleng,l=g.yytext,u=g.yylineno,y=g.yylloc,f>0&&f--);break;case 2:if(A=this.productions_[E[1]][1],O.$=o[o.length-A],O._$={first_line:s[s.length-(A||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(A||1)].first_column,last_column:s[s.length-1].last_column},b&&(O._$.range=[s[s.length-(A||1)].range[0],s[s.length-1].range[1]]),D=this.performAction.apply(O,[l,d,u,_.yy,E[1],o,s].concat(h)),D!==void 0)return D;A&&(i=i.slice(0,-1*A*2),o=o.slice(0,-1*A),s=s.slice(0,-1*A)),i.push(this.productions_[E[1]][0]),o.push(O.$),s.push(O._$),j=c[i[i.length-2]][i[i.length-1]],i.push(j);break;case 3:return!0}}return!0},`parse`),`parse`)};u.lexer=(function(){return{EOF:1,parseError:t(e(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),`parseError`),setInput:t(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:t(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:t(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:t(function(){return this._more=!0,this},`more`),reject:t(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:t(function(e){this.unput(this.match.slice(e))},`less`),pastInput:t(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:t(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:t(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:t(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:t(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}else return!1}else if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e!==!1&&e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:t(e(function(){return this.next()||this.lex()},`lex`),`lex`),begin:t(e(function(e){this.conditionStack.push(e)},`begin`),`begin`),popState:t(e(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),`popState`),_currentRules:t(e(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),`_currentRules`),topState:t(e(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),`topState`),pushState:t(e(function(e){this.begin(e)},`pushState`),`pushState`),stateStackSize:t(e(function(){return this.conditionStack.length},`stateStackSize`),`stateStackSize`),options:{"case-insensitive":!0},performAction:t(e(function(e,t,n,r){switch(n){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin(`acc_title`),12;case 8:return this.popState(),`acc_title_value`;case 9:return this.begin(`acc_descr`),14;case 10:return this.popState(),`acc_descr_value`;case 11:this.begin(`acc_descr_multiline`);break;case 12:this.popState();break;case 13:return`acc_descr_multiline_value`;case 14:return 17;case 15:return 18;case 16:return 19;case 17:return`:`;case 18:return 6;case 19:return`INVALID`}},`anonymous`),`anonymous`),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}}})();function d(){this.yy={}}return e(d,`Parser`),t(d,`Parser`),d.prototype=u,u.Parser=d,new d})();v.parser=v;var y=v,b=``,x=[],S=[],C=[],w=t(function(){x.length=0,S.length=0,b=``,C.length=0,l()},`clear`),T=t(function(e){b=e,x.push(e)},`addSection`),E=t(function(){return x},`getSections`),D=t(function(){let e=j(),t=0;for(;!e&&t<100;)e=j(),t++;return S.push(...C),S},`getTasks`),O=t(function(){let e=[];return S.forEach(t=>{t.people&&e.push(...t.people)}),[...new Set(e)].sort()},`updateActors`),k=t(function(e,t){let n=t.substr(1).split(`:`),r=0,i=[];n.length===1?(r=Number(n[0]),i=[]):(r=Number(n[0]),i=n[1].split(`,`));let a=i.map(e=>e.trim()),o={section:b,type:b,people:a,task:e,score:r};C.push(o)},`addTask`),A=t(function(e){let t={section:b,type:b,description:e,task:e,classes:[]};S.push(t)},`addTaskOrg`),j=t(function(){let e=t(function(e){return C[e].processed},`compileTask`),n=!0;for(let[t,r]of C.entries())e(t),n&&=r.processed;return n},`compileTasks`),M={getConfig:t(()=>n().journey,`getConfig`),clear:w,setDiagramTitle:a,getDiagramTitle:r,setAccTitle:o,getAccTitle:u,setAccDescription:i,getAccDescription:s,addSection:T,getSections:E,getTasks:D,addTask:k,addTaskOrg:A,getActors:t(function(){return O()},`getActors`)},N=t(e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${e.textColor}
  }

  .legend {
    fill: ${e.textColor};
    font-family: ${e.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${e.textColor}
  }

  .face {
    ${e.faceColor?`fill: ${e.faceColor}`:`fill: #FFF8DC`};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${e.fillType0?`fill: ${e.fillType0}`:``};
  }
  .task-type-1, .section-type-1  {
    ${e.fillType0?`fill: ${e.fillType1}`:``};
  }
  .task-type-2, .section-type-2  {
    ${e.fillType0?`fill: ${e.fillType2}`:``};
  }
  .task-type-3, .section-type-3  {
    ${e.fillType0?`fill: ${e.fillType3}`:``};
  }
  .task-type-4, .section-type-4  {
    ${e.fillType0?`fill: ${e.fillType4}`:``};
  }
  .task-type-5, .section-type-5  {
    ${e.fillType0?`fill: ${e.fillType5}`:``};
  }
  .task-type-6, .section-type-6  {
    ${e.fillType0?`fill: ${e.fillType6}`:``};
  }
  .task-type-7, .section-type-7  {
    ${e.fillType0?`fill: ${e.fillType7}`:``};
  }

  .actor-0 {
    ${e.actor0?`fill: ${e.actor0}`:``};
  }
  .actor-1 {
    ${e.actor1?`fill: ${e.actor1}`:``};
  }
  .actor-2 {
    ${e.actor2?`fill: ${e.actor2}`:``};
  }
  .actor-3 {
    ${e.actor3?`fill: ${e.actor3}`:``};
  }
  .actor-4 {
    ${e.actor4?`fill: ${e.actor4}`:``};
  }
  .actor-5 {
    ${e.actor5?`fill: ${e.actor5}`:``};
  }
  ${p()}
`,`getStyles`),P=t(function(e,t){return m(e,t)},`drawRect`),F=t(function(n,r){let i=n.append(`circle`).attr(`cx`,r.cx).attr(`cy`,r.cy).attr(`class`,`face`).attr(`r`,15).attr(`stroke-width`,2).attr(`overflow`,`visible`),a=n.append(`g`);a.append(`circle`).attr(`cx`,r.cx-15/3).attr(`cy`,r.cy-15/3).attr(`r`,1.5).attr(`stroke-width`,2).attr(`fill`,`#666`).attr(`stroke`,`#666`),a.append(`circle`).attr(`cx`,r.cx+15/3).attr(`cy`,r.cy-15/3).attr(`r`,1.5).attr(`stroke-width`,2).attr(`fill`,`#666`).attr(`stroke`,`#666`);function o(e){let t=f().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(15/2).outerRadius(15/2.2);e.append(`path`).attr(`class`,`mouth`).attr(`d`,t).attr(`transform`,`translate(`+r.cx+`,`+(r.cy+2)+`)`)}e(o,`smile`),t(o,`smile`);function s(e){let t=f().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(15/2).outerRadius(15/2.2);e.append(`path`).attr(`class`,`mouth`).attr(`d`,t).attr(`transform`,`translate(`+r.cx+`,`+(r.cy+7)+`)`)}e(s,`sad`),t(s,`sad`);function c(e){e.append(`line`).attr(`class`,`mouth`).attr(`stroke`,2).attr(`x1`,r.cx-5).attr(`y1`,r.cy+7).attr(`x2`,r.cx+5).attr(`y2`,r.cy+7).attr(`class`,`mouth`).attr(`stroke-width`,`1px`).attr(`stroke`,`#666`)}return e(c,`ambivalent`),t(c,`ambivalent`),r.score>3?o(a):r.score<3?s(a):c(a),i},`drawFace`),I=t(function(e,t){let n=e.append(`circle`);return n.attr(`cx`,t.cx),n.attr(`cy`,t.cy),n.attr(`class`,`actor-`+t.pos),n.attr(`fill`,t.fill),n.attr(`stroke`,t.stroke),n.attr(`r`,t.r),n.class!==void 0&&n.attr(`class`,n.class),t.title!==void 0&&n.append(`title`).text(t.title),n},`drawCircle`),L=t(function(e,t){return g(e,t)},`drawText`),ee=t(function(n,r){function i(e,t,n,r,i){return e+`,`+t+` `+(e+n)+`,`+t+` `+(e+n)+`,`+(t+r-i)+` `+(e+n-i*1.2)+`,`+(t+r)+` `+e+`,`+(t+r)}e(i,`genPoints`),t(i,`genPoints`);let a=n.append(`polygon`);a.attr(`points`,i(r.x,r.y,50,20,7)),a.attr(`class`,`labelBox`),r.y+=r.labelMargin,r.x+=.5*r.labelMargin,L(n,r)},`drawLabel`),R=t(function(e,t,n){let r=e.append(`g`),i=_();i.x=t.x,i.y=t.y,i.fill=t.fill,i.width=n.width*t.taskCount+n.diagramMarginX*(t.taskCount-1),i.height=n.height,i.class=`journey-section section-type-`+t.num,i.rx=3,i.ry=3,P(r,i),H(n)(t.text,r,i.x,i.y,i.width,i.height,{class:`journey-section section-type-`+t.num},n,t.colour)},`drawSection`),z=-1,B=t(function(e,t,n,r){let i=t.x+n.width/2,a=e.append(`g`);z++,a.append(`line`).attr(`id`,r+`-task`+z).attr(`x1`,i).attr(`y1`,t.y).attr(`x2`,i).attr(`y2`,450).attr(`class`,`task-line`).attr(`stroke-width`,`1px`).attr(`stroke-dasharray`,`4 2`).attr(`stroke`,`#666`),F(a,{cx:i,cy:300+(5-t.score)*30,score:t.score});let o=_();o.x=t.x,o.y=t.y,o.fill=t.fill,o.width=n.width,o.height=n.height,o.class=`task task-type-`+t.num,o.rx=3,o.ry=3,P(a,o);let s=t.x+14;t.people.forEach(e=>{let n=t.actors[e].color,r={cx:s,cy:t.y,r:7,fill:n,stroke:`#000`,title:e,pos:t.actors[e].position};I(a,r),s+=10}),H(n)(t.task,a,o.x,o.y,o.width,o.height,{class:`task`},n,t.colour)},`drawTask`),V=t(function(e,t){h(e,t)},`drawBackgroundRect`),H=(function(){function n(e,t,n,r,i,o,s,c){a(t.append(`text`).attr(`x`,n+i/2).attr(`y`,r+o/2+5).style(`font-color`,c).style(`text-anchor`,`middle`).text(e),s)}e(n,`byText`),t(n,`byText`);function r(e,t,n,r,i,o,s,c,l){let{taskFontSize:u,taskFontFamily:d}=c,f=e.split(/<br\s*\/?>/gi);for(let e=0;e<f.length;e++){let c=e*u-u*(f.length-1)/2,p=t.append(`text`).attr(`x`,n+i/2).attr(`y`,r).attr(`fill`,l).style(`text-anchor`,`middle`).style(`font-size`,u).style(`font-family`,d);p.append(`tspan`).attr(`x`,n+i/2).attr(`dy`,c).text(f[e]),p.attr(`y`,r+o/2).attr(`dominant-baseline`,`central`).attr(`alignment-baseline`,`central`),a(p,s)}}e(r,`byTspan`),t(r,`byTspan`);function i(e,t,n,i,o,s,c,l){let u=t.append(`switch`),d=u.append(`foreignObject`).attr(`x`,n).attr(`y`,i).attr(`width`,o).attr(`height`,s).attr(`position`,`fixed`).append(`xhtml:div`).style(`display`,`table`).style(`height`,`100%`).style(`width`,`100%`);d.append(`div`).attr(`class`,`label`).style(`display`,`table-cell`).style(`text-align`,`center`).style(`vertical-align`,`middle`).text(e),r(e,u,n,i,o,s,c,l),a(d,c)}e(i,`byFo`),t(i,`byFo`);function a(e,t){for(let n in t)n in t&&e.attr(n,t[n])}return e(a,`_setTextAttrs`),t(a,`_setTextAttrs`),function(e){return e.textPlacement===`fo`?i:e.textPlacement===`old`?n:r}})(),U={drawRect:P,drawCircle:I,drawSection:R,drawText:L,drawLabel:ee,drawTask:B,drawBackgroundRect:V,initGraphics:t(function(e,t){z=-1,e.append(`defs`).append(`marker`).attr(`id`,t+`-arrowhead`).attr(`refX`,5).attr(`refY`,2).attr(`markerWidth`,6).attr(`markerHeight`,4).attr(`orient`,`auto`).append(`path`).attr(`d`,`M 0,0 V 4 L6,2 Z`)},`initGraphics`)},W=t(function(e){Object.keys(e).forEach(function(t){J[t]=e[t]})},`setConf`),G={},K=0;function q(e){let t=n().journey,r=t.maxLabelWidth;K=0;let i=60;Object.keys(G).forEach(n=>{let a=G[n].color,o={cx:20,cy:i,r:7,fill:a,stroke:`#000`,pos:G[n].position};U.drawCircle(e,o);let s=e.append(`text`).attr(`visibility`,`hidden`).text(n),c=s.node().getBoundingClientRect().width;s.remove();let l=[];if(c<=r)l=[n];else{let t=n.split(` `),i=``;s=e.append(`text`).attr(`visibility`,`hidden`),t.forEach(e=>{let t=i?`${i} ${e}`:e;if(s.text(t),s.node().getBoundingClientRect().width>r){if(i&&l.push(i),i=e,s.text(e),s.node().getBoundingClientRect().width>r){let t=``;for(let n of e)t+=n,s.text(t+`-`),s.node().getBoundingClientRect().width>r&&(l.push(t.slice(0,-1)+`-`),t=n);i=t}}else i=t}),i&&l.push(i),s.remove()}l.forEach((n,r)=>{let a={x:40,y:i+7+r*20,fill:`#666`,text:n,textMargin:t.boxTextMargin??5},o=U.drawText(e,a).node().getBoundingClientRect().width;o>K&&o>t.leftMargin-o&&(K=o)}),i+=Math.max(20,l.length*20)})}e(q,`drawActorLegend`),t(q,`drawActorLegend`);var J=n().journey,Y=0,te=t(function(e,t,r,i){let a=n(),o=a.journey.titleColor,s=a.journey.titleFontSize,l=a.journey.titleFontFamily,u=a.securityLevel,f;u===`sandbox`&&(f=d(`#i`+t));let p=d(u===`sandbox`?f.nodes()[0].contentDocument.body:`body`);X.init();let m=p.select(`#`+t);U.initGraphics(m,t);let h=i.db.getTasks(),g=i.db.getDiagramTitle(),_=i.db.getActors();for(let e in G)delete G[e];let v=0;_.forEach(e=>{G[e]={color:J.actorColours[v%J.actorColours.length],position:v},v++}),q(m),Y=J.leftMargin+K,X.insert(0,0,Y,Object.keys(G).length*50),ne(m,h,0,t);let y=X.getBounds();g&&m.append(`text`).text(g).attr(`x`,Y).attr(`font-size`,s).attr(`font-weight`,`bold`).attr(`y`,25).attr(`fill`,o).attr(`font-family`,l);let b=y.stopy-y.starty+2*J.diagramMarginY,x=Y+y.stopx+2*J.diagramMarginX;c(m,b,x,J.useMaxWidth),m.append(`line`).attr(`x1`,Y).attr(`y1`,J.height*4).attr(`x2`,x-Y-4).attr(`y2`,J.height*4).attr(`stroke-width`,4).attr(`stroke`,`black`).attr(`marker-end`,`url(#`+t+`-arrowhead)`);let S=g?70:0;m.attr(`viewBox`,`${y.startx} -25 ${x} ${b+S}`),m.attr(`preserveAspectRatio`,`xMinYMin meet`),m.attr(`height`,b+S+25)},`draw`),X={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:t(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},`init`),updateVal:t(function(e,t,n,r){e[t]===void 0?e[t]=n:e[t]=r(n,e[t])},`updateVal`),updateBounds:t(function(r,i,a,o){let s=n().journey,c=this,l=0;function u(n){return t(e(function(e){l++;let t=c.sequenceItems.length-l+1;c.updateVal(e,`starty`,i-t*s.boxMargin,Math.min),c.updateVal(e,`stopy`,o+t*s.boxMargin,Math.max),c.updateVal(X.data,`startx`,r-t*s.boxMargin,Math.min),c.updateVal(X.data,`stopx`,a+t*s.boxMargin,Math.max),n!==`activation`&&(c.updateVal(e,`startx`,r-t*s.boxMargin,Math.min),c.updateVal(e,`stopx`,a+t*s.boxMargin,Math.max),c.updateVal(X.data,`starty`,i-t*s.boxMargin,Math.min),c.updateVal(X.data,`stopy`,o+t*s.boxMargin,Math.max))},`updateItemBounds`),`updateItemBounds`)}e(u,`updateFn`),t(u,`updateFn`),this.sequenceItems.forEach(u())},`updateBounds`),insert:t(function(e,t,n,r){let i=Math.min(e,n),a=Math.max(e,n),o=Math.min(t,r),s=Math.max(t,r);this.updateVal(X.data,`startx`,i,Math.min),this.updateVal(X.data,`starty`,o,Math.min),this.updateVal(X.data,`stopx`,a,Math.max),this.updateVal(X.data,`stopy`,s,Math.max),this.updateBounds(i,o,a,s)},`insert`),bumpVerticalPos:t(function(e){this.verticalPos+=e,this.data.stopy=this.verticalPos},`bumpVerticalPos`),getVerticalPos:t(function(){return this.verticalPos},`getVerticalPos`),getBounds:t(function(){return this.data},`getBounds`)},Z=J.sectionFills,Q=J.sectionColours,ne=t(function(e,t,r,i){let a=n().journey,o=``,s=r+(a.height*2+a.diagramMarginY),c=0,l=`#CCC`,u=`black`,d=0;for(let[n,r]of t.entries()){if(o!==r.section){l=Z[c%Z.length],d=c%Z.length,u=Q[c%Q.length];let i=0,s=r.section;for(let e=n;e<t.length&&t[e].section==s;e++)i+=1;let f={x:n*a.taskMargin+n*a.width+Y,y:50,text:r.section,fill:l,num:d,colour:u,taskCount:i};U.drawSection(e,f,a),o=r.section,c++}let f=r.people.reduce((e,t)=>(G[t]&&(e[t]=G[t]),e),{});r.x=n*a.taskMargin+n*a.width+Y,r.y=s,r.width=a.diagramMarginX,r.height=a.diagramMarginY,r.colour=u,r.fill=l,r.num=d,r.actors=f,U.drawTask(e,r,a,i),X.insert(r.x,r.y,r.x+r.width+a.taskMargin,450)}},`drawTasks`),$={setConf:W,draw:te},re={parser:y,db:M,renderer:$,styles:N,init:t(e=>{$.setConf(e.journey),M.clear()},`init`)};export{re as diagram};