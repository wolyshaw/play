webpackJsonp([0],{146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=r(i),f=n(8),s=n(12),d=r(s),m=n(139),p=n(49),b=n(50),g=n(82),y=n(301),v=r(y),h=n(297),E=r(h),C=n(296),_=r(C),w=function(e){var t=e.dispatch;return l.default.createElement("div",{className:E.default.loginHint},l.default.createElement("p",null,"您暂未登录，",l.default.createElement("a",{onClick:function(){return t((0,p.showLogin)())}},"登录"),"或",l.default.createElement("a",{onClick:function(){return t((0,b.showReg)())}},"注册"),"后继续操作。"))},O=function(e){var t=e.dispatch,n={title:void 0,summary:void 0,tags:void 0,ctegory:void 0},r=void 0,o=void 0,a=function(e){return e.preventDefault(),n.title.value.trim()?r.getContent()?void t((0,m.createPost)({title:n.title.value.trim(),content:r.getContent(),summary:n.summary.value.trim(),success:function(e){o.reset(),r.innerHTML=""}})):void t((0,d.default)({message:"文章内容必填"})):void t((0,d.default)({message:"文章标题必填"}))},u=function(){t((0,g.showUpload)())};return l.default.createElement("form",{ref:function(e){return o=e},className:E.default.addForm,onSubmit:function(e){return a(e)}},l.default.createElement("input",{className:E.default.input,type:"text",ref:function(e){return n.title=e},placeholder:"标题"}),l.default.createElement("textarea",{className:E.default.textarea,ref:function(e){return n.summary=e},placeholder:"摘要"}),l.default.createElement(v.default,{ref:function(e){return r=e},classObject:_.default,setImage:function(){return u()}}),l.default.createElement("input",{className:E.default.submit,type:"submit",value:"提交"}))},j=function(e){return{user:e.common.user.data}},k=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.user;return l.default.createElement("div",{className:E.default.addWrap},n?l.default.createElement(O,{dispatch:t}):l.default.createElement(w,{dispatch:t}))}}]),t}(i.Component);e.exports=(0,f.connect)(j)(k)},296:function(e,t){e.exports={wrap:"editor--wrap--2NfCl",ctrl:"editor--ctrl--3Z4Az",content:"editor--content--3c5CL",iconfont:"editor--iconfont--cPGoX"}},297:function(e,t){e.exports={loginHint:"add--loginHint--1IgSE",input:"add--input--3m3ot common--input--2ijVA",textarea:"add--textarea--38fWJ add--input--3m3ot common--input--2ijVA",submit:"add--submit--3_L6D common--submit--2WZil common--button--6mgz0",addWrap:"add--addWrap--3dIIR",addForm:"add--addForm--Flkzq"}},300:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=r(i);n(38);n(296);var f=void 0,s=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getContent=n.getContent,n.setImage=n.setImage,n}return u(t,e),c(t,[{key:"getContent",value:function(){return f?encodeURIComponent(f.innerHTML.trim()):""}},{key:"setImage",value:function(e){f.focus(),document.execCommand("insertImage",!0,e)}},{key:"render",value:function(){var e=this.props.classObject;return l.default.createElement("div",{className:e.wrap||"wrap"},l.default.createElement("div",{className:e.ctrl||"ctrl"},l.default.createElement("span",{draggable:"true",onClick:function(){return document.execCommand("bold")},className:e.iconfont||"iconfont"},""),l.default.createElement("span",{draggable:"true",onClick:function(){return document.execCommand("italic")},className:e.iconfont||"iconfont"},""),l.default.createElement("span",{draggable:"true",onClick:function(){return document.execCommand("insertUnorderedList")},className:e.iconfont||"iconfont"},""),l.default.createElement("span",{draggable:"true",onClick:function(){return document.execCommand("insertOrderedList")},className:e.iconfont||"iconfont"},""),l.default.createElement("span",{draggable:"true",onClick:this.props.setImage,className:e.iconfont||"iconfont"},""),l.default.createElement("span",{draggable:"true",onClick:function(){return document.execCommand("undo")},className:e.iconfont||"iconfont"},"")),l.default.createElement("div",{className:e.content||"content",contentEditable:"true",spellCheck:"false",ref:function(e){return f=e},"data-placeholder":this.props.placeholder}))}}]),t}(i.Component);s.defaultProps={placeholder:"content",classObject:{}},s.propTypes={placeholder:l.default.PropTypes.string,setImage:l.default.PropTypes.func.isRequired},t.default=s},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(300),a=r(o);e.exports=a.default}});