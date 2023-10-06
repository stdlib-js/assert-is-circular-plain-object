// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&n.call(r,e)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var u=e()?function(r){var e,n,i;if(null==r)return t.call(r);n=r[a],e=o(r,a);try{r[a]=void 0}catch(e){return t.call(r)}return i=t.call(r),e?r[a]=n:delete r[a],i}:function(r){return t.call(r)};var c=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)};var f=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function p(r){return"number"==typeof r}function g(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+g(o):g(o)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===d.call(r.specifier)?d.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function v(r){return"string"==typeof r}var w=Math.abs,m=String.prototype.toLowerCase,j=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,_=/e-(\d)$/,E=/^(\d+)$/,k=/^(\d+)e/,x=/\.0$/,I=/\.0*e/,T=/(\..*[^0])0*e/;function P(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=O.call(t,T,"$1e"),t=O.call(t,I,"e"),t=O.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=O.call(t,S,"e+0$1"),t=O.call(t,_,"e-0$1"),r.alternate&&(t=O.call(t,E,"$1."),t=O.call(t,k,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===j.call(r.specifier)?j.call(t):m.call(t)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function V(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var F=String.fromCharCode,N=isNaN,$=Array.isArray;function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B(r){var e,t,n,o,i,a,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(v(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(i)?String(n.arg):F(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=V(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,o;for(t=[],o=0,n=L.exec(r);n;)(e=r.slice(o,L.lastIndex-n[0].length)).length&&t.push(e),t.push(R(n)),o=L.lastIndex,n=L.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function W(r){return"string"==typeof r}function X(r){var e,t,n;if(!W(r))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=G(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return B.apply(null,t)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,H=M.__defineSetter__,z=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Y.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(z.call(r,e)||D.call(r,e)?(n=r.__proto__,r.__proto__=M,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&U&&U.call(r,e,t.get),a&&H&&H.call(r,e,t.set),r};var q=Z;function J(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(r){return"boolean"==typeof r}var Q=Boolean,rr=Boolean.prototype.toString;var er=e();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===u(r)))}function nr(r){return K(r)||tr(r)}function or(){return new Function("return this;")()}J(nr,"isPrimitive",K),J(nr,"isObject",tr);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ur?ur:null,fr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!K(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(fr)return fr;if(ir)return ir;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function br(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,o;if(("Object"===(t=u(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}J(gr,"REGEXP",yr),J(br,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!c(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br));var hr="function"==typeof f||"object"==typeof pr||"function"==typeof sr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function vr(r){return"function"===hr(r)}var wr,mr=Object,jr=Object.getPrototypeOf;wr=vr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===u(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=wr;var Sr=Object.prototype;function _r(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!c(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),Or(r))}(r),!e||!o(r,"constructor")&&o(e,"constructor")&&vr(e.constructor)&&"[object Function]"===u(e.constructor)&&o(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!o(r,e))return!1;return!0}(r)))}function Er(r){return Object.keys(Object(r))}var kr=void 0!==Object.keys;function xr(r){return"[object Arguments]"===u(r)}var Ir=function(){return xr(arguments)}();function Tr(r){return"string"==typeof r}var Pr=String.prototype.valueOf;var Ar=e();function Vr(r){return"object"==typeof r&&(r instanceof String||(Ar?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object String]"===u(r)))}function Fr(r){return Tr(r)||Vr(r)}function Nr(r){return"number"==typeof r}J(Fr,"isPrimitive",Tr),J(Fr,"isObject",Vr);var $r=Number,Cr=$r.prototype.toString;var Br=e();function Lr(r){return"object"==typeof r&&(r instanceof $r||(Br?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function Rr(r){return Nr(r)||Lr(r)}function Gr(r){return r!=r}function Wr(r){return Nr(r)&&Gr(r)}function Xr(r){return Lr(r)&&Gr(r.valueOf())}function Zr(r){return Wr(r)||Xr(r)}J(Rr,"isPrimitive",Nr),J(Rr,"isObject",Lr),J(Zr,"isPrimitive",Wr),J(Zr,"isObject",Xr);var Mr=Number.POSITIVE_INFINITY,Yr=$r.NEGATIVE_INFINITY,Ur=Math.floor;function Hr(r){return Ur(r)===r}function zr(r){return r<Mr&&r>Yr&&Hr(r)}function Dr(r){return Nr(r)&&zr(r)}function qr(r){return Lr(r)&&zr(r.valueOf())}function Jr(r){return Dr(r)||qr(r)}J(Jr,"isPrimitive",Dr),J(Jr,"isObject",qr);var Kr=Object.prototype.propertyIsEnumerable;var Qr=!Kr.call("beep","0");function re(r,e){var t;return null!=r&&(!(t=Kr.call(r,e))&&Qr&&Fr(r)?!Wr(e=+e)&&Dr(e)&&e>=0&&e<r.length:t)}var ee=Ir?xr:function(r){return null!==r&&"object"==typeof r&&!c(r)&&"number"==typeof r.length&&Hr(r.length)&&r.length>=0&&r.length<=4294967295&&o(r,"callee")&&!re(r,"callee")},te=Array.prototype.slice;var ne=re((function(){}),"prototype"),oe=!re({toString:null},"toString");function ie(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Hr(r.length)&&r.length>=0&&r.length<=9007199254740991}function ae(r,e,t){var n,o;if(!ie(r)&&!Tr(r))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Dr(t))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Zr(e)){for(;o<n;o++)if(Zr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function ue(r){return r.constructor&&r.constructor.prototype===r}var ce=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],fe="undefined"==typeof window?void 0:window;var le=function(){var r;if("undefined"===hr(fe))return!1;for(r in fe)try{-1===ae(ce,r)&&o(fe,r)&&null!==fe[r]&&"object"===hr(fe[r])&&ue(fe[r])}catch(r){return!0}return!1}(),se="undefined"!=typeof window;var pe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ge=kr?function(){return 2!==(Er(arguments)||"").length}(1,2)?function(r){return ee(r)?Er(te.call(r)):Er(r)}:Er:function(r){var e,t,n,i,a,u,c;if(i=[],ee(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!o(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!br(r))return i;t=ne&&n}for(a in r)t&&"prototype"===a||!o(r,a)||i.push(String(a));if(oe)for(e=function(r){if(!1===se&&!le)return ue(r);try{return ue(r)}catch(r){return!1}}(r),c=0;c<pe.length;c++)u=pe[c],e&&"constructor"===u||!o(r,u)||i.push(String(u));return i};function ye(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)}function be(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}function de(r,e){var t,n,o;if(e.push(r),0===(t=ge(r)).length)return!1;for(o=0;o<t.length;o++)if(ye(n=r[t[o]])&&(be(e,n)||de(n,e)))return!0;return e.pop(r),!1}function he(r){return!!ye(r)&&de(r,[])}function ve(r){return!!_r(r)&&he(r)}export{ve as default};
//# sourceMappingURL=mod.js.map
