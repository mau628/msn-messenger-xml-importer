(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/msn-messenger-xml-importer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("5903");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("screen-view")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"screen-view"},[r("header",{staticClass:"header",attrs:{"data-loaded":e.data&&!e.about?"loaded":""}},[e._m(0),r("nav",{staticClass:"header__nav"},[e.data?[r("button",{on:{click:e.getCsv}},[e._v("Get CSV")]),r("button",{on:{click:e.getJson}},[e._v("Get JSON")]),r("button",{on:{click:e.reset}},[e._v("Reset")])]:e._e(),r("button",{on:{click:function(t){e.about=!0}}},[e._v("About")])],2)]),r("section",{staticClass:"screen-view__content"},[e.data||e.about?e._e():r("drag-drop",{on:{update:e.parseDrop}}),e.data&&!e.about?r("chat-view",{attrs:{chatMessages:e.data.messagesFlat}}):e._e(),e.about?r("article",{staticClass:"screen-view__about"},[r("button",{staticClass:"screen-view__link",on:{click:function(t){e.about=!1}}},[e._v(" Close ")]),e._m(1),r("p",[e._v(" Note that all the processing takes place on your own device. No data is transferred to any server (you don't need to worry about anyone reading your cringy high school chats). If you're paranoid turn off your connection, this tool will still work. ")]),e._m(2),e._m(3),e._m(4)]):e._e()],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"header__title"},[a("img",{staticClass:"header__icon",attrs:{src:r("7c04"),alt:"MSN logo"}}),a("span",[e._v("MSN XML reader")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("This is fork from a tool by "),r("a",{attrs:{href:"https://www.haykranen.nl"}},[e._v("Hay Kranen")]),e._v(" to read your old MSN Messenger XML chat logs")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Original code is open source and can be found on Hay's "),r("a",{attrs:{href:"https://github.com/hay/msn-messenger-xml-importer"}},[e._v("Github")]),e._v(" account. This fork is also open source and can also be found on my "),r("a",{attrs:{href:"https://github.com/mau628/msn-messenger-xml-importer"}},[e._v("Github")]),e._v(" account. ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" If you found this tool useful, why not "),r("a",{attrs:{href:"https://www.haykranen.nl/donate/"}},[e._v("support Hay's work")]),e._v("? I am not receiving donations as I just performed some minor tweaks to Hay's project. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"btn btn--donate",attrs:{href:"https://www.haykranen.nl/donate/"}},[a("img",{attrs:{src:r("c966"),alt:"MSN logo"}}),a("span",[e._v("Support Hay's work")])])}],c=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isLoaded?r("div",{staticClass:"chat-view"},[r("div",{staticClass:"chat-view__info"},[e._v(" Displaying "+e._s(e.chatMessages.length)+" messages ")]),r("ul",{staticClass:"chat-view__list"},e._l(e.chatMessages,(function(t,a){return r("div",{key:a},[t.addbreak?r("hr"):e._e(),r("li",{class:["chat-view__item","right"==t.align?"chat-view__right":""]},[r("time",{staticClass:"chat-view__time"},[e._v(" "+e._s(t.date)+" - "+e._s(t.time)+" ")]),r("span",{staticClass:"chat-view__user"},[e._v(" "+e._s(t.from)+" ")]),r("p",{staticClass:"chat-view__text",style:t.text_style},[e._v(" "+e._s(t.text)+" ")])])])})),0)]):e._e()},l=[],d=(r("4160"),r("159b"),{props:{chatMessages:Array},data:function(){return{isLoaded:!1}},methods:{minutesDiff:function(e,t){if(""===e||""===t)return 0;var r=new Date(e),a=new Date(t),n=a.getTime()-r.getTime(),s=Math.abs(Math.floor(n/1e3/60));return s},processMessages:function(){var e=this,t="",r="",a="left",n=-1,s=!0;this.chatMessages.forEach((function(o){o.addbreak=!1;var i=t===o.from;i||s||(a="left"===a?"right":"left");var c=e.minutesDiff(o.datetime,r);n!=o.sessionid&&c>60&&(i=!1,a="left",o.addbreak=!s),o.align=a,t=o.from,r=o.datetime,n=o.sessionid,s=!1})),this.isLoaded=!0}},mounted:function(){this.processMessages()}}),f=d,p=r("2877"),h=Object(p["a"])(f,u,l,!1,null,null,null),v=h.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drag-drop",attrs:{dragover:e.dragover}},[e.loading?a("div",[e._m(0),e._m(1)]):a("p",{staticClass:"drag-drop__help"},[a("img",{staticClass:"drag-drop__icon",attrs:{src:r("c966"),alt:"MSN icon"}}),a("span",[e._v("Drop your MSN XML file here")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"drag-drop__error"},[e._v(e._s(e.error))])])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"drag-drop__help"},[r("span",[e._v("Parsing XML file...")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lds-ring"},[r("div"),r("div"),r("div"),r("div")])}],g=(r("a15b"),r("d81d"),r("498a"),r("d4ec")),b=r("bee2"),w=r("c51a"),y=r.n(w),k=r("369b"),x=r.n(k),M=function(){function e(t){var r=this;Object(g["a"])(this,e),this.rawXml=t,this.data=null,this.parse(),Array.isArray(this.data.Log.Message)?this.messages=this.data.Log.Message.map((function(e){return r.parseMessage(e)})):(this.messages=[],this.messages.push(this.parseMessage(this.data.Log.Message))),this.messagesFlat=this.messages.map((function(e){return r.flattenMessage(e)}))}return Object(b["a"])(e,[{key:"flattenMessage",value:function(e){return e=JSON.parse(JSON.stringify(e)),e.from=e.from.join(","),e.to=e.to.join(""),e}},{key:"getCsv",value:function(){return x.a.unparse(this.messagesFlat,{quotes:!0,header:!0})}},{key:"getJson",value:function(){return JSON.stringify(this.messages,null,4)}},{key:"parse",value:function(){var e=y.a.xml2js(this.rawXml,{compact:!0});if(!("Log"in e))throw new Error("No <Log> element. Is this a MSN XML file?");this.data=e}},{key:"parseFriendlyName",value:function(e){var t;return t="_attributes"in e?[e._attributes.FriendlyName]:e.map((function(e){return e._attributes.FriendlyName})),t=t.map((function(e){return e.trim()})),t}},{key:"parseMessage",value:function(e){var t;return{date:e._attributes.Date,datetime:e._attributes.DateTime,sessionid:parseInt(e._attributes.SessionID),from:this.parseFriendlyName(e.From.User),text:e.Text._text,text_style:null===(t=e.Text._attributes)||void 0===t?void 0:t.Style,time:e._attributes.Time,to:this.parseFriendlyName(e.To.User)}}}]),e}(),C={data:function(){return{dragover:!1,error:!1,loading:!1}},methods:{handleDrop:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.loading=!0,t.dragover=!1,e.preventDefault(),e.dataTransfer.items){r.next=5;break}return r.abrupt("return");case 5:if(a=e.dataTransfer.items,!(a.length>1)){r.next=9;break}return t.error="Please only drop one file...",r.abrupt("return");case 9:if(n=a[0].getAsFile(),"text/xml"===n.type){r.next=13;break}return t.error="Only XML files are accepted",r.abrupt("return");case 13:return r.prev=13,r.next=16,n.text();case 16:o=r.sent,s=new M(o),r.next=24;break;case 20:r.prev=20,r.t0=r["catch"](13),console.error(r.t0),t.error="Parsing error: ".concat(r.t0);case 24:t.$emit("update",s),t.loading=!1;case 26:case"end":return r.stop()}}),r,null,[[13,20]])})))()},initDrop:function(){var e=this;this.$el.addEventListener("drop",(function(t){return e.handleDrop(t)})),this.$el.addEventListener("dragleave",(function(){e.dragover=!1})),this.$el.addEventListener("dragover",(function(t){t.preventDefault(),e.error=!1,e.dragover=!0}))}},mounted:function(){this.initDrop()}},O=C,j=Object(p["a"])(O,_,m,!1,null,null,null),S=j.exports,N={components:{ChatView:v,DragDrop:S},data:function(){return{about:!1,data:null}},methods:{downloadFile:function(e,t){var r=new Blob([e],{type:"text/".concat(t)}),a=window.URL.createObjectURL(r),n=document.createElement("a");n.href=a,n.download="msn.".concat(t),n.click()},getCsv:function(){this.downloadFile(this.data.getCsv(),"csv")},getJson:function(){this.downloadFile(this.data.getJson(),"json")},reset:function(){this.data=null},parseDrop:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.data=e;case 1:case"end":return r.stop()}}),r)})))()}}},D=N,L=Object(p["a"])(D,o,i,!1,null,null,null),E=L.exports,$={components:{ScreenView:E}},T=$,F=Object(p["a"])(T,n,s,!1,null,null,null),J=F.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(J)}}).$mount("#app")},5903:function(e,t,r){},"7c04":function(e,t,r){e.exports=r.p+"img/logo.06569b5e.png"},c966:function(e,t,r){e.exports=r.p+"img/icon.e360f199.png"}});
//# sourceMappingURL=app.9b42b3ca.js.map