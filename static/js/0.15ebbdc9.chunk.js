(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{47:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},48:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},49:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var u=r(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return c(this,n)}}n.d(e,"a",(function(){return u}))},50:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},86:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(6),c=n(47),u=n(48),i=n(50),a=n(49),f=n(2),s=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return(t=e.call.apply(e,[this].concat(u))).state={email:"",password:""},t.onHandleChange=function(e){var n=e.target,r=n.name,c=n.value;t.setState(Object(o.a)({},r,c))},t.onHandleSubmit=function(t){t.preventDefault()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(f.jsxs)("form",{onSubmit:this.onHandleSubmit,children:[Object(f.jsxs)("label",{children:["Email",Object(f.jsx)("input",{type:"text",name:"email",onChange:this.onHandleChange,value:e})]}),Object(f.jsxs)("label",{children:["Password",Object(f.jsx)("input",{type:"text",name:"password",onChange:this.onHandleChange,value:n})]}),Object(f.jsx)("button",{type:"submit",children:"Register"})]})}}]),n}(r.Component);e.default=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"AuthPage"}),Object(f.jsx)(s,{})]})}}}]);
//# sourceMappingURL=0.15ebbdc9.chunk.js.map