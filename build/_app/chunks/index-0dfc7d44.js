function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,u){const i=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(i){const r=s(n,e,o,u);t.p(r,i)}}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function $(){return h(" ")}function m(){return h("")}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t){return Array.from(t.childNodes)}function b(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function _(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return h(n)}function x(t){return _(t," ")}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n=document.body){return Array.from(n.querySelectorAll(t))}let v;function E(t){v=t}function A(){if(!v)throw new Error("Function called outside component initialization");return v}function j(t){A().$$.on_mount.push(t)}function N(t){A().$$.after_update.push(t)}function S(t,n){A().$$.context.set(t,n)}const q=[],C=[],O=[],T=[],z=Promise.resolve();let B=!1;function F(t){O.push(t)}let M=!1;const D=new Set;function G(){if(!M){M=!0;do{for(let t=0;t<q.length;t+=1){const n=q[t];E(n),P(n.$$)}for(E(null),q.length=0;C.length;)C.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];D.has(n)||(D.add(n),n())}O.length=0}while(q.length);for(;T.length;)T.pop()();B=!1,M=!1,D.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const H=new Set;let I;function J(){I={r:0,c:[],p:I}}function K(){I.r||r(I.c),I=I.p}function L(t,n){t&&t.i&&(H.delete(t),t.i(n))}function Q(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),I.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function R(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],i=n[c];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function U(t){return"object"==typeof t&&null!==t?t:{}}function V(t){t&&t.c()}function W(t,n){t&&t.l(n)}function X(t,n,o,u){const{fragment:i,on_mount:s,on_destroy:f,after_update:a}=t.$$;i&&i.m(n,o),u||F((()=>{const n=s.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(F)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(q.push(t),B||(B=!0,z.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tt(n,e,c,u,i,s,f=[-1]){const a=v;E(n);const l=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:f,skip_bound:!1};let p=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&i(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),p&&Z(n,t)),e})):[],l.update(),p=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=y(e.target);l.fragment&&l.fragment.l(t),t.forEach(d)}else l.fragment&&l.fragment.c();e.intro&&L(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),G()}E(a)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{J as A,K as B,i as C,f as D,t as E,k as F,a as G,nt as S,n as a,y as b,b as c,d,p as e,g as f,l as g,_ as h,tt as i,w as j,V as k,$ as l,m,W as n,x as o,X as p,R as q,U as r,u as s,h as t,L as u,Q as v,Y as w,S as x,N as y,j as z};