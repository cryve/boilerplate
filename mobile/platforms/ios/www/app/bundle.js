!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="pwNi")}({"3hZy":function(){},JkW7:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),a={};if(i&&i[1])for(var u=i[1].split("&"),l=0;l<u.length;l++){var s=u[l].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=c(t.replace(r,"")),e=c(e||"");for(var p=Math.max(t.length,e.length),f=0;f<p;f++)if(e[f]&&":"===e[f].charAt(0)){var h=e[f].replace(/(^\:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||H)[0]||"",b=~d.indexOf("+"),m=~d.indexOf("*"),v=t[f]||"";if(!v&&!m&&(d.indexOf("?")<0||b)){o=!1;break}if(a[h]=decodeURIComponent(v),b||m){a[h]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){o=!1;break}return(!0===n.default||!1!==o)&&a}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=s(t),t.attributes}function c(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function u(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function l(t){return c(t).map(u).join("")}function s(t){return t.attributes.default?0:l(t.attributes.path)}function p(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function f(t,e){void 0===e&&(e="push"),K&&K[e]?K[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function h(){var t;return t=K&&K.location?K.location:K&&K.getCurrentLocation?K.getCurrentLocation():"undefined"!=typeof location?location:J,""+(t.pathname||"")+(t.search||"")}function d(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),b(t)&&f(t,e?"replace":"push"),m(t)}function b(t){for(var e=X.length;e--;)if(X[e].canRoute(t))return!0;return!1}function m(t){for(var e=!1,n=0;n<X.length;n++)!0===X[n].routeTo(t)&&(e=!0);for(var o=$.length;o--;)$[o](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return d(e)}}function _(t){if(0==t.button)return v(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&p(e)){if(e.hasAttribute("native"))return;if(v(e))return y(t)}}while(e=e.parentNode)}}function O(){V||("function"==typeof addEventListener&&(K||addEventListener("popstate",function(){m(h())}),addEventListener("click",g)),V=!0)}function j(t){var e,n="https://www.google-analytics.com/collect?v=1";for(e in t)t[e]&&(n+="&"+e+"="+encodeURIComponent(t[e]));return n}function w(t,e){e=e||{},this.args=Z({tid:t,cid:q},e),this.send("pageview")}function C(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function x(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function M(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function U(t){return t=t||Object.create(null),{on:function(e,n){(t[e]||(t[e]=[])).push(n)},off:function(e,n){t[e]&&t[e].splice(t[e].indexOf(n)>>>0,1)},emit:function(e,n){(t[e]||[]).slice().map(function(t){t(n)}),(t["*"]||[]).slice().map(function(t){t(e,n)})}}}function E(t,e){for(var n in e)t[n]=e[n];return t}function R(t,e,n){if(t===e)return t;St(t).reduce(function(t,e){return~t.indexOf(e)?t:t.concat(e)},St(e)).forEach(function(o){if(!~n.indexOf(o)){var r=t[o],i=e[o];if(r===i)return t;null!=r&&null!=i&&"object"==typeof r&&"object"==typeof i?r[wt]?r.applySnapshot(i,!0):R(r,i,n):t[xt][o]=i}})}function I(t,e,n,o,r){for(var i in void 0===r&&(r=t),t[kt]&&!t[wt]&&(t=Nt.has(t[kt])?Nt.get(t[kt])(t):t),t[wt]&&t!==r?t[jt](e,r,o):(t[xt]=t[xt]&&t[xt][n]||A(t,e,n,!1,o,r),t[Ct]=t[Ct]&&t[Ct][n]||A(t,e,n,!0,o,r)),t){var a=t[i];null!=a&&"object"==typeof a&&(t[i]=I(a,e,n,o+"/"+i,r))}return t}function A(t,e,n,o,r,i){return new Proxy(t,{get:function(t,e){if(e===n)return!0;if("symbol"==typeof e)return t[e];var r=t[e];return null!=r&&"object"==typeof r&&(o?r[Ct]:r[xt])||r},set:function(t,a,c){if(o)throw new Error("You can't modify the state outside of actions");return t[a]===c||(null!=c&&"object"==typeof c&&(c=I(c,e,n,r+"/"+a,i||t[Ct])),t[a]=c,e("patch",{path:r+"/"+a,op:"replace",value:c}),!0)}})}function G(t,e,n){return t.on(e,n),function(){return t.off(e,n)}}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function D(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var W=n("KM04"),H={},K=null,X=[],$=[],J={},V=!1,F=function(t){function e(e){t.call(this,e),e.history&&(K=e.history),this.state={url:e.url||h()},O()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){X.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;K&&(this.unlisten=K.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),X.splice(X.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(i).map(function(t){var i=r(e,t.attributes.path,t.attributes);if(i){if(!1!==n){var a={url:e,matches:i};return o(a,i),delete a.ref,delete a.key,Object(W.cloneElement)(t,a)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),a=i[0]||null;this._didRoute=!!a;var c=this.previousUrl;return r!==c&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:c,active:i,current:a})),a},e}(W.Component),Y=function(t){return Object(W.h)("a",o({onClick:_},t))},z=function(t){return Object(W.h)(t.component,t)};F.subscribers=$,F.getCurrentUrl=h,F.route=d,F.Router=F,F.Route=z,F.Link=Y;var Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},q=localStorage["ga:user"]=localStorage["ga:user"]||Math.random()+"."+Math.random();w.prototype.send=function(t,e){"pageview"!==t||e||(e={dl:location.href,dt:document.title});var n=Z({t:t},this.args,e,{z:Date.now()});(new Image).src=j(n)};var Q=w,tt=n("v8fG"),et=Object(W.h)("div",{class:"index_page"},Object(W.h)("div",{class:"drag",style:"height: 2em"}),Object(W.h)("div",{class:"wrapper"},Object(W.h)("section",{class:"action"},Object(W.h)("h1",null,"Hello."),Object(W.h)("p",null,"Lorem ipsum sit dolor amet."),Object(W.h)("form",null,Object(W.h)("div",{class:"form-group"},Object(W.h)("label",null,"Email address"),Object(W.h)("input",{type:"email",class:"form-control",placeholder:"Email"})),Object(W.h)("div",{class:"form-group"},Object(W.h)("label",null,"Password"),Object(W.h)("input",{type:"password",class:"form-control",placeholder:"Password"})),Object(W.h)("div",{class:"form-actions"},Object(W.h)("button",{type:"submit",class:"btn btn-form btn-primary"},"OK"),Object(W.h)("a",{href:"/dashboard",class:"btn btn-form btn-default"},"Dashboard")))),Object(W.h)("section",null))),nt=function(t){function e(){return C(this,t.apply(this,arguments))}return x(e,t),e.prototype.render=function(){return et},e}(W.Component),ot=Object(W.h)("thead",null,Object(W.h)("tr",null,Object(W.h)("th",null,"Name"),Object(W.h)("th",null,"Kind"),Object(W.h)("th",null,"Date Modified"),Object(W.h)("th",null,"Author"))),rt=function(t){var e=t.files;return Object(W.h)(tt.Table,{striped:!0},ot,Object(W.h)("tbody",null,e.map(function(t){return Object(W.h)(it,t)})))},it=function(t){var e=t.name,n=t.type,o=t.date,r=t.author;return Object(W.h)("tr",null,Object(W.h)("td",null,e),Object(W.h)("td",null,n),Object(W.h)("td",null,o),Object(W.h)("td",null,r))},at=Object(W.h)("div",{class:"pane pane-sm sidebar"},Object(W.h)(tt.NavGroup,null,Object(W.h)(tt.NavGroup.Title,null,"Places"),Object(W.h)(tt.NavGroup.Item,{icon:"home"},"Home"),Object(W.h)(tt.NavGroup.Item,{icon:"folder"},"Documents"),Object(W.h)(tt.NavGroup.Item,{icon:"download"},"Downloads"),Object(W.h)(tt.NavGroup.Item,{icon:"cloud"},"Desktop"))),ct=function(){return at},ut=[{name:"index.html",type:"HTML",date:"Yesterday",author:"mehmetkose"},{name:"bundle.js",type:"JavaScript",date:"10:01 am",author:"mehmetkose"},{name:"photon.css",type:"CSS",date:"9:15 am",author:"connors"}],lt=Object(W.h)(tt.Title,null,"Bir Mac Uygulaması"),st=Object(W.h)(tt.ButtonGroup,null,Object(W.h)(tt.Button,{icon:"left"}),Object(W.h)(tt.Button,{icon:"right"})),pt=Object(W.h)(tt.Button,{icon:"arrows-ccw",class:"pull-right"}),ft=Object(W.h)("div",{class:"window-content"},Object(W.h)("div",{class:"pane-group"},Object(W.h)(ct,null),Object(W.h)("div",{class:"pane"},Object(W.h)(rt,{files:ut})))),ht=function(t){function e(){return k(this,e),N(this,t.apply(this,arguments))}return S(e,t),e.prototype.render=function(){return Object(W.h)("div",{class:"window"},Object(W.h)(tt.Header,null,lt,Object(W.h)("div",{class:"toolbar-actions"},st,pt,Object(W.h)(tt.Button,{icon:"home",onClick:function(){d("/")}},"Home"),Object(W.h)(tt.Button,{icon:"cog",onClick:function(){d("/settings")}},"Settings"))),ft,Object(W.h)(tt.Footer,null,Object(W.h)(tt.Title,null,ut.length+" items")))},e}(W.Component),dt=Object(W.h)("div",{class:"pane pane-sm sidebar"},Object(W.h)(tt.NavGroup,null,Object(W.h)(tt.NavGroup.Title,null,"Places"),Object(W.h)(tt.NavGroup.Item,{icon:"home"},"Home"),Object(W.h)(tt.NavGroup.Item,{icon:"folder"},"Documents"),Object(W.h)(tt.NavGroup.Item,{icon:"download"},"Downloads"),Object(W.h)(tt.NavGroup.Item,{icon:"cloud"},"Desktop"))),bt=function(){return dt},mt=Object(W.h)(tt.Title,null,"Bir Mac Uygulaması"),vt=Object(W.h)(tt.ButtonGroup,null,Object(W.h)(tt.Button,{icon:"left"}),Object(W.h)(tt.Button,{icon:"right"})),_t=Object(W.h)(tt.Button,{icon:"arrows-ccw",class:"pull-right"}),yt=Object(W.h)("div",{class:"window-content"},Object(W.h)("div",{class:"pane-group"},Object(W.h)(bt,null),Object(W.h)("div",{class:"pane"},"Settings"))),gt=Object(W.h)(tt.Footer,null,Object(W.h)(tt.Title,null,"Settings")),Ot=function(t){function e(){return T(this,e),P(this,t.apply(this,arguments))}return M(e,t),e.prototype.render=function(){return Object(W.h)("div",{class:"window"},Object(W.h)(tt.Header,null,mt,Object(W.h)("div",{class:"toolbar-actions"},vt,_t,Object(W.h)(tt.Button,{icon:"home",onClick:function(){d("/")}},"Home"),Object(W.h)(tt.Button,{icon:"cog",onClick:function(){d("/settings")}},"Settings"))),yt,gt)},e}(W.Component),jt=(n("3hZy"),Symbol("parent")),wt=Symbol("model"),Ct=Symbol("viewProxyCache"),xt=Symbol("actionProxyCache"),kt="__p_model",Nt=new Map,St=Object.keys.bind(Object),Tt=function(t,e){var n=e.initial,o=e.actions,r=e.views;if("function"!=typeof n)throw new Error("You have to supply a function that returns the initial state");if(null!=o&&"function"!=typeof o)throw new TypeError("actions has to be a function");if(null!=r&&"function"!=typeof r)throw new TypeError("views has to be a function");var i=function(e){var i=Symbol("model"),a="",c=null,u=null,l=U(),s=E(n(),e),p=function(t,e){"snapshot"===t?e=h.getSnapshot():null!=e.path&&(e.path=a+e.path),l.emit(t,e),c&&c(t,e)},f=[],h={onAction:function(t,e){return G(l,e?"action-complete":"action",t)},onSnapshot:function(t){return G(l,"snapshot",t)},onPatch:function(t){return G(l,"patch",t)},getSnapshot:function(){return JSON.parse(JSON.stringify(s))},applySnapshot:function(t,e){R(s,t,f),!e&&p("snapshot",{})},getParent:function(){return u},getRoot:function(){return u?null===u.getRoot()&&u:null}};f.push.apply(f,St(h)),E(s,h),s[wt]=!0,s[jt]=function(t,e,n){c=t,a=n,u=e},s[kt]=t;var d=(s=I(s,p,i,""))[Ct],b=s[xt];if(o){for(var m=o(b),v=St(m),_=function(t,e){p("action-complete",{name:t,path:"",args:e}),p("snapshot",{})},y=0,g=v;y<g.length;y+=1)!function(){var t=g[y],e=m[t];s[t]=function(){for(var n=[],o=arguments.length;o--;)n[o]=arguments[o];p("action",{name:t,path:"",args:n});var r=e.apply(null,n);return null!=r&&r.then?r.then(_.bind(null,t,n)):_(t,n),r}}();f.push.apply(f,v)}if(r){for(var O=r(d),j=St(O),w={},C=0,x=j;C<x.length;C+=1)!function(){var t=x[C],e=O[t];Object.defineProperty(s,t,{get:function(){return w[t]},configurable:!1}),w[t]=e()}();l.on("patch",function(){for(var t=0,e=j;t<e.length;t+=1){var n=e[t];w[n]=O[n]()}})}return s};return Nt.set(t,i),function(t){return i(t)[Ct]}},Pt=Tt,Mt=Pt("App",{initial:function(){return{name:null,isOffline:!1}},actions:function(t){return{setFirstName:function(e){t.firstname=e},setIsOffline:function(e){t.isOffline=e}}},views:function(t){return{fullname:function(){return t.name+" "+t.name}}}}),Ut={App:Mt};n.d(e,"default",function(){return It});var Et=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Rt=Ut.App({name:"Boilerplate"}),It=function(t){function e(n){B(this,e);var o=L(this,t.call(this,n));return o.handleRoute=function(t){o.currentUrl=t.url,window.ga&&ga.send("pageview",{dp:t.url})},o.state={updateMainState:o.updateMainState.bind(o)},o}return D(e,t),e.prototype.updateMainState=function(t){this.setState(t)},e.prototype.componentDidMount=function(){window.ga=new Q("UA-XXXXXXX-XX"),console.log(Rt.fullname)},e.prototype.render=function(){return Object(W.h)(F,{onChange:this.handleRoute},Object(W.h)(nt,Et({default:!0,path:"/"},this.state)),Object(W.h)(ht,Et({path:"/dashboard"},this.state)),Object(W.h)(Ot,Et({path:"/settings"},this.state)))},e}(W.Component)},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var o,r,i,a,c=E;for(a=arguments.length;a-- >2;)U.push(arguments[a]);for(n&&null!=n.children&&(U.length||U.push(n.children),delete n.children);U.length;)if((r=U.pop())&&void 0!==r.pop)for(a=r.length;a--;)U.push(r[a]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?c[c.length-1]+=r:c===E?c=[r]:c.push(r),o=i;var u=new e;return u.nodeName=t,u.children=c,u.attributes=null==n?void 0:n,u.key=null==n?void 0:n.key,void 0!==M.vnode&&M.vnode(u),u}function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){return n(t.nodeName,o(o({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(M.debounceRendering||R)(a)}function a(){var t,e=A;for(A=[];t=e.pop();)t.__d&&k(t)}function c(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&u(t,e.nodeName):n||t._componentConstructor===e.nodeName}function u(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=o({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function s(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n,o,r){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),o&&o(t);else if("class"!==e||r)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"==typeof o[i]&&!1===I.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,d,a):t.removeEventListener(e,d,a),(t.__l||(t.__l={}))[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t)h(t,e,null==o?"":o),null!=o&&!1!==o||t.removeAttribute(e);else{var c=r&&e!==(e=e.replace(/^xlink\:?/,""));null==o||!1===o?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function h(t,e,n){try{t[e]=n}catch(t){}}function d(t){return this.__l[t.type](M.event&&M.event(t)||t)}function b(){for(var t;t=G.pop();)M.afterMount&&M.afterMount(t),t.componentDidMount&&t.componentDidMount()}function m(t,e,n,o,r,i){B++||(L=null!=r&&void 0!==r.ownerSVGElement,D=null!=t&&!("__preactattr_"in t));var a=v(t,e,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--B||(D=!1,i||b()),a}function v(t,e,n,o,r){var i=t,a=L;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),y(t,!0))),i.__preactattr_=!0,i;var c=e.nodeName;if("function"==typeof c)return N(t,e,n,o);if(L="svg"===c||"foreignObject"!==c&&L,c+="",(!t||!u(t,c))&&(i=s(c,L),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),y(t,!0)}var l=i.firstChild,p=i.__preactattr_,f=e.children;if(null==p){p=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)p[h[d].name]=h[d].value}return!D&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&_(i,f,n,o,D||null!=p.dangerouslySetInnerHTML),O(i,e.attributes,p),L=a,i}function _(t,e,n,o,r){var i,a,u,l,s,f=t.childNodes,h=[],d={},b=0,m=0,_=f.length,g=0,O=e?e.length:0;if(0!==_)for(var j=0;j<_;j++){var w=f[j],C=w.__preactattr_,x=O&&C?w._component?w._component.__k:C.key:null;null!=x?(b++,d[x]=w):(C||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(h[g++]=w)}if(0!==O)for(var j=0;j<O;j++){l=e[j],s=null;var x=l.key;if(null!=x)b&&void 0!==d[x]&&(s=d[x],d[x]=void 0,b--);else if(!s&&m<g)for(i=m;i<g;i++)if(void 0!==h[i]&&c(a=h[i],l,r)){s=a,h[i]=void 0,i===g-1&&g--,i===m&&m++;break}s=v(s,l,n,o),u=f[j],s&&s!==t&&s!==u&&(null==u?t.appendChild(s):s===u.nextSibling?p(u):t.insertBefore(s,u))}if(b)for(var j in d)void 0!==d[j]&&y(d[j],!1);for(;m<=g;)void 0!==(s=h[g--])&&y(s,!1)}function y(t,e){var n=t._component;n?S(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||p(t),g(t))}function g(t){for(t=t.lastChild;t;){var e=t.previousSibling;y(t,!0),t=e}}function O(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||f(t,o,n[o],n[o]=void 0,L);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||f(t,o,n[o],n[o]=e[o],L)}function j(t){var e=t.constructor.name;(W[e]||(W[e]=[])).push(t)}function w(t,e,n){var o,r=W[t.name];if(t.prototype&&t.prototype.render?(o=new t(e,n),T.call(o,e,n)):(o=new T(e,n),o.constructor=t,o.render=C),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.__b=r[i].__b,r.splice(i,1);break}return o}function C(t,e,n){return this.constructor(t,n)}function x(t,e,n,o,r){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o),o&&o!==t.context&&(t.__c||(t.__c=t.context),t.context=o),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===M.syncComponentUpdates&&t.base?i(t):k(t,1,r)),t.__r&&t.__r(t))}function k(t,e,n,r){if(!t.__x){var i,a,c,u=t.props,s=t.state,p=t.context,f=t.__p||u,h=t.__s||s,d=t.__c||p,v=t.base,_=t.__b,g=v||_,O=t._component,j=!1;if(v&&(t.props=f,t.state=h,t.context=d,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(u,s,p)?j=!0:t.componentWillUpdate&&t.componentWillUpdate(u,s,p),t.props=u,t.state=s,t.context=p),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!j){i=t.render(u,s,p),t.getChildContext&&(p=o(o({},p),t.getChildContext()));var C,N,T=i&&i.nodeName;if("function"==typeof T){var P=l(i);a=O,a&&a.constructor===T&&P.key==a.__k?x(a,P,1,p,!1):(C=a,t._component=a=w(T,P,p),a.__b=a.__b||_,a.__u=t,x(a,P,0,p,!1),k(a,1,n,!0)),N=a.base}else c=g,C=O,C&&(c=t._component=null),(g||1===e)&&(c&&(c._component=null),N=m(c,i,p,n||!v,g&&g.parentNode,!0));if(g&&N!==g&&a!==O){var U=g.parentNode;U&&N!==U&&(U.replaceChild(N,g),C||(g._component=null,y(g,!1)))}if(C&&S(C),t.base=N,N&&!r){for(var E=t,R=t;R=R.__u;)(E=R).base=N;N._component=E,N._componentConstructor=E.constructor}}if(!v||n?G.unshift(t):j||(t.componentDidUpdate&&t.componentDidUpdate(f,h,d),M.afterUpdate&&M.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);B||r||b()}}function N(t,e,n,o){for(var r=t&&t._component,i=r,a=t,c=r&&t._componentConstructor===e.nodeName,u=c,s=l(e);r&&!u&&(r=r.__u);)u=r.constructor===e.nodeName;return r&&u&&(!o||r._component)?(x(r,s,3,n,o),t=r.base):(i&&!c&&(S(i),t=a=null),r=w(e.nodeName,s,n),t&&!r.__b&&(r.__b=t,a=null),x(r,s,1,n,o),t=r.base,a&&t!==a&&(a._component=null,y(a,!1))),t}function S(t){M.beforeUnmount&&M.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?S(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,p(e),j(t),g(e)),t.__r&&t.__r(null)}function T(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function P(t,e,n){return m(n,t,{},!1,e,!1)}var M={},U=[],E=[],R="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,I=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],G=[],B=0,L=!1,D=!1,W={};o(T.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),k(this,2)},render:function(){}});var H={h:n,createElement:n,cloneElement:r,Component:T,render:P,rerender:a,options:M};t.exports=H}()},pwNi:function(t,e,n){"use strict";var o=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(t){return t&&t.default?t.default:t};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var t=r(n("JkW7"));i=(0,o.render)((0,o.h)(t),document.body,i)};a()}},v8fG:function(t,e,n){var o,r,i;!function(a,c){r=[e,n("KM04")],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}t.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r={},i=function(t){return function(){return t(arguments.length<=0||void 0===arguments[0]?r:arguments[0])}},a=function(){for(var t,e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=[]).concat.apply(t,n.filter(function(t){return t})).join(" ")},c=function(t,r){return i(function(i){var c=i.children,u=n(i,["children"]);return e.h(t,o({},u,{class:a(u.class,r)}),c)})};t.Header=c("header",["toolbar toolbar-header"]),t.Footer=c("footer",["toolbar toolbar-footer"]),t.Title=c("h1","title"),t.ButtonGroup=c("div","btn-group"),t.Button=i(function(t){var r=t.class,i=t.children,c=t.icon,l=t.type,s=t.primary,p=t.dropdown,f=t.mini,h=t.large,d=t.form,b=n(t,["class","children","icon","type","primary","dropdown","mini","large","form"]);return e.h("button",o({},b,{class:a(r,"btn btn-"+(l||(s?"primary":"default")),p&&"btn-dropdown",h&&"btn-large",f&&"btn-mini",d&&"btn-form")}),c?e.h(u,{name:c,text:!(!i||!i.length)||null}):null,i)});var u=i(function(t){var r=t.class,i=t.text,c=t.name,u=t.children,l=n(t,["class","text","name","children"]);return e.h("span",o({},l,{class:a(r,"icon icon-"+c,i&&"icon-text")}),u)});t.Icon=u;var l=c("div","tab-group");t.TabGroup=l;var s=i(function(t){var o=t.class,r=t.close,i=t.children;n(t,["class","close","children"]);return e.h("div",{class:a(o,"tab-item")},"false"===String(r)?null:e.h(u,{name:"cancel",class:"icon-close-tab"}),i)});t.Tab=s,l.Item=s;var p=c("nav","nav-group");t.NavGroup=p,p.Title=c("h5","nav-group-title"),p.Item=i(function(t){var r=t.class,i=t.icon,c=t.children,l=n(t,["class","icon","children"]);return e.h("span",o({},l,{class:a(r,"nav-group-item")}),i?e.h(u,{name:i}):null,c)});var f=c("ul","list-group");t.ListGroup=f,f.Header=c("li","list-group-header"),f.Item=c("li","list-group-item");var h=c("form");h.Group=c("div","form-group"),h.CheckBox=i(function(t){var r=t.class,i=t.name,c=t.checked,u=t.value,l=t.label,s=t.children,p=n(t,["class","name","checked","value","label","children"]);return e.h("div",o({},p,{class:a(r,"checkbox")}),e.h("label",null,e.h("input",{type:"checkbox",name:i,checked:c,value:u}),l||null,s))}),h.Radio=i(function(t){var r=t.class,i=t.name,c=t.checked,u=t.value,l=t.label,s=t.children,p=n(t,["class","name","checked","value","label","children"]);return e.h("div",o({},p,{class:a(r,"radio")}),e.h("label",null,e.h("input",{type:"radio",name:i,checked:c,value:u}),l||null,s))}),h.Actions=c("div","form-actions"),t.Table=i(function(t){var r=t.class,i=t.striped,c=t.children,u=n(t,["class","striped","children"]);return e.h("table",o({},u,{class:a(r,i&&"table-striped")}),c)})})}});
//# sourceMappingURL=bundle.16c13.js.map