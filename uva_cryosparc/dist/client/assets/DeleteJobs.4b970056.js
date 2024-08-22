import{S as he,h as be,s as _e,C as M,D as Q,E as R,o as G,t as W,H as X,L as ne,af as ge,at as ve,Q as _,I as N,a6 as k,R as g,T as v,p as f,J as U,a7 as I,U as c,a9 as oe,k as Y,a2 as o,K as re,ae as H,au as $e,a3 as xe,a4 as ie,ad as je,ak as ye}from"./vendor.3ae73048.js";import{a as de}from"./index.2e3bb17a.js";import{A as ce,B as ue}from"./index.146c2037.js";import{ba as we}from"./jobs.7ab064ef.js";import{K as Ee}from"./router.1b465492.js";import{l as De,q as ke}from"./index.11580965.js";import"./types.8cb6216c.js";import{A as Ie}from"./Alert.ff361b6c.js";import{I as Je}from"./Icon.61279884.js";import{T as Se}from"./Trash.1e959d99.js";import{S as Te}from"./Section.803d9a44.js";import"./helpers.7177ca38.js";import"./index.c4392b02.js";import"./jobs.d50d1674.js";import"./ChevronUp.0ab7bee0.js";import"./Spinner.012207c4.js";import"./Folder.9bc96b35.js";import"./LockClosed.9ead7228.js";function fe(n,t,l){const e=n.slice();return e[7]=t[l],e}function me(n){var J,y,B;let t,l,e,a=n[7].uid+"",r,s,m,$=((B=(y=(J=n[2])==null?void 0:J[n[3](n[7])])==null?void 0:y.short)!=null?B:n[7].job_type)+"",w,h,x,D=n[7].status+"",C,A,j;return{c(){t=_("li"),l=_("div"),e=_("span"),r=k(a),s=N(),m=_("span"),w=k($),h=N(),x=_("span"),C=k(D),j=N(),this.h()},l(u){t=g(u,"LI",{class:!0});var i=v(t);l=g(i,"DIV",{class:!0});var p=v(l);e=g(p,"SPAN",{class:!0});var S=v(e);r=I(S,a),S.forEach(f),s=U(p),m=g(p,"SPAN",{class:!0});var T=v(m);w=I(T,$),T.forEach(f),p.forEach(f),h=U(i),x=g(i,"SPAN",{class:!0});var E=v(x);C=I(E,D),E.forEach(f),j=U(i),i.forEach(f),this.h()},h(){c(e,"class","inline-flex items-center leading-none px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700"),c(m,"class","block w-40 px-2 py-1 truncate leading-none rounded text-xs font-medium text-gray-700"),c(l,"class","flex mr-4"),c(x,"class",A="inline-flex items-center leading-none px-2 py-1 rounded text-xs font-medium "+ce(n[7].status)+" "+ue(n[7].status)),c(t,"class","flex justify-between py-1")},m(u,i){Y(u,t,i),o(t,l),o(l,e),o(e,r),o(l,s),o(l,m),o(m,w),o(t,h),o(t,x),o(x,C),o(t,j)},p(u,i){var p,S,T;i&2&&a!==(a=u[7].uid+"")&&H(r,a),i&6&&$!==($=((T=(S=(p=u[2])==null?void 0:p[u[3](u[7])])==null?void 0:S.short)!=null?T:u[7].job_type)+"")&&H(w,$),i&2&&D!==(D=u[7].status+"")&&H(C,D),i&2&&A!==(A="inline-flex items-center leading-none px-2 py-1 rounded text-xs font-medium "+ce(u[7].status)+" "+ue(u[7].status))&&c(x,"class",A)},d(u){u&&f(t)}}}function Ce(n){let t,l=n[1],e=[];for(let a=0;a<l.length;a+=1)e[a]=me(fe(n,l,a));return{c(){t=_("ul");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=g(a,"UL",{class:!0});var r=v(t);for(let s=0;s<e.length;s+=1)e[s].l(r);r.forEach(f),this.h()},h(){c(t,"class","flex flex-col -my-1 divide-y divide-gray-200 text-sm")},m(a,r){Y(a,t,r);for(let s=0;s<e.length;s+=1)e[s].m(t,null)},p(a,r){if(r&14){l=a[1];let s;for(s=0;s<l.length;s+=1){const m=fe(a,l,s);e[s]?e[s].p(m,r):(e[s]=me(m),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}},d(a){a&&f(t),ye(e,a)}}}function Ae(n){let t,l,e,a,r,s,m,$=n[1].length+"",w,h,x=(n[1].length!==1?"s":"")+"",D,C,A,j,J,y,B,u,i,p,S,T,E,z,V,L,F,Z;e=new Je({props:{src:Se,modifier:"stroke-2 text-red-600",size:6,type:"outline"}});function pe(d){n[6](d)}let ee={title:"Selected Jobs",$$slots:{default:[Ce]},$$scope:{ctx:n}};return n[0]!==void 0&&(ee.expanded=n[0]),y=new Te({props:ee}),ge.push(()=>ve(y,"expanded",pe)),{c(){t=_("div"),l=_("div"),M(e.$$.fragment),a=N(),r=_("div"),s=_("h2"),m=k("Delete "),w=k($),h=k(" Job"),D=k(x),C=k("?"),A=N(),j=_("div"),J=_("div"),M(y.$$.fragment),u=N(),i=_("div"),p=_("button"),S=k("Delete"),T=N(),E=_("button"),z=k("Cancel"),this.h()},l(d){t=g(d,"DIV",{class:!0});var b=v(t);l=g(b,"DIV",{class:!0});var P=v(l);Q(e.$$.fragment,P),P.forEach(f),a=U(b),r=g(b,"DIV",{class:!0});var K=v(r);s=g(K,"H2",{class:!0,id:!0});var q=v(s);m=I(q,"Delete "),w=I(q,$),h=I(q," Job"),D=I(q,x),C=I(q,"?"),q.forEach(f),A=U(K),j=g(K,"DIV",{class:!0});var te=v(j);J=g(te,"DIV",{class:!0});var se=v(J);Q(y.$$.fragment,se),se.forEach(f),te.forEach(f),K.forEach(f),u=U(b),i=g(b,"DIV",{class:!0});var O=v(i);p=g(O,"BUTTON",{type:!0,class:!0});var ae=v(p);S=I(ae,"Delete"),ae.forEach(f),T=U(O),E=g(O,"BUTTON",{type:!0,class:!0});var le=v(E);z=I(le,"Cancel"),le.forEach(f),O.forEach(f),b.forEach(f),this.h()},h(){c(l,"class","flex items-center justify-center h-12 w-12 mx-auto mb-3 rounded-full bg-red-100"),c(s,"class","mb-6 text-lg leading-6 font-medium text-gray-900"),c(s,"id","modal-headline"),c(J,"class","max-h-85 overflow-auto"),c(j,"class","mb-6 text-sm text-left bg-gray-100 rounded-md overflow-hidden"),oe(j,"pb-1",n[0]),c(r,"class","text-center"),c(p,"type","button"),c(p,"class","w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-65 disabled:cursor-not-allowed sm:col-start-2 sm:text-sm"),c(E,"type","button"),c(E,"class","mt-3 w-full inline-flex justify-center rounded-md border border-red-400 shadow-sm px-4 py-2 bg-white text-base font-medium text-red-600 hover:bg-gray-50 hover:text-red-700 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"),c(i,"class","grid grid-cols-2 gap-3 grid-flow-row-dense"),c(t,"class","inline-block align-bottom min-w-88 bg-white rounded-lg p-4 text-left shadow-xl transform transition-all")},m(d,b){Y(d,t,b),o(t,l),R(e,l,null),o(t,a),o(t,r),o(r,s),o(s,m),o(s,w),o(s,h),o(s,D),o(s,C),o(r,A),o(r,j),o(j,J),R(y,J,null),o(t,u),o(t,i),o(i,p),o(p,S),o(i,T),o(i,E),o(E,z),L=!0,F||(Z=[re(p,"click",n[5]),re(E,"click",n[4])],F=!0)},p(d,b){(!L||b&2)&&$!==($=d[1].length+"")&&H(w,$),(!L||b&2)&&x!==(x=(d[1].length!==1?"s":"")+"")&&H(D,x);const P={};b&1030&&(P.$$scope={dirty:b,ctx:d}),!B&&b&1&&(B=!0,P.expanded=d[0],$e(()=>B=!1)),y.$set(P),b&1&&oe(j,"pb-1",d[0])},i(d){L||(G(e.$$.fragment,d),G(y.$$.fragment,d),xe(()=>{V||(V=ie(t,de,{duration:250,start:.95},!0)),V.run(1)}),L=!0)},o(d){W(e.$$.fragment,d),W(y.$$.fragment,d),V||(V=ie(t,de,{duration:250,start:.95},!1)),V.run(0),L=!1},d(d){d&&f(t),X(e),X(y),d&&V&&V.end(),F=!1,je(Z)}}}function Ve(n){let t,l;return t=new Ie({props:{$$slots:{default:[Ae]},$$scope:{ctx:n}}}),{c(){M(t.$$.fragment)},l(e){Q(t.$$.fragment,e)},m(e,a){R(t,e,a),l=!0},p(e,[a]){const r={};a&1031&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){W(t.$$.fragment,e),l=!1},d(e){X(t,e)}}}function Ne(n,t,l){let e,a;ne(n,De,h=>l(1,e=h)),ne(n,Ee,h=>l(2,a=h));let r=!0;const s=h=>h.job_type,m=()=>ke.set(!1),$=()=>{we(e),m()};function w(h){r=h,l(0,r)}return[r,e,a,s,m,$,w]}class et extends he{constructor(t){super();be(this,t,Ne,Ve,_e,{})}}export{et as default};
