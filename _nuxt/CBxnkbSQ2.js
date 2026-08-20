import{n as e,r as t,t as n}from"./6qCGA5yR.js";import{n as r}from"./D1nzEUn-.js";import{n as i,t as a}from"./Cayr-38q.js";import{C as o,E as s,J as c,Q as l,Y as u,b as d,c as f,l as p,o as m,x as h}from"./kxv79vUE.js";import{t as g}from"./B44xdKbd.js";import{_,a as v,b as y,c as b,d as x,f as S,g as C,h as w,i as T,l as E,m as D,n as O,o as k,p as A,r as ee,s as j,t as te,u as M,v as ne,y as re}from"./CJ4fosJC.js";import{p as ie}from"./C9XlS5Fr.js";import{t as N}from"./ejKqxZC6.js";import{v as P}from"./Doh4pvOO.js";var F=n({"../../node_modules/.pnpm/dayjs@1.11.21/node_modules/dayjs/plugin/isoWeek.js"(t,n){(function(e,r){typeof t==`object`&&n!==void 0?n.exports=r():typeof define==`function`&&define.amd?define(r):(e=typeof globalThis<`u`?globalThis:e||self).dayjs_plugin_isoWeek=r()})(t,(function(){return function(t,n,r){var i=e(function(e){return e.add(4-e.isoWeekday(),`day`)},`a`),a=n.prototype;a.isoWeekYear=function(){return i(this).year()},a.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),`day`);var t,n,a,o,s=i(this),c=(t=this.isoWeekYear(),n=this.$u,a=(n?r.utc:r)().year(t).startOf(`year`),o=4-a.isoWeekday(),a.isoWeekday()>4&&(o+=7),a.add(o,`day`));return s.diff(c,`week`)+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var o=a.startOf;a.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return n.p(e)===`isoweek`?r?this.date(this.date()-(this.isoWeekday()-1)).startOf(`day`):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf(`day`):o.bind(this)(e,t)}}}))}}),ae=n({"../../node_modules/.pnpm/dayjs@1.11.21/node_modules/dayjs/plugin/customParseFormat.js"(t,n){(function(e,r){typeof t==`object`&&n!==void 0?n.exports=r():typeof define==`function`&&define.amd?define(r):(e=typeof globalThis<`u`?globalThis:e||self).dayjs_plugin_customParseFormat=r()})(t,(function(){var t={LTS:`h:mm:ss A`,LT:`h:mm A`,L:`MM/DD/YYYY`,LL:`MMMM D, YYYY`,LLL:`MMMM D, YYYY h:mm A`,LLLL:`dddd, MMMM D, YYYY h:mm A`},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,i=/\d\d/,a=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},c=e(function(e){return(e=+e)+(e>68?1900:2e3)},`a`),l=e(function(e){return function(t){this[e]=+t}},`f`),u=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||={}).offset=(function(e){if(!e||e===`Z`)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return n===0?0:t[0]===`+`?-n:n})(e)}],d=e(function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},`u`),f=e(function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?`pm`:`PM`);return n},`d`),p={A:[o,function(e){this.afternoon=f(e,!1)}],a:[o,function(e){this.afternoon=f(e,!0)}],Q:[r,function(e){this.month=3*(e-1)+1}],S:[r,function(e){this.milliseconds=100*e}],SS:[i,function(e){this.milliseconds=10*e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[a,l(`seconds`)],ss:[a,l(`seconds`)],m:[a,l(`minutes`)],mm:[a,l(`minutes`)],H:[a,l(`hours`)],h:[a,l(`hours`)],HH:[a,l(`hours`)],hh:[a,l(`hours`)],D:[a,l(`day`)],DD:[i,l(`day`)],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,``)===e&&(this.day=r)}],w:[a,l(`week`)],ww:[i,l(`week`)],M:[a,l(`month`)],MM:[i,l(`month`)],MMM:[o,function(e){var t=d(`months`),n=(d(`monthsShort`)||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw Error();this.month=n%12||n}],MMMM:[o,function(e){var t=d(`months`).indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,l(`year`)],YY:[i,function(e){this.year=c(e)}],YYYY:[/\d{4}/,l(`year`)],Z:u,ZZ:u};function m(e){for(var r=e,i=s&&s.formats,a=(e=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var a=r&&r.toUpperCase();return n||i[r]||t[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(n),o=a.length,c=0;c<o;c+=1){var l=a[c],u=p[l],d=u&&u[0],f=u&&u[1];a[c]=f?{regex:d,parser:f}:l.replace(/^\[|\]$/g,``)}return function(e){for(var t={},n=0,r=0;n<o;n+=1){var i=a[n];if(typeof i==`string`)r+=i.length;else{var s=i.regex,c=i.parser,l=e.slice(r),u=s.exec(l)[0];c.call(t,u),e=e.replace(u,``)}}return(function(e){var t=e.afternoon;if(t!==void 0){var n=e.hours;t?n<12&&(e.hours+=12):n===12&&(e.hours=0),delete e.afternoon}})(t),t}}return e(m,`l`),function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(c=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var o=a[1];if(typeof o==`string`){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),s=this.$locale(),!c&&d&&(s=n.Ls[d]),this.$d=(function(e,t,n,r){try{if([`x`,`X`].indexOf(t)>-1)return new Date((t===`X`?1e3:1)*e);var i=m(t)(e),a=i.year,o=i.month,s=i.day,c=i.hours,l=i.minutes,u=i.seconds,d=i.milliseconds,f=i.zone,p=i.week,h=new Date,g=s||(a||o?1:h.getDate()),_=a||h.getFullYear(),v=0;a&&!o||(v=o>0?o-1:h.getMonth());var y,b=c||0,x=l||0,S=u||0,C=d||0;return f?new Date(Date.UTC(_,v,g,b,x,S,C+60*f.offset*1e3)):n?new Date(Date.UTC(_,v,g,b,x,S,C)):(y=new Date(_,v,g,b,x,S,C),p&&(y=r(y).week(p).toDate()),y)}catch{return new Date(``)}})(t,o,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(o)&&(this.$d=new Date(``)),s={}}else if(o instanceof Array)for(var f=o.length,p=1;p<=f;p+=1){a[1]=o[p-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}p===f&&(this.$d=new Date(``))}else i.call(this,e)}}}))}}),I=n({"../../node_modules/.pnpm/dayjs@1.11.21/node_modules/dayjs/plugin/advancedFormat.js"(e,t){(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_advancedFormat=r()})(e,(function(){return function(e,t){var n=t.prototype,r=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return r.bind(this)(e);var i=this.$utils(),a=(e||`YYYY-MM-DDTHH:mm:ssZ`).replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case`Q`:return Math.ceil((t.$M+1)/3);case`Do`:return n.ordinal(t.$D);case`gggg`:return t.weekYear();case`GGGG`:return t.isoWeekYear();case`wo`:return n.ordinal(t.week(),`W`);case`w`:case`ww`:return i.s(t.week(),e===`w`?1:2,`0`);case`W`:case`WW`:return i.s(t.isoWeek(),e===`W`?1:2,`0`);case`k`:case`kk`:return i.s(String(t.$H===0?24:t.$H),e===`k`?1:2,`0`);case`X`:return Math.floor(t.$d.getTime()/1e3);case`x`:return t.$d.getTime();case`z`:return`[`+t.offsetName()+`]`;case`zzz`:return`[`+t.offsetName(`long`)+`]`;default:return e}}));return r.bind(this)(a)}}}))}}),L=n({"../../node_modules/.pnpm/dayjs@1.11.21/node_modules/dayjs/plugin/duration.js"(t,n){(function(e,r){typeof t==`object`&&n!==void 0?n.exports=r():typeof define==`function`&&define.amd?define(r):(e=typeof globalThis<`u`?globalThis:e||self).dayjs_plugin_duration=r()})(t,(function(){var t,n,r=1e3,i=6e4,a=36e5,o=864e5,s=31536e6,c=2628e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,d={years:s,months:c,days:o,hours:a,minutes:i,seconds:r,milliseconds:1,weeks:6048e5},f=e(function(e){return e instanceof y},`c`),p=e(function(e,t,n){return new y(e,n,t.$l)},`f`),m=e(function(e){return n.p(e)+`s`},`m`),h=e(function(e){return e<0},`l`),g=e(function(e){return h(e)?Math.ceil(e):Math.floor(e)},`$`),_=e(function(e){return Math.abs(e)},`y`),v=e(function(e,t){return e?h(e)?{negative:!0,format:``+_(e)+t}:{negative:!1,format:``+e+t}:{negative:!1,format:``}},`v`),y=(function(){function h(e,t,n){var r=this;if(this.$d={},this.$l=n,e===void 0&&(this.$ms=0,this.parseFromMilliseconds()),t)return p(e*d[m(t)],this);if(typeof e==`number`)return this.$ms=e,this.parseFromMilliseconds(),this;if(typeof e==`object`)return Object.keys(e).forEach((function(t){r.$d[m(t)]=e[t]})),this.calMilliseconds(),this;if(typeof e==`string`){var i=e.match(l);if(i){var a=i.slice(2).map((function(e){return e==null?0:Number(e)}));return this.$d.years=a[0],this.$d.months=a[1],this.$d.weeks=a[2],this.$d.days=a[3],this.$d.hours=a[4],this.$d.minutes=a[5],this.$d.seconds=a[6],this.calMilliseconds(),this}}return this}e(h,`l`);var _=h.prototype;return _.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*d[n]}),0)},_.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=g(e/s),e%=s,this.$d.months=g(e/c),e%=c,this.$d.days=g(e/o),e%=o,this.$d.hours=g(e/a),e%=a,this.$d.minutes=g(e/i),e%=i,this.$d.seconds=g(e/r),e%=r,this.$d.milliseconds=e},_.toISOString=function(){var e=v(this.$d.years,`Y`),t=v(this.$d.months,`M`),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var r=v(n,`D`),i=v(this.$d.hours,`H`),a=v(this.$d.minutes,`M`),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var s=v(o,`S`),c=e.negative||t.negative||r.negative||i.negative||a.negative||s.negative,l=i.format||a.format||s.format?`T`:``,u=(c?`-`:``)+`P`+e.format+t.format+r.format+l+i.format+a.format+s.format;return u===`P`||u===`-P`?`P0D`:u},_.toJSON=function(){return this.toISOString()},_.format=function(e){var t=e||`YYYY-MM-DDTHH:mm:ss`,r={Y:this.$d.years,YY:n.s(this.$d.years,2,`0`),YYYY:n.s(this.$d.years,4,`0`),M:this.$d.months,MM:n.s(this.$d.months,2,`0`),D:this.$d.days,DD:n.s(this.$d.days,2,`0`),H:this.$d.hours,HH:n.s(this.$d.hours,2,`0`),m:this.$d.minutes,mm:n.s(this.$d.minutes,2,`0`),s:this.$d.seconds,ss:n.s(this.$d.seconds,2,`0`),SSS:n.s(this.$d.milliseconds,3,`0`)};return t.replace(u,(function(e,t){return t||String(r[e])}))},_.as=function(e){return this.$ms/d[m(e)]},_.get=function(e){var t=this.$ms,n=m(e);return n===`milliseconds`?t%=1e3:t=n===`weeks`?g(t/d[n]):this.$d[n],t||0},_.add=function(e,t,n){var r;return r=t?e*d[m(t)]:f(e)?e.$ms:p(e,this).$ms,p(this.$ms+r*(n?-1:1),this)},_.subtract=function(e,t){return this.add(e,t,!0)},_.locale=function(e){var t=this.clone();return t.$l=e,t},_.clone=function(){return p(this.$ms,this)},_.humanize=function(e){return t().add(this.$ms,`ms`).locale(this.$l).fromNow(!e)},_.valueOf=function(){return this.asMilliseconds()},_.milliseconds=function(){return this.get(`milliseconds`)},_.asMilliseconds=function(){return this.as(`milliseconds`)},_.seconds=function(){return this.get(`seconds`)},_.asSeconds=function(){return this.as(`seconds`)},_.minutes=function(){return this.get(`minutes`)},_.asMinutes=function(){return this.as(`minutes`)},_.hours=function(){return this.get(`hours`)},_.asHours=function(){return this.as(`hours`)},_.days=function(){return this.get(`days`)},_.asDays=function(){return this.as(`days`)},_.weeks=function(){return this.get(`weeks`)},_.asWeeks=function(){return this.as(`weeks`)},_.months=function(){return this.get(`months`)},_.asMonths=function(){return this.as(`months`)},_.years=function(){return this.get(`years`)},_.asYears=function(){return this.as(`years`)},h})(),b=e(function(e,t,n){return e.add(t.years()*n,`y`).add(t.months()*n,`M`).add(t.days()*n,`d`).add(t.hours()*n,`h`).add(t.minutes()*n,`m`).add(t.seconds()*n,`s`).add(t.milliseconds()*n,`ms`)},`p`);return function(e,r,i){t=i,n=i().$utils(),i.duration=function(e,t){return p(e,{$l:i.locale()},t)},i.isDuration=f;var a=r.prototype.add,o=r.prototype.subtract;r.prototype.add=function(e,t){return f(e)?b(this,e,1):a.bind(this)(e,t)},r.prototype.subtract=function(e,t){return f(e)?b(this,e,-1):o.bind(this)(e,t)}}}))}}),R=t(N(),1),z=t(i(),1),B=t(F(),1),oe=t(ae(),1),se=t(I(),1),V=t(i(),1),ce=t(L(),1),le=(function(){var t=r(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),n=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],a=[1,27],o=[1,28],s=[1,29],c=[1,30],l=[1,31],u=[1,32],d=[1,33],f=[1,34],p=[1,9],m=[1,10],h=[1,11],g=[1,12],_=[1,13],v=[1,14],y=[1,15],b=[1,16],x=[1,19],S=[1,20],C=[1,21],w=[1,22],T=[1,23],E=[1,25],D=[1,35],O={trace:r(e(function(){},`trace`),`trace`),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:`error`,4:`gantt`,6:`EOF`,8:`SPACE`,10:`NL`,12:`weekday_monday`,13:`weekday_tuesday`,14:`weekday_wednesday`,15:`weekday_thursday`,16:`weekday_friday`,17:`weekday_saturday`,18:`weekday_sunday`,20:`weekend_friday`,21:`weekend_saturday`,22:`dateFormat`,23:`inclusiveEndDates`,24:`topAxis`,25:`axisFormat`,26:`tickInterval`,27:`excludes`,28:`includes`,29:`todayMarker`,30:`title`,31:`acc_title`,32:`acc_title_value`,33:`acc_descr`,34:`acc_descr_value`,35:`acc_descr_multiline_value`,36:`section`,38:`taskTxt`,39:`taskData`,40:`click`,41:`callbackname`,42:`callbackargs`,43:`href`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:r(e(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setWeekday(`monday`);break;case 9:r.setWeekday(`tuesday`);break;case 10:r.setWeekday(`wednesday`);break;case 11:r.setWeekday(`thursday`);break;case 12:r.setWeekday(`friday`);break;case 13:r.setWeekday(`saturday`);break;case 14:r.setWeekday(`sunday`);break;case 15:r.setWeekend(`friday`);break;case 16:r.setWeekend(`saturday`);break;case 17:r.setDateFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 18:r.enableInclusiveEndDates(),this.$=a[s].substr(18);break;case 19:r.TopAxis(),this.$=a[s].substr(8);break;case 20:r.setAxisFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 21:r.setTickInterval(a[s].substr(13)),this.$=a[s].substr(13);break;case 22:r.setExcludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 23:r.setIncludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 24:r.setTodayMarker(a[s].substr(12)),this.$=a[s].substr(12);break;case 27:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 28:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 29:case 30:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 31:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 33:r.addTask(a[s-1],a[s]),this.$=`task`;break;case 34:this.$=a[s-1],r.setClickEvent(a[s-1],a[s],null);break;case 35:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],a[s]);break;case 36:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],null),r.setLink(a[s-2],a[s]);break;case 37:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-2],a[s-1]),r.setLink(a[s-3],a[s]);break;case 38:this.$=a[s-2],r.setClickEvent(a[s-2],a[s],null),r.setLink(a[s-2],a[s-1]);break;case 39:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-1],a[s]),r.setLink(a[s-3],a[s-2]);break;case 40:this.$=a[s-1],r.setLink(a[s-1],a[s]);break;case 41:case 47:this.$=a[s-1]+` `+a[s];break;case 42:case 43:case 45:this.$=a[s-2]+` `+a[s-1]+` `+a[s];break;case 44:case 46:this.$=a[s-3]+` `+a[s-2]+` `+a[s-1]+` `+a[s];break}},`anonymous`),`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},t(n,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:a,14:o,15:s,16:c,17:l,18:u,19:18,20:d,21:f,22:p,23:m,24:h,25:g,26:_,27:v,28:y,29:b,30:x,31:S,33:C,35:w,36:T,37:24,38:E,40:D},t(n,[2,7],{1:[2,1]}),t(n,[2,3]),{9:36,11:17,12:i,13:a,14:o,15:s,16:c,17:l,18:u,19:18,20:d,21:f,22:p,23:m,24:h,25:g,26:_,27:v,28:y,29:b,30:x,31:S,33:C,35:w,36:T,37:24,38:E,40:D},t(n,[2,5]),t(n,[2,6]),t(n,[2,17]),t(n,[2,18]),t(n,[2,19]),t(n,[2,20]),t(n,[2,21]),t(n,[2,22]),t(n,[2,23]),t(n,[2,24]),t(n,[2,25]),t(n,[2,26]),t(n,[2,27]),{32:[1,37]},{34:[1,38]},t(n,[2,30]),t(n,[2,31]),t(n,[2,32]),{39:[1,39]},t(n,[2,8]),t(n,[2,9]),t(n,[2,10]),t(n,[2,11]),t(n,[2,12]),t(n,[2,13]),t(n,[2,14]),t(n,[2,15]),t(n,[2,16]),{41:[1,40],43:[1,41]},t(n,[2,4]),t(n,[2,28]),t(n,[2,29]),t(n,[2,33]),t(n,[2,34],{42:[1,42],43:[1,43]}),t(n,[2,40],{41:[1,44]}),t(n,[2,35],{43:[1,45]}),t(n,[2,36]),t(n,[2,38],{42:[1,46]}),t(n,[2,37]),t(n,[2,39])],defaultActions:{},parseError:r(e(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),`parseError`),parse:r(e(function(t){var n=this,i=[0],a=[],o=[null],s=[],c=this.table,l=``,u=0,d=0,f=0,p=2,m=1,h=s.slice.call(arguments,1),g=Object.create(this.lexer),_={yy:{}};for(var v in this.yy)Object.prototype.hasOwnProperty.call(this.yy,v)&&(_.yy[v]=this.yy[v]);g.setInput(t,_.yy),_.yy.lexer=g,_.yy.parser=this,g.yylloc===void 0&&(g.yylloc={});var y=g.yylloc;s.push(y);var b=g.options&&g.options.ranges;typeof _.yy.parseError==`function`?this.parseError=_.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function x(e){i.length-=2*e,o.length-=e,s.length-=e}e(x,`popStack`),r(x,`popStack`);function S(){var e=a.pop()||g.lex()||m;return typeof e!=`number`&&(e instanceof Array&&(a=e,e=a.pop()),e=n.symbols_[e]||e),e}e(S,`lex`),r(S,`lex`);for(var C,w,T,E,D,O={},k,A,ee,j;;){if(T=i[i.length-1],this.defaultActions[T]?E=this.defaultActions[T]:(C??=S(),E=c[T]&&c[T][C]),E===void 0||!E.length||!E[0]){var te=``;for(k in j=[],c[T])this.terminals_[k]&&k>p&&j.push(`'`+this.terminals_[k]+`'`);te=g.showPosition?`Parse error on line `+(u+1)+`:
`+g.showPosition()+`
Expecting `+j.join(`, `)+`, got '`+(this.terminals_[C]||C)+`'`:`Parse error on line `+(u+1)+`: Unexpected `+(C==m?`end of input`:`'`+(this.terminals_[C]||C)+`'`),this.parseError(te,{text:g.match,token:this.terminals_[C]||C,line:g.yylineno,loc:y,expected:j})}if(E[0]instanceof Array&&E.length>1)throw Error(`Parse Error: multiple actions possible at state: `+T+`, token: `+C);switch(E[0]){case 1:i.push(C),o.push(g.yytext),s.push(g.yylloc),i.push(E[1]),C=null,w?(C=w,w=null):(d=g.yyleng,l=g.yytext,u=g.yylineno,y=g.yylloc,f>0&&f--);break;case 2:if(A=this.productions_[E[1]][1],O.$=o[o.length-A],O._$={first_line:s[s.length-(A||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(A||1)].first_column,last_column:s[s.length-1].last_column},b&&(O._$.range=[s[s.length-(A||1)].range[0],s[s.length-1].range[1]]),D=this.performAction.apply(O,[l,d,u,_.yy,E[1],o,s].concat(h)),D!==void 0)return D;A&&(i=i.slice(0,-1*A*2),o=o.slice(0,-1*A),s=s.slice(0,-1*A)),i.push(this.productions_[E[1]][0]),o.push(O.$),s.push(O._$),ee=c[i[i.length-2]][i[i.length-1]],i.push(ee);break;case 3:return!0}}return!0},`parse`),`parse`)};O.lexer=(function(){return{EOF:1,parseError:r(e(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),`parseError`),setInput:r(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:r(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:r(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:r(function(){return this._more=!0,this},`more`),reject:r(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:r(function(e){this.unput(this.match.slice(e))},`less`),pastInput:r(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:r(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:r(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:r(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:r(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}else return!1}else if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e!==!1&&e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:r(e(function(){return this.next()||this.lex()},`lex`),`lex`),begin:r(e(function(e){this.conditionStack.push(e)},`begin`),`begin`),popState:r(e(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),`popState`),_currentRules:r(e(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),`_currentRules`),topState:r(e(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),`topState`),pushState:r(e(function(e){this.begin(e)},`pushState`),`pushState`),stateStackSize:r(e(function(){return this.conditionStack.length},`stateStackSize`),`stateStackSize`),options:{"case-insensitive":!0},performAction:r(e(function(e,t,n,r){switch(n){case 0:return this.begin(`open_directive`),`open_directive`;case 1:return this.begin(`acc_title`),31;case 2:return this.popState(),`acc_title_value`;case 3:return this.begin(`acc_descr`),33;case 4:return this.popState(),`acc_descr_value`;case 5:this.begin(`acc_descr_multiline`);break;case 6:this.popState();break;case 7:return`acc_descr_multiline_value`;case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin(`href`);break;case 15:this.popState();break;case 16:return 43;case 17:this.begin(`callbackname`);break;case 18:this.popState();break;case 19:this.popState(),this.begin(`callbackargs`);break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin(`click`);break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return`date`;case 45:return 30;case 46:return`accDescription`;case 47:return 36;case 48:return 38;case 49:return 39;case 50:return`:`;case 51:return 6;case 52:return`INVALID`}},`anonymous`),`anonymous`),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}})();function k(){this.yy={}}return e(k,`Parser`),r(k,`Parser`),k.prototype=O,O.Parser=k,new k})();le.parser=le;var ue=le;z.default.extend(B.default),z.default.extend(oe.default),z.default.extend(se.default);var de={friday:5,saturday:6},H=``,fe=``,pe=void 0,me=``,U=[],W=[],he=new Map,ge=[],_e=[],G=``,ve=``,ye=[`active`,`done`,`crit`,`milestone`,`vert`],be=[],K=``,q=!1,xe=!1,Se=`sunday`,J=`saturday`,Ce=0,we=r(function(){ge=[],_e=[],G=``,be=[],it=0,st=void 0,X=void 0,Z=[],H=``,fe=``,ve=``,pe=void 0,me=``,U=[],W=[],q=!1,xe=!1,Ce=0,he=new Map,K=``,m(),Se=`sunday`,J=`saturday`},`clear`),Te=r(function(e){K=e},`setDiagramId`),Ee=r(function(e){fe=e},`setAxisFormat`),De=r(function(){return fe},`getAxisFormat`),Oe=r(function(e){pe=e},`setTickInterval`),ke=r(function(){return pe},`getTickInterval`),Ae=r(function(e){me=e},`setTodayMarker`),je=r(function(){return me},`getTodayMarker`),Me=r(function(e){H=e},`setDateFormat`),Ne=r(function(){q=!0},`enableInclusiveEndDates`),Pe=r(function(){return q},`endDatesAreInclusive`),Fe=r(function(){xe=!0},`enableTopAxis`),Ie=r(function(){return xe},`topAxisEnabled`),Le=r(function(e){ve=e},`setDisplayMode`),Re=r(function(){return ve},`getDisplayMode`),ze=r(function(){return H},`getDateFormat`),Be=r((e,t)=>{let n=t.toLowerCase().split(/[\s,]+/).filter(e=>e!==``);return[...new Set([...e,...n])]},`mergeTokens`),Ve=r(function(e){U=Be(U,e)},`setIncludes`),He=r(function(){return U},`getIncludes`),Ue=r(function(e){W=Be(W,e)},`setExcludes`),We=r(function(){return W},`getExcludes`),Ge=r(function(){return he},`getLinks`),Ke=r(function(e){G=e,ge.push(e)},`addSection`),qe=r(function(){return ge},`getSections`),Je=r(function(){let e=dt(),t=0;for(;!e&&t<10;)e=dt(),t++;return _e=Z,_e},`getTasks`),Ye=r(function(e,t,n,r){let i=e.format(t.trim()),a=e.format(`YYYY-MM-DD`);return r.includes(i)||r.includes(a)?!1:n.includes(`weekends`)&&(e.isoWeekday()===de[J]||e.isoWeekday()===de[J]+1)||n.includes(e.format(`dddd`).toLowerCase())?!0:n.includes(i)||n.includes(a)},`isInvalidDate`),Xe=r(function(e){Se=e},`setWeekday`),Ze=r(function(){return Se},`getWeekday`),Qe=r(function(e){J=e},`setWeekend`),$e=r(function(e,t,n,r){if(!n.length||e.manualEndTime)return;let i;i=e.startTime instanceof Date?(0,z.default)(e.startTime):(0,z.default)(e.startTime,t,!0),i=i.add(1,`d`);let a;a=e.endTime instanceof Date?(0,z.default)(e.endTime):(0,z.default)(e.endTime,t,!0);let[o,s]=et(i,a,t,n,r);e.endTime=o.toDate(),e.renderEndTime=s},`checkTaskDates`),et=r(function(e,t,n,r,i){let a=!1,o=null,s=t.add(1e4,`d`);for(;e<=t;){if(a||(o=t.toDate()),a=Ye(e,n,r,i),a&&(t=t.add(1,`d`),t>s))throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");e=e.add(1,`d`)}return[t,o]},`fixTaskDates`),tt=r(function(e,t,n){if(n=n.trim(),r(e=>{let t=e.trim();return t===`x`||t===`X`},`isTimestampFormat`)(t)&&/^\d+$/.test(n))return new Date(Number(n));let i=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Q(t);n!==void 0&&(!e||n.endTime>e.endTime)&&(e=n)}if(e)return e.endTime;let t=new Date;return t.setHours(0,0,0,0),t}let o=(0,z.default)(n,t.trim(),!0);if(o.isValid())return o.toDate();{a.debug(`Invalid date:`+n),a.debug(`With date format:`+t.trim());let e=new Date(n);if(e===void 0||isNaN(e.getTime())||e.getFullYear()<-1e4||e.getFullYear()>1e4)throw Error(`Invalid date:`+n);return e}},`getStartDate`),nt=r(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t===null?[NaN,`ms`]:[Number.parseFloat(t[1]),t[2]]},`parseDuration`),rt=r(function(e,t,n,r=!1){n=n.trim();let i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Q(t);n!==void 0&&(!e||n.startTime<e.startTime)&&(e=n)}if(e)return e.startTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,z.default)(n,t.trim(),!0);if(a.isValid())return r&&(a=a.add(1,`d`)),a.toDate();let o=(0,z.default)(e),[s,c]=nt(n);if(!Number.isNaN(s)){let e=o.add(s,c);e.isValid()&&(o=e)}return o.toDate()},`getEndDate`),it=0,Y=r(function(e){return e===void 0?(it+=1,`task`+it):e},`parseId`),at=r(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};_t(r,i,ye);for(let e=0;e<r.length;e++)r[e]=r[e].trim();let a=``;switch(r.length){case 1:i.id=Y(),i.startTime=e.endTime,a=r[0];break;case 2:i.id=Y(),i.startTime=tt(void 0,H,r[0]),a=r[1];break;case 3:i.id=Y(r[0]),i.startTime=tt(void 0,H,r[1]),a=r[2];break;default:}return a&&(i.endTime=rt(i.startTime,H,a,q),i.manualEndTime=(0,z.default)(a,`YYYY-MM-DD`,!0).isValid(),$e(i,H,W,U)),i},`compileData`),ot=r(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};_t(r,i,ye);for(let e=0;e<r.length;e++)r[e]=r[e].trim();switch(r.length){case 1:i.id=Y(),i.startTime={type:`prevTaskEnd`,id:e},i.endTime={data:r[0]};break;case 2:i.id=Y(),i.startTime={type:`getStartDate`,startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=Y(r[0]),i.startTime={type:`getStartDate`,startData:r[1]},i.endTime={data:r[2]};break;default:}return i},`parseData`),st,X,Z=[],ct={},lt=r(function(e,t){let n={section:G,type:G,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=ot(X,t);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=X,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,n.vert?n.order=-1:(n.order=Ce,Ce++);let i=Z.push(n);X=n.id,ct[n.id]=i-1},`addTask`),Q=r(function(e){let t=ct[e];return Z[t]},`findTaskById`),ut=r(function(e,t){let n={section:G,type:G,description:e,task:e,classes:[]},r=at(st,t);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,st=n,_e.push(n)},`addTaskOrg`),dt=r(function(){let e=r(function(e){let t=Z[e],n=``;switch(Z[e].raw.startTime.type){case`prevTaskEnd`:t.startTime=Q(t.prevTaskId).endTime;break;case`getStartDate`:n=tt(void 0,H,Z[e].raw.startTime.startData),n&&(Z[e].startTime=n);break}return Z[e].startTime&&(Z[e].endTime=rt(Z[e].startTime,H,Z[e].raw.endTime.data,q),Z[e].endTime&&(Z[e].processed=!0,Z[e].manualEndTime=(0,z.default)(Z[e].raw.endTime.data,`YYYY-MM-DD`,!0).isValid(),$e(Z[e],H,W,U))),Z[e].processed},`compileTask`),t=!0;for(let[n,r]of Z.entries())e(n),t&&=r.processed;return t},`compileTasks`),ft=r(function(e,t){let n=t;o().securityLevel!==`loose`&&(n=(0,R.sanitizeUrl)(t)),e.split(`,`).forEach(function(e){Q(e)!==void 0&&(ht(e,()=>{window.open(n,`_self`)}),he.set(e,n))}),pt(e,`clickable`)},`setLink`),pt=r(function(e,t){e.split(`,`).forEach(function(e){let n=Q(e);n!==void 0&&n.classes.push(t)})},`setClass`),mt=r(function(e,t,n){if(o().securityLevel!==`loose`||t===void 0)return;let r=[];if(typeof n==`string`){r=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<r.length;e++){let t=r[e].trim();t.startsWith(`"`)&&t.endsWith(`"`)&&(t=t.substr(1,t.length-2)),r[e]=t}}r.length===0&&r.push(e),Q(e)!==void 0&&ht(e,()=>{P.runFunc(t,...r)})},`setClickFun`),ht=r(function(e,t){be.push(function(){let n=K?`${K}-${e}`:e,r=document.querySelector(`[id="${n}"]`);r!==null&&r.addEventListener(`click`,function(){t()})},function(){let n=K?`${K}-${e}`:e,r=document.querySelector(`[id="${n}-text"]`);r!==null&&r.addEventListener(`click`,function(){t()})})},`pushFun`),gt={getConfig:r(()=>o().gantt,`getConfig`),clear:we,setDateFormat:Me,getDateFormat:ze,enableInclusiveEndDates:Ne,endDatesAreInclusive:Pe,enableTopAxis:Fe,topAxisEnabled:Ie,setAxisFormat:Ee,getAxisFormat:De,setTickInterval:Oe,getTickInterval:ke,setTodayMarker:Ae,getTodayMarker:je,setAccTitle:u,getAccTitle:h,setDiagramTitle:l,getDiagramTitle:s,setDiagramId:Te,setDisplayMode:Le,getDisplayMode:Re,setAccDescription:c,getAccDescription:d,addSection:Ke,getSections:qe,getTasks:Je,addTask:lt,findTaskById:Q,addTaskOrg:ut,setIncludes:Ve,getIncludes:He,setExcludes:Ue,getExcludes:We,setClickEvent:r(function(e,t,n){e.split(`,`).forEach(function(e){mt(e,t,n)}),pt(e,`clickable`)},`setClickEvent`),setLink:ft,getLinks:Ge,bindFunctions:r(function(e){be.forEach(function(t){t(e)})},`bindFunctions`),parseDuration:nt,isInvalidDate:Ye,setWeekday:Xe,getWeekday:Ze,setWeekend:Qe};function _t(e,t,n){let r=!0;for(;r;)r=!1,n.forEach(function(n){let i=`^\\s*`+n+`\\s*$`,a=new RegExp(i);e[0].match(a)&&(t[n]=!0,e.shift(1),r=!0)})}e(_t,`getTaskTags`),r(_t,`getTaskTags`),V.default.extend(ce.default);var vt=r(function(){a.debug(`Something is calling, setConf, remove the call`)},`setConf`),yt={monday:v,tuesday:E,wednesday:M,thursday:b,friday:T,saturday:k,sunday:j},bt=r((e,t)=>{let n=[...e].map(()=>-1/0),r=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),i=0;for(let e of r)for(let r=0;r<n.length;r++)if(e.startTime>=n[r]){n[r]=e.endTime,e.order=r+t,r>i&&(i=r);break}return i},`getMaxIntersections`),$,xt=1e4,St={parser:ue,db:gt,renderer:{setConf:vt,draw:r(function(t,n,i,s){let c=o().gantt;s.db.setDiagramId(n);let l=o().securityLevel,u;l===`sandbox`&&(u=ie(`#i`+n));let d=ie(l===`sandbox`?u.nodes()[0].contentDocument.body:`body`),m=l===`sandbox`?u.nodes()[0].contentDocument:document,h=m.getElementById(n);$=h.parentElement.offsetWidth,$===void 0&&($=1200),c.useWidth!==void 0&&($=c.useWidth);let v=s.db.getTasks(),b=v.filter(e=>!e.vert),T=[];for(let e of b)T.push(e.type);T=B(T);let E={},k=2*c.topPadding;if(s.db.getDisplayMode()===`compact`||c.displayMode===`compact`){let e={};for(let t of b)e[t.section]===void 0?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let n of Object.keys(e)){let r=bt(e[n],t)+1;t+=r,k+=r*(c.barHeight+c.barGap),E[n]=r}}else{k+=b.length*(c.barHeight+c.barGap);for(let e of T)E[e]=b.filter(t=>t.type===e).length}h.setAttribute(`viewBox`,`0 0 `+$+` `+k);let j=d.select(`[id="${n}"]`),M=te().domain([re(v,function(e){return e.startTime}),y(v,function(e){return e.endTime})]).rangeRound([0,$-c.leftPadding-c.rightPadding]);function N(e,t){let n=e.startTime,r=t.startTime,i=0;return n>r?i=1:n<r&&(i=-1),i}e(N,`taskCompare`),r(N,`taskCompare`),v.sort(N),P(v,$,k),p(j,k,$,c.useMaxWidth),j.append(`text`).text(s.db.getDiagramTitle()).attr(`x`,$/2).attr(`y`,c.titleTopMargin).attr(`class`,`titleText`);function P(e,t,n){let r=c.barHeight,i=r+c.barGap,a=c.topPadding,o=c.leftPadding,l=g().domain([0,T.length]).range([`#00B9FA`,`#F95002`]).interpolate(C);ae(i,a,o,t,n,e,s.db.getExcludes(),s.db.getIncludes()),L(o,a,t,n),F(e,i,a,o,r,l,t,n),R(i,a,o,r,l),z(o,a,t,n)}e(P,`makeGantt`),r(P,`makeGantt`);function F(e,t,r,i,a,l,u){e.sort((e,t)=>e.vert===t.vert?0:e.vert?1:-1);let d=e.filter(e=>!e.vert),f=[...new Set(d.map(e=>e.order))].map(e=>d.find(t=>t.order===e));j.append(`g`).selectAll(`rect`).data(f).enter().append(`rect`).attr(`x`,0).attr(`y`,function(e,n){return n=e.order,n*t+r-2}).attr(`width`,function(){return u-c.rightPadding/2}).attr(`height`,t).attr(`class`,function(e){for(let[t,n]of T.entries())if(e.type===n)return`section section`+t%c.numberSectionStyles;return`section section0`}).enter();let p=j.append(`g`).selectAll(`rect`).data(e).enter(),m=s.db.getLinks();if(p.append(`rect`).attr(`id`,function(e){return n+`-`+e.id}).attr(`rx`,3).attr(`ry`,3).attr(`x`,function(e){return e.milestone?M(e.startTime)+i+.5*(M(e.endTime)-M(e.startTime))-.5*a:M(e.startTime)+i}).attr(`y`,function(e,n){return n=e.order,e.vert?c.gridLineStartPadding:n*t+r}).attr(`width`,function(e){return e.milestone?a:e.vert?.08*a:M(e.renderEndTime||e.endTime)-M(e.startTime)}).attr(`height`,function(e){return e.vert?d.length*(c.barHeight+c.barGap)+c.barHeight*2:a}).attr(`transform-origin`,function(e,n){return n=e.order,(M(e.startTime)+i+.5*(M(e.endTime)-M(e.startTime))).toString()+`px `+(n*t+r+.5*a).toString()+`px`}).attr(`class`,function(e){let t=``;e.classes.length>0&&(t=e.classes.join(` `));let n=0;for(let[t,r]of T.entries())e.type===r&&(n=t%c.numberSectionStyles);let r=``;return e.active?e.crit?r+=` activeCrit`:r=` active`:e.done?r=e.crit?` doneCrit`:` done`:e.crit&&(r+=` crit`),r.length===0&&(r=` task`),e.milestone&&(r=` milestone `+r),e.vert&&(r=` vert `+r),r+=n,r+=` `+t,`task`+r}),p.append(`text`).attr(`id`,function(e){return n+`-`+e.id+`-text`}).text(function(e){return e.task}).attr(`font-size`,c.fontSize).attr(`x`,function(e){let t=M(e.startTime),n=M(e.renderEndTime||e.endTime);if(e.milestone&&(t+=.5*(M(e.endTime)-M(e.startTime))-.5*a,n=t+a),e.vert)return M(e.startTime)+i;let r=this.getBBox().width;return r>n-t?n+r+1.5*c.leftPadding>u?t+i-5:n+i+5:(n-t)/2+t+i}).attr(`y`,function(e,n){return e.vert?c.gridLineStartPadding+d.length*(c.barHeight+c.barGap)+60:(n=e.order,n*t+c.barHeight/2+(c.fontSize/2-2)+r)}).attr(`text-height`,a).attr(`class`,function(e){let t=M(e.startTime),n=M(e.endTime);e.milestone&&(n=t+a);let r=this.getBBox().width,i=``;e.classes.length>0&&(i=e.classes.join(` `));let o=0;for(let[t,n]of T.entries())e.type===n&&(o=t%c.numberSectionStyles);let s=``;return e.active&&(s=e.crit?`activeCritText`+o:`activeText`+o),e.done?s=e.crit?s+` doneCritText`+o:s+` doneText`+o:e.crit&&(s=s+` critText`+o),e.milestone&&(s+=` milestoneText`),e.vert&&(s+=` vertText`),r>n-t?n+r+1.5*c.leftPadding>u?i+` taskTextOutsideLeft taskTextOutside`+o+` `+s:i+` taskTextOutsideRight taskTextOutside`+o+` `+s+` width-`+r:i+` taskText taskText`+o+` `+s+` width-`+r}),o().securityLevel===`sandbox`){let e;e=ie(`#i`+n);let t=e.nodes()[0].contentDocument;p.filter(function(e){return m.has(e.id)}).each(function(e){var r=t.querySelector(`#`+CSS.escape(n+`-`+e.id)),i=t.querySelector(`#`+CSS.escape(n+`-`+e.id+`-text`));let a=r.parentNode;var o=t.createElement(`a`);o.setAttribute(`xlink:href`,m.get(e.id)),o.setAttribute(`target`,`_top`),a.appendChild(o),o.appendChild(r),o.appendChild(i)})}}e(F,`drawRects`),r(F,`drawRects`);function ae(e,t,r,i,o,l,u,d){if(u.length===0&&d.length===0)return;let f,p;for(let{startTime:e,endTime:t}of l)(f===void 0||e<f)&&(f=e),(p===void 0||t>p)&&(p=t);if(!f||!p)return;if((0,V.default)(p).diff((0,V.default)(f),`year`)>5){a.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);return}let m=s.db.getDateFormat(),h=[],g=null,_=(0,V.default)(f);for(;_.valueOf()<=p;)s.db.isInvalidDate(_,m,u,d)?g?g.end=_:g={start:_,end:_}:g&&=(h.push(g),null),_=_.add(1,`d`);j.append(`g`).selectAll(`rect`).data(h).enter().append(`rect`).attr(`id`,e=>n+`-exclude-`+e.start.format(`YYYY-MM-DD`)).attr(`x`,e=>M(e.start.startOf(`day`))+r).attr(`y`,c.gridLineStartPadding).attr(`width`,e=>M(e.end.endOf(`day`))-M(e.start.startOf(`day`))).attr(`height`,o-t-c.gridLineStartPadding).attr(`transform-origin`,function(t,n){return(M(t.start)+r+.5*(M(t.end)-M(t.start))).toString()+`px `+(n*e+.5*o).toString()+`px`}).attr(`class`,`exclude-range`)}e(ae,`drawExcludeDays`),r(ae,`drawExcludeDays`);function I(e,t,n,r){if(n<=0||e>t)return 1/0;let i=t-e,a=V.default.duration({[r??`day`]:n}).asMilliseconds();return a<=0?1/0:Math.ceil(i/a)}e(I,`getEstimatedTickCount`),r(I,`getEstimatedTickCount`);function L(e,t,n,r){let i=s.db.getDateFormat(),o=s.db.getAxisFormat(),l;l=o||(i===`D`?`%d`:c.axisFormat??`%Y-%m-%d`);let u=_(M).tickSize(-r+t+c.gridLineStartPadding).tickFormat(O(l)),d=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||c.tickInterval);if(d!==null){let e=parseInt(d[1],10);if(isNaN(e)||e<=0)a.warn(`Invalid tick interval value: "${d[1]}". Skipping custom tick interval.`);else{let t=d[2],n=s.db.getWeekday()||c.weekday,r=M.domain(),i=r[0],o=r[1],l=I(i,o,e,t);if(l>xt)a.warn(`The tick interval "${e}${t}" would generate ${l} ticks, which exceeds the maximum allowed (${xt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(t){case`millisecond`:u.ticks(w.every(e));break;case`second`:u.ticks(D.every(e));break;case`minute`:u.ticks(A.every(e));break;case`hour`:u.ticks(S.every(e));break;case`day`:u.ticks(x.every(e));break;case`week`:u.ticks(yt[n].every(e));break;case`month`:u.ticks(ee.every(e));break}}}if(j.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+(r-50)+`)`).call(u).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10).attr(`dy`,`1em`),s.db.topAxisEnabled()||c.topAxis){let n=ne(M).tickSize(-r+t+c.gridLineStartPadding).tickFormat(O(l));if(d!==null){let e=parseInt(d[1],10);if(isNaN(e)||e<=0)a.warn(`Invalid tick interval value: "${d[1]}". Skipping custom tick interval.`);else{let t=d[2],r=s.db.getWeekday()||c.weekday,i=M.domain(),a=i[0],o=i[1];if(I(a,o,e,t)<=xt)switch(t){case`millisecond`:n.ticks(w.every(e));break;case`second`:n.ticks(D.every(e));break;case`minute`:n.ticks(A.every(e));break;case`hour`:n.ticks(S.every(e));break;case`day`:n.ticks(x.every(e));break;case`week`:n.ticks(yt[r].every(e));break;case`month`:n.ticks(ee.every(e));break}}}j.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+t+`)`).call(n).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10)}}e(L,`makeGrid`),r(L,`makeGrid`);function R(e,t){let n=0,r=Object.keys(E).map(e=>[e,E[e]]);j.append(`g`).selectAll(`text`).data(r).enter().append(function(e){let t=e[0].split(f.lineBreakRegex),n=-(t.length-1)/2,r=m.createElementNS(`http://www.w3.org/2000/svg`,`text`);r.setAttribute(`dy`,n+`em`);for(let[e,n]of t.entries()){let t=m.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttribute(`alignment-baseline`,`central`),t.setAttribute(`x`,`10`),e>0&&t.setAttribute(`dy`,`1em`),t.textContent=n,r.appendChild(t)}return r}).attr(`x`,10).attr(`y`,function(i,a){if(a>0)for(let o=0;o<a;o++)return n+=r[a-1][1],i[1]*e/2+n*e+t;else return i[1]*e/2+t}).attr(`font-size`,c.sectionFontSize).attr(`class`,function(e){for(let[t,n]of T.entries())if(e[0]===n)return`sectionTitle sectionTitle`+t%c.numberSectionStyles;return`sectionTitle`})}e(R,`vertLabels`),r(R,`vertLabels`);function z(e,t,n,r){let i=s.db.getTodayMarker();if(i===`off`)return;let a=j.append(`g`).attr(`class`,`today`),o=new Date,l=a.append(`line`);l.attr(`x1`,M(o)+e).attr(`x2`,M(o)+e).attr(`y1`,c.titleTopMargin).attr(`y2`,r-c.titleTopMargin).attr(`class`,`today`),i!==``&&l.attr(`style`,i.replace(/,/g,`;`))}e(z,`drawToday`),r(z,`drawToday`);function B(e){let t={},n=[];for(let r=0,i=e.length;r<i;++r)Object.prototype.hasOwnProperty.call(t,e[r])||(t[e[r]]=!0,n.push(e[r]));return n}e(B,`checkUnique`),r(B,`checkUnique`)},`draw`)},styles:r(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,`getStyles`)};export{St as diagram};