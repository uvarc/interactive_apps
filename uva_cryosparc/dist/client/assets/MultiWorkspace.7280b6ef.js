import{S as X,h as Y,s as Z,Q as k,a6 as M,I as C,C as q,R as y,T as v,a7 as T,J as U,p,D as F,U as m,k as G,a2 as f,E as H,K as ee,ax as ce,ae as J,o as _,t as $,H as K,ad as ie,j as te,l as re,m as ae,L as V,ak as ue}from"./vendor.3ae73048.js";import{F as se,G as fe,E as de,ay as pe,a6 as me}from"./router.1b465492.js";import{P as he}from"./Panel.9c7a29b9.js";import{c as _e}from"./workspace.9f045c83.js";import{I as ge}from"./Icon.61279884.js";import{D as be}from"./DotsVertical.9505a1c9.js";import"./index.146c2037.js";import"./Exclamation.f44359c6.js";function oe(o){let r,a,e,t=o[0].project_uid+"",c,s,l=o[0].uid+"",n,g,i,W=o[3].title+"",E,N,j,h,x,O,B,w,S,b,A,L;return w=new ge({props:{src:be}}),{c(){r=k("button"),a=k("div"),e=k("p"),c=M(t),s=C(),n=M(l),g=C(),i=k("p"),E=M(W),N=C(),j=k("div"),h=k("button"),x=k("span"),O=M("Open options"),B=C(),q(w.$$.fragment),this.h()},l(u){r=y(u,"BUTTON",{type:!0,class:!0});var d=v(r);a=y(d,"DIV",{class:!0});var D=v(a);e=y(D,"P",{class:!0});var I=v(e);c=T(I,t),s=U(I),n=T(I,l),I.forEach(p),g=U(D),i=y(D,"P",{class:!0});var Q=v(i);E=T(Q,W),Q.forEach(p),D.forEach(p),N=U(d),j=y(d,"DIV",{class:!0});var R=v(j);h=y(R,"BUTTON",{class:!0});var P=v(h);x=y(P,"SPAN",{class:!0});var z=v(x);O=T(z,"Open options"),z.forEach(p),B=U(P),F(w.$$.fragment,P),P.forEach(p),R.forEach(p),d.forEach(p),this.h()},h(){m(e,"class","flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"),m(i,"class","text-sm text-gray-500 dark:text-gray-300 truncate"),m(a,"class","flex-1 min-w-0"),m(x,"class","sr-only"),m(h,"class","opacity-0 group-hover:opacity-100 w-8 h-8 bg-white dark:bg-gray-700 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"),m(j,"class","flex-shrink-0"),m(r,"type","button"),m(r,"class",S="w-full group text-left relative rounded-md border bg-white dark:bg-gray-700 px-2 py-2 shadow-sm flex items-center space-x-3 focus:outline-none "+(o[4].includes(`${o[0].project_uid}-${o[0].uid}`)===!0?"border-blue-500 ring-1 ring-blue-500":"border-gray-300 dark:border-gray-600 hover:border-gray-400"))},m(u,d){G(u,r,d),f(r,a),f(a,e),f(e,c),f(e,s),f(e,n),f(a,g),f(a,i),f(i,E),f(r,N),f(r,j),f(j,h),f(h,x),f(x,O),f(h,B),H(w,h,null),b=!0,A||(L=[ee(h,"click",ce(o[5])),ee(r,"click",o[6])],A=!0)},p(u,d){(!b||d&1)&&t!==(t=u[0].project_uid+"")&&J(c,t),(!b||d&1)&&l!==(l=u[0].uid+"")&&J(n,l),(!b||d&8)&&W!==(W=u[3].title+"")&&J(E,W),(!b||d&17&&S!==(S="w-full group text-left relative rounded-md border bg-white dark:bg-gray-700 px-2 py-2 shadow-sm flex items-center space-x-3 focus:outline-none "+(u[4].includes(`${u[0].project_uid}-${u[0].uid}`)===!0?"border-blue-500 ring-1 ring-blue-500":"border-gray-300 dark:border-gray-600 hover:border-gray-400")))&&m(r,"class",S)},i(u){b||(_(w.$$.fragment,u),b=!0)},o(u){$(w.$$.fragment,u),b=!1},d(u){u&&p(r),K(w),A=!1,ie(L)}}}function ke(o){let r,a,e=o[3]!==null&&oe(o);return{c(){e&&e.c(),r=te()},l(t){e&&e.l(t),r=te()},m(t,c){e&&e.m(t,c),G(t,r,c),a=!0},p(t,[c]){t[3]!==null?e?(e.p(t,c),c&8&&_(e,1)):(e=oe(t),e.c(),_(e,1),e.m(r.parentNode,r)):e&&(re(),$(e,1,1,()=>{e=null}),ae())},i(t){a||(_(e),a=!0)},o(t){$(e),a=!1},d(t){e&&e.d(t),t&&p(r)}}}function ye(o,r,a){let e,t,c;V(o,se,i=>a(4,c=i));let{doc:s}=r,{handleShowMenu:l=()=>{}}=r;const n=i=>l(i,t),g=i=>fe(i,s.project_uid,s.uid);return o.$$set=i=>{"doc"in i&&a(0,s=i.doc),"handleShowMenu"in i&&a(1,l=i.handleShowMenu)},o.$$.update=()=>{var i;o.$$.dirty&1&&a(3,e=_e(s)),o.$$.dirty&1&&a(2,t={projectUid:s.project_uid,workspaceUid:s.uid,tags:(i=s==null?void 0:s.tags)!=null?i:[]})},[s,l,t,e,c,n,g]}class ve extends X{constructor(r){super();Y(this,r,ye,ke,Z,{doc:0,handleShowMenu:1})}}function le(o,r,a){const e=o.slice();return e[4]=r[a],e}function ne(o){let r,a;return r=new ve({props:{doc:o[4]}}),{c(){q(r.$$.fragment)},l(e){F(r.$$.fragment,e)},m(e,t){H(r,e,t),a=!0},p(e,t){const c={};t&1&&(c.doc=e[4]),r.$set(c)},i(e){a||(_(r.$$.fragment,e),a=!0)},o(e){$(r.$$.fragment,e),a=!1},d(e){K(r,e)}}}function we(o){let r,a,e=o[0],t=[];for(let s=0;s<e.length;s+=1)t[s]=ne(le(o,e,s));const c=s=>$(t[s],1,1,()=>{t[s]=null});return{c(){r=k("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){r=y(s,"DIV",{slot:!0,class:!0});var l=v(r);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(p),this.h()},h(){m(r,"slot","content"),m(r,"class","flex-1 flex flex-col p-3 space-y-3 overflow-y-auto")},m(s,l){G(s,r,l);for(let n=0;n<t.length;n+=1)t[n].m(r,null);a=!0},p(s,l){if(l&1){e=s[0];let n;for(n=0;n<e.length;n+=1){const g=le(s,e,n);t[n]?(t[n].p(g,l),_(t[n],1)):(t[n]=ne(g),t[n].c(),_(t[n],1),t[n].m(r,null))}for(re(),n=e.length;n<t.length;n+=1)c(n);ae()}},i(s){if(!a){for(let l=0;l<e.length;l+=1)_(t[l]);a=!0}},o(s){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)$(t[l]);a=!1},d(s){s&&p(r),ue(t,s)}}}function $e(o){let r,a;return r=new he({props:{title:""+(o[1]+" Workspaces Selected"),$$slots:{content:[we]},$$scope:{ctx:o}}}),{c(){q(r.$$.fragment)},l(e){F(r.$$.fragment,e)},m(e,t){H(r,e,t),a=!0},p(e,[t]){const c={};t&2&&(c.title=""+(e[1]+" Workspaces Selected")),t&129&&(c.$$scope={dirty:t,ctx:e}),r.$set(c)},i(e){a||(_(r.$$.fragment,e),a=!0)},o(e){$(r.$$.fragment,e),a=!1},d(e){K(r,e)}}}function je(o,r,a){let e,t,c,s;return V(o,se,l=>a(2,t=l)),V(o,de,l=>a(3,c=l)),V(o,pe,l=>a(1,s=l)),o.$$.update=()=>{o.$$.dirty&4&&t.length>0&&me("MultiWorkspacePanel","compareWorkspaces",null,t),o.$$.dirty&12&&a(0,e=c.filter(l=>t.includes(`${l.project_uid}-${l.uid}`)))},[e,s,t,c]}class Ce extends X{constructor(r){super();Y(this,r,je,$e,Z,{})}}export{Ce as default};
