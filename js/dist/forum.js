/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,r,e)=>{var n=e(288).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),u=new P(n||[]);return a(i,"_invoke",{value:O(t,e,u)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var d={};function y(){}function v(){}function m(){}var g={};l(g,c,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==e&&i.call(b,c)&&(g=b);var x=m.prototype=y.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,u,c){var s=h(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return e("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=j(a,e);if(u){if(u===d)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=h(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(i.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(n(t)+" is not iterable")}return v.prototype=m,a(x,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,f,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},L(_.prototype),l(_.prototype,s,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),l(x,f,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,r,e)=>{var n=e(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},t.apply(this,arguments)}function r(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}e.r(n);var i=e(357),a=e.n(i);const u=flarum.core.compat["forum/app"];var c=e.n(u);const s=flarum.core.compat["common/extend"];function f(t,r){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},f(t,r)}const l=flarum.core.compat["forum/components/LogInModal"];var p=function(t){var r,e;function n(){return t.call(this)||this}e=t,(r=n).prototype=Object.create(e.prototype),r.prototype.constructor=r,f(r,e);var o=n.prototype;return o.title=function(){return app.translator.trans("dalez-identityagent.forum.login.title")},o.footer=function(){return m("[",null,m("p",null,app.translator.trans("dalez-identityagent.forum.login.note")))},n}(e.n(l)());const h=flarum.core.compat["forum/components/DiscussionList"];var d=e.n(h);const y=flarum.core.compat["forum/components/HeaderSecondary"];var v=e.n(y);const g=flarum.core.compat["common/components/Button"];var w=e.n(g);function b(){return x.apply(this,arguments)}function x(){return(x=o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c().store.find("");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t){return c().translator.trans("dalez-identityagent.forum."+t)}var _=function(){var r,e,n=c().request;function i(){return(i=o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:c().session.user=e,c().request=n.bind(window.app),c().acting=!1,m.redraw();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{startActing:function(o,i){r=o,e=i,c().request=function(e){var o=t({},e);return o.headers=o.headers||{},o.headers.Authorization="Token "+r,n.call(window.app,o)}},stopActing:function(){return i.apply(this,arguments)}}}();c().initializers.add("dalez-identityagent",(function(){var t=data.resources.find((function(t){return"users"===t.type&&data.session.userId==t.id})).attributes;(0,s.extend)(d().prototype,"view",(function(){c().newLogin&&delete c().newLogin})),(0,s.extend)(p.prototype,"fields",function(){var t=o(a().mark((function t(r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.remove("remember");case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),(0,s.override)(p.prototype,"onsubmit",function(){var t=o(a().mark((function t(r,e){var n,o,i,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.loading=!0,n=this.loginParams(),t.next=5,c().request({method:"POST",url:c().forum.attribute("baseUrl")+"/api/token",body:n,errorHandler:this.onerror.bind(this)});case 5:if(o=t.sent){t.next=8;break}return t.abrupt("return");case 8:return i=o.token,u=o.userId,_.startActing(i,c().session.user),t.next=12,b();case 12:c().session.user=c().store.getById("users",u),c().acting=!0,a=void 0,(r=this).hide(),null==(a=r.loaded)||a.call(r);case 15:case"end":return t.stop()}var r,a}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()),t.canUseFeature&&(0,s.extend)(v().prototype,"items",(function(t){t.add("nightmode",m(w(),{className:"Button Button--flat",onclick:function(){!0===c().acting?window.confirm(L("confirmation"))&&_.stopActing():c().modal.show(p)},icon:!0===c().acting?"fas fa-user-cog":"fas fa-user"},L("button_text")),15)}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map