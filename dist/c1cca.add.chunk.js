webpackJsonp([0],{146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),d=r(l),c=n(11),f=n(14),s=r(f),p=n(140),m=n(50),b=n(51),h=n(295),y=r(h),g=n(296),v=r(g),x=function(e){var t=e.dispatch;return d.default.createElement("div",{className:v.default.loginHint},d.default.createElement("p",null,"您暂未登录，",d.default.createElement("a",{onClick:function(){return t((0,m.showLogin)())}},"登录"),"或",d.default.createElement("a",{onClick:function(){return t((0,b.showReg)())}},"注册"),"后继续操作。"))},w=function(e){var t=e.dispatch,n={title:void 0,summary:void 0,tags:void 0,ctegory:void 0},r=void 0,o=void 0,a=function(e){return e.preventDefault(),n.title.value.trim()?r.content.innerHTML.trim()?void t((0,p.createPost)({title:n.title.value.trim(),content:encodeURIComponent(r.content.innerHTML.trim()),summary:n.summary.value.trim(),success:function(e){o.reset(),r.innerHTML=""}})):void t((0,s.default)({message:"文章内容必填"})):void t((0,s.default)({message:"文章标题必填"}))};return d.default.createElement("form",{ref:function(e){return o=e},className:v.default.addForm,onSubmit:function(e){return a(e)}},d.default.createElement("input",{className:v.default.input,type:"text",ref:function(e){return n.title=e},placeholder:"标题"}),d.default.createElement("textarea",{className:v.default.textarea,ref:function(e){return n.summary=e},placeholder:"摘要"}),d.default.createElement(y.default,{ref:function(e){return r=e},placeholder:"内容"}),d.default.createElement("input",{className:v.default.submit,type:"submit",value:"提交"}))},E=function(e){return{user:e.common.user.data}},_=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.user;return d.default.createElement("div",{className:v.default.addWrap},n?d.default.createElement(w,{dispatch:t}):d.default.createElement(x,{dispatch:t}))}}]),t}(l.Component);e.exports=(0,c.connect)(E)(_)},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),d=r(l),c=n(48),f=(r(c),n(297)),s=r(f),p=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.content="",n}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return d.default.createElement("div",{className:s.default.editorWrap},d.default.createElement("div",{className:s.default.editorCtrl},d.default.createElement("span",{draggable:"true",onClick:function(){return document.execCommand("bold")}},"B")),d.default.createElement("div",{className:s.default.editorContent,contentEditable:"true",spellCheck:"false",ref:function(t){return e.content=t},"data-placeholder":this.props.placeholder}))}}]),t}(l.Component);t.default=p},296:function(e,t,n){t=e.exports=n(139)(),t.i(n(294),void 0),t.push([e.i,".add--loginHint--1IgSE{\n  margin: 50px auto;\n  text-align: center;\n}\n.add--input--3m3ot{\n  width: 100%;\n  margin-left: 0;\n}\n.add--textarea--38fWJ{\n  box-sizing: border-box;\n  margin: 30px 0;\n  height: 60px;\n  max-width: 100%;\n}\n.add--submit--3_L6D{\n  margin: 30px auto;\n  display: block;\n  width: 100%;\n}\n.add--addWrap--3dIIR{\n  width: 660px;\n  margin: auto;\n}\n.add--addForm--Flkzq{\n  width: 100%;\n}\n",""]),t.locals={loginHint:"add--loginHint--1IgSE",input:"add--input--3m3ot "+n(294).locals.input,textarea:"add--textarea--38fWJ add--input--3m3ot "+n(294).locals.input,submit:"add--submit--3_L6D "+n(294).locals.submit+" "+n(294).locals.button,addWrap:"add--addWrap--3dIIR",addForm:"add--addForm--Flkzq"}},297:function(e,t,n){t=e.exports=n(139)(),t.push([e.i,".editor--editorWrap--3MxGb{\n  width: 660px;\n  margin: auto;\n  border: 1px solid #e8edf2;\n  border-radius: 5px;\n}\n.editor--editorWrap--3MxGb > div{\n  padding: 10px;\n}\n.editor--editorWrap--3MxGb > .editor--editorCtrl--3pzB4{\n  border-bottom: 1px solid #e8edf2;\n  background-color: rgba(0, 0, 0, .05);\n}\n.editor--editorWrap--3MxGb > .editor--editorCtrl--3pzB4 > span{\n  cursor: pointer;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n}\n.editor--editorWrap--3MxGb > .editor--editorContent--1dPSK{\n  outline: none;\n  min-height: 300px;\n}\n[contentEditable=true]:empty:not(:focus):before{\n  content: attr(data-placeholder);\n  color: rgba(0, 0, 0, .3);\n}\n",""]),t.locals={editorWrap:"editor--editorWrap--3MxGb",editorCtrl:"editor--editorCtrl--3pzB4",editorContent:"editor--editorContent--1dPSK"}}});