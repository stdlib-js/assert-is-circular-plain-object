// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isCircularPlainObject=r()}(this,(function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return t&&"symbol"==typeof Symbol.toStringTag}var e=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(t,r){return null!=t&&n.call(t,r)}var u="function"==typeof Symbol?Symbol.toStringTag:"";var i=r()?function(t){var r,n,i;if(null==t)return e.call(t);n=t[u],r=o(t,u);try{t[u]=void 0}catch(r){return e.call(t)}return i=e.call(t),r?t[u]=n:delete t[u],i}:function(t){return e.call(t)};var f=Array.isArray?Array.isArray:function(t){return"[object Array]"===i(t)};var c=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var a,p=Object.defineProperty,s=Object.prototype,y=s.toString,b=s.__defineGetter__,v=s.__defineSetter__,g=s.__lookupGetter__,d=s.__lookupSetter__;a=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?p:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===y.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(g.call(t,r)||d.call(t,r)?(n=t.__proto__,t.__proto__=s,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&b&&b.call(t,r,e.get),i&&v&&v.call(t,r,e.set),t};var h=a;function j(t,r,e){h(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function m(t){return"boolean"==typeof t}var w=Boolean.prototype.toString;var O=r();function _(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===i(t)))}function S(t){return m(t)||_(t)}function P(){return new Function("return this;")()}j(S,"isPrimitive",m),j(S,"isObject",_);var E="object"==typeof self?self:null,I="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var N=function(t){if(arguments.length){if(!m(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return P()}if(E)return E;if(I)return I;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),k=N.document&&N.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;function F(t){return null!==t&&"object"==typeof t}function L(t){var r,e,n,o;if(("Object"===(e=i(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}j(B,"REGEXP",V),j(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!f(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(F));var C="function"==typeof c||"object"==typeof x||"function"==typeof k?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};function G(t){return"function"===C(t)}var Y,M=Object.getPrototypeOf;Y=G(Object.getPrototypeOf)?M:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===i(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=Y;var H=Object.prototype;function W(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!f(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),X(t))}(t),!r||!o(t,"constructor")&&o(r,"constructor")&&G(r.constructor)&&"[object Function]"===i(r.constructor)&&o(r,"isPrototypeOf")&&G(r.isPrototypeOf)&&(r===H||function(t){var r;for(r in t)if(!o(t,r))return!1;return!0}(t)))}function D(t){return Object.keys(Object(t))}var R,U=void 0!==Object.keys;function q(t){return"[object Arguments]"===i(t)}R=function(){return q(arguments)}();var z=R;function J(t){return"string"==typeof t}var K=String.prototype.valueOf;var Q=r();function Z(t){return"object"==typeof t&&(t instanceof String||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object String]"===i(t)))}function $(t){return J(t)||Z(t)}function tt(t){return"number"==typeof t}j($,"isPrimitive",J),j($,"isObject",Z);var rt=Number,et=rt.prototype.toString;var nt=r();function ot(t){return"object"==typeof t&&(t instanceof rt||(nt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object Number]"===i(t)))}function ut(t){return tt(t)||ot(t)}function it(t){return t!=t}function ft(t){return tt(t)&&it(t)}function ct(t){return ot(t)&&it(t.valueOf())}function lt(t){return ft(t)||ct(t)}j(ut,"isPrimitive",tt),j(ut,"isObject",ot),j(lt,"isPrimitive",ft),j(lt,"isObject",ct);var at=Number.POSITIVE_INFINITY,pt=rt.NEGATIVE_INFINITY,st=Math.floor;function yt(t){return st(t)===t}function bt(t){return t<at&&t>pt&&yt(t)}function vt(t){return tt(t)&&bt(t)}function gt(t){return ot(t)&&bt(t.valueOf())}function dt(t){return vt(t)||gt(t)}j(dt,"isPrimitive",vt),j(dt,"isObject",gt);var ht=Object.prototype.propertyIsEnumerable;var jt=!ht.call("beep","0");function mt(t,r){var e;return null!=t&&(!(e=ht.call(t,r))&&jt&&$(t)?!ft(r=+r)&&vt(r)&&r>=0&&r<t.length:e)}var wt=z?q:function(t){return null!==t&&"object"==typeof t&&!f(t)&&"number"==typeof t.length&&yt(t.length)&&t.length>=0&&t.length<=4294967295&&o(t,"callee")&&!mt(t,"callee")},Ot=Array.prototype.slice;var _t=mt((function(){}),"prototype"),St=!mt({toString:null},"toString");function Pt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&yt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Et(t,r,e){var n,o;if(!Pt(t)&&!J(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!vt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(lt(r)){for(;o<n;o++)if(lt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}function It(t){return t.constructor&&t.constructor.prototype===t}var Tt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],At="undefined"==typeof window?void 0:window;var Nt=function(){var t;if("undefined"===C(At))return!1;for(t in At)try{-1===Et(Tt,t)&&o(At,t)&&null!==At[t]&&"object"===C(At[t])&&It(At[t])}catch(t){return!0}return!1}(),kt="undefined"!=typeof window;var xt,Bt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];xt=U?function(){return 2!==(D(arguments)||"").length}(1,2)?function(t){return wt(t)?D(Ot.call(t)):D(t)}:D:function(t){var r,e,n,u,i,f,c;if(u=[],wt(t)){for(c=0;c<t.length;c++)u.push(c.toString());return u}if("string"==typeof t){if(t.length>0&&!o(t,"0"))for(c=0;c<t.length;c++)u.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!F(t))return u;e=_t&&n}for(i in t)e&&"prototype"===i||!o(t,i)||u.push(String(i));if(St)for(r=function(t){if(!1===kt&&!Nt)return It(t);try{return It(t)}catch(t){return!1}}(t),c=0;c<Bt.length;c++)f=Bt[c],r&&"constructor"===f||!o(t,f)||u.push(String(f));return u};var Vt=xt;function Ft(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)}function Lt(t,r){var e;for(e=0;e<t.length;e++)if(t[e]===r)return!0;return!1}function Ct(t,r){var e,n,o;if(r.push(t),0===(e=Vt(t)).length)return!1;for(o=0;o<e.length;o++)if(Ft(n=t[e[o]])&&(Lt(r,n)||Ct(n,r)))return!0;return r.pop(t),!1}function Gt(t){return!!Ft(t)&&Ct(t,[])}return function(t){return!!W(t)&&Gt(t)}}));
//# sourceMappingURL=browser.js.map
