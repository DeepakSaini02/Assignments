"use strict";(self.webpackChunkday1_assign_note_taking=self.webpackChunkday1_assign_note_taking||[]).push([[548],{424:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"#container{\r\n    background-color: #BDBDBD;\r\n    color: whitesmoke;\r\n    font-size: larger;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#img{\r\n    width: 4%;\r\n    margin-left: 3%;\r\n    \r\n}\r\n#content{\r\n   margin-top: 10px;\r\n}\r\n#noteform{\r\n    margin-top: 2rem;\r\n }\r\n #sumbtn{\r\n     /* margin-top: 10%; */\r\n     width: 7%;\r\n     /* border: none; */\r\n     background-color:#BDBDBD;\r\n     height: 4%;\r\n\r\n }\r\n \r\n\r\n #notes{\r\n     display: flex;\r\n     flex-wrap: wrap;\r\n     gap: 2rem;\r\n     margin-left: 30%;\r\n     margin-top: -186px;\r\n     font-size: 20px;\r\n }\r\n\r\n #details{\r\n    \r\n    position: fixed;\r\n    display: none;\r\n    width: 50%;\r\n    top:10%;\r\n    bottom: 5%;\r\n    left: 20%;\r\n    right: 20%;\r\n    background-color: #BDBDBD;\r\n    cursor: pointer;\r\n }\r\n  #showHeading{\r\n     margin-left: 44%;\r\n     font-size: 50px;\r\n }\r\n\r\n\r\n #showContent{\r\n    position: absolute;\r\n    top: 30vh;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n } \r\n\r\n#noteDiv2{\r\n/* border: 2px solid black; */\r\ndisplay: flex;\r\ngap: 1rem;\r\n\r\n}\r\n#noteDiv2>button{\r\n background-color: #BDBDBD;\r\n    height: 4%;\r\n    /* margin-left: 1%; */\r\n    \r\n    }\r\n#closebtn{\r\n\r\nbackground-color:#BDBDBD;\r\nmargin-left: 85%;\r\n}",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:n=>{n.exports=function(n){return n[1]}},548:(n,r,e)=>{e.r(r),e.d(r,{default:()=>g});var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),l=e(565),u=e.n(l),p=e(216),d=e.n(p),f=e(589),m=e.n(f),h=e(424),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),o()(h.Z,v);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),l=0;l<a.length;l++){var u=e(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}}]);