import{S as E,h as I,s as S,ah as z,ai as B,T as k,p as h,U as u,k as D,a2 as v,ac as j,y as V,C as W,D as q,E as y,o as C,t as w,H as J,Q as x,I as H,a6 as N,R as p,J as M,a7 as Q,z as R,A as T,B as U,l as F,m as G,ae as K}from"./vendor.3ae73048.js";import{I as L}from"./Icon.61279884.js";function O(o){let e,t,a;return{c(){e=z("svg"),t=z("path"),this.h()},l(s){e=B(s,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var r=k(e);t=B(r,"path",{"fill-rule":!0,d:!0}),k(t).forEach(h),r.forEach(h),this.h()},h(){u(t,"fill-rule","evenodd"),u(t,"d","M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"),u(e,"class",a="inline-block w-4 h-4 "+o[0]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 16 16"),u(e,"fill","currentColor")},m(s,r){D(s,e,r),v(e,t)},p(s,[r]){r&1&&a!==(a="inline-block w-4 h-4 "+s[0])&&u(e,"class",a)},i:j,o:j,d(s){s&&h(e)}}}function X(o,e,t){let{modifier:a=""}=e;return o.$$set=s=>{"modifier"in s&&t(0,a=s.modifier)},[a]}class te extends E{constructor(e){super();I(this,e,X,O,S,{modifier:0})}}function P(o){let e,t;return e=new L({props:{src:o[2],modifier:o[3]}}),{c(){W(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,s){y(e,a,s),t=!0},p(a,s){const r={};s&4&&(r.src=a[2]),s&8&&(r.modifier=a[3]),e.$set(r)},i(a){t||(C(e.$$.fragment,a),t=!0)},o(a){w(e.$$.fragment,a),t=!1},d(a){J(e,a)}}}function Y(o){let e,t,a,s,r,m,_,d,f;const g=o[7].default,n=V(g,o,o[6],null);let i=o[2]!==void 0&&P(o);return{c(){e=x("div"),t=x("p"),n&&n.c(),a=H(),i&&i.c(),s=H(),r=x("span"),m=N(o[0]),this.h()},l(l){e=p(l,"DIV",{class:!0});var c=k(e);t=p(c,"P",{class:!0});var b=k(t);n&&n.l(b),a=M(b),i&&i.l(b),s=M(b),r=p(b,"SPAN",{});var A=k(r);m=Q(A,o[0]),A.forEach(h),b.forEach(h),c.forEach(h),this.h()},h(){u(t,"class",_="flex items-center gap-1 text-sm leading-tight font-medium "+o[1]),u(e,"class",d="flex-shrink-0 flex items-center py-1.5 px-2 border-b border-t "+o[5]+" "+o[4])},m(l,c){D(l,e,c),v(e,t),n&&n.m(t,null),v(t,a),i&&i.m(t,null),v(t,s),v(t,r),v(r,m),f=!0},p(l,[c]){n&&n.p&&(!f||c&64)&&R(n,g,l,l[6],f?U(g,l[6],c,null):T(l[6]),null),l[2]!==void 0?i?(i.p(l,c),c&4&&C(i,1)):(i=P(l),i.c(),C(i,1),i.m(t,s)):i&&(F(),w(i,1,1,()=>{i=null}),G()),(!f||c&1)&&K(m,l[0]),(!f||c&2&&_!==(_="flex items-center gap-1 text-sm leading-tight font-medium "+l[1]))&&u(t,"class",_),(!f||c&48&&d!==(d="flex-shrink-0 flex items-center py-1.5 px-2 border-b border-t "+l[5]+" "+l[4]))&&u(e,"class",d)},i(l){f||(C(n,l),C(i),f=!0)},o(l){w(n,l),w(i),f=!1},d(l){l&&h(e),n&&n.d(l),i&&i.d()}}}function Z(o,e,t){let{$$slots:a={},$$scope:s}=e,{text:r="Detached"}=e,{textColour:m="text-orange-700"}=e,{icon:_=void 0}=e,{iconColour:d="text-orange-500"}=e,{background:f="bg-orange-50"}=e,{border:g="border-orange-400"}=e;return o.$$set=n=>{"text"in n&&t(0,r=n.text),"textColour"in n&&t(1,m=n.textColour),"icon"in n&&t(2,_=n.icon),"iconColour"in n&&t(3,d=n.iconColour),"background"in n&&t(4,f=n.background),"border"in n&&t(5,g=n.border),"$$scope"in n&&t(6,s=n.$$scope)},[r,m,_,d,f,g,s,a]}class ne extends E{constructor(e){super();I(this,e,Z,Y,S,{text:0,textColour:1,icon:2,iconColour:3,background:4,border:5})}}export{te as S,ne as W};
