webpackJsonp([4],{405:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),s=(n(31),n(172)),f=n(176),p=n(105),b=n(61),m=n(625),d=r(m),y=b.appStore.dispatch,h=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.submit=n._submit.bind(n),n}return u(t,e),i(t,[{key:"_submit",value:function(e){e.preventDefault(),(0,s.apiFetch)({url:"/common/login",hint:!1,body:{nice_name:this.refs.nice_name.value,password:this.refs.password.value},success:function(e){localStorage.setItem("token",e.list),y((0,p.setUser)()),y((0,f.closePopup)())}})}},{key:"render",value:function(){return c.default.createElement("form",{className:d.default.wrap,onSubmit:this.submit},c.default.createElement("label",null,"用户名：",c.default.createElement("input",{type:"text",ref:"nice_name"})),c.default.createElement("label",null,"密码：",c.default.createElement("input",{type:"password",ref:"password"})),c.default.createElement("input",{type:"submit",value:"登录"}))}}]),t}(l.Component);t.default=h},625:function(e,t,n){var r=n(626);"string"==typeof r&&(r=[[e.i,r,""]]);n(400)(r,{});r.locals&&(e.exports=r.locals)},626:function(e,t,n){t=e.exports=n(399)(),t.push([e.i,".login--wrap--20IiA{width:500px}",""]),t.locals={wrap:"login--wrap--20IiA"}}});