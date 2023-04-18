import{r as g,t as c}from"./useDataProvider-03a214e4.js";import{d as f,c as u,o as m,a as p,b as a,t as r,u as l,a4 as h}from"./index-64045075.js";function y(t,e){return g(2,arguments),c(t).getTime()-c(e).getTime()}var i={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},M="trunc";function b(t){return t?i[t]:i[M]}function k(t,e,n){g(2,arguments);var s=y(t,e)/1e3;return b(n==null?void 0:n.roundingMethod)(s)}const B=f({__name:"CategoryTableHeader",props:{category:null,athletesCount:null},setup(t){const e=t,n={M:"bg-male",F:"bg-female",X:"bg-neutral"},s=u(()=>n[e.category.gender]||n.X),d=u(()=>{const o=[];return e.category.length&&o.push(`${e.category.length} m`),e.category.climb&&o.push(`↑${e.category.climb} m`),e.category.controls&&o.push(`${e.category.controls} k`),o.join(" / ")});return(o,_)=>(m(),p("h2",{class:h([l(s),"sticky flex justify-between gap-2.5 top-0 rounded-lg text-white text-4xl font-bold z-2"])},[a("span",null,r(e.category.name),1),a("span",null,r(l(d)),1),a("span",null,r(e.athletesCount.finished)+" / "+r(e.athletesCount.full),1)],2))}}),C=t=>{const e=Math.floor(t/60),n=t-e*60;return{minutes:e,seconds:n}},S=t=>{const{minutes:e,seconds:n}=C(t);return`${e}:${n<10?"0":""}${n}`};export{B as _,k as d,S as f};
