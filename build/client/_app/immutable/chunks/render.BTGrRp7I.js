import{a7 as E,a8 as b,P,O as N,a9 as B,aa as C,A as H,m as M,ab as T,S as q,ac as $,Y as j,ad as L,V as w,R as A,x as X,B as x,ae as z,y as F,C as G,p as J,c as K,w as S,W as p,k as Q,X as U,af as Z,ag as ee,L as te}from"./runtime.DFDMHrX8.js";import{b as re}from"./disclose-version.Cchg-LBa.js";let k=!1;function ae(){k||(k=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const a of e.target.elements)(t=a.__on_r)==null||t.call(a)})},{capture:!0}))}function V(e){var t=P,a=N;E(null),b(null);try{return e()}finally{E(t),b(a)}}function le(e,t,a,i=a){e.addEventListener(t,()=>V(a));const n=e.__on_r;n?e.__on_r=()=>{n(),i()}:e.__on_r=i,ae()}const ne=new Set,D=new Set;function se(e,t,a,i){function n(r){if(i.capture||y.call(t,r),!r.cancelBubble)return V(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?B(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function de(e,t,a,i,n){var r={capture:i,passive:n},f=se(e,t,a,r);(t===document.body||t===window||t===document)&&M(()=>{t.removeEventListener(e,f,r)})}function y(e){var O;var t=this,a=t.ownerDocument,i=e.type,n=((O=e.composedPath)==null?void 0:O.call(e))||[],r=n[0]||e.target,f=0,h=e.__root;if(h){var l=n.indexOf(h);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var d=n.indexOf(t);if(d===-1)return;l<=d&&(f=l)}if(r=n[f]||e.target,r!==t){C(e,"currentTarget",{configurable:!0,get(){return r||a}});var m=P,u=N;E(null),b(null);try{for(var s,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!==void 0&&!r.disabled)if(H(_)){var[W,...Y]=_;W.apply(r,[e,...Y])}else _.call(r,e)}catch(g){s?o.push(g):s=g}if(e.cancelBubble||c===t||c===null)break;r=c}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{e.__root=t,delete e.currentTarget,E(m),b(u)}}}const ie=["touchstart","touchmove"];function oe(e){return ie.includes(e)}function _e(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function fe(e,t){return I(e,t)}function he(e,t){T(),t.intro=t.intro??!1;const a=t.target,i=S,n=p;try{for(var r=q(a);r&&(r.nodeType!==8||r.data!==$);)r=j(r);if(!r)throw L;w(!0),A(r),X();const f=I(e,{...t,anchor:r});if(p===null||p.nodeType!==8||p.data!==U)throw Z(),L;return w(!1),f}catch(f){if(f===L)return t.recover===!1&&ee(),T(),te(a),w(!1),fe(e,t);throw f}finally{w(i),A(n)}}const v=new Map;function I(e,{target:t,anchor:a,props:i={},events:n,context:r,intro:f=!0}){T();var h=new Set,l=u=>{for(var s=0;s<u.length;s++){var o=u[s];if(!h.has(o)){h.add(o);var c=oe(o);t.addEventListener(o,y,{passive:c});var _=v.get(o);_===void 0?(document.addEventListener(o,y,{passive:c}),v.set(o,1)):v.set(o,_+1)}}};l(x(ne)),D.add(l);var d=void 0,m=z(()=>{var u=a??t.appendChild(F());return G(()=>{if(r){J({});var s=K;s.c=r}n&&(i.$$events=n),S&&re(u,null),d=e(u,i)||{},S&&(N.nodes_end=p),r&&Q()}),()=>{var c;for(var s of h){t.removeEventListener(s,y);var o=v.get(s);--o===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,o)}D.delete(l),R.delete(d),u!==a&&((c=u.parentNode)==null||c.removeChild(u))}});return R.set(d,m),d}let R=new WeakMap;function ve(e){const t=R.get(e);t&&t()}export{ae as a,de as e,he as h,le as l,fe as m,_e as s,ve as u};