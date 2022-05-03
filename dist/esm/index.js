import*as n from"react";import t,{useState as e,useEffect as r,createContext as i,useReducer as o,useContext as a}from"react";!function(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}("html, body {\n  overflow-x: hidden;\n}\n\n#notification-container {\n  position: fixed;\n  top: 90px;\n  right: 10px;\n  width: 400px;\n  z-index: 2000;\n}\n\n@keyframes show_slide {\n  0% {\n    transform: translateX(100%);\n  }\n  40% {\n    transform: translateX(-10%);\n  }\n  80% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-10px);\n  }\n}\n@keyframes hide_slide {\n  0% {\n    transform: translateX(-10px);\n  }\n  40% {\n    transform: translateX(0%);\n  }\n  80% {\n    transform: translateX(-10%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.notification {\n  width: 100%;\n  min-height: 80px;\n  padding: 0;\n  margin: 0 0 10px;\n  background-color: #e8e8e8;\n  border-radius: 4px;\n  color: var(--mainRed);\n  display: flex;\n  align-items: center;\n  animation: show_slide 1s ease forwards;\n}\n.notification__hide {\n  animation: hide_slide 1s ease forwards;\n}\n.notification__icon {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 10px;\n  font-size: 22px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.notification__msg {\n  display: inline-block;\n  padding: 20px;\n  margin: 0 0 0 30px;\n  line-height: 18px;\n  font-size: 18px;\n  white-space: pre-wrap;\n}\n\n@media screen and (max-width: 450px) {\n  #notification__container {\n    width: 100vw;\n    right: -10px;\n  }\n}\n");var s=function(){return s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},s.apply(this,arguments)};function c(n,t,e){if(e||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return n.concat(r||Array.prototype.slice.call(t))}var l=function(n){var i=e(!1),o=i[0],a=i[1],s=e(0),c=s[0],l=s[1],f=e(null),d=f[0],u=f[1],p=function(){var t=setInterval((function(){l((function(e){return e<n.timeout?e+1:(clearInterval(t),e)}))}),1e3);u(t)},m=function(){null!=d&&clearInterval(d)};return r((function(){c===n.timeout&&(m(),a(!0),setTimeout((function(){n.dispatch({type:"REMOVE_NOTIFICATION",id:n.id})}),1e3))}),[c]),r((function(){p()}),[]),t.createElement("div",{onMouseEnter:m,onMouseLeave:p,onClick:n.onClick,style:{cursor:null!=n.onClick?"pointer":"default"},className:"notification notification__".concat(n.type," ").concat(o?"notification__hide":"")},t.createElement("span",{className:"notification__icon"},n.icon),t.createElement("p",{className:"notification__msg"},n.message))};l.defaultProps={type:"info",icon:function(t){return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),n.createElement("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-24 152c0-13.2 10.8-24 24-24s24 10.75 24 24v128c0 13.25-10.75 24-24 24s-24-10.7-24-24V152zm24 248c-17.36 0-31.44-14.08-31.44-31.44s14.07-31.44 31.44-31.44 31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"}))},timeout:10,onClick:function(){return{}}};var f,d=i((function(n){})),u=function(n){var e=o((function(n,t){switch(t.type){case"ADD_NOTIFICATION":return c(c([],n,!0),[s({},t.payload)],!1);case"REMOVE_NOTIFICATION":return n.filter((function(n){return n.id!==t.id}));default:return n}}),[]),r=e[0],i=e[1];return t.createElement(d.Provider,{value:i},t.createElement("div",{id:"notification-container"},r.map((function(n){return t.createElement(l,s({dispatch:i,key:n.id},n))}))),n.children)},p=new Uint8Array(16);function m(){if(!f&&!(f="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(p)}var h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function y(n){return"string"==typeof n&&h.test(n)}for(var v=[],g=0;g<256;++g)v.push((g+256).toString(16).substr(1));function x(n,t,e){var r=(n=n||{}).random||(n.rng||m)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){e=e||0;for(var i=0;i<16;++i)t[e+i]=r[i];return t}return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(v[n[t+0]]+v[n[t+1]]+v[n[t+2]]+v[n[t+3]]+"-"+v[n[t+4]]+v[n[t+5]]+"-"+v[n[t+6]]+v[n[t+7]]+"-"+v[n[t+8]]+v[n[t+9]]+"-"+v[n[t+10]]+v[n[t+11]]+v[n[t+12]]+v[n[t+13]]+v[n[t+14]]+v[n[t+15]]).toLowerCase();if(!y(e))throw TypeError("Stringified UUID is invalid");return e}(r)}var w=function(){var n=a(d);return function(t){n({type:"ADD_NOTIFICATION",payload:s({id:x()},t)})}};export{d as NotificationContext,u as NotificationProvider,w as useNotification};
//# sourceMappingURL=index.js.map
