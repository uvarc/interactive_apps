import{S as H,h as K,s as Q,y as ve,Q as v,R as b,T as p,p as f,U as c,a9 as le,k as j,K as C,z as be,A as ke,B as we,o as ye,t as Ee,ad as je,am as O,I as T,a6 as J,J as P,a7 as M,a2 as d,ax as te,ae as W,c as R,j as G,ac as q,ak as se,av as ae,V as Ae,aB as Ne,ah as ie,ai as ne}from"./vendor.3ae73048.js";import"./types.8cb6216c.js";import{aW as F}from"./index.146c2037.js";import{aT as X,af as oe}from"./router.1b465492.js";function Se(a){let e,i,l,s,n;const t=a[4].default,o=ve(t,a,a[3],null);return{c(){e=v("button"),o&&o.c(),this.h()},l(r){e=b(r,"BUTTON",{class:!0,id:!0});var u=p(e);o&&o.l(u),u.forEach(f),this.h()},h(){c(e,"class",i="card "+a[1]+" svelte-1f2tu1t"),c(e,"id",a[2]),le(e,"selected",a[0])},m(r,u){j(r,e,u),o&&o.m(e,null),l=!0,s||(n=[C(e,"click",a[5]),C(e,"mouseover",a[6]),C(e,"mouseenter",a[7]),C(e,"mouseleave",a[8]),C(e,"contextmenu",a[9]),C(e,"focus",a[10]),C(e,"keydown",a[11])],s=!0)},p(r,[u]){o&&o.p&&(!l||u&8)&&be(o,t,r,r[3],l?we(t,r[3],u,null):ke(r[3]),null),(!l||u&2&&i!==(i="card "+r[1]+" svelte-1f2tu1t"))&&c(e,"class",i),(!l||u&4)&&c(e,"id",r[2]),u&3&&le(e,"selected",r[0])},i(r){l||(ye(o,r),l=!0)},o(r){Ee(o,r),l=!1},d(r){r&&f(e),o&&o.d(r),s=!1,je(n)}}}function De(a,e,i){let{$$slots:l={},$$scope:s}=e,{selected:n=!1}=e,{modifier:t=""}=e,{id:o=""}=e;function r(h){O.call(this,a,h)}function u(h){O.call(this,a,h)}function k(h){O.call(this,a,h)}function E(h){O.call(this,a,h)}function S(h){O.call(this,a,h)}function D(h){O.call(this,a,h)}function y(h){O.call(this,a,h)}return a.$$set=h=>{"selected"in h&&i(0,n=h.selected),"modifier"in h&&i(1,t=h.modifier),"id"in h&&i(2,o=h.id),"$$scope"in h&&i(3,s=h.$$scope)},[n,t,o,s,l,r,u,k,E,S,D,y]}class Le extends H{constructor(e){super();K(this,e,De,Se,Q,{selected:0,modifier:1,id:2})}}function re(a,e,i){const l=a.slice();return l[2]=e[i],l}function ce(a){let e,i,l=R(new Date(a[2].completed_at),{includeSeconds:!0})+"",s,n;return{c(){e=v("span"),i=J(", "),s=J(l),n=J(" ago"),this.h()},l(t){e=b(t,"SPAN",{class:!0});var o=p(e);i=M(o,", "),s=M(o,l),n=M(o," ago"),o.forEach(f),this.h()},h(){c(e,"class","italic text-gray-500")},m(t,o){j(t,e,o),d(e,i),d(e,s),d(e,n)},p(t,o){o&1&&l!==(l=R(new Date(t[2].completed_at),{includeSeconds:!0})+"")&&W(s,l)},d(t){t&&f(e)}}}function ue(a){var L;let e,i,l,s,n,t=a[2].uid+"",o,r,u,k=X((L=a[2].job_type)!=null?L:"",!0)+"",E,S,D,y,h,_=a[2].status==="completed"&&a[2].completed_at&&ce(a);function B(){return a[1](a[2])}return{c(){e=v("button"),i=v("span"),s=T(),n=v("span"),o=J(t),r=T(),u=v("span"),E=J(k),S=T(),_&&_.c(),D=T(),this.h()},l(A){e=b(A,"BUTTON",{type:!0,class:!0});var m=p(e);i=b(m,"SPAN",{class:!0}),p(i).forEach(f),s=P(m),n=b(m,"SPAN",{class:!0});var z=p(n);o=M(z,t),z.forEach(f),r=P(m),u=b(m,"SPAN",{class:!0});var U=p(u);E=M(U,k),U.forEach(f),S=P(m),_&&_.l(m),D=P(m),m.forEach(f),this.h()},h(){c(i,"class",l="mr-1 inline-block w-2 h-2 rounded-full "+F(a[2].status)),c(n,"class","font-medium"),c(u,"class","ml-2 italic text-gray-500"),c(e,"type","button"),c(e,"class","inline-flex items-center flex-shrink-0 px-1 py-0.5 rounded text-xs border border-gray-300 hover:bg-gray-100 text-gray-600 focus:outline-none")},m(A,m){j(A,e,m),d(e,i),d(e,s),d(e,n),d(n,o),d(e,r),d(e,u),d(u,E),d(e,S),_&&_.m(e,null),d(e,D),y||(h=C(e,"click",te(B)),y=!0)},p(A,m){var z;a=A,m&1&&l!==(l="mr-1 inline-block w-2 h-2 rounded-full "+F(a[2].status))&&c(i,"class",l),m&1&&t!==(t=a[2].uid+"")&&W(o,t),m&1&&k!==(k=X((z=a[2].job_type)!=null?z:"",!0)+"")&&W(E,k),a[2].status==="completed"&&a[2].completed_at?_?_.p(a,m):(_=ce(a),_.c(),_.m(e,D)):_&&(_.d(1),_=null)},d(A){A&&f(e),_&&_.d(),y=!1,h()}}}function Ie(a){let e,i=a[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=ue(re(a,i,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=G()},l(s){for(let n=0;n<l.length;n+=1)l[n].l(s);e=G()},m(s,n){for(let t=0;t<l.length;t+=1)l[t].m(s,n);j(s,e,n)},p(s,[n]){if(n&1){i=s[0];let t;for(t=0;t<i.length;t+=1){const o=re(s,i,t);l[t]?l[t].p(o,n):(l[t]=ue(o),l[t].c(),l[t].m(e.parentNode,e))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},i:q,o:q,d(s){se(l,s),s&&f(e)}}}function Te(a,e,i){let{jobs:l}=e;const s=n=>oe(n.project_uid,n.uid);return a.$$set=n=>{"jobs"in n&&i(0,l=n.jobs)},[l,s]}class We extends H{constructor(e){super();K(this,e,Te,Ie,Q,{jobs:0})}}function fe(a,e,i){const l=a.slice();return l[3]=e[i],l}function he(a,e,i){const l=a.slice();return l[6]=e[i],l}function de(a){let e,i=a[0],l=[];for(let s=0;s<i.length;s+=1)l[s]=pe(fe(a,i,s));return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0});var n=p(e);for(let t=0;t<l.length;t+=1)l[t].l(n);n.forEach(f),this.h()},h(){c(e,"class","flex items-center gap-1 p-1.5 overflow-auto custom-scrollbar custom-scrollbar--xs")},m(s,n){j(s,e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(s,n){if(n&3){i=s[0];let t;for(t=0;t<i.length;t+=1){const o=fe(s,i,t);l[t]?l[t].p(o,n):(l[t]=pe(o),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(s){s&&f(e),se(l,s)}}}function Pe(a){let e;return{c(){e=v("div"),this.h()},l(i){e=b(i,"DIV",{class:!0}),p(e).forEach(f),this.h()},h(){c(e,"class","w-full h-full bg-gray-100 rounded")},m(i,l){j(i,e,l)},p:q,d(i){i&&f(e)}}}function Be(a){let e=[],i=new Map,l,s=a[3].ui_tile_images;const n=t=>t[6].fileid;for(let t=0;t<s.length;t+=1){let o=he(a,s,t),r=n(o);i.set(r,e[t]=_e(r,o))}return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=G()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);l=G()},m(t,o){for(let r=0;r<e.length;r+=1)e[r].m(t,o);j(t,l,o)},p(t,o){o&3&&(s=t[3].ui_tile_images,e=Ae(e,o,n,1,t,s,i,l.parentNode,Ne,_e,l,he))},d(t){for(let o=0;o<e.length;o+=1)e[o].d(t);t&&f(l)}}}function _e(a,e){let i,l,s,n,t,o;return{key:a,first:null,c(){i=v("div"),l=v("img"),t=T(),this.h()},l(r){i=b(r,"DIV",{class:!0});var u=p(i);l=b(u,"IMG",{class:!0,src:!0,alt:!0}),t=P(u),u.forEach(f),this.h()},h(){var r;c(l,"class","w-full h-auto rounded"),ae(l.src,s="/api/files/"+e[6].fileid)||c(l,"src",s),c(l,"alt",n=e[6].name),c(i,"class",o=""+(e[1][(r=e[6].num_cols)!=null?r:1]+" h-auto bg-gray-300 rounded")),this.first=i},m(r,u){j(r,i,u),d(i,l),d(i,t)},p(r,u){var k;e=r,u&1&&!ae(l.src,s="/api/files/"+e[6].fileid)&&c(l,"src",s),u&1&&n!==(n=e[6].name)&&c(l,"alt",n),u&1&&o!==(o=""+(e[1][(k=e[6].num_cols)!=null?k:1]+" h-auto bg-gray-300 rounded"))&&c(i,"class",o)},d(r){r&&f(i)}}}function me(a){let e,i=R(new Date(a[3].completed_at),{includeSeconds:!0})+"",l,s;return{c(){e=v("span"),l=J(i),s=J(" ago"),this.h()},l(n){e=b(n,"SPAN",{class:!0});var t=p(e);l=M(t,i),s=M(t," ago"),t.forEach(f),this.h()},h(){c(e,"class","italic text-gray-500 flex-shrink-0")},m(n,t){j(n,e,t),d(e,l),d(e,s)},p(n,t){t&1&&i!==(i=R(new Date(n[3].completed_at),{includeSeconds:!0})+"")&&W(l,i)},d(n){n&&f(e)}}}function pe(a){var Y;let e,i,l,s,n,t,o=a[3].uid+"",r,u,k,E=X((Y=a[3].job_type)!=null?Y:"",!0)+"",S,D,y,h,_,B,L,A,m;function z(I,g){return g&1&&(h=null),h==null&&(h=!!(Array.isArray(I[3].ui_tile_images)&&I[3].ui_tile_images.length>0)),h?Be:Pe}let U=z(a,-1),N=U(a),w=a[3].status==="completed"&&a[3].completed_at&&me(a);function ge(){return a[2](a[3])}return{c(){e=v("button"),i=v("div"),l=v("span"),n=T(),t=v("span"),r=J(o),u=T(),k=v("span"),S=J(E),D=T(),y=v("div"),N.c(),_=T(),B=v("div"),w&&w.c(),L=T(),this.h()},l(I){e=b(I,"BUTTON",{type:!0,class:!0});var g=p(e);i=b(g,"DIV",{class:!0});var V=p(i);l=b(V,"SPAN",{class:!0}),p(l).forEach(f),n=P(V),t=b(V,"SPAN",{class:!0});var Z=p(t);r=M(Z,o),Z.forEach(f),u=P(V),k=b(V,"SPAN",{class:!0});var x=p(k);S=M(x,E),x.forEach(f),V.forEach(f),D=P(g),y=b(g,"DIV",{class:!0});var $=p(y);N.l($),$.forEach(f),_=P(g),B=b(g,"DIV",{class:!0});var ee=p(B);w&&w.l(ee),ee.forEach(f),L=P(g),g.forEach(f),this.h()},h(){c(l,"class",s="mr-1 inline-block w-2 h-2 rounded-full "+F(a[3].status)+" flex-shrink-0"),c(t,"class","font-medium flex-shrink-0"),c(k,"class","ml-2 italic text-gray-500 flex-shrink-0"),c(i,"class","flex items-center flex-shrink-0"),c(y,"class","w-full flex flex-grow items-center gap-1 flex-shrink-0"),c(B,"class","flex items-end gap-1 flex-shrink-0"),c(e,"type","button"),c(e,"class","h-full flex flex-col flex-shrink-0 p-1 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 rounded-md text-2xs text-gray-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-blue-500")},m(I,g){j(I,e,g),d(e,i),d(i,l),d(i,n),d(i,t),d(t,r),d(i,u),d(i,k),d(k,S),d(e,D),d(e,y),N.m(y,null),d(e,_),d(e,B),w&&w.m(B,null),d(e,L),A||(m=C(e,"click",te(ge)),A=!0)},p(I,g){var V;a=I,g&1&&s!==(s="mr-1 inline-block w-2 h-2 rounded-full "+F(a[3].status)+" flex-shrink-0")&&c(l,"class",s),g&1&&o!==(o=a[3].uid+"")&&W(r,o),g&1&&E!==(E=X((V=a[3].job_type)!=null?V:"",!0)+"")&&W(S,E),U===(U=z(a,g))&&N?N.p(a,g):(N.d(1),N=U(a),N&&(N.c(),N.m(y,null))),a[3].status==="completed"&&a[3].completed_at?w?w.p(a,g):(w=me(a),w.c(),w.m(B,null)):w&&(w.d(1),w=null)},d(I){I&&f(e),N.d(),w&&w.d(),A=!1,m()}}}function Ve(a){let e=Array.isArray(a[0])&&a[0].length>0,i,l=e&&de(a);return{c(){l&&l.c(),i=G()},l(s){l&&l.l(s),i=G()},m(s,n){l&&l.m(s,n),j(s,i,n)},p(s,[n]){n&1&&(e=Array.isArray(s[0])&&s[0].length>0),e?l?l.p(s,n):(l=de(s),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},i:q,o:q,d(s){l&&l.d(s),s&&f(i)}}}function Ce(a,e,i){const l={1:"w-20",2:"w-40",3:"w-60",4:"w-80",5:"w-100",6:"w-120"};let{jobs:s=[]}=e;const n=t=>oe(t.project_uid,t.uid);return a.$$set=t=>{"jobs"in t&&i(0,s=t.jobs)},[s,l,n]}class Ge extends H{constructor(e){super();K(this,e,Ce,Ve,Q,{jobs:0})}}function Je(a){let e,i,l;return{c(){e=ie("svg"),i=ie("path"),this.h()},l(s){e=ne(s,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var n=p(e);i=ne(n,"path",{"fill-rule":!0,d:!0}),p(i).forEach(f),n.forEach(f),this.h()},h(){c(i,"fill-rule","evenodd"),c(i,"d","M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"),c(e,"class",l="inline-block w-4 h-4 "+a[0]),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox","0 0 16 16"),c(e,"fill","currentColor")},m(s,n){j(s,e,n),d(e,i)},p(s,[n]){n&1&&l!==(l="inline-block w-4 h-4 "+s[0])&&c(e,"class",l)},i:q,o:q,d(s){s&&f(e)}}}function Me(a,e,i){let{modifier:l=""}=e;return a.$$set=s=>{"modifier"in s&&i(0,l=s.modifier)},[l]}class He extends H{constructor(e){super();K(this,e,Me,Je,Q,{modifier:0})}}export{Le as C,He as I,We as J,Ge as a};
