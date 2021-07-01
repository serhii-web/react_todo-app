(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(19),r=n.n(l),o=n(6),u=(n(27),n(28),n(29),n(9)),i=n(7),m=function(e){var t=e.addTodo,n=Object(a.useState)(""),l=Object(i.a)(n,2),r=l[0],o=l[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r.trim().length&&t(r),o("")}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:r,onChange:function(e){return o(e.target.value)}}))},s=function(){return c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/",exact:!0,activeClassName:"selected"},"All")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/active",activeClassName:"selected"},"Active")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/completed",activeClassName:"selected"},"Completed")))},d=n(16),f=n(21),p=n.n(f),b=n(1),E=function(e){var t=e.todos,n=e.setTodos,l=Object(a.useState)(0),r=Object(i.a)(l,2),o=r[0],m=r[1],s=Object(a.useState)(""),f=Object(i.a)(s,2),E=f[0],v=f[1],h=Object(a.useRef)(null),g=Object(b.d)().pathname,j=Object(a.useMemo)((function(){return"/"!==g?t.filter((function(e){return"/completed"===g?e.completed:!e.completed})):t}),[g,t]);Object(a.useEffect)((function(){h.current&&h.current.focus()}));return c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){return function(){var e=t.every((function(e){return e.completed})),a=t.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{completed:!e||!t.completed})}));n(a)}()},checked:t.every((function(e){return e.completed}))&&t.length}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement("ul",{className:"todo-list"},j.map((function(e){return c.a.createElement("li",{key:e.id,className:p()({editing:o===e.id,completed:e.completed}),onDoubleClick:function(t){m(e.id),v(e.title)}},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:e.completed,onChange:function(){return function(e){var a=t.find((function(t){return t.id===e}));a.completed=!a.completed,n((function(e){return Object(u.a)(e)}))}(e.id)}}),c.a.createElement("label",null,e.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return function(e){var a=t.filter((function(t){return t.id!==e}));n(a)}(e.id)}})),c.a.createElement("input",{type:"text",className:"edit",value:E,ref:o===e.id?h:null,onChange:function(e){return v(e.target.value)},onBlur:function(){return a=e.id,t.find((function(e){return e.id===a})).title=E.trim(),n((function(e){return Object(u.a)(e)})),v(""),void m(0);var a},onKeyDown:function(a){return function(e,a,c){var l=t.find((function(e){return e.id===c}));switch(e.key){case"Enter":l.title=E.trim(),n((function(e){return Object(u.a)(e)})),v(E),m(0);break;case"Escape":n((function(e){return Object(u.a)(e)})),v(a),m(0)}}(a,e.title,e.id)}}))}))))};var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],r=Object(a.useMemo)((function(){return n.filter((function(e){return!e.completed})).length}),[n]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement(m,{addTodo:function(e){l([].concat(Object(u.a)(n),[{id:+new Date,title:e,completed:!1}]))}})),c.a.createElement(E,{todos:n,setTodos:l}),n.length>0&&c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},r," ","items left"),c.a.createElement(s,null),n.length!==r&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return function(){var e=n.filter((function(e){return!e.completed}));l(e)}()}},"Clear completed")))};r.a.render(c.a.createElement(o.a,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ec7fec13.chunk.js.map