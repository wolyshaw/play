webpackJsonp([0],{146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(11),d=n(14),s=r(d),p=n(139),m=n(50),b=n(51),h=n(293),y=r(h),v=n(294),E=r(v),_=function(e){var t=e.dispatch;return c.default.createElement("div",{className:E.default.loginHint},c.default.createElement("p",null,"您暂未登录，",c.default.createElement("a",{onClick:function(){return t((0,m.showLogin)())}},"登录"),"或",c.default.createElement("a",{onClick:function(){return t((0,b.showReg)())}},"注册"),"后继续操作。"))},g=function(e){var t=e.dispatch,n={title:void 0,summary:void 0,tags:void 0,ctegory:void 0},r=void 0,o=void 0,a=function(e){return e.preventDefault(),n.title.value.trim()?r.content.innerHTML.trim()?void t((0,p.createPost)({title:n.title.value.trim(),content:encodeURIComponent(r.content.innerHTML.trim()),summary:n.summary.value.trim(),success:function(e){o.reset(),r.innerHTML=""}})):void t((0,s.default)({message:"文章内容必填"})):void t((0,s.default)({message:"文章标题必填"}))};return c.default.createElement("form",{ref:function(e){return o=e},className:E.default.addForm,onSubmit:function(e){return a(e)}},c.default.createElement("input",{className:E.default.input,type:"text",ref:function(e){return n.title=e},placeholder:"标题"}),c.default.createElement("textarea",{className:E.default.textarea,ref:function(e){return n.summary=e},placeholder:"摘要"}),c.default.createElement(y.default,{ref:function(e){return r=e},placeholder:"内容"}),c.default.createElement("input",{className:E.default.submit,type:"submit",value:"提交"}))},w=function(e){return{user:e.common.user.data}},O=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.user;return c.default.createElement("div",{className:E.default.addWrap},n?c.default.createElement(g,{dispatch:t}):c.default.createElement(_,{dispatch:t}))}}]),t}(l.Component);e.exports=(0,f.connect)(w)(O)},293:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(48),d=(r(f),n(295)),s=r(d),p=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.content="",n}return u(t,e),i(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:s.default.editorWrap},c.default.createElement("div",{className:s.default.editorCtrl},c.default.createElement("span",{draggable:"true",onClick:function(){return document.execCommand("bold")}},"B")),c.default.createElement("div",{className:s.default.editorContent,contentEditable:"true",spellCheck:"false",ref:function(t){return e.content=t},"data-placeholder":this.props.placeholder}))}}]),t}(l.Component);t.default=p},294:function(e,t){e.exports={loginHint:"add--loginHint--1IgSE",input:"add--input--3m3ot common--input--2ijVA",textarea:"add--textarea--38fWJ add--input--3m3ot common--input--2ijVA",submit:"add--submit--3_L6D common--submit--2WZil common--button--6mgz0",addWrap:"add--addWrap--3dIIR",addForm:"add--addForm--Flkzq"}},295:function(e,t){e.exports={editorWrap:"editor--editorWrap--3MxGb",editorCtrl:"editor--editorCtrl--3pzB4",editorContent:"editor--editorContent--1dPSK"}}});