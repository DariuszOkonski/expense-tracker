(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),u=(n(11),function(){return r.a.createElement("h1",null,"Expense Tracker")}),o=n(1),i=n(5),m=n(2),s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(m.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(m.a)({},e,{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},d={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},E=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(s,d),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},"$",e))},b=function(){var e=Object(a.useContext)(E).transactions,t=e.filter((function(e){return e.amount>0})).reduce((function(e,t){return e+t.amount}),0).toFixed(2),n=e.filter((function(e){return e.amount<0})).reduce((function(e,t){return e+Math.abs(t.amount)}),0).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",className:"money minus"},"-$",n)))},x=function(e){var t=e.id,n=e.text,c=e.amount,l=Object(a.useContext)(E).deleteTransaction,u=c<0?"-":"+";return r.a.createElement("li",{className:c<0?"minus":"plus"},n," ",r.a.createElement("span",null,u,"$",Math.abs(c)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return l(t)}},"x"))},v=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e){return r.a.createElement(x,Object.assign({key:e.id},e))}))))},h=function(){var e=Object(a.useContext)(E).addTransaction,t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(0),i=Object(o.a)(u,2),m=i[0],s=i[1];return r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,"Addd new transaction"),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var n={id:Math.floor(1e8*Math.random()),text:c,amount:m};e(n),l(""),s(0)}(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",placeholder:"Enter text...",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",placeholder:"Enter amount...",value:m,onChange:function(e){return s(Number(e.target.value))}})),r.a.createElement("button",{className:"btn"},"Add Transaction")))};var O=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(h,null)))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.ae8316ac.chunk.js.map