!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],n):"object"==typeof exports?exports.ReactFancyText=n(require("react"),require("react-dom")):t.ReactFancyText=n(t.React,t.ReactDOM)}(this,function(t,n){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(44),i=r(o),u=e(48),f=r(u),c=e(49),a=r(c),s=e(51),l=r(s),p=e(50),d=r(p),y=e(88),v=(r(y),e(87)),h=r(v),b=function(t){function n(t,e){(0,f["default"])(this,n);var r=(0,l["default"])(this,(0,i["default"])(n).call(this,t,e)),o=document.createElement("style");return o.appendChild(document.createTextNode("")),document.head.appendChild(o),r.state={timingFunctions:["linear","ease-in","ease-out","ease-in-out","ease"],styleSheet:o.sheet,textColor:r.props.textColor||"#F9F6F5",shadowColor:r.props.textColor||"#fff"},r}return(0,d["default"])(n,t),(0,a["default"])(n,[{key:"getRandomInt",value:function(t,n){return Math.floor(Math.random()*(n-t))+t}},{key:"renderLetters",value:function(t){var n="@keyframes fading {\n      from {\n        color: rgba(255,255,255,0);\n        text-shadow: 0 0 .5em "+this.state.shadowColor+";\n      }\n      to {\n        color: "+this.state.textColor+";\n        text-shadow: 0 0 .1em "+this.state.shadowColor+";\n      }\n    }";this.state.styleSheet.insertRule(n,this.state.styleSheet.cssRules.length);for(var e=[],r=0;r<t.length;r++){var o=this.getRandomInt(30,60)/10,i=this.state.timingFunctions[this.getRandomInt(0,5)],u={WebkitAnimationName:"fading",animationName:"fading",WebkitAnimationDuration:o+"s",animationDuration:o+"s",WebkitAnimationDelay:"0s",animationDelay:"0s",WebkitAnimationIterationCount:"infinite",animationIterationCount:"infinite",WebkitAnimationDirection:"alternate",animationDirection:"alternate",WebkitAnimationTimingFunction:i,animationTimingFunction:i};e.push(h["default"].createElement("span",{key:r,className:"char"+r,style:u},t[r]))}return e}},{key:"render",value:function(){var t=this.props,n=t.tagName,e=t.children;return n=n||"div",h["default"].createElement(n,this.props,this.renderLetters(e))}}]),n}(h["default"].Component);n["default"]=b},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(10),o=e(33),i=e(26),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(63),o=e(16);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(2),o=e(1),i=e(31),u=e(8),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,h=t&c.B,b=t&c.W,m=d?o:o[n]||(o[n]={}),x=m[f],_=d?r:y?r[n]:(r[n]||{})[f];d&&(e=n);for(a in e)s=!p&&_&&void 0!==_[a],s&&a in m||(l=s?_[a]:e[a],m[a]=d&&"function"!=typeof _[a]?e[a]:h&&s?i(l,r):b&&_[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[a]=l,t&c.R&&x&&!x[a]&&u(x,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(5),o=e(14);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(24)("wks"),o=e(15),i=e(2).Symbol,u="function"==typeof i,f=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};f.store=r},function(t,n,e){var r=e(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(39),o=e(17);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n,e){var r=e(10),o=e(69),i=e(17),u=e(23)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,n=e(32)("iframe"),r=i.length,o=">";for(n.style.display="none",e(62).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),a=t.F;r--;)delete a[c][i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(5).f,o=e(4),i=e(9)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(24)("keys"),o=e(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(12);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),o=e(1),i=e(19),u=e(28),f=e(5).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(9)},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(47),i=r(o),u=e(46),f=r(u),c="function"==typeof f["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(i["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(58);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(12),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){t.exports=!e(3)&&!e(11)(function(){return 7!=Object.defineProperty(e(32)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(19),o=e(7),i=e(40),u=e(8),f=e(4),c=e(18),a=e(65),s=e(22),l=e(38),p=e(9)("iterator"),d=!([].keys&&"next"in[].keys()),y="@@iterator",v="keys",h="values",b=function(){return this};t.exports=function(t,n,e,m,x,_,g){a(e,n,m);var O,w,S,j=function(t){if(!d&&t in k)return k[t];switch(t){case v:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},P=n+" Iterator",E=x==h,M=!1,k=t.prototype,F=k[p]||k[y]||x&&k[x],T=F||j(x),A=x?E?j("entries"):T:void 0,C="Array"==n?k.entries||F:F;if(C&&(S=l(C.call(new t)),S!==Object.prototype&&(s(S,P,!0),r||f(S,p)||u(S,p,b))),E&&F&&F.name!==h&&(M=!0,T=function(){return F.call(this)}),r&&!g||!d&&!M&&k[p]||u(k,p,T),c[n]=T,c[P]=b,x)if(O={values:E?T:j(h),keys:_?T:j(v),entries:A},g)for(w in O)w in k||i(k,w,O[w]);else o(o.P+o.F*(d||M),n,O);return O}},function(t,n,e){var r=e(21),o=e(14),i=e(6),u=e(26),f=e(4),c=e(33),a=Object.getOwnPropertyDescriptor;n.f=e(3)?a:function(t,n){if(t=i(t),n=u(n,!0),c)try{return a(t,n)}catch(e){}return f(t,n)?o(!r.f.call(t,n),t[n]):void 0}},function(t,n,e){var r=e(39),o=e(17).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4),o=e(41),i=e(23)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(4),o=e(6),i=e(60)(!1),u=e(23)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=u&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){t.exports=e(8)},function(t,n,e){var r=e(16);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports={"default":e(52),__esModule:!0}},function(t,n,e){t.exports={"default":e(53),__esModule:!0}},function(t,n,e){t.exports={"default":e(54),__esModule:!0}},function(t,n,e){t.exports={"default":e(55),__esModule:!0}},function(t,n,e){t.exports={"default":e(56),__esModule:!0}},function(t,n,e){t.exports={"default":e(57),__esModule:!0}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(43),i=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(45),i=r(o),u=e(42),f=r(u),c=e(29),a=r(c);n["default"]=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof n?"undefined":(0,a["default"])(n)));t.prototype=(0,f["default"])(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(i["default"]?(0,i["default"])(t,n):t.__proto__=n)}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(29),i=r(o);n["default"]=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==("undefined"==typeof n?"undefined":(0,i["default"])(n))&&"function"!=typeof n?t:n}},function(t,n,e){e(77);var r=e(1).Object;t.exports=function(t,n){return r.create(t,n)}},function(t,n,e){e(78);var r=e(1).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(79),t.exports=e(1).Object.getPrototypeOf},function(t,n,e){e(80),t.exports=e(1).Object.setPrototypeOf},function(t,n,e){e(83),e(81),e(84),e(85),t.exports=e(1).Symbol},function(t,n,e){e(82),e(86),t.exports=e(28).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(6),o=e(75),i=e(74);t.exports=function(t){return function(n,e,u){var f,c=r(n),a=o(c.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(13),o=e(37),i=e(21);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&n.push(u);return n}},function(t,n,e){t.exports=e(2).document&&document.documentElement},function(t,n,e){var r=e(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(30);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(20),o=e(14),i=e(22),u={};e(8)(u,e(9)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(13),o=e(6);t.exports=function(t,n){for(var e,i=o(t),u=r(i),f=u.length,c=0;f>c;)if(i[e=u[c++]]===n)return e}},function(t,n,e){var r=e(15)("meta"),o=e(12),i=e(4),u=e(5).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(11)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},d=function(t){return a&&y.NEED&&c(t)&&!i(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,n,e){var r=e(5),o=e(10),i=e(13);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(6),o=e(36).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(7),o=e(1),i=e(11);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=e(12),o=e(10),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e(31)(Function.call,e(35).f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){var r=e(25),o=e(16);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),a=f.length;return 0>c||c>=a?t?"":void 0:(i=f.charCodeAt(c),55296>i||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(25),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(59),o=e(66),i=e(18),u=e(6);t.exports=e(34)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(7);r(r.S,"Object",{create:e(20)})},function(t,n,e){var r=e(7);r(r.S+r.F*!e(3),"Object",{defineProperty:e(5).f})},function(t,n,e){var r=e(41),o=e(38);e(71)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(7);r(r.S,"Object",{setPrototypeOf:e(72).set})},function(t,n){},function(t,n,e){"use strict";var r=e(73)(!0);e(34)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(2),o=e(4),i=e(3),u=e(7),f=e(40),c=e(68).KEY,a=e(11),s=e(24),l=e(22),p=e(15),d=e(9),y=e(28),v=e(27),h=e(67),b=e(61),m=e(64),x=e(10),_=e(6),g=e(26),O=e(14),w=e(20),S=e(70),j=e(35),P=e(5),E=e(13),M=j.f,k=P.f,F=S.f,T=r.Symbol,A=r.JSON,C=A&&A.stringify,N="prototype",I=d("_hidden"),R=d("toPrimitive"),D={}.propertyIsEnumerable,W=s("symbol-registry"),L=s("symbols"),q=s("op-symbols"),J=Object[N],G="function"==typeof T,K=r.QObject,z=!K||!K[N]||!K[N].findChild,B=i&&a(function(){return 7!=w(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=M(J,n);r&&delete J[n],k(t,n,e),r&&t!==J&&k(J,n,r)}:k,Y=function(t){var n=L[t]=w(T[N]);return n._k=t,n},Q=G&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},U=function(t,n,e){return t===J&&U(q,n,e),x(t),n=g(n,!0),x(e),o(L,n)?(e.enumerable?(o(t,I)&&t[I][n]&&(t[I][n]=!1),e=w(e,{enumerable:O(0,!1)})):(o(t,I)||k(t,I,O(1,{})),t[I][n]=!0),B(t,n,e)):k(t,n,e)},H=function(t,n){x(t);for(var e,r=b(n=_(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},V=function(t,n){return void 0===n?w(t):H(w(t),n)},X=function(t){var n=D.call(this,t=g(t,!0));return this===J&&o(L,t)&&!o(q,t)?!1:n||!o(this,t)||!o(L,t)||o(this,I)&&this[I][t]?n:!0},Z=function(t,n){if(t=_(t),n=g(n,!0),t!==J||!o(L,n)||o(q,n)){var e=M(t,n);return!e||!o(L,n)||o(t,I)&&t[I][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=F(_(t)),r=[],i=0;e.length>i;)o(L,n=e[i++])||n==I||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===J,r=F(e?q:_(t)),i=[],u=0;r.length>u;)o(L,n=r[u++])&&(e?o(J,n):!0)&&i.push(L[n]);return i};G||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(q,e),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),B(this,t,O(1,e))};return i&&z&&B(J,t,{configurable:!0,set:n}),Y(t)},f(T[N],"toString",function(){return this._k}),j.f=Z,P.f=U,e(36).f=S.f=$,e(21).f=X,e(37).f=tt,i&&!e(19)&&f(J,"propertyIsEnumerable",X,!0),y.f=function(t){return Y(d(t))}),u(u.G+u.W+u.F*!G,{Symbol:T});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)d(nt[et++]);for(var nt=E(d.store),et=0;nt.length>et;)v(nt[et++]);u(u.S+u.F*!G,"Symbol",{"for":function(t){return o(W,t+="")?W[t]:W[t]=T(t)},keyFor:function(t){if(Q(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!G,"Object",{create:V,defineProperty:U,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),A&&u(u.S+u.F*(!G||a(function(){var t=T();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Q(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&m(n)||(n=function(t,n){return e&&(n=e.call(this,t,n)),Q(n)?void 0:n}),r[1]=n,C.apply(A,r)}}}),T[N][R]||e(8)(T[N],R,T[N].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(27)("asyncIterator")},function(t,n,e){e(27)("observable")},function(t,n,e){e(76);for(var r=e(2),o=e(8),i=e(18),u=e(9)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;5>c;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(n,e){n.exports=t},function(t,e){t.exports=n}])});