(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{100:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},107:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(5),i=n(97),c=n(98),a=n(100),u=n(99),s=n(23),l=n(34),f=n(1),p={form:{marginTop:10},label:{marginRight:5,marginLeft:5},input:{marginRight:5,marginBottom:10},text:{marginRight:15}},b=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={email:"",password:""},t.onHandleChange=function(e){var n=e.target,r=n.name,i=n.value;t.setState(Object(o.a)({},r,i))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.onLogin(t.state),t.setState({email:"",password:""})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(f.jsxs)("form",{style:p.form,onSubmit:this.onHandleSubmit,children:[Object(f.jsxs)("label",{style:p.label,children:[Object(f.jsx)("span",{style:p.text,children:" Email:"}),Object(f.jsx)("input",{style:p.input,type:"text",name:"email",autoComplete:"off",placeholder:"Enter email",onChange:this.onHandleChange,value:e})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{style:p.label,children:[Object(f.jsx)("span",{style:p.text,children:" Password:"}),Object(f.jsx)("input",{style:p.input,type:"text",name:"password",autoComplete:"off",placeholder:"Enter password",onChange:this.onHandleChange,value:n})]}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",children:"Login"})]})}}]),n}(r.Component),h={onLogin:l.a.logIn},y=Object(s.b)(null,h)(b);e.default=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Login, please"}),Object(f.jsx)(y,{})]})}},97:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},98:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},99:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var c=r(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return i(this,n)}}n.d(e,"a",(function(){return c}))}}]);
//# sourceMappingURL=4.604439f1.chunk.js.map