import{S as A,h as C,s as B,C as F,D as G,E as H,o as T,t as V,H as J,L as q,q as K,u as L,y as M,Q as S,I as N,R as j,T as w,p as h,J as Q,U as f,a9 as D,k as R,a2 as E,K as U,z as O,A as W,B as X,a3 as x,az as z,af as Y}from"./vendor.3ae73048.js";import{f as Z,a as $}from"./index.2e3bb17a.js";import{a$ as ee,as as se,P as k}from"./index.146c2037.js";import{p as te}from"./router.1b465492.js";import{P as ae}from"./index.11580965.js";function oe(o){let e,a,s,l,u,g,p,r,v,m,d,b,n;const P=o[6].default,c=M(P,o,o[8],null);return{c(){e=S("div"),a=S("div"),s=S("div"),l=S("div"),p=N(),r=S("div"),c&&c.c(),this.h()},l(t){e=j(t,"DIV",{class:!0});var i=w(e);a=j(i,"DIV",{class:!0});var _=w(a);s=j(_,"DIV",{class:!0,"aria-hidden":!0});var y=w(s);l=j(y,"DIV",{class:!0}),w(l).forEach(h),y.forEach(h),p=Q(_),r=j(_,"DIV",{class:!0,role:!0,"aria-modal":!0});var I=w(r);c&&c.l(I),I.forEach(h),_.forEach(h),i.forEach(h),this.h()},h(){var t,i;f(l,"class","absolute inset-0 bg-gray-900 opacity-100"),f(s,"class",u="overlay fixed inset-0 transition-opacity top-11 "+(((t=o[3])==null?void 0:t.type)!==k.singleSession&&o[4]?"right-[18rem] lg:right-[24rem]":"")+" svelte-ooejxg"),f(s,"aria-hidden","true"),f(r,"class","absolute flex flex-col bg-white rounded-t-lg text-left overflow-hidden shadow-xl inset-0 left-3 right-3"),f(r,"role","dialog"),f(r,"aria-modal","true"),f(a,"class","flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0"),f(e,"class",m="dialog fixed inset-0 top-12 "+(((i=o[3])==null?void 0:i.type)!==k.singleSession&&o[4]?"right-[18rem] lg:right-[24rem]":"")+" svelte-ooejxg"),D(e,"dialog-top",o[1]),D(e,"onSurface",o[0])},m(t,i){R(t,e,i),E(e,a),E(a,s),E(s,l),E(a,p),E(a,r),c&&c.m(r,null),o[7](r),d=!0,b||(n=U(s,"dblclick",o[5]),b=!0)},p(t,i){var _,y;(!d||i&24&&u!==(u="overlay fixed inset-0 transition-opacity top-11 "+(((_=t[3])==null?void 0:_.type)!==k.singleSession&&t[4]?"right-[18rem] lg:right-[24rem]":"")+" svelte-ooejxg"))&&f(s,"class",u),c&&c.p&&(!d||i&256)&&O(c,P,t,t[8],d?X(P,t[8],i,null):W(t[8]),null),(!d||i&24&&m!==(m="dialog fixed inset-0 top-12 "+(((y=t[3])==null?void 0:y.type)!==k.singleSession&&t[4]?"right-[18rem] lg:right-[24rem]":"")+" svelte-ooejxg"))&&f(e,"class",m),i&26&&D(e,"dialog-top",t[1]),i&25&&D(e,"onSurface",t[0])},i(t){d||(g||x(()=>{g=z(s,Z,{duration:100}),g.start()}),T(c,t),v||x(()=>{v=z(r,$,{duration:100,start:.95}),v.start()}),d=!0)},o(t){V(c,t),d=!1},d(t){t&&h(e),c&&c.d(t),o[7](null),b=!1,n()}}}function ne(o){let e,a;return e=new ae({props:{$$slots:{default:[oe]},$$scope:{ctx:o}}}),{c(){F(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,l){H(e,s,l),a=!0},p(s,[l]){const u={};l&287&&(u.$$scope={dirty:l,ctx:s}),e.$set(u)},i(s){a||(T(e.$$.fragment,s),a=!0)},o(s){V(e.$$.fragment,s),a=!1},d(s){J(e,s)}}}function ie(o,e,a){let s,l;q(o,te,n=>a(3,s=n)),q(o,ee,n=>a(4,l=n));let{$$slots:u={},$$scope:g}=e,{onSurface:p=!1}=e,{onTop:r=!1}=e;const v=K(),m=()=>v("close");let d;L(()=>(window.onkeydown=n=>se(n,d),()=>{window.onkeydown=null}));function b(n){Y[n?"unshift":"push"](()=>{d=n,a(2,d)})}return o.$$set=n=>{"onSurface"in n&&a(0,p=n.onSurface),"onTop"in n&&a(1,r=n.onTop),"$$scope"in n&&a(8,g=n.$$scope)},[p,r,d,s,l,m,u,b,g]}class ue extends A{constructor(e){super();C(this,e,ie,ne,B,{onSurface:0,onTop:1})}}export{ue as P};
