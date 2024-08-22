import{S as X,h as Y,s as Z,Q as v,a6 as D,I as B,C as L,R as k,T as P,a7 as I,p,J,D as q,U as m,k as z,a2 as f,E as H,K as ee,ax as ce,ae as K,o as _,t as $,H as Q,ad as ie,j as te,l as re,m as oe,L as T,ak as ue}from"./vendor.3ae73048.js";import{z as le,A as fe,y as de,ax as pe,a6 as me}from"./router.1b465492.js";import{P as he}from"./Panel.9c7a29b9.js";import{bg as ge}from"./index.146c2037.js";import{c as _e}from"./project.3d2dba31.js";import{I as be}from"./Icon.61279884.js";import{D as je}from"./DotsVertical.9505a1c9.js";import"./Exclamation.f44359c6.js";function se(s){let r,o,e,t=s[0].uid+"",c,a,l=s[2].title+"",n,b,j,i=s[2].ownerUserName+"",w,E,h,g,S,V,O,x,C,y,A,R;return x=new be({props:{src:je}}),{c(){r=v("button"),o=v("div"),e=v("p"),c=D(t),a=D(": "),n=D(l),b=B(),j=v("p"),w=D(i),E=B(),h=v("div"),g=v("button"),S=v("span"),V=D("Open options"),O=B(),L(x.$$.fragment),this.h()},l(u){r=k(u,"BUTTON",{type:!0,class:!0});var d=P(r);o=k(d,"DIV",{class:!0});var M=P(o);e=k(M,"P",{class:!0});var N=P(e);c=I(N,t),a=I(N,": "),n=I(N,l),N.forEach(p),b=J(M),j=k(M,"P",{class:!0});var F=P(j);w=I(F,i),F.forEach(p),M.forEach(p),E=J(d),h=k(d,"DIV",{class:!0});var G=P(h);g=k(G,"BUTTON",{class:!0});var U=P(g);S=k(U,"SPAN",{class:!0});var W=P(S);V=I(W,"Open options"),W.forEach(p),O=J(U),q(x.$$.fragment,U),U.forEach(p),G.forEach(p),d.forEach(p),this.h()},h(){m(e,"class","text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2"),m(j,"class","text-sm text-gray-500 dark:text-gray-300 truncate"),m(o,"class","flex-1 min-w-0"),m(S,"class","sr-only"),m(g,"class","opacity-0 group-hover:opacity-100 w-8 h-8 bg-white dark:bg-gray-700 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"),m(h,"class","flex-shrink-0"),m(r,"type","button"),m(r,"class",C="w-full group text-left relative rounded-md border bg-white dark:bg-gray-700 px-2 py-2 shadow-sm flex items-center space-x-3 focus:outline-none "+(s[4].includes(s[0].uid)?"border-blue-500 ring-1 ring-blue-500":"border-gray-300 dark:border-gray-600 hover:border-gray-400"))},m(u,d){z(u,r,d),f(r,o),f(o,e),f(e,c),f(e,a),f(e,n),f(o,b),f(o,j),f(j,w),f(r,E),f(r,h),f(h,g),f(g,S),f(S,V),f(g,O),H(x,g,null),y=!0,A||(R=[ee(g,"click",ce(s[6])),ee(r,"click",s[7])],A=!0)},p(u,d){(!y||d&1)&&t!==(t=u[0].uid+"")&&K(c,t),(!y||d&4)&&l!==(l=u[2].title+"")&&K(n,l),(!y||d&4)&&i!==(i=u[2].ownerUserName+"")&&K(w,i),(!y||d&17&&C!==(C="w-full group text-left relative rounded-md border bg-white dark:bg-gray-700 px-2 py-2 shadow-sm flex items-center space-x-3 focus:outline-none "+(u[4].includes(u[0].uid)?"border-blue-500 ring-1 ring-blue-500":"border-gray-300 dark:border-gray-600 hover:border-gray-400")))&&m(r,"class",C)},i(u){y||(_(x.$$.fragment,u),y=!0)},o(u){$(x.$$.fragment,u),y=!1},d(u){u&&p(r),Q(x),A=!1,ie(R)}}}function ye(s){let r,o,e=s[2]!==null&&se(s);return{c(){e&&e.c(),r=te()},l(t){e&&e.l(t),r=te()},m(t,c){e&&e.m(t,c),z(t,r,c),o=!0},p(t,[c]){t[2]!==null?e?(e.p(t,c),c&4&&_(e,1)):(e=se(t),e.c(),_(e,1),e.m(r.parentNode,r)):e&&(re(),$(e,1,1,()=>{e=null}),oe())},i(t){o||(_(e),o=!0)},o(t){$(e),o=!1},d(t){e&&e.d(t),t&&p(r)}}}function ve(s,r,o){let e,t,c,a;T(s,le,i=>o(4,a=i));let{doc:l}=r,{handleShowMenu:n=()=>{}}=r;const b=i=>n(i,c),j=i=>fe(i,l.uid);return s.$$set=i=>{"doc"in i&&o(0,l=i.doc),"handleShowMenu"in i&&o(1,n=i.handleShowMenu)},s.$$.update=()=>{var i,w,E,h;s.$$.dirty&1&&o(2,e=_e(l)),s.$$.dirty&4&&o(5,t=(E=(w=(i=e==null?void 0:e.doc)==null?void 0:i.project_stats)==null?void 0:w.job_count)!=null?E:0),s.$$.dirty&33&&o(3,c={projectUid:l.uid,jobCount:t,jobLabel:ge("Job",t),tags:(h=l==null?void 0:l.tags)!=null?h:[]})},[l,n,e,c,a,t,b,j]}class ke extends X{constructor(r){super();Y(this,r,ve,ye,Z,{doc:0,handleShowMenu:1})}}function ae(s,r,o){const e=s.slice();return e[4]=r[o],e}function ne(s){let r,o;return r=new ke({props:{doc:s[4]}}),{c(){L(r.$$.fragment)},l(e){q(r.$$.fragment,e)},m(e,t){H(r,e,t),o=!0},p(e,t){const c={};t&1&&(c.doc=e[4]),r.$set(c)},i(e){o||(_(r.$$.fragment,e),o=!0)},o(e){$(r.$$.fragment,e),o=!1},d(e){Q(r,e)}}}function Pe(s){let r,o,e=s[0],t=[];for(let a=0;a<e.length;a+=1)t[a]=ne(ae(s,e,a));const c=a=>$(t[a],1,1,()=>{t[a]=null});return{c(){r=v("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){r=k(a,"DIV",{slot:!0,class:!0});var l=P(r);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(p),this.h()},h(){m(r,"slot","content"),m(r,"class","flex-1 flex flex-col p-3 space-y-3 overflow-y-auto")},m(a,l){z(a,r,l);for(let n=0;n<t.length;n+=1)t[n].m(r,null);o=!0},p(a,l){if(l&1){e=a[0];let n;for(n=0;n<e.length;n+=1){const b=ae(a,e,n);t[n]?(t[n].p(b,l),_(t[n],1)):(t[n]=ne(b),t[n].c(),_(t[n],1),t[n].m(r,null))}for(re(),n=e.length;n<t.length;n+=1)c(n);oe()}},i(a){if(!o){for(let l=0;l<e.length;l+=1)_(t[l]);o=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)$(t[l]);o=!1},d(a){a&&p(r),ue(t,a)}}}function we(s){let r,o;return r=new he({props:{title:""+(s[1]+" Projects Selected"),$$slots:{content:[Pe]},$$scope:{ctx:s}}}),{c(){L(r.$$.fragment)},l(e){q(r.$$.fragment,e)},m(e,t){H(r,e,t),o=!0},p(e,[t]){const c={};t&2&&(c.title=""+(e[1]+" Projects Selected")),t&129&&(c.$$scope={dirty:t,ctx:e}),r.$set(c)},i(e){o||(_(r.$$.fragment,e),o=!0)},o(e){$(r.$$.fragment,e),o=!1},d(e){Q(r,e)}}}function xe(s,r,o){let e,t,c,a;return T(s,le,l=>o(2,t=l)),T(s,de,l=>o(3,c=l)),T(s,pe,l=>o(1,a=l)),s.$$.update=()=>{s.$$.dirty&4&&t.length>0&&me("MultiProjectPanel","compareProjects",null,t),s.$$.dirty&12&&o(0,e=c.filter(l=>t.includes(l.uid)))},[e,a,t,c]}class Ue extends X{constructor(r){super();Y(this,r,xe,we,Z,{})}}export{Ue as default};
