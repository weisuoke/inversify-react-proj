(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(6),a=(n(110),n(105)),c=n(24),l=n(97),u=n(98),i="UPDATE_SESSION",s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},m={loggedIn:!1,session:"",userName:""};var p="SEND_MESSAGE",f="DELETE_MESSAGE",d=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)c.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return c},y=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e},E={messages:[]};var h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)c.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return c},v=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e},b=Object(c.combineReducers)({system:function(e,t){switch(void 0===e&&(e=m),t.type){case i:return s({},e,t.payload);default:return e}},chat:function(e,t){switch(void 0===e&&(e=E),t.type){case p:return{messages:y(e.messages,[t.payload])};case f:return{messages:e.messages.filter(function(e){return e.timestamp!==t.meta.timestamp})};default:return e}}});var g,S=n(39),w=n(25),O=n(16),_=n.n(O),j=(n(115),n(119),n(26)),A=n.n(j),I=(n(121),g=function(e,t){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),D=A.a.Header,M=(A.a.Footer,A.a.Sider),N=A.a.Content;_.a.SubMenu,_.a.ItemGroup;function k(){return r.createElement("h2",{className:"red"},"App")}function P(){return r.createElement("h2",{className:"red"},"About")}function x(){return r.createElement("h2",null,"Users")}var G,H,T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return I(t,e),t.prototype.componentDidMount=function(){},t.prototype.render=function(){return r.createElement(S.a,null,r.createElement("div",null,r.createElement(A.a,null,r.createElement(M,null,r.createElement(_.a,{mode:"inline",theme:"dark",defaultSelectedKeys:["1"]},r.createElement(_.a.Item,null,r.createElement(S.b,{to:"/"},"Home")),r.createElement(_.a.Item,null,r.createElement(S.b,{to:"/about/"},"About")),r.createElement(_.a.Item,null,r.createElement(S.b,{to:"/test/page"},"Users")))),r.createElement(A.a,null,r.createElement(D,{style:{background:"#fff",padding:0}},"Header"),r.createElement(N,null,r.createElement("div",{id:"content"},r.createElement(w.a,{path:"/",exact:!0,component:k}),r.createElement(w.a,{path:"/about/",component:P}),r.createElement(w.a,{path:"/test/page",component:x})))))))},t}(r.Component),U=(G=[l.a],H=c.applyMiddleware.apply(void 0,v(G)),Object(c.createStore)(b,Object(u.composeWithDevTools)(H)));o.render(r.createElement(a.a,{store:U},r.createElement(T,null)),document.getElementById("root"))}},[[199,1,2]]]);