"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("react");function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}function e(n){if(n&&n.__esModule)return n;var t=Object.create(null);return n&&Object.keys(n).forEach((function(e){if("default"!==e){var r=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:function(){return n[e]}})}})),t.default=n,Object.freeze(t)}var r=e(n),i=t(n);!function(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}("html, body {\n  overflow-x: hidden;\n}\n\n#notification-container {\n  position: fixed;\n  top: 90px;\n  right: 10px;\n  width: 400px;\n  z-index: 2000;\n}\n\n@keyframes show_slide {\n  0% {\n    transform: translateX(100%);\n  }\n  40% {\n    transform: translateX(-10%);\n  }\n  80% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-10px);\n  }\n}\n@keyframes hide_slide {\n  0% {\n    transform: translateX(-10px);\n  }\n  40% {\n    transform: translateX(0%);\n  }\n  80% {\n    transform: translateX(-10%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.notification {\n  width: 100%;\n  min-height: 80px;\n  padding: 0;\n  margin: 0 0 10px;\n  background-color: #e8e8e8;\n  border-radius: 4px;\n  color: var(--mainRed);\n  display: flex;\n  align-items: center;\n  animation: show_slide 1s ease forwards;\n}\n.notification__hide {\n  animation: hide_slide 1s ease forwards;\n}\n.notification__icon {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 22px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.notification__msg {\n  display: inline-block;\n  padding: 20px;\n  margin: 0 0 0 30px;\n  line-height: 18px;\n  font-size: 18px;\n  white-space: pre-wrap;\n}\n\n@media screen and (max-width: 450px) {\n  #notification__container {\n    width: 100vw;\n    right: -10px;\n  }\n}\n");var o=function(){return o=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},o.apply(this,arguments)};function a(n,t,e){if(e||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return n.concat(r||Array.prototype.slice.call(t))}var s=function(t){var e=n.useState(!1),r=e[0],o=e[1],a=n.useState(0),s=a[0],c=a[1],u=n.useState(null),f=u[0],l=u[1],d=function(){var n=setInterval((function(){c((function(e){return e<t.timeout?e+1:(clearInterval(n),e)}))}),1e3);l(n)},p=function(){null!=f&&clearInterval(f)};return n.useEffect((function(){s===t.timeout&&(p(),o(!0),setTimeout((function(){t.dispatch({type:"REMOVE_NOTIFICATION",id:t.id})}),1e3))}),[s]),n.useEffect((function(){d()}),[]),i.default.createElement("div",{onMouseEnter:p,onMouseLeave:d,onClick:t.onClick,style:{cursor:null!=t.onClick?"pointer":"default"},className:"notification notification__".concat(t.type," ").concat(r?"notification__hide":"")},i.default.createElement("span",{className:"notification__icon"},t.icon),i.default.createElement("p",{className:"notification__msg"},t.message))};s.defaultProps={type:"info",icon:function(n){return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n),r.createElement("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-24 152c0-13.2 10.8-24 24-24s24 10.75 24 24v128c0 13.25-10.75 24-24 24s-24-10.7-24-24V152zm24 248c-17.36 0-31.44-14.08-31.44-31.44s14.07-31.44 31.44-31.44 31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"}))},timeout:10,onClick:function(){return{}}};var c,u=n.createContext((function(n){})),f=new Uint8Array(16);function l(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(f)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function p(n){return"string"==typeof n&&d.test(n)}for(var m=[],y=0;y<256;++y)m.push((y+256).toString(16).substr(1));function h(n,t,e){var r=(n=n||{}).random||(n.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){e=e||0;for(var i=0;i<16;++i)t[e+i]=r[i];return t}return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(m[n[t+0]]+m[n[t+1]]+m[n[t+2]]+m[n[t+3]]+"-"+m[n[t+4]]+m[n[t+5]]+"-"+m[n[t+6]]+m[n[t+7]]+"-"+m[n[t+8]]+m[n[t+9]]+"-"+m[n[t+10]]+m[n[t+11]]+m[n[t+12]]+m[n[t+13]]+m[n[t+14]]+m[n[t+15]]).toLowerCase();if(!p(e))throw TypeError("Stringified UUID is invalid");return e}(r)}exports.NotificationContext=u,exports.NotificationProvider=function(t){var e=n.useReducer((function(n,t){switch(t.type){case"ADD_NOTIFICATION":return a(a([],n,!0),[o({},t.payload)],!1);case"REMOVE_NOTIFICATION":return n.filter((function(n){return n.id!==t.id}));default:return n}}),[]),r=e[0],c=e[1];return i.default.createElement(u.Provider,{value:c},i.default.createElement("div",{id:"notification-container"},r.map((function(n){return i.default.createElement(s,o({dispatch:c,key:n.id},n))}))),t.children)},exports.useNotification=function(){var t=n.useContext(u);return function(n){t({type:"ADD_NOTIFICATION",payload:o({id:h()},n)})}};
//# sourceMappingURL=index.js.map
