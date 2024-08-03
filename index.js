// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).isCircularPlainObject=e()}(this,(function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&n.call(r,e)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var u=e()?function(r){var e,n,i;if(null==r)return t.call(r);n=r[a],e=o(r,a);try{r[a]=void 0}catch(e){return t.call(r)}return i=t.call(r),e?r[a]=n:delete r[a],i}:function(r){return t.call(r)};var c=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)};var f=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function p(r){return"number"==typeof r}function g(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+g(o):g(o)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===d.call(r.specifier)?d.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var v=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,j=String.prototype.replace,O=/e\+(\d)$/,S=/e-(\d)$/,_=/^(\d+)$/,E=/^(\d+)e/,k=/\.0$/,T=/\.0*e/,x=/(\..*[^0])0*e/;function I(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":v(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=j.call(t,x,"$1e"),t=j.call(t,T,"e"),t=j.call(t,k,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=j.call(t,O,"e+0$1"),t=j.call(t,S,"e-0$1"),r.alternate&&(t=j.call(t,_,"$1."),t=j.call(t,E,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===m.call(r.specifier)?m.call(t):w.call(t)}function P(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,V=Array.isArray;function F(r){return r!=r}function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,t,n,o,i,a,u,c,f,l,s,p,g;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,F(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!F(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(i)?String(n.arg):A(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=I(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+P(g):P(g)+l)),a+=n.arg||"",u+=1}return a}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function L(r){var e,t,n,o;for(t=[],o=0,n=N.exec(r);n;)(e=r.slice(o,N.lastIndex-n[0].length)).length&&t.push(e),t.push(B(n)),o=N.lastIndex,n=N.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function R(r){var e,t;if("string"!=typeof r)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[L(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return $.apply(null,e)}var G,W=Object.prototype,X=W.toString,Z=W.__defineGetter__,M=W.__defineSetter__,Y=W.__lookupGetter__,U=W.__lookupSetter__;G=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===X.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Y.call(r,e)||U.call(r,e)?(n=r.__proto__,r.__proto__=W,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Z&&Z.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var H=G;function z(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(r){return"boolean"==typeof r}var q=Boolean,J=Boolean.prototype.toString;var K=e();function Q(r){return"object"==typeof r&&(r instanceof q||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===u(r)))}function rr(r){return D(r)||Q(r)}z(rr,"isPrimitive",D),z(rr,"isObject",Q);var er="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="object"==typeof global?global:null,or="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!D(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(or)return or;if(er)return er;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=ir.document&&ir.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;function lr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,o;if(("Object"===(t=u(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}z(cr,"REGEXP",fr),z(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!c(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof f||"object"==typeof ur||"function"==typeof ar?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function gr(r){return"function"===pr(r)}var yr,br=Object,dr=Object.getPrototypeOf;yr=gr(Object.getPrototypeOf)?dr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===u(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var hr=yr;var vr=Object.prototype;function wr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!c(r)}(r)&&(e=function(r){return null==r?null:(r=br(r),hr(r))}(r),!e||!o(r,"constructor")&&o(e,"constructor")&&gr(e.constructor)&&"[object Function]"===u(e.constructor)&&o(e,"isPrototypeOf")&&gr(e.isPrototypeOf)&&(e===vr||function(r){var e;for(e in r)if(!o(r,e))return!1;return!0}(r)))}function mr(r){return Object.keys(Object(r))}var jr,Or=void 0!==Object.keys;function Sr(r){return"[object Arguments]"===u(r)}jr=function(){return Sr(arguments)}();var _r=jr;function Er(r){return"string"==typeof r}var kr=String.prototype.valueOf;var Tr=e();function xr(r){return"object"==typeof r&&(r instanceof String||(Tr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object String]"===u(r)))}function Ir(r){return Er(r)||xr(r)}function Pr(r){return"number"==typeof r}z(Ir,"isPrimitive",Er),z(Ir,"isObject",xr);var Ar=Number,Vr=Ar.prototype.toString;var Fr=e();function Cr(r){return"object"==typeof r&&(r instanceof Ar||(Fr?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function $r(r){return Pr(r)||Cr(r)}function Nr(r){return r!=r}function Br(r){return Pr(r)&&Nr(r)}function Lr(r){return Cr(r)&&Nr(r.valueOf())}function Rr(r){return Br(r)||Lr(r)}z($r,"isPrimitive",Pr),z($r,"isObject",Cr),z(Rr,"isPrimitive",Br),z(Rr,"isObject",Lr);var Gr=Number.POSITIVE_INFINITY,Wr=Ar.NEGATIVE_INFINITY,Xr=Math.floor;function Zr(r){return Xr(r)===r}function Mr(r){return r<Gr&&r>Wr&&Zr(r)}function Yr(r){return Pr(r)&&Mr(r)}function Ur(r){return Cr(r)&&Mr(r.valueOf())}function Hr(r){return Yr(r)||Ur(r)}z(Hr,"isPrimitive",Yr),z(Hr,"isObject",Ur);var zr=Object.prototype.propertyIsEnumerable;var Dr=!zr.call("beep","0");function qr(r,e){var t;return null!=r&&(!(t=zr.call(r,e))&&Dr&&Ir(r)?!Br(e=+e)&&Yr(e)&&e>=0&&e<r.length:t)}var Jr=_r?Sr:function(r){return null!==r&&"object"==typeof r&&!c(r)&&"number"==typeof r.length&&Zr(r.length)&&r.length>=0&&r.length<=4294967295&&o(r,"callee")&&!qr(r,"callee")},Kr=Array.prototype.slice;var Qr=qr((function(){}),"prototype"),re=!qr({toString:null},"toString"),ee=9007199254740991;function te(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&Zr(i.length)&&i.length>=0&&i.length<=ee||Er(r)))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Yr(t))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Rr(e)){for(;o<n;o++)if(Rr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}function ne(r){return r.constructor&&r.constructor.prototype===r}var oe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ie="undefined"==typeof window?void 0:window;var ae=function(){var r;if("undefined"===pr(ie))return!1;for(r in ie)try{-1===te(oe,r)&&o(ie,r)&&null!==ie[r]&&"object"===pr(ie[r])&&ne(ie[r])}catch(r){return!0}return!1}(),ue="undefined"!=typeof window;var ce,fe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ce=Or?function(){return 2!==(mr(arguments)||"").length}(1,2)?function(r){return Jr(r)?mr(Kr.call(r)):mr(r)}:mr:function(r){var e,t,n,i,a,u,c;if(i=[],Jr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!o(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!lr(r))return i;t=Qr&&n}for(a in r)t&&"prototype"===a||!o(r,a)||i.push(String(a));if(re)for(e=function(r){if(!1===ue&&!ae)return ne(r);try{return ne(r)}catch(r){return!1}}(r),c=0;c<fe.length;c++)u=fe[c],e&&"constructor"===u||!o(r,u)||i.push(String(u));return i};var le=ce;function se(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)}function pe(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}function ge(r,e){var t,n,o;if(e.push(r),0===(t=le(r)).length)return!1;for(o=0;o<t.length;o++)if(se(n=r[t[o]])&&(pe(e,n)||ge(n,e)))return!0;return e.pop(r),!1}function ye(r){return!!se(r)&&ge(r,[])}return function(r){return!!wr(r)&&ye(r)}}));
//# sourceMappingURL=index.js.map