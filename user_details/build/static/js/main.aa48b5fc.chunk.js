(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=(n(13),n(3)),o=n(5),u=n(8),l=n(6),j=n.n(l),p=(n(15),n(0)),b=function(e){var t=e.sendData,n=Object(a.useState)(null),c=Object(i.a)(n,2),r=c[0],l=c[1],b=Object(a.useRef)(null),d=Object(a.useState)(""),h=Object(i.a)(d,2),f=h[0],O=h[1],m=Object(a.useState)([]),x=Object(i.a)(m,2),g=x[0],v=x[1];Object(a.useEffect)((function(){y()}),[]),t(g);var y=function(){fetch("http://localhost:3001/users").then((function(e){return e.json()})).then((function(e){v(e)}))},k=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a,c,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target,a=n.name,c=n.value,"file"!=t.target.type||!b.current.files[0]){e.next=8;break}return i=b.current.files[0],e.next=5,C(i);case 5:u=e.sent,c=u,O(u);case 8:l(Object(o.a)(Object(o.a)({},r),{},Object(s.a)({},a,"checkbox"===t.target.type?t.target.checked:c)));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t(a.result)},a.onerror=function(e){n(e)}}))};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(){y(),console.log(g)}))},children:[Object(p.jsx)("input",{required:!0,onChange:k,name:"name",placeholder:"enter name",type:"text"}),Object(p.jsx)("input",{required:!0,onChange:k,name:"age",placeholder:"enter age",type:"number"}),Object(p.jsx)("input",{required:!0,onChange:k,name:"address",placeholder:"enter address",type:"text"}),Object(p.jsxs)("select",{onChange:k,name:"depart",id:"",children:[Object(p.jsx)("option",{value:"hr",children:"hr"}),Object(p.jsx)("option",{value:"it",children:"it"}),Object(p.jsx)("option",{value:"sales",children:"sales"}),Object(p.jsx)("option",{value:"maintain",children:"maintain"})]}),Object(p.jsx)("input",{required:!0,onChange:k,name:"salary",placeholder:"enter salary",type:"number"}),Object(p.jsx)("input",{onChange:k,type:"checkbox",checked:null,name:"marital"}),"marital state",Object(p.jsx)("input",{required:!0,name:"profile",ref:b,onChange:k,type:"file",accept:"image/png image/jpg"}),Object(p.jsx)("div",{id:"contImage",width:"200px",children:Object(p.jsx)("img",{src:f,alt:""})}),Object(p.jsx)("input",{type:"submit",value:"submit"})]})})},d=function(e){var t=e.details;return console.log("table",t),Object(p.jsx)("div",{children:t.map((function(e){return e.name,Object(p.jsx)("img",{src:e.profile,alt:""})}))})};function h(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{sendData:function(e){c(e)}}),Object(p.jsx)(d,{details:n})]})}var f=document.getElementById("root");r.a.render(Object(p.jsx)(a.StrictMode,{children:Object(p.jsx)(h,{})}),f)}},[[17,1,2]]]);
//# sourceMappingURL=main.aa48b5fc.chunk.js.map