import{r as w,s as k,t as D,u as S,a as R,_ as $}from"./useDataProvider-03a214e4.js";import{d as C,r as L,c as _,o as d,a as r,b as u,e as T,F as g,f as B,g as f,w as m,t as x,u as l,h as P,i as p,R as O,j as V,v as M,k as I,l as N}from"./index-64045075.js";function E(t,e){w(2,arguments);var o=k(t),i=k(e);return o.getTime()===i.getTime()}function H(t){return w(1,arguments),D(t).getTime()>Date.now()}function j(t){return w(1,arguments),E(t,Date.now())}const F={class:"text-xl font-bold text-header"},z={key:0},A={key:0},b=C({__name:"CompetitionSublist",props:{competitions:null,isPaginated:{type:Boolean},showDate:{type:Boolean}},setup(t){const e=t,{dateTimeFormatter:o}=S(),i=L(5),n=y=>{y?i.value=e.competitions.length:i.value+=5},c=_(()=>e.isPaginated?e.competitions.slice(0,i.value):e.competitions),a=R(),s=_(()=>a.key??"test");return(y,v)=>(d(),r(g,null,[u("h3",F,[T(y.$slots,"default")]),u("ul",null,[(d(!0),r(g,null,B(l(c),h=>(d(),r("li",{key:h.id,class:"py-1"},[f(l(O),{"data-testId":"competition-link",class:"text-lg hover:font-bold hover:underline-dashed",to:{name:"event",params:{competitionId:h.id,providerId:l(s)}}},{default:m(()=>[t.showDate?(d(),r("span",z,"("+x(l(o).format(h.date))+") ",1)):P("",!0),p(" "+x(h.name),1)]),_:2},1032,["to"])]))),128))]),t.isPaginated?V((d(),r("div",A,[u("button",{class:"text-male font-bold p-1 m-2 rounded outline outline-2 outline-male hover:font-bold hover:bg-slate-300",onClick:v[0]||(v[0]=()=>n(!1))}," Show more "),u("button",{class:"text-male font-bold p-1 m-2 rounded outline outline-2 outline-male hover:font-bold hover:bg-slate-300",onClick:v[1]||(v[1]=()=>n(!0))}," Show full ")],512)),[[M,l(c).length!==t.competitions.length]]):P("",!0)],64))}});function U(){const{getCompetitionsLoader:t}=R(),{competitions:e,status:o}=t(),i=_(()=>{const n={future:[],today:[],past:[]};if(!e.value)return n;const c=e.value.reduce((a,s)=>(j(s.date)?a.today.push(s):H(s.date)?a.future.push(s):a.past.push(s),a),n);return c.future.sort((a,s)=>a.date>s.date?1:-1),c.past.sort((a,s)=>a.date<s.date?1:-1),c});return{competitions:e,competitionsByPeriod:i,status:o}}const q={class:"text-2xl font-semibold uppercase text-header"},G={key:0,class:"my-4"},J={"data-testId":"competitions-today"},K={class:"my-4","data-testId":"competitions-future"},Q={"data-testId":"competitions-past"},W={key:1},X=C({__name:"CompetitionList",setup(t){const{competitions:e,competitionsByPeriod:o}=U();return(i,n)=>(d(),r(g,null,[u("h2",q,[T(i.$slots,"default",{},()=>[p("Competition list (LiveResultat)")])]),l(e)?(d(),r("div",G,[u("section",J,[f(b,{competitions:l(o).today},{default:m(()=>[p(" LIVE today ")]),_:1},8,["competitions"])]),u("section",K,[f(b,{competitions:l(o).future,"is-paginated":!0,"show-date":!0},{default:m(()=>[p(" Upcoming ")]),_:1},8,["competitions"])]),u("section",Q,[f(b,{competitions:l(o).past,"is-paginated":!0,"show-date":!0},{default:m(()=>[p(" Past ")]),_:1},8,["competitions"])])])):(d(),r("div",W,"Loading events"))],64))}}),Y={class:"grid home-layout gap-y-10 font-mrb"},Z=I('<header class="header text-center mt-10" data-v-8901cd1d><h1 class="text-4xl font-bold" data-v-8901cd1d><span class="text-header" data-v-8901cd1d>My</span><span class="text-female" data-v-8901cd1d>Result</span><span class="text-male" data-v-8901cd1d>Board</span></h1><p class="text-xl capitalize" data-v-8901cd1d>Technology Preview</p><p class="mt-6 text-3xl font-semibold" data-v-8901cd1d> Orienteering competitions result board </p></header>',1),tt={class:"competition-list w-140 justify-self-center lg:justify-self-end lg:pr-4 lg:border-r-3 lg:border-female"},et=I('<section class="about flex flex-col gap-4 w-140 text-lg lg:pl-8" data-v-8901cd1d><h2 class="text-2xl font-semibold uppercase text-header" data-v-8901cd1d>About MRB</h2><p data-v-8901cd1d> MyResultBoard is competition result presentation system intended for use on result screens in the competition centre. MRB is created by orienteering athletes for orienteering events but should be modular and easily extensible for other time-based sports. </p><p data-v-8901cd1d> This Preview version offers a basic result board on top of LiveResultat API with limited functionality and configuration. Still as is, it should be possible to display orienteering event results. The full version shall be released in the future. </p><p data-v-8901cd1d>Upcoming features may include:</p><ul class="list-disc list-inside" data-v-8901cd1d><li data-v-8901cd1d>persistent competition settings (local or online)</li><li data-v-8901cd1d>multiple competition data providers</li><li data-v-8901cd1d>multiple columns support</li><li data-v-8901cd1d>multi screen/device synchronization (settings/takeover mode)</li><li data-v-8901cd1d>relay mode</li><li data-v-8901cd1d>richer data content options</li><li data-v-8901cd1d>and many more</li></ul><p data-v-8901cd1d> Its recommended to use Chrome as browser. StartTimes and LiveTime calculation (if available for competition) might be off out of CET time zone (known bug which shall be fixed in future release) </p></section><footer class="footer text-center text-xl bg-slate-300 p-10" data-v-8901cd1d><h2 data-v-8901cd1d>@MyResultBoard - Contact us</h2><a href="https://github.com/ChcJohnie/myresultboard2" data-v-8901cd1d><span class="i-mdi-github" data-v-8901cd1d>GitHub</span></a></footer>',2),st=C({__name:"HomeView",setup(t){const e=[{name:"LiveResultat events",value:"liveResultat"},{name:"OriCloud events",value:"oriCloud"}],o="oriCloud".split(",")??["oriCloud","liveResultat"],i=_(()=>o.reduce((n,c)=>{const a=e.find(s=>s.value===c);return a&&n.push(a),n},[]));return(n,c)=>(d(),r("div",Y,[Z,u("main",tt,[(d(!0),r(g,null,B(l(i),({name:a,value:s})=>(d(),N($,{key:s,provider:s},{default:m(()=>[f(X,null,{default:m(()=>[p(x(a),1)]),_:2},1024)]),_:2},1032,["provider"]))),128))]),et]))}});const at=(t,e)=>{const o=t.__vccOpts||t;for(const[i,n]of e)o[i]=n;return o},nt=at(st,[["__scopeId","data-v-8901cd1d"]]);export{nt as default};
