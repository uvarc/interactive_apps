var We=Object.defineProperty,Xe=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var be=(t,e,s)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ge=(t,e)=>{for(var s in e||(e={}))Ze.call(e,s)&&be(t,s,e[s]);if(pe)for(var s of pe(e))xe.call(e,s)&&be(t,s,e[s]);return t},ve=(t,e)=>Xe(t,Ye(e));import{S as ae,h as ie,s as oe,Q as V,C as ye,I as M,a6 as L,R as w,T as G,D as ke,J as B,a7 as C,p as m,U as v,a9 as Ee,k as N,a2 as _,E as Pe,K as re,aa as Ve,ae as Q,ak as se,o as x,t as ee,H as we,j as le,l as ue,m as fe,L as $e,aM as el,ac as ne,u as ll,w as tl,af as sl}from"./vendor.3ae73048.js";import{b8 as rl}from"./router.1b465492.js";import{I as nl}from"./Icon.61279884.js";import{b as Ie,a as Ge}from"./ChevronUp.0ab7bee0.js";import{bh as Ue}from"./index.146c2037.js";function Le(t,e,s){const l=t.slice();return l[7]=e[s],l[8]=e,l[9]=s,l}function Ce(t){let e,s,l,i,o,r,a,n,f,d;l=new nl({props:{src:t[0]?Ie:Ge}});let c=t[0]&&Ne(t);return{c(){e=V("div"),s=V("button"),ye(l.$$.fragment),i=M(),o=V("p"),r=L("Cluster submission script variables:"),a=M(),c&&c.c(),this.h()},l(u){e=w(u,"DIV",{class:!0});var g=G(e);s=w(g,"BUTTON",{type:!0,class:!0});var h=G(s);ke(l.$$.fragment,h),i=B(h),o=w(h,"P",{});var y=G(o);r=C(y,"Cluster submission script variables:"),y.forEach(m),h.forEach(m),a=B(g),c&&c.l(g),g.forEach(m),this.h()},h(){v(s,"type","button"),v(s,"class","w-full flex gap-1 items-center font-medium text-sm border-purple-600 bg-purple-50 text-purple-800 px-2 py-1"),Ee(s,"border-b",t[0]),v(e,"class","overflow-auto border border-purple-600 rounded-md shadow-sm custom-scrollbar custom-scrollbar--sm")},m(u,g){N(u,e,g),_(e,s),Pe(l,s,null),_(s,i),_(s,o),_(o,r),_(e,a),c&&c.m(e,null),n=!0,f||(d=re(s,"click",t[5]),f=!0)},p(u,g){const h={};g&1&&(h.src=u[0]?Ie:Ge),l.$set(h),g&1&&Ee(s,"border-b",u[0]),u[0]?c?c.p(u,g):(c=Ne(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i(u){n||(x(l.$$.fragment,u),n=!0)},o(u){ee(l.$$.fragment,u),n=!1},d(u){u&&m(e),we(l),c&&c.d(),f=!1,d()}}}function Ne(t){var i,o;let e,s=(o=(i=t[1])==null?void 0:i.custom_var_names)!=null?o:[],l=[];for(let r=0;r<s.length;r+=1)l[r]=Te(Le(t,s,r));return{c(){e=V("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var a=G(e);for(let n=0;n<l.length;n+=1)l[n].l(a);a.forEach(m),this.h()},h(){v(e,"class","grid grid-cols-2 text-xs p-2 gap-y-1 items-center")},m(r,a){N(r,e,a);for(let n=0;n<l.length;n+=1)l[n].m(e,null)},p(r,a){var n,f;if(a&26){s=(f=(n=r[1])==null?void 0:n.custom_var_names)!=null?f:[];let d;for(d=0;d<s.length;d+=1){const c=Le(r,s,d);l[d]?l[d].p(c,a):(l[d]=Te(c),l[d].c(),l[d].m(e,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=s.length}},d(r){r&&m(e),se(l,r)}}}function Te(t){var T,D,z,$;let e,s=t[7]+"",l,i,o,r,a,n,f,d,c=((T=t[3][t[7]])!=null?T:"(not set)")+"",u,g,h,y,b,P,I,R=(($=(z=(D=t[1])==null?void 0:D.custom_vars)==null?void 0:z[t[7]])!=null?$:"(not set)")+"",H,O,K,j,J,A,q,S,U;function E(){t[6].call(q,t[7])}return{c(){e=V("p"),l=L(s),i=M(),o=V("div"),r=M(),a=V("p"),n=L("Instance default:"),f=M(),d=V("p"),u=L(c),h=M(),y=V("p"),b=L("Target default:"),P=M(),I=V("p"),H=L(R),K=M(),j=V("p"),J=L("This job:"),A=M(),q=V("input"),this.h()},l(p){e=w(p,"P",{class:!0});var k=G(e);l=C(k,s),k.forEach(m),i=B(p),o=w(p,"DIV",{}),G(o).forEach(m),r=B(p),a=w(p,"P",{});var F=G(a);n=C(F,"Instance default:"),F.forEach(m),f=B(p),d=w(p,"P",{class:!0});var Y=G(d);u=C(Y,c),Y.forEach(m),h=B(p),y=w(p,"P",{});var W=G(y);b=C(W,"Target default:"),W.forEach(m),P=B(p),I=w(p,"P",{class:!0});var Z=G(I);H=C(Z,R),Z.forEach(m),K=B(p),j=w(p,"P",{});var X=G(j);J=C(X,"This job:"),X.forEach(m),A=B(p),q=w(p,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){var p,k;v(e,"class","font-mono font-semibold"),v(d,"class",g="font-mono text-2xs "+(typeof t[3][t[7]]!="string"?"text-gray-500":"")),v(I,"class",O="font-mono text-2xs "+(typeof((k=(p=t[1])==null?void 0:p.custom_vars)==null?void 0:k[t[7]])!="string"?"text-gray-500":"")),v(q,"type","text"),v(q,"placeholder","(not set)"),v(q,"class","block w-full rounded border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 p-1 leading-tight text-2xs")},m(p,k){N(p,e,k),_(e,l),N(p,i,k),N(p,o,k),N(p,r,k),N(p,a,k),_(a,n),N(p,f,k),N(p,d,k),_(d,u),N(p,h,k),N(p,y,k),_(y,b),N(p,P,k),N(p,I,k),_(I,H),N(p,K,k),N(p,j,k),_(j,J),N(p,A,k),N(p,q,k),Ve(q,t[4][t[7]]),S||(U=re(q,"input",E),S=!0)},p(p,k){var F,Y,W,Z,X,te;t=p,k&2&&s!==(s=t[7]+"")&&Q(l,s),k&10&&c!==(c=((F=t[3][t[7]])!=null?F:"(not set)")+"")&&Q(u,c),k&10&&g!==(g="font-mono text-2xs "+(typeof t[3][t[7]]!="string"?"text-gray-500":""))&&v(d,"class",g),k&2&&R!==(R=((Z=(W=(Y=t[1])==null?void 0:Y.custom_vars)==null?void 0:W[t[7]])!=null?Z:"(not set)")+"")&&Q(H,R),k&2&&O!==(O="font-mono text-2xs "+(typeof((te=(X=t[1])==null?void 0:X.custom_vars)==null?void 0:te[t[7]])!="string"?"text-gray-500":""))&&v(I,"class",O),k&18&&q.value!==t[4][t[7]]&&Ve(q,t[4][t[7]])},d(p){p&&m(e),p&&m(i),p&&m(o),p&&m(r),p&&m(a),p&&m(f),p&&m(d),p&&m(h),p&&m(y),p&&m(P),p&&m(I),p&&m(K),p&&m(j),p&&m(A),p&&m(q),S=!1,U()}}}function al(t){var i,o;let e,s,l=typeof t[1]!="undefined"&&((o=(i=t[1])==null?void 0:i.custom_var_names)==null?void 0:o.length)&&Ce(t);return{c(){l&&l.c(),e=le()},l(r){l&&l.l(r),e=le()},m(r,a){l&&l.m(r,a),N(r,e,a),s=!0},p(r,[a]){var n,f;typeof r[1]!="undefined"&&((f=(n=r[1])==null?void 0:n.custom_var_names)==null?void 0:f.length)?l?(l.p(r,a),a&2&&x(l,1)):(l=Ce(r),l.c(),x(l,1),l.m(e.parentNode,e)):l&&(ue(),ee(l,1,1,()=>{l=null}),fe())},i(r){s||(x(l),s=!0)},o(r){ee(l),s=!1},d(r){l&&l.d(r),r&&m(e)}}}function il(t,e,s){let l,i,o=ne,r=()=>(o(),o=el(n,u=>s(4,i=u)),n);$e(t,rl,u=>s(3,l=u)),t.$$.on_destroy.push(()=>o());let{target:a}=e,{clusterVars:n}=e;r();let{expanded:f=!1}=e;const d=()=>{s(0,f=!f)};function c(u){i[u]=this.value,n.set(i)}return t.$$set=u=>{"target"in u&&s(1,a=u.target),"clusterVars"in u&&r(s(2,n=u.clusterVars)),"expanded"in u&&s(0,f=u.expanded)},[f,a,n,l,i,d,c]}class ol extends ae{constructor(e){super();ie(this,e,il,al,oe,{target:1,clusterVars:2,expanded:0})}}function De(t,e,s){const l=t.slice();return l[13]=e[s],l}function Re(t){let e,s,l,i,o,r,a,n,f,d=t[0].name+"",c,u,g,h=t[0].type+"",y,b,P,I,R,H,O,K,j,J,A,q=t[5],S=[];for(let E=0;E<q.length;E+=1)S[E]=je(De(t,q,E));let U=t[7]&&t[0].type==="cluster"&&Ae(t);return{c(){e=V("label"),s=V("input"),r=M(),a=V("div"),n=V("div"),f=V("p"),c=L(d),u=M(),g=V("p"),y=L(h),b=M();for(let E=0;E<S.length;E+=1)S[E].c();P=M(),I=V("div"),O=M(),U&&U.c(),K=le(),this.h()},l(E){e=w(E,"LABEL",{class:!0});var T=G(e);s=w(T,"INPUT",{id:!0,type:!0,class:!0}),r=B(T),a=w(T,"DIV",{class:!0});var D=G(a);n=w(D,"DIV",{class:!0});var z=G(n);f=w(z,"P",{class:!0});var $=G(f);c=C($,d),$.forEach(m),u=B(z),g=w(z,"P",{class:!0});var p=G(g);y=C(p,h),p.forEach(m),z.forEach(m),b=B(D);for(let k=0;k<S.length;k+=1)S[k].l(D);D.forEach(m),P=B(T),I=w(T,"DIV",{class:!0,"aria-hidden":!0}),G(I).forEach(m),T.forEach(m),O=B(E),U&&U.l(E),K=le(),this.h()},h(){v(s,"id",l="lane_"+t[0].name),v(s,"type","radio"),s.value=i=t[0].name,v(s,"class","sr-only"),s.disabled=o=!t[8],v(f,"class","font-medium text-gray-900"),v(g,"class","font-medium text-gray-900"),v(n,"class","flex justify-between"),v(a,"class","w-full flex flex-col text-sm"),v(I,"class",R="absolute -inset-px rounded-lg pointer-events-none "+(t[7]?"border-purple-500 border-2":"border border-transparent")),v(I,"aria-hidden","true"),v(e,"class",H="relative block border "+(t[7]?"bg-purple-50 bg-opacity-50 border-transparent":t[8]?"bg-white border-gray-300":"bg-red-50 border-red-300")+" rounded-lg shadow-sm px-3 py-2 cursor-pointer sm:flex sm:justify-between focus:outline-none")},m(E,T){N(E,e,T),_(e,s),_(e,r),_(e,a),_(a,n),_(n,f),_(f,c),_(n,u),_(n,g),_(g,y),_(a,b);for(let D=0;D<S.length;D+=1)S[D].m(a,null);_(e,P),_(e,I),t[12](e),N(E,O,T),U&&U.m(E,T),N(E,K,T),j=!0,J||(A=re(s,"click",t[11]),J=!0)},p(E,T){if((!j||T&1&&l!==(l="lane_"+E[0].name))&&v(s,"id",l),(!j||T&1&&i!==(i=E[0].name))&&(s.value=i),(!j||T&256&&o!==(o=!E[8]))&&(s.disabled=o),(!j||T&1)&&d!==(d=E[0].name+"")&&Q(c,d),(!j||T&1)&&h!==(h=E[0].type+"")&&Q(y,h),T&32){q=E[5];let D;for(D=0;D<q.length;D+=1){const z=De(E,q,D);S[D]?S[D].p(z,T):(S[D]=je(z),S[D].c(),S[D].m(a,null))}for(;D<S.length;D+=1)S[D].d(1);S.length=q.length}(!j||T&128&&R!==(R="absolute -inset-px rounded-lg pointer-events-none "+(E[7]?"border-purple-500 border-2":"border border-transparent")))&&v(I,"class",R),(!j||T&384&&H!==(H="relative block border "+(E[7]?"bg-purple-50 bg-opacity-50 border-transparent":E[8]?"bg-white border-gray-300":"bg-red-50 border-red-300")+" rounded-lg shadow-sm px-3 py-2 cursor-pointer sm:flex sm:justify-between focus:outline-none"))&&v(e,"class",H),E[7]&&E[0].type==="cluster"?U?(U.p(E,T),T&129&&x(U,1)):(U=Ae(E),U.c(),x(U,1),U.m(K.parentNode,K)):U&&(ue(),ee(U,1,1,()=>{U=null}),fe())},i(E){j||(x(U),j=!0)},o(E){ee(U),j=!1},d(E){E&&m(e),se(S,E),t[12](null),E&&m(O),U&&U.d(E),E&&m(K),J=!1,A()}}}function He(t){var j,J,A,q,S,U,E,T,D,z,$;let e,s,l=((q=(A=(J=(j=t[13])==null?void 0:j.resource_slots)==null?void 0:J.CPU)==null?void 0:A.length)!=null?q:0)+"",i,o,r,a,n,f,d,c=((E=(U=(S=t[13])==null?void 0:S.resource_slots)==null?void 0:U.RAM)==null?void 0:E.length)*8+"",u,g,h,y,b,P,I,R=(($=(z=(D=(T=t[13])==null?void 0:T.resource_slots)==null?void 0:D.GPU)==null?void 0:z.length)!=null?$:0)+"",H,O,K;return{c(){e=V("div"),s=V("p"),i=L(l),o=L(" CPU"),r=M(),a=V("span"),n=L("\xB7"),f=M(),d=V("p"),u=L(c),g=L(" RAM"),h=M(),y=V("span"),b=L("\xB7"),P=M(),I=V("p"),H=L(R),O=L(" GPU"),this.h()},l(p){e=w(p,"DIV",{class:!0});var k=G(e);s=w(k,"P",{class:!0});var F=G(s);i=C(F,l),o=C(F," CPU"),F.forEach(m),r=B(k),a=w(k,"SPAN",{class:!0,"aria-hidden":!0});var Y=G(a);n=C(Y,"\xB7"),Y.forEach(m),f=B(k),d=w(k,"P",{class:!0});var W=G(d);u=C(W,c),g=C(W," RAM"),W.forEach(m),h=B(k),y=w(k,"SPAN",{class:!0,"aria-hidden":!0});var Z=G(y);b=C(Z,"\xB7"),Z.forEach(m),P=B(k),I=w(k,"P",{class:!0});var X=G(I);H=C(X,R),O=C(X," GPU"),X.forEach(m),k.forEach(m),this.h()},h(){v(s,"class","sm:inline"),v(a,"class","hidden sm:inline sm:mx-1"),v(a,"aria-hidden","true"),v(d,"class","sm:inline"),v(y,"class","hidden sm:inline sm:mx-1"),v(y,"aria-hidden","true"),v(I,"class","sm:inline"),v(e,"class",K=t[13].hasResources?"text-gray-600":"text-red-700 bg-red-50")},m(p,k){N(p,e,k),_(e,s),_(s,i),_(s,o),_(e,r),_(e,a),_(a,n),_(e,f),_(e,d),_(d,u),_(d,g),_(e,h),_(e,y),_(y,b),_(e,P),_(e,I),_(I,H),_(I,O)},p(p,k){var F,Y,W,Z,X,te,ce,de,_e,me,he;k&32&&l!==(l=((Z=(W=(Y=(F=p[13])==null?void 0:F.resource_slots)==null?void 0:Y.CPU)==null?void 0:W.length)!=null?Z:0)+"")&&Q(i,l),k&32&&c!==(c=((ce=(te=(X=p[13])==null?void 0:X.resource_slots)==null?void 0:te.RAM)==null?void 0:ce.length)*8+"")&&Q(u,c),k&32&&R!==(R=((he=(me=(_e=(de=p[13])==null?void 0:de.resource_slots)==null?void 0:_e.GPU)==null?void 0:me.length)!=null?he:0)+"")&&Q(H,R),k&32&&K!==(K=p[13].hasResources?"text-gray-600":"text-red-700 bg-red-50")&&v(e,"class",K)},d(p){p&&m(e)}}}function je(t){let e,s,l=t[13].name+"",i,o,r,a=t[13].type!=="cluster"&&He(t);return{c(){e=V("div"),s=V("p"),i=L(l),o=M(),a&&a.c(),r=M(),this.h()},l(n){e=w(n,"DIV",{class:!0});var f=G(e);s=w(f,"P",{class:!0});var d=G(s);i=C(d,l),d.forEach(m),o=B(f),a&&a.l(f),r=B(f),f.forEach(m),this.h()},h(){v(s,"class","text-xs font-mono font-semibold"),v(e,"class","border-t border-dashed border-gray-300 text-gray-500 mt-2 py-1")},m(n,f){N(n,e,f),_(e,s),_(s,i),_(e,o),a&&a.m(e,null),_(e,r)},p(n,f){f&32&&l!==(l=n[13].name+"")&&Q(i,l),n[13].type!=="cluster"?a?a.p(n,f):(a=He(n),a.c(),a.m(e,r)):a&&(a.d(1),a=null)},d(n){n&&m(e),a&&a.d()}}}function Ae(t){let e,s;return e=new ol({props:{target:t[1].find(Se),clusterVars:t[4]}}),{c(){ye(e.$$.fragment)},l(l){ke(e.$$.fragment,l)},m(l,i){Pe(e,l,i),s=!0},p(l,i){const o={};i&2&&(o.target=l[1].find(Se)),i&16&&(o.clusterVars=l[4]),e.$set(o)},i(l){s||(x(e.$$.fragment,l),s=!0)},o(l){ee(e.$$.fragment,l),s=!1},d(l){we(e,l)}}}function ul(t){let e,s,l=(t[8]||t[2])&&Re(t);return{c(){l&&l.c(),e=le()},l(i){l&&l.l(i),e=le()},m(i,o){l&&l.m(i,o),N(i,e,o),s=!0},p(i,[o]){i[8]||i[2]?l?(l.p(i,o),o&260&&x(l,1)):(l=Re(i),l.c(),x(l,1),l.m(e.parentNode,e)):l&&(ue(),ee(l,1,1,()=>{l=null}),fe())},i(i){s||(x(l),s=!0)},o(i){ee(l),s=!1},d(i){l&&l.d(i),i&&m(e)}}}const Se=t=>t.type==="cluster";function fl(t,e,s){let l,i,o,{lane:r}=e,{targets:a}=e,{selectedLane:n=null}=e,{showHiddenLanes:f=!1}=e,{selectLane:d}=e,{doesTargetHaveResources:c}=e,{clusterVars:u=tl({})}=e,g=null;ll(()=>{o&&d(r.name,!0),i&&(g==null||g.scrollIntoView({behavior:"smooth"}))});const h=()=>o&&d(r.name);function y(b){sl[b?"unshift":"push"](()=>{g=b,s(6,g)})}return t.$$set=b=>{"lane"in b&&s(0,r=b.lane),"targets"in b&&s(1,a=b.targets),"selectedLane"in b&&s(9,n=b.selectedLane),"showHiddenLanes"in b&&s(2,f=b.showHiddenLanes),"selectLane"in b&&s(3,d=b.selectLane),"doesTargetHaveResources"in b&&s(10,c=b.doesTargetHaveResources),"clusterVars"in b&&s(4,u=b.clusterVars)},t.$$.update=()=>{t.$$.dirty&1026&&s(5,l=a.map(b=>{var P,I,R,H,O,K,j,J;return ve(ge({},b),{hasResources:c((R=(I=(P=b==null?void 0:b.resource_slots)==null?void 0:P.CPU)==null?void 0:I.length)!=null?R:0,((O=(H=b==null?void 0:b.resource_slots)==null?void 0:H.RAM)==null?void 0:O.length)*8,(J=(j=(K=b==null?void 0:b.resource_slots)==null?void 0:K.GPU)==null?void 0:j.length)!=null?J:0)})})),t.$$.dirty&513&&s(7,i=n===r.name),t.$$.dirty&32&&s(8,o=l.some(b=>b.hasResources||b.type==="cluster"))},[r,a,f,d,u,l,g,i,o,n,c,h,y]}class vl extends ae{constructor(e){super();ie(this,e,fl,ul,oe,{lane:0,targets:1,selectedLane:9,showHiddenLanes:2,selectLane:3,doesTargetHaveResources:10,clusterVars:4})}}function Me(t,e,s){const l=t.slice();return l[9]=e[s],l}function Be(t,e,s){const l=t.slice();return l[12]=e[s],l}function qe(t,e,s){const l=t.slice();return l[15]=e[s],l}function Je(t){let e,s,l,i,o=(t[5]!==1?"s":"")+"",r;return{c(){e=V("p"),s=L("Select "),l=L(t[5]),i=L(" more GPU"),r=L(o),this.h()},l(a){e=w(a,"P",{class:!0});var n=G(e);s=C(n,"Select "),l=C(n,t[5]),i=C(n," more GPU"),r=C(n,o),n.forEach(m),this.h()},h(){v(e,"class","text-xs font-medium text-gray-700")},m(a,n){N(a,e,n),_(e,s),_(e,l),_(e,i),_(e,r)},p(a,n){n&32&&Q(l,a[5]),n&32&&o!==(o=(a[5]!==1?"s":"")+"")&&Q(r,o)},d(a){a&&m(e)}}}function Ke(t){let e,s;return{c(){e=V("p"),s=L("No GPUs available"),this.h()},l(l){e=w(l,"P",{class:!0});var i=G(e);s=C(i,"No GPUs available"),i.forEach(m),this.h()},h(){v(e,"class","text-xs font-medium text-gray-700 italic")},m(l,i){N(l,e,i),_(e,s)},p:ne,d(l){l&&m(e)}}}function Oe(t){let e,s,l,i,o,r,a,n,f,d,c=t[15].id+"",u,g,h=t[15].name+"",y,b,P=Ue(t[15].mem,0)+"",I,R,H,O,K;function j(...J){return t[8](t[12],t[15],...J)}return{c(){e=V("div"),s=V("div"),l=V("input"),n=M(),f=V("div"),d=V("label"),u=L(c),g=L(": "),y=L(h),b=L(" ("),I=L(P),R=L(")"),this.h()},l(J){e=w(J,"DIV",{class:!0});var A=G(e);s=w(A,"DIV",{class:!0});var q=G(s);l=w(q,"INPUT",{id:!0,type:!0,class:!0}),q.forEach(m),n=B(A),f=w(A,"DIV",{class:!0});var S=G(f);d=w(S,"LABEL",{for:!0,class:!0});var U=G(d);u=C(U,c),g=C(U,": "),y=C(U,h),b=C(U," ("),I=C(U,P),R=C(U,")"),U.forEach(m),S.forEach(m),A.forEach(m),this.h()},h(){v(l,"id",i=""+(t[12].name+"_"+t[15].id)),v(l,"type","checkbox"),v(l,"class",o="focus:outline-none focus:ring-transparent "+(t[2]===t[12].name?"focus-visible:ring-purple-500 text-purple-600 border-purple-300":"focus-visible:ring-gray-500 text-gray-600 border-gray-300")+" h-4 w-4 rounded disabled:opacity-50"),l.checked=r=t[2]===t[12].name&&t[3].includes(t[15].id),l.disabled=a=typeof t[2]=="string"&&t[2]!==t[12].name,v(s,"class","flex items-center"),v(d,"for",H=""+(t[12].name+"_"+t[15].id)),v(d,"class","text-xs font-medium text-gray-700"),v(f,"class","ml-2 text-sm"),v(e,"class","flex")},m(J,A){N(J,e,A),_(e,s),_(s,l),_(e,n),_(e,f),_(f,d),_(d,u),_(d,g),_(d,y),_(d,b),_(d,I),_(d,R),O||(K=re(l,"click",j),O=!0)},p(J,A){t=J,A&3&&i!==(i=""+(t[12].name+"_"+t[15].id))&&v(l,"id",i),A&7&&o!==(o="focus:outline-none focus:ring-transparent "+(t[2]===t[12].name?"focus-visible:ring-purple-500 text-purple-600 border-purple-300":"focus-visible:ring-gray-500 text-gray-600 border-gray-300")+" h-4 w-4 rounded disabled:opacity-50")&&v(l,"class",o),A&15&&r!==(r=t[2]===t[12].name&&t[3].includes(t[15].id))&&(l.checked=r),A&7&&a!==(a=typeof t[2]=="string"&&t[2]!==t[12].name)&&(l.disabled=a),A&3&&c!==(c=t[15].id+"")&&Q(u,c),A&3&&h!==(h=t[15].name+"")&&Q(y,h),A&3&&P!==(P=Ue(t[15].mem,0)+"")&&Q(I,P),A&3&&H!==(H=""+(t[12].name+"_"+t[15].id))&&v(d,"for",H)},d(J){J&&m(e),O=!1,K()}}}function Qe(t){var d;let e,s,l=t[12].name+"",i,o,r,a=(d=t[12].gpus)!=null?d:[],n=[];for(let c=0;c<a.length;c+=1)n[c]=Oe(qe(t,a,c));let f=null;return a.length||(f=Ke()),{c(){e=V("div"),s=V("p"),i=L(l),o=M();for(let c=0;c<n.length;c+=1)n[c].c();f&&f.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var u=G(e);s=w(u,"P",{class:!0});var g=G(s);i=C(g,l),g.forEach(m),o=B(u);for(let h=0;h<n.length;h+=1)n[h].l(u);f&&f.l(u),u.forEach(m),this.h()},h(){v(s,"class","mb-1 text-xs font-mono font-medium"),v(e,"class",r="p-1 border rounded "+(typeof t[2]=="string"&&t[2]!==t[12].name?"bg-gray-100 border-gray-200":typeof t[2]=="string"?"bg-purple-50 border-purple-500":"bg-white border-gray-200"))},m(c,u){N(c,e,u),_(e,s),_(s,i),_(e,o);for(let g=0;g<n.length;g+=1)n[g].m(e,null);f&&f.m(e,null)},p(c,u){var g;if(u&3&&l!==(l=c[12].name+"")&&Q(i,l),u&31){a=(g=c[12].gpus)!=null?g:[];let h;for(h=0;h<a.length;h+=1){const y=qe(c,a,h);n[h]?n[h].p(y,u):(n[h]=Oe(y),n[h].c(),n[h].m(e,null))}for(;h<n.length;h+=1)n[h].d(1);n.length=a.length,!a.length&&f?f.p(c,u):a.length?f&&(f.d(1),f=null):(f=Ke(),f.c(),f.m(e,null))}u&7&&r!==(r="p-1 border rounded "+(typeof c[2]=="string"&&c[2]!==c[12].name?"bg-gray-100 border-gray-200":typeof c[2]=="string"?"bg-purple-50 border-purple-500":"bg-white border-gray-200"))&&v(e,"class",r)},d(c){c&&m(e),se(n,c),f&&f.d()}}}function ze(t){let e,s,l,i=t[9].name+"",o,r,a,n=t[9].type+"",f,d,c;function u(...y){return t[7](t[9],...y)}let g=t[1].filter(u),h=[];for(let y=0;y<g.length;y+=1)h[y]=Qe(Be(t,g,y));return{c(){e=V("div"),s=V("div"),l=V("p"),o=L(i),r=M(),a=V("p"),f=L(n),d=M();for(let y=0;y<h.length;y+=1)h[y].c();c=M(),this.h()},l(y){e=w(y,"DIV",{class:!0});var b=G(e);s=w(b,"DIV",{class:!0});var P=G(s);l=w(P,"P",{class:!0});var I=G(l);o=C(I,i),I.forEach(m),r=B(P),a=w(P,"P",{class:!0});var R=G(a);f=C(R,n),R.forEach(m),P.forEach(m),d=B(b);for(let H=0;H<h.length;H+=1)h[H].l(b);c=B(b),b.forEach(m),this.h()},h(){v(l,"class","font-medium text-gray-900"),v(a,"class","text-gray-600"),v(s,"class","mb-2 flex justify-between items-center"),v(e,"class","border border-gray-300 rounded-md text-sm px-3 py-2")},m(y,b){N(y,e,b),_(e,s),_(s,l),_(l,o),_(s,r),_(s,a),_(a,f),_(e,d);for(let P=0;P<h.length;P+=1)h[P].m(e,null);_(e,c)},p(y,b){if(t=y,b&1&&i!==(i=t[9].name+"")&&Q(o,i),b&1&&n!==(n=t[9].type+"")&&Q(f,n),b&31){g=t[1].filter(u);let P;for(P=0;P<g.length;P+=1){const I=Be(t,g,P);h[P]?h[P].p(I,b):(h[P]=Qe(I),h[P].c(),h[P].m(e,c))}for(;P<h.length;P+=1)h[P].d(1);h.length=g.length}},d(y){y&&m(e),se(h,y)}}}function cl(t){let e,s,l=t[5]>0&&Je(t),i=t[0].filter(Fe),o=[];for(let r=0;r<i.length;r+=1)o[r]=ze(Me(t,i,r));return{c(){l&&l.c(),e=M();for(let r=0;r<o.length;r+=1)o[r].c();s=le()},l(r){l&&l.l(r),e=B(r);for(let a=0;a<o.length;a+=1)o[a].l(r);s=le()},m(r,a){l&&l.m(r,a),N(r,e,a);for(let n=0;n<o.length;n+=1)o[n].m(r,a);N(r,s,a)},p(r,[a]){if(r[5]>0?l?l.p(r,a):(l=Je(r),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),a&31){i=r[0].filter(Fe);let n;for(n=0;n<i.length;n+=1){const f=Me(r,i,n);o[n]?o[n].p(f,a):(o[n]=ze(f),o[n].c(),o[n].m(s.parentNode,s))}for(;n<o.length;n+=1)o[n].d(1);o.length=i.length}},i:ne,o:ne,d(r){l&&l.d(r),r&&m(e),se(o,r),r&&m(s)}}}const Fe=t=>t.type!=="cluster";function dl(t,e,s){let l,{lanes:i=[]}=e,{targets:o=[]}=e,{numGpusNeeded:r}=e,{selectedHostname:a=null}=e,{selectedGpus:n=[]}=e,{toggleGpu:f}=e;const d=(u,g)=>g.lane===u.name,c=(u,g,h)=>f(h,u.name,g.id);return t.$$set=u=>{"lanes"in u&&s(0,i=u.lanes),"targets"in u&&s(1,o=u.targets),"numGpusNeeded"in u&&s(6,r=u.numGpusNeeded),"selectedHostname"in u&&s(2,a=u.selectedHostname),"selectedGpus"in u&&s(3,n=u.selectedGpus),"toggleGpu"in u&&s(4,f=u.toggleGpu)},t.$$.update=()=>{t.$$.dirty&72&&s(5,l=r-n.length)},[i,o,a,n,f,l,r,d,c]}class yl extends ae{constructor(e){super();ie(this,e,dl,cl,oe,{lanes:0,targets:1,numGpusNeeded:6,selectedHostname:2,selectedGpus:3,toggleGpu:4})}}export{yl as G,vl as L};
