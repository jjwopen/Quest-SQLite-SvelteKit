import{t as de,a as Z}from"../chunks/disclose-version.Cchg-LBa.js";import"../chunks/legacy.D7dahzHe.js";import{y as xe,z as ge,A as ye,B as fe,C as ve,E as we,D as Ee,o as Ie,F as ee,G as Te,w as k,H as Ae,I as j,J as ce,K as ke,L as Ne,M as Se,N as $e,O as re,P as Ce,Q as Me,R as P,S as Re,x as De,T as Le,U as ae,V as U,W as L,X as Oe,Y as He,Z as te,_ as Be,$ as Ve,a0 as Xe,a1 as Ye,a2 as je,p as qe,q as N,a3 as O,s as _,i as Ge,j as y,t as se,g as c,k as Je,l as p,a4 as Ke}from"../chunks/runtime.DFDMHrX8.js";import{a as Pe,l as Ue,s as H,e as z}from"../chunks/render.BTGrRp7I.js";import{i as ze}from"../chunks/lifecycle.CxobNldi.js";import{o as Fe}from"../chunks/index-client.DjKqps2S.js";function Qe(r,e){return e}function We(r,e,a,n){for(var t=[],i=e.length,f=0;f<i;f++)ke(e[f].e,t,!0);var h=i>0&&t.length===0&&a!==null;if(h){var x=a.parentNode;Ne(x),x.append(a),n.clear(),$(r,e[0].prev,e[i-1].next)}Se(t,()=>{for(var m=0;m<i;m++){var s=e[m];h||(n.delete(s.k),$(r,s.prev,s.next)),$e(s.e,!h)}})}function Ze(r,e,a,n,t,i=null){var f=r,h={items:new Map,first:null};{var x=r;f=k?P(Re(x)):x.appendChild(xe())}k&&De();var m=null,s=!1;ge(()=>{var v=a(),o=ye(v)?v:v==null?[]:fe(v),l=o.length;if(s&&l===0)return;s=l===0;let g=!1;if(k){var I=f.data===Le;I!==(l===0)&&(f=ae(),P(f),U(!1),g=!0)}if(k){for(var E=null,d,u=0;u<l;u++){if(L.nodeType===8&&L.data===Oe){f=L,g=!0,U(!1);break}var S=o[u],T=n(S,u);d=ue(L,h,E,null,S,T,u,t,e),h.items.set(T,d),E=d}l>0&&P(ae())}if(!k){var w=Ce;er(o,h,f,t,e,(w.f&j)!==0,n)}i!==null&&(l===0?m?ce(m):m=ve(()=>i(f)):m!==null&&Me(m,()=>{m=null})),g&&U(!0),a()}),k&&(f=L)}function er(r,e,a,n,t,i,f){var h=r.length,x=e.items,m=e.first,s=m,v,o=null,l=[],g=[],I,E,d,u;for(u=0;u<h;u+=1){if(I=r[u],E=f(I,u),d=x.get(E),d===void 0){var S=s?s.e.nodes_start:a;o=ue(S,e,o,o===null?e.first:o.next,I,E,u,n,t),x.set(E,o),l=[],g=[],s=o.next;continue}if(rr(d,I,u),d.e.f&j&&ce(d.e),d!==s){if(v!==void 0&&v.has(d)){if(l.length<g.length){var T=g[0],w;o=T.prev;var C=l[0],D=l[l.length-1];for(w=0;w<l.length;w+=1)ne(l[w],T,a);for(w=0;w<g.length;w+=1)v.delete(g[w]);$(e,C.prev,D.next),$(e,o,C),$(e,D,T),s=T,o=D,u-=1,l=[],g=[]}else v.delete(d),ne(d,s,a),$(e,d.prev,d.next),$(e,d,o===null?e.first:o.next),$(e,o,d),o=d;continue}for(l=[],g=[];s!==null&&s.k!==E;)(i||!(s.e.f&j))&&(v??(v=new Set)).add(s),g.push(s),s=s.next;if(s===null)continue;d=s}l.push(d),o=d,s=d.next}if(s!==null||v!==void 0){for(var M=v===void 0?[]:fe(v);s!==null;)(i||!(s.e.f&j))&&M.push(s),s=s.next;var B=M.length;if(B>0){var V=h===0?a:null;We(e,M,V,x)}}re.first=e.first&&e.first.e,re.last=o&&o.e}function rr(r,e,a,n){Ae(r.v,e),r.i=a}function ue(r,e,a,n,t,i,f,h,x){var m=(x&we)!==0,s=(x&Ee)===0,v=m?s?Ie(t):ee(t):t,o=x&Te?ee(f):f,l={i:o,v,k:i,a:null,e:null,prev:a,next:n};try{return l.e=ve(()=>h(r,v,o),k),l.e.prev=a&&a.e,l.e.next=n&&n.e,a===null?e.first=l:(a.next=l,a.e.next=l.e),n!==null&&(n.prev=l,n.e.prev=l.e),l}finally{}}function ne(r,e,a){for(var n=r.next?r.next.e.nodes_start:a,t=e?e.e.nodes_start:a,i=r.e.nodes_start;i!==n;){var f=He(i);t.before(i),i=f}}function $(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function X(r){if(k){var e=!1,a=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;F(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var t=r.checked;F(r,"checked",null),r.checked=t}}};r.__on_r=a,Ve(a),Pe()}}function F(r,e,a,n){var t=r.__attributes??(r.__attributes={});k&&(t[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||t[e]!==(t[e]=a)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[Xe]=a),a==null?r.removeAttribute(e):typeof a!="string"&&ar(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var le=new Map;function ar(r){var e=le.get(r.nodeName);if(e)return e;le.set(r.nodeName,e=[]);for(var a,n=te(r),t=Element.prototype;t!==n;){a=Be(n);for(var i in a)a[i].set&&e.push(i);n=te(n)}return e}function Y(r,e,a=e){var n=Ye();Ue(r,"input",()=>{var t=ie(r)?oe(r.value):r.value;a(t),n&&t!==(t=e())&&(r.value=t??"")}),je(()=>{var t=e();if(k&&r.defaultValue!==r.value){a(r.value);return}ie(r)&&t===oe(r.value)||r.type==="date"&&!t&&!r.value||t!==r.value&&(r.value=t??"")})}function ie(r){var e=r.type;return e==="number"||e==="range"}function oe(r){return r===""?null:+r}var tr=de('<div class="border-grey-100 border-2 m-1 rounded-xl p-1"><h5> </h5> <h5> </h5> <h5> </h5> <h5> </h5> <h5> </h5></div>'),sr=de('<header><h1 class="text-2xl font-bold text-center">Coding Lab</h1></header> <div class="flex flex-col lg:flex-row lg:justify-between"><form class="lg:basis-1/2"><div class="border border-slate-100 shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-md bg-white px-3 py-4 m-4 bg-opacity-70 hover:bg-opacity-100 transition-all"><h2 class="font-semibold text-xl text-center pb-1 mb-3 border-b border-slate-300 border-dashed">점수 등록</h2> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">이름</p></h3> <label for="username"></label><input class="config border rounded-sm p-2 w-full h-12 text-xl" name="username" id="username"></div> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">연락처</p></h3> <label for="contact"></label><input class="config border rounded-sm p-2 w-full h-12 text-xl" name="contact" id="contact"></div> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">점수</p></h3> <label for="score"></label><input class="config border rounded-sm p-2 w-full h-12 text-xl" name="score" id="score"></div> <div class="mb-4 last:mb-0"><h3 class="flex items-center justify-center mb-1"><p class="text-sm font-semibold">X-Ten 개수</p></h3> <label for="xten"></label> <input class="config border rounded-sm p-2 w-full h-12 text-xl" name="xten" id="xten"></div> <input type="submit" class="bg-white text-slate-900 border border-slate-200 shadow-xl hover:bg-gray-50 ease-in-out duration-200 rounded-md px-4 w-full" value="등록"> <p id="error" class="text-red-600 text-center mt-2" style="display: none">모든 정보를 입력해주세요</p></div></form> <form class="lg:basis-1/2"><div class="border border-slate-100 shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-md bg-white px-3 py-4 m-4 bg-opacity-70 hover:bg-opacity-100 transition-all"><h2 class="font-semibold text-xl text-center pb-1 mb-3 border-b border-slate-300 border-dashed">점수 불러오기</h2> <input type="submit" value="데이터 불러오기" class="bg-white text-slate-900 border border-slate-200 shadow-xl hover:bg-gray-50 ease-in-out duration-200 rounded-md px-4 w-full"> <div class="mb-4 last:mb-0 mt-5" id="getScore"></div></div></form></div>',1);function cr(r,e){qe(e,!1);let a=O([]),n=O(""),t=O(""),i=O(0),f=O(0);async function h(){const b=await fetch("/api/scores");N(a,await b.json())}Fe(h);async function x(){let b=!1;if((!c(n).trim()||!c(t).trim()||c(i)===""||c(f)==="")&&(document.getElementById("error").style.display="block",setTimeout(()=>{document.getElementById("error").style.display="none"},3e3),b=!0),b)return;const A=await fetch("/api/scores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c(n),contact:c(t),score:c(i),xten:c(f)})});if(A.ok)N(n,""),N(t,""),N(i,0),N(f,0);else{const R=await A.json();alert(`Error: ${R.error}`)}}function m(b){b.target.select()}function s(){x(),h()}ze();var v=sr(),o=_(Ge(v),2),l=y(o),g=y(l),I=_(y(g),2),E=_(y(I),3);X(E),p(I);var d=_(I,2),u=_(y(d),3);X(u),p(d);var S=_(d,2),T=_(y(S),3);X(T),p(S);var w=_(S,2),C=_(y(w),4);X(C),p(w);var D=_(w,2);Ke(2),p(g),p(l);var M=_(l,2),B=y(M),V=_(y(B),2),Q=_(V,2);Ze(Q,5,()=>c(a),Qe,(b,A)=>{var R=tr();se(()=>F(R,"id",c(A).id.toString()));var q=y(R),_e=y(q);p(q);var G=_(q,2),he=y(G);p(G);var J=_(G,2),me=y(J);p(J);var K=_(J,2),be=y(K);p(K);var W=_(K,2),pe=y(W);p(W),p(R),se(()=>{H(_e,`ID: ${c(A).id??""}`),H(he,`이름: ${c(A).username??""}`),H(me,`연락처: ${c(A).contact??""}`),H(be,`점수: ${c(A).score??""}`),H(pe,`X-ten: ${c(A).xten??""}`)}),Z(b,R)}),p(Q),p(B),p(M),p(o),Y(E,()=>c(n),b=>N(n,b)),Y(u,()=>c(t),b=>N(t,b)),Y(T,()=>c(i),b=>N(i,b)),z("focus",C,m),Y(C,()=>c(f),b=>N(f,b)),z("click",D,s),z("click",V,h),Z(r,v),Je()}export{cr as component};