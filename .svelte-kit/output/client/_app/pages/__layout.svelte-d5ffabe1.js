var xe=Object.defineProperty;var Le=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var je=(i,e,t)=>e in i?xe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ke=(i,e)=>{for(var t in e||(e={}))et.call(e,t)&&je(i,t,e[t]);if(Le)for(var t of Le(e))tt.call(e,t)&&je(i,t,e[t]);return i};import{F as st,S as te,i as se,s as le,e as h,w as N,k as y,t as P,c as p,a as g,x as S,m as E,h as R,d,b as f,G as fe,g as V,y as I,H as u,j as Fe,q as $,o as b,B as C,I as ue,J as lt,K as Pe,L as Re,M as de,N as Me,O as Ue,P as Ge,Q as He,n as ye,p as Ee,R as at,T as qe,U as nt,V as Je,D as rt,W as it,l as me,X as ot,Y as Te,Z as we,C as Ke,_ as Qe}from"../chunks/vendor-eeacea03.js";import{I as ae}from"../chunks/Icon-be9706be.js";var ct="/build/_app/assets/logo-c93b601c.svg";const ft=()=>{const i=st("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session}},Ne={subscribe(i){return ft().page.subscribe(i)}};function ut(i){let e,t,l,r,o,s;return t=new ae({props:{title:i[0]}}),{c(){e=h("a"),N(t.$$.fragment),l=y(),r=h("span"),o=P(i[2]),this.h()},l(a){e=p(a,"A",{href:!0,class:!0});var n=g(e);S(t.$$.fragment,n),l=E(n),r=p(n,"SPAN",{class:!0});var c=g(r);o=R(c,i[2]),c.forEach(d),n.forEach(d),this.h()},h(){f(r,"class","ttText svelte-16thw0k"),f(e,"href",i[1]),f(e,"class","svelte-16thw0k"),fe(e,"active",i[3].url.pathname.includes(i[1]))},m(a,n){V(a,e,n),I(t,e,null),u(e,l),u(e,r),u(r,o),s=!0},p(a,[n]){const c={};n&1&&(c.title=a[0]),t.$set(c),(!s||n&4)&&Fe(o,a[2]),(!s||n&2)&&f(e,"href",a[1]),n&10&&fe(e,"active",a[3].url.pathname.includes(a[1]))},i(a){s||($(t.$$.fragment,a),s=!0)},o(a){b(t.$$.fragment,a),s=!1},d(a){a&&d(e),C(t)}}}function dt(i,e,t){let l;ue(i,Ne,a=>t(3,l=a));let{title:r}=e,{href:o}=e,{name:s}=e;return i.$$set=a=>{"title"in a&&t(0,r=a.title),"href"in a&&t(1,o=a.href),"name"in a&&t(2,s=a.name)},[r,o,s,l]}class Se extends te{constructor(e){super();se(this,e,dt,ut,le,{title:0,href:1,name:2})}}function mt(i){let e,t,l,r,o,s,a,n,c,m,v,L,A,Q,j,O;return v=new Se({props:{name:"Product Design",href:"/prod",title:"design"}}),A=new Se({props:{name:"Studio",href:"/studio",title:"studio"}}),j=new Se({props:{name:"Blue Sky",href:"/bluesky",title:"sky"}}),{c(){e=h("nav"),t=h("div"),l=h("a"),r=h("img"),s=y(),a=h("span"),n=P("Home"),c=y(),m=h("div"),N(v.$$.fragment),L=y(),N(A.$$.fragment),Q=y(),N(j.$$.fragment),this.h()},l(k){e=p(k,"NAV",{class:!0});var T=g(e);t=p(T,"DIV",{id:!0});var Z=g(t);l=p(Z,"A",{href:!0,class:!0});var D=g(l);r=p(D,"IMG",{src:!0,alt:!0}),s=E(D),a=p(D,"SPAN",{class:!0});var z=g(a);n=R(z,"Home"),z.forEach(d),D.forEach(d),Z.forEach(d),c=E(T),m=p(T,"DIV",{id:!0});var F=g(m);S(v.$$.fragment,F),L=E(F),S(A.$$.fragment,F),Q=E(F),S(j.$$.fragment,F),F.forEach(d),T.forEach(d),this.h()},h(){lt(r.src,o=ct)||f(r,"src",o),f(r,"alt","Logo"),f(a,"class","ttText svelte-fkv5bo"),f(l,"href","/"),f(l,"class","svelte-fkv5bo"),f(t,"id","logo"),f(m,"id","links"),f(e,"class","container svelte-fkv5bo")},m(k,T){V(k,e,T),u(e,t),u(t,l),u(l,r),u(l,s),u(l,a),u(a,n),u(e,c),u(e,m),I(v,m,null),u(m,L),I(A,m,null),u(m,Q),I(j,m,null),O=!0},p:Pe,i(k){O||($(v.$$.fragment,k),$(A.$$.fragment,k),$(j.$$.fragment,k),O=!0)},o(k){b(v.$$.fragment,k),b(A.$$.fragment,k),b(j.$$.fragment,k),O=!1},d(k){k&&d(e),C(v),C(A),C(j)}}}class _t extends te{constructor(e){super();se(this,e,null,mt,le,{})}}function We(i){let e,t,l,r,o;return t=new ae({props:{title:"close"}}),{c(){e=h("button"),N(t.$$.fragment),this.h()},l(s){e=p(s,"BUTTON",{class:!0});var a=g(e);S(t.$$.fragment,a),a.forEach(d),this.h()},h(){f(e,"class","close svelte-fy5aju")},m(s,a){V(s,e,a),I(t,e,null),l=!0,r||(o=de(e,"click",i[5]),r=!0)},p:Pe,i(s){l||($(t.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),l=!1},d(s){s&&d(e),C(t),r=!1,o()}}}function ht(i){let e,t,l,r,o,s;const a=i[4].default,n=Re(a,i,i[3],null);let c=i[1]&&We(i);return{c(){e=h("article"),t=h("div"),n&&n.c(),l=y(),c&&c.c(),this.h()},l(m){e=p(m,"ARTICLE",{class:!0,role:!0});var v=g(e);t=p(v,"DIV",{class:!0});var L=g(t);n&&n.l(L),L.forEach(d),l=E(v),c&&c.l(v),v.forEach(d),this.h()},h(){f(t,"class","text svelte-fy5aju"),f(e,"class",r=""+(Me(i[0])+" svelte-fy5aju")),f(e,"role","alert")},m(m,v){V(m,e,v),u(e,t),n&&n.m(t,null),u(e,l),c&&c.m(e,null),s=!0},p(m,[v]){n&&n.p&&(!s||v&8)&&Ue(n,a,m,m[3],s?He(a,m[3],v,null):Ge(m[3]),null),m[1]?c?(c.p(m,v),v&2&&$(c,1)):(c=We(m),c.c(),$(c,1),c.m(e,null)):c&&(ye(),b(c,1,1,()=>{c=null}),Ee()),(!s||v&1&&r!==(r=""+(Me(m[0])+" svelte-fy5aju")))&&f(e,"class",r)},i(m){s||($(n,m),$(c),at(()=>{o||(o=qe(e,Je,{},!0)),o.run(1)}),s=!0)},o(m){b(n,m),b(c),o||(o=qe(e,Je,{},!1)),o.run(0),s=!1},d(m){m&&d(e),n&&n.d(m),c&&c.d(),m&&o&&o.end()}}}function pt(i,e,t){let{$$slots:l={},$$scope:r}=e;const o=nt();let{type:s="error"}=e,{dismissible:a=!0}=e;const n=()=>o("dismiss");return i.$$set=c=>{"type"in c&&t(0,s=c.type),"dismissible"in c&&t(1,a=c.dismissible),"$$scope"in c&&t(3,r=c.$$scope)},[s,a,o,r,l,n]}class gt extends te{constructor(e){super();se(this,e,pt,ht,le,{type:0,dismissible:1})}}const Ie=rt([]),Xe=i=>{Ie.update(e=>e.filter(t=>t.id!==i))},Ce=i=>{const e=Math.floor(Math.random()*1e4),l=ke(ke({},{id:e,type:"info",dismissible:!0,timeout:3e3}),i);Ie.update(r=>[l,...r]),l.timeout&&setTimeout(()=>Xe(e),l.timeout)};function Ye(i,e,t){const l=i.slice();return l[2]=e[t],l}function Ze(i){let e,t=[],l=new Map,r,o=i[0];const s=a=>a[2].id;for(let a=0;a<o.length;a+=1){let n=Ye(i,o,a),c=s(n);l.set(c,t[a]=ze(c,n))}return{c(){e=h("section");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=p(a,"SECTION",{class:!0});var n=g(e);for(let c=0;c<t.length;c+=1)t[c].l(n);n.forEach(d),this.h()},h(){f(e,"class","svelte-6gbjsu")},m(a,n){V(a,e,n);for(let c=0;c<t.length;c+=1)t[c].m(e,null);r=!0},p(a,n){n&1&&(o=a[0],ye(),t=it(t,n,s,1,a,o,l,e,ot,ze,null,Ye),Ee())},i(a){if(!r){for(let n=0;n<o.length;n+=1)$(t[n]);r=!0}},o(a){for(let n=0;n<t.length;n+=1)b(t[n]);r=!1},d(a){a&&d(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function $t(i){let e=i[2].message+"",t;return{c(){t=P(e)},l(l){t=R(l,e)},m(l,r){V(l,t,r)},p(l,r){r&1&&e!==(e=l[2].message+"")&&Fe(t,e)},d(l){l&&d(t)}}}function ze(i,e){let t,l,r;function o(){return e[1](e[2])}return l=new gt({props:{type:e[2].type,dismissible:e[2].dismissible,$$slots:{default:[$t]},$$scope:{ctx:e}}}),l.$on("dismiss",o),{key:i,first:null,c(){t=me(),N(l.$$.fragment),this.h()},l(s){t=me(),S(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,a){V(s,t,a),I(l,s,a),r=!0},p(s,a){e=s;const n={};a&1&&(n.type=e[2].type),a&1&&(n.dismissible=e[2].dismissible),a&33&&(n.$$scope={dirty:a,ctx:e}),l.$set(n)},i(s){r||($(l.$$.fragment,s),r=!0)},o(s){b(l.$$.fragment,s),r=!1},d(s){s&&d(t),C(l,s)}}}function vt(i){let e,t,l=i[0]&&Ze(i);return{c(){l&&l.c(),e=me()},l(r){l&&l.l(r),e=me()},m(r,o){l&&l.m(r,o),V(r,e,o),t=!0},p(r,[o]){r[0]?l?(l.p(r,o),o&1&&$(l,1)):(l=Ze(r),l.c(),$(l,1),l.m(e.parentNode,e)):l&&(ye(),b(l,1,1,()=>{l=null}),Ee())},i(r){t||($(l),t=!0)},o(r){b(l),t=!1},d(r){l&&l.d(r),r&&d(e)}}}function bt(i,e,t){let l;return ue(i,Ie,o=>t(0,l=o)),[l,o=>Xe(o.id)]}class kt extends te{constructor(e){super();se(this,e,bt,vt,le,{})}}function yt(i){let e,t,l,r,o;return t=new ae({props:{title:"copy"}}),{c(){e=h("button"),N(t.$$.fragment),this.h()},l(s){e=p(s,"BUTTON",{title:!0,class:!0});var a=g(e);S(t.$$.fragment,a),a.forEach(d),this.h()},h(){f(e,"title","Copy"),f(e,"class","svelte-1iof2ed")},m(s,a){V(s,e,a),I(t,e,null),l=!0,r||(o=de(e,"click",function(){we(i[4])&&i[4].apply(this,arguments)}),r=!0)},p(s,a){i=s},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),l=!1},d(s){s&&d(e),C(t),r=!1,o()}}}function Et(i){let e,t,l,r,o;return t=new ae({props:{title:"copy"}}),{c(){e=h("button"),N(t.$$.fragment),this.h()},l(s){e=p(s,"BUTTON",{title:!0,class:!0});var a=g(e);S(t.$$.fragment,a),a.forEach(d),this.h()},h(){f(e,"title","Copy"),f(e,"class","svelte-1iof2ed")},m(s,a){V(s,e,a),I(t,e,null),l=!0,r||(o=de(e,"click",function(){we(i[4])&&i[4].apply(this,arguments)}),r=!0)},p(s,a){i=s},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),l=!1},d(s){s&&d(e),C(t),r=!1,o()}}}function Tt(i){let e,t,l,r,o;return t=new ae({props:{title:"copy"}}),{c(){e=h("button"),N(t.$$.fragment),this.h()},l(s){e=p(s,"BUTTON",{title:!0,class:!0});var a=g(e);S(t.$$.fragment,a),a.forEach(d),this.h()},h(){f(e,"title","Copy"),f(e,"class","svelte-1iof2ed")},m(s,a){V(s,e,a),I(t,e,null),l=!0,r||(o=de(e,"click",function(){we(i[4])&&i[4].apply(this,arguments)}),r=!0)},p(s,a){i=s},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),l=!1},d(s){s&&d(e),C(t),r=!1,o()}}}function wt(i){let e,t,l,r,o,s,a,n,c,m,v,L,A,Q,j,O,k,T,Z,D,z,F,J,M,_e,U,he,pe,K,G,ge,H,$e,ve,x,W,X,be,Y,re;return T=new Te({props:{text:"ntobat@gmail.com",$$slots:{default:[yt,({copy:_})=>({4:_}),({copy:_})=>_?16:0]},$$scope:{ctx:i}}}),T.$on("copy",i[1]),M=new Te({props:{text:"linkedin.com/in/nicktobat",$$slots:{default:[Et,({copy:_})=>({4:_}),({copy:_})=>_?16:0]},$$scope:{ctx:i}}}),M.$on("copy",i[2]),G=new Te({props:{text:"github.com/nicktobat",$$slots:{default:[Tt,({copy:_})=>({4:_}),({copy:_})=>_?16:0]},$$scope:{ctx:i}}}),G.$on("copy",i[3]),X=new ae({props:{title:"logo",width:"32px",height:"32px"}}),Y=new kt({}),{c(){e=h("footer"),t=h("hr"),l=y(),r=h("div"),o=h("section"),s=h("p"),a=P("This website is typeset in Forum & Days One,"),n=h("br"),c=P(`
        deployed through Github Pages, designed in Figma,`),m=h("br"),v=P(`
        and developed in Svelte by yours truly.
        `),L=h("br"),A=h("br"),Q=P(`
        Last updated November 30 2021.`),j=y(),O=h("section"),k=h("div"),N(T.$$.fragment),Z=y(),D=h("a"),z=P("ntobat@gmail.com"),F=y(),J=h("div"),N(M.$$.fragment),_e=y(),U=h("a"),he=P("linkedin.com/in/nicktobat"),pe=y(),K=h("div"),N(G.$$.fragment),ge=y(),H=h("a"),$e=P("github.com/nicktobat"),ve=y(),x=h("section"),W=h("a"),N(X.$$.fragment),be=y(),N(Y.$$.fragment),this.h()},l(_){e=p(_,"FOOTER",{class:!0});var w=g(e);t=p(w,"HR",{class:!0}),l=E(w),r=p(w,"DIV",{class:!0});var q=g(r);o=p(q,"SECTION",{class:!0});var ne=g(o);s=p(ne,"P",{class:!0});var B=g(s);a=R(B,"This website is typeset in Forum & Days One,"),n=p(B,"BR",{class:!0}),c=R(B,`
        deployed through Github Pages, designed in Figma,`),m=p(B,"BR",{class:!0}),v=R(B,`
        and developed in Svelte by yours truly.
        `),L=p(B,"BR",{class:!0}),A=p(B,"BR",{class:!0}),Q=R(B,`
        Last updated November 30 2021.`),B.forEach(d),ne.forEach(d),j=E(q),O=p(q,"SECTION",{class:!0});var ee=g(O);k=p(ee,"DIV",{class:!0});var ie=g(k);S(T.$$.fragment,ie),Z=E(ie),D=p(ie,"A",{href:!0,target:!0,title:!0,class:!0});var Oe=g(D);z=R(Oe,"ntobat@gmail.com"),Oe.forEach(d),ie.forEach(d),F=E(ee),J=p(ee,"DIV",{class:!0});var oe=g(J);S(M.$$.fragment,oe),_e=E(oe),U=p(oe,"A",{href:!0,target:!0,title:!0,class:!0});var De=g(U);he=R(De,"linkedin.com/in/nicktobat"),De.forEach(d),oe.forEach(d),pe=E(ee),K=p(ee,"DIV",{class:!0});var ce=g(K);S(G.$$.fragment,ce),ge=E(ce),H=p(ce,"A",{href:!0,target:!0,title:!0,class:!0});var Ve=g(H);$e=R(Ve,"github.com/nicktobat"),Ve.forEach(d),ce.forEach(d),ee.forEach(d),ve=E(q),x=p(q,"SECTION",{class:!0});var Ae=g(x);W=p(Ae,"A",{href:!0,class:!0});var Be=g(W);S(X.$$.fragment,Be),Be.forEach(d),Ae.forEach(d),q.forEach(d),be=E(w),S(Y.$$.fragment,w),w.forEach(d),this.h()},h(){f(t,"class","svelte-1iof2ed"),f(n,"class","svelte-1iof2ed"),f(m,"class","svelte-1iof2ed"),f(L,"class","svelte-1iof2ed"),f(A,"class","svelte-1iof2ed"),f(s,"class","svelte-1iof2ed"),f(o,"class","svelte-1iof2ed"),f(D,"href","//mailto:ntobat@gmail.com"),f(D,"target","_blank"),f(D,"title","Visit Link"),f(D,"class","svelte-1iof2ed"),f(k,"class","link svelte-1iof2ed"),f(U,"href","//linkedin.com/in/nicktobat"),f(U,"target","_blank"),f(U,"title","Visit Link"),f(U,"class","svelte-1iof2ed"),f(J,"class","link svelte-1iof2ed"),f(H,"href","//github.com/nicktobat"),f(H,"target","_blank"),f(H,"title","Visit Link"),f(H,"class","svelte-1iof2ed"),f(K,"class","link svelte-1iof2ed"),f(O,"class","links svelte-1iof2ed"),f(W,"href","/"),f(W,"class","svelte-1iof2ed"),f(x,"class","svelte-1iof2ed"),f(r,"class","sections svelte-1iof2ed"),f(e,"class","svelte-1iof2ed"),fe(e,"darkmode",i[0].url.pathname.includes("/prod/"))},m(_,w){V(_,e,w),u(e,t),u(e,l),u(e,r),u(r,o),u(o,s),u(s,a),u(s,n),u(s,c),u(s,m),u(s,v),u(s,L),u(s,A),u(s,Q),u(r,j),u(r,O),u(O,k),I(T,k,null),u(k,Z),u(k,D),u(D,z),u(O,F),u(O,J),I(M,J,null),u(J,_e),u(J,U),u(U,he),u(O,pe),u(O,K),I(G,K,null),u(K,ge),u(K,H),u(H,$e),u(r,ve),u(r,x),u(x,W),I(X,W,null),u(e,be),I(Y,e,null),re=!0},p(_,[w]){const q={};w&48&&(q.$$scope={dirty:w,ctx:_}),T.$set(q);const ne={};w&48&&(ne.$$scope={dirty:w,ctx:_}),M.$set(ne);const B={};w&48&&(B.$$scope={dirty:w,ctx:_}),G.$set(B),w&1&&fe(e,"darkmode",_[0].url.pathname.includes("/prod/"))},i(_){re||($(T.$$.fragment,_),$(M.$$.fragment,_),$(G.$$.fragment,_),$(X.$$.fragment,_),$(Y.$$.fragment,_),re=!0)},o(_){b(T.$$.fragment,_),b(M.$$.fragment,_),b(G.$$.fragment,_),b(X.$$.fragment,_),b(Y.$$.fragment,_),re=!1},d(_){_&&d(e),C(T),C(M),C(G),C(X),C(Y)}}}function Nt(i,e,t){let l;return ue(i,Ne,a=>t(0,l=a)),console.log(l.url.pathname),[l,()=>{Ce({message:"Copied to clipboard!",dismissable:!0,timeout:2e3})},()=>{Ce({message:"Copied to clipboard!",dismissable:!0,timeout:2e3})},()=>{Ce({message:"Copied to clipboard!",dismissable:!0,timeout:2e3})}]}class St extends te{constructor(e){super();se(this,e,Nt,wt,le,{})}}function It(i){let e,t,l,r,o;e=new _t({});const s=i[2].default,a=Re(s,i,i[1],null);return r=new St({}),{c(){N(e.$$.fragment),t=y(),a&&a.c(),l=y(),N(r.$$.fragment)},l(n){S(e.$$.fragment,n),t=E(n),a&&a.l(n),l=E(n),S(r.$$.fragment,n)},m(n,c){I(e,n,c),V(n,t,c),a&&a.m(n,c),V(n,l,c),I(r,n,c),o=!0},p(n,[c]){a&&a.p&&(!o||c&2)&&Ue(a,s,n,n[1],o?He(s,n[1],c,null):Ge(n[1]),null)},i(n){o||($(e.$$.fragment,n),$(a,n),$(r.$$.fragment,n),o=!0)},o(n){b(e.$$.fragment,n),b(a,n),b(r.$$.fragment,n),o=!1},d(n){C(e,n),n&&d(t),a&&a.d(n),n&&d(l),C(r,n)}}}function Ct(i,e,t){let l;ue(i,Ne,s=>t(0,l=s));let{$$slots:r={},$$scope:o}=e;return i.$$set=s=>{t(4,e=Ke(Ke({},e),Qe(s))),"$$scope"in s&&t(1,o=s.$$scope)},i.$$.update=()=>{l.url.pathname,e.href},e=Qe(e),[l,o,r]}class At extends te{constructor(e){super();se(this,e,Ct,It,le,{})}}export{At as default};
