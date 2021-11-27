(this["webpackJsonp@kraska-uk/nft-app"]=this["webpackJsonp@kraska-uk/nft-app"]||[]).push([[1],{333:function(t,e,n){"use strict";(function(t){n(0);var r=n(45),c=n(368),a=n(371),i=n(379),o=n(10);e.a=Object(r.hot)(t)((function(t){var e=t.title,n=t.description,r=t.meta,s=t.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c.a,{title:e,description:n,meta:r||[]}),Object(o.jsx)(a.a,{}),Object(o.jsx)("main",{style:{minHeight:"100vh"},children:s}),Object(o.jsx)(i.a,{})]})}))}).call(this,n(75)(t))},337:function(t,e,n){"use strict";function r(){return{target:"_blank",rel:"noreferrer noopener"}}n.d(e,"a",(function(){return r}))},341:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n(96),c=n(147),a=n(0),i=n(362),o=n(52);function s(){var t=Object(c.d)(),e=Object(c.d)(o.c);return t.active?t:e}function u(){var t=Object(c.d)(),e=t.activate,n=t.active,o=Object(a.useState)(!1),s=Object(r.a)(o,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){i.b.isAuthorized().then((function(t){t?e(i.b,void 0,!0).catch((function(){l(!0)})):l(!0)}))}),[]),Object(a.useEffect)((function(){!u&&n&&l(!0)}),[u,n]),u}},362:function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"a",(function(){return m}));var r=n(164),c=(n(293),n(348)),a=n(19),i=n(2),o=n.n(i),s=n(373),u=n(336),l=n(14),d=n(32),h=n(33),j=n(395),b=n(349),f=n(24),p=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t,r,c){var a;return Object(l.a)(this,n),(a=e.call(this,t)).code=r,a.data=c,a}return n}(Object(j.a)(Error)),L=function t(e,n,r){var c=this;Object(l.a)(this,t),this.isMetaMask=!1,this.chainId=void 0,this.url=void 0,this.host=void 0,this.path=void 0,this.batchWaitTimeMs=void 0,this.nextId=1,this.batchTimeoutId=null,this.batch=[],this.clearBatch=Object(u.a)(o.a.mark((function t(){var e,n,r,a,i,u,l,d,h,j,b,f,L,O;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.info("Clearing batch",c.batch),e=c.batch,c.batch=[],c.batchTimeoutId=null,t.prev=4,t.next=7,fetch(c.url,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify(e.map((function(t){return t.request})))});case 7:n=t.sent,t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(4),e.forEach((function(t){return(0,t.reject)(new Error("Failed to send batch call"))})),t.abrupt("return");case 14:if(n.ok){t.next=17;break}return e.forEach((function(t){return(0,t.reject)(new p("".concat(n.status,": ").concat(n.statusText),-32e3))})),t.abrupt("return");case 17:return t.prev=17,t.next=20,n.json();case 20:r=t.sent,t.next=27;break;case 23:return t.prev=23,t.t1=t.catch(17),e.forEach((function(t){return(0,t.reject)(new Error("Failed to parse JSON response"))})),t.abrupt("return");case 27:a=e.reduce((function(t,e){return t[e.request.id]=e,t}),{}),i=Object(s.a)(r);try{for(i.s();!(u=i.n()).done;)l=u.value,d=a[l.id],h=d.resolve,j=d.reject,b=d.request.method,void 0!==h&&void 0!==j&&("error"in l?j(new p(null===l||void 0===l||null===(f=l.error)||void 0===f?void 0:f.message,null===l||void 0===l||null===(L=l.error)||void 0===L?void 0:L.code,null===l||void 0===l||null===(O=l.error)||void 0===O?void 0:O.data)):"result"in l?h(l.result):j(new p("Received unexpected JSON-RPC response to ".concat(b," request."),-32e3,l)))}catch(o){i.e(o)}finally{i.f()}case 30:case"end":return t.stop()}}),t,null,[[4,10],[17,23]])}))),this.sendAsync=function(t,e){c.request(t.method,t.params).then((function(n){return e(null,{jsonrpc:"2.0",id:t.id,result:n})})).catch((function(t){return e(t,null)}))},this.request=function(){var t=Object(u.a)(o.a.mark((function t(e,n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"===typeof e){t.next=2;break}return t.abrupt("return",c.request(e.method,e.params));case 2:if("eth_chainId"!==e){t.next=4;break}return t.abrupt("return","0x".concat(c.chainId.toString(16)));case 4:return a=new Promise((function(t,r){c.batch.push({request:{jsonrpc:"2.0",id:c.nextId++,method:e,params:n},resolve:t,reject:r})})),c.batchTimeoutId=null!==(r=c.batchTimeoutId)&&void 0!==r?r:setTimeout(c.clearBatch,c.batchWaitTimeMs),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),this.chainId=e,this.url=n;var a=new URL(n);this.host=a.host,this.path=a.pathname,this.batchWaitTimeMs=null!==r&&void 0!==r?r:50},O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var r,c=t.urls,a=t.defaultChainId;return Object(l.a)(this,n),Object(f.a)(a||1===Object.keys(c).length,"defaultChainId is a required argument with >1 url"),(r=e.call(this,{supportedChainIds:Object.keys(c).map((function(t){return Number(t)}))})).providers=void 0,r.currentChainId=void 0,r.currentChainId=a||Number(Object.keys(c)[0]),r.providers=Object.keys(c).reduce((function(t,e){return t[Number(e)]=new L(Number(e),c[Number(e)]),t}),{}),r}return Object(a.a)(n,[{key:"provider",get:function(){return this.providers[this.currentChainId]}},{key:"activate",value:function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{provider:this.providers[this.currentChainId],chainId:this.currentChainId,account:null});case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getProvider",value:function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.providers[this.currentChainId]);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getChainId",value:function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.currentChainId);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getAccount",value:function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",null);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"deactivate",value:function(){return null}}]),n}(b.a),v=n(52);new O({urls:{1:"https://localhost/",4:"https://localhost/"},defaultChainId:1});var x=new c.a({}),m=Object(r.a)({},v.a.Injected,x)},368:function(t,e,n){"use strict";(function(t){n(0);var r=n(45),c=n(369),a=n(52),i=n(10);e.a=Object(r.hot)(t)((function(t){var e=t.title,n=t.description,r=t.meta,o=n,s=a.d;return Object(i.jsxs)(c.a,{htmlAttributes:{lang:"en"},title:e,defaultTitle:s,titleTemplate:s?"%s | ".concat(s):void 0,meta:[{name:"description",content:o},{property:"og:title",content:e},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:""},{name:"twitter:title",content:e},{name:"twitter:description",content:o}].concat(r),children:[Object(i.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap",rel:"stylesheet"})]})}))}).call(this,n(75)(t))},371:function(t,e,n){"use strict";(function(t){n(0);var r=n(45),c=n(414),a=n(411),i=n(292),o=n(143),s=n(100),u=n(52),l=n(341),d=n(374),h=n(393),j=n(10);e.a=Object(r.hot)(t)((function(){Object(l.b)();var t=Object(l.a)(),e=(t.library,t.chainId),n=t.account,r=(t.active,t.error,Object(d.a)()),b=r.login,f=r.logout,p=Object(h.a)(b,f,n),L=p.onPresentConnectModal,O=p.onPresentAccountModal,v=n?"".concat(n.substring(0,6),"...").concat(n.substring(n.length-4)):"Connect wallet";return Object(j.jsx)(c.a,{as:"header",children:Object(j.jsx)(a.a,{fixed:"top",size:"large",inverted:!0,children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(a.a.Item,{header:!0,as:o.b,to:s.a.main,children:u.d}),Object(j.jsx)(a.a.Item,{header:!0,as:o.c,to:s.a.newWallet,children:"New Wallet"}),Object(j.jsx)(a.a.Item,{header:!0,as:o.c,to:s.a.mint,children:"Mint"}),Object(j.jsx)(a.a.Item,{header:!0,as:o.c,to:s.a.admin,children:"Admin"}),Object(j.jsx)(a.a.Item,{position:"right",style:{color:1===e?"green":"red"},children:1===e?"Mainnet":"Testnet"}),Object(j.jsx)(a.a.Item,{onClick:n?O:L,children:v})]})})})}))}).call(this,n(75)(t))},374:function(t,e,n){"use strict";var r=n(2),c=n.n(r),a=n(336),i=n(0),o=n(147),s=n(348),u=n(52),l=n(362),d=n(162);e.a=function(){var t=Object(o.d)(),e=t.activate,n=t.deactivate;return{login:Object(i.useCallback)((function(t){var n=l.a[t];n?e(n,function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.localStorage.removeItem(u.f),e instanceof o.a?d.b.error("Unsupported Chain Id. Unsupported Chain Id Error. Check your chain Id."):e instanceof s.b?d.b.error("Provider Error. No provider was found"):e instanceof s.c?d.b.error("Authorization Error. Please authorize to access your account"):d.b.error("".concat(e.name," ").concat(e.message));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):d.b.error("Can't find connector. The connector config is wrong")}),[]),logout:n}}},379:function(t,e,n){"use strict";(function(t){n(0);var r=n(45),c=n(414),a=n(292),i=n(413),o=n(52),s=n(10);e.a=Object(r.hot)(t)((function(){return Object(s.jsx)(c.a,{as:"footer",inverted:!0,vertical:!0,children:Object(s.jsx)(a.a,{textAlign:"center",children:Object(s.jsx)(i.a,{inverted:!0,link:!0,horizontal:!0,children:Object(s.jsxs)(i.a.Item,{children:[o.d," \xa9 ",(new Date).getFullYear(),"."]})})})})}))}).call(this,n(75)(t))},393:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var r,c=n(96),a=n(0),i=n(165),o=n(413),s=n(325),u=n(26),l=n(375),d=n(376).a.svg(r||(r=Object(l.a)(["\n  align-self: center; // Safari fix\n  flex-shrink: 0;\n"])));d.defaultProps={color:"text",width:"20px",xmlns:"http://www.w3.org/2000/svg"};var h=d,j=n(10),b=[{title:"MetaMask",icon:function(t){return Object(j.jsxs)(h,Object(u.a)(Object(u.a)({viewBox:"0 0 96 96"},t),{},{children:[Object(j.jsx)("circle",{cx:"48",cy:"48",r:"48",fill:"white"}),Object(j.jsx)("path",{d:"M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z",fill:"#E17726"}),Object(j.jsx)("path",{d:"M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z",fill:"#E27625"}),Object(j.jsx)("path",{d:"M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z",fill:"#E27625"}),Object(j.jsx)("path",{d:"M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z",fill:"#E27625"}),Object(j.jsx)("path",{d:"M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z",fill:"#E27625"}),Object(j.jsx)("path",{d:"M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z",fill:"#E27625"}),Object(j.jsx)("path",{d:"M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z",fill:"#E27625"}),Object(j.jsx)("path",{d:"M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z",fill:"#E27625"}),Object(j.jsx)("path",{d:"M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z",fill:"#D5BFB2"}),Object(j.jsx)("path",{d:"M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z",fill:"#D5BFB2"}),Object(j.jsx)("path",{d:"M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z",fill:"#233447"}),Object(j.jsx)("path",{d:"M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z",fill:"#233447"}),Object(j.jsx)("path",{d:"M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z",fill:"#CC6228"}),Object(j.jsx)("path",{d:"M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z",fill:"#CC6228"}),Object(j.jsx)("path",{d:"M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z",fill:"#CC6228"}),Object(j.jsx)("path",{d:"M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z",fill:"#CC6228"}),Object(j.jsx)("path",{d:"M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z",fill:"#E27525"}),Object(j.jsx)("path",{d:"M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z",fill:"#E27525"}),Object(j.jsx)("path",{d:"M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z",fill:"#E27525"}),Object(j.jsx)("path",{d:"M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z",fill:"#E27525"}),Object(j.jsx)("path",{d:"M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z",fill:"#F5841F"}),Object(j.jsx)("path",{d:"M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z",fill:"#F5841F"}),Object(j.jsx)("path",{d:"M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z",fill:"#C0AC9D"}),Object(j.jsx)("path",{d:"M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z",fill:"#161616"}),Object(j.jsx)("path",{d:"M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z",fill:"#763E1A"}),Object(j.jsx)("path",{d:"M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z",fill:"#763E1A"}),Object(j.jsx)("path",{d:"M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z",fill:"#F5841F"}),Object(j.jsx)("path",{d:"M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z",fill:"#F5841F"}),Object(j.jsx)("path",{d:"M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z",fill:"#F5841F"})]}))},connectorId:n(52).a.Injected}],f="connectorId",p=function(t){var e=t.login,n=t.walletConfig,r=t.onDismiss,c=n.title,a=n.icon;return Object(j.jsx)(o.a.Item,{children:Object(j.jsxs)(s.a,{fluid:!0,className:"btn-blue wallet-card link",compact:!0,style:{justifyContent:"space-between",margin:"0"},width:"100%",variant:"tertiary",onClick:function(){e(n.connectorId),window.localStorage.setItem(f,n.connectorId),r()},id:"wallet-connect-".concat(c.toLocaleLowerCase()),children:[c,Object(j.jsx)(a,{width:"32px"})]})})},L=function(t){var e=t.login,n=t.onDismiss,r=void 0===n?function(){return null}:n;return Object(j.jsx)(i.a,{title:"Connect to a wallet",onDismiss:r,children:Object(j.jsx)(o.a,{children:b.map((function(t,n){return Object(j.jsx)(p,{login:e,walletConfig:t,onDismiss:r},t.title)}))})})},O=n(99),v=n(143),x=n(337),m=function(t){var e=t.external,n=t.href,r=t.to,c=Object(O.a)(t,["external","href","to"]),a=e?Object(x.a)():{};return e?Object(j.jsx)("a",Object(u.a)(Object(u.a)({href:n},a),c)):Object(j.jsx)(v.b,Object(u.a)(Object(u.a)({to:r},a),c))};m.defaultProps={color:"primary"};var w=m,C=function(t){return Object(j.jsx)(h,Object(u.a)(Object(u.a)({viewBox:"0 0 24 24"},t),{},{children:Object(j.jsx)("path",{d:"M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"})}))},g=function(t){var e=t.children,n=Object(O.a)(t,["children"]);return Object(j.jsxs)(w,Object(u.a)(Object(u.a)({external:!0},n),{},{children:[e,Object(j.jsx)(C,{color:"primary"})]}))},y=n(410),k=function(t){var e=t.toCopy,n=t.children,r=Object(O.a)(t,["toCopy","children"]),i=Object(a.useState)(!1),o=Object(c.a)(i,2),l=o[0],d=o[1];function h(){d(!0),setTimeout((function(){d(!1)}),1e3)}return Object(j.jsxs)(s.a,Object(u.a)(Object(u.a)({small:!0,bold:!0,onClick:function(){navigator.clipboard&&navigator.permissions?navigator.clipboard.writeText(e).then((function(){return h()})):document.queryCommandSupported("copy")&&(!function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(e),h())}},r),{},{children:[n,Object(j.jsx)(y.a,{isTooltipDisplayed:l,children:"Copied"})]}))},I=function(t){var e=t.account,n=t.logout,r=t.onDismiss,c=void 0===r?function(){return null}:r;return Object(j.jsxs)(i.a,{title:"Your wallet",onDismiss:c,children:[Object(j.jsx)("b",{children:e}),Object(j.jsx)("br",{}),Object(j.jsx)(g,{href:"https://etherscan.io/address/".concat(e),children:"View on Etherscan"}),Object(j.jsx)(k,{toCopy:e,children:"Copy Address"}),Object(j.jsx)(s.a,{scale:"sm",variant:"secondary",onClick:function(){n(),window.localStorage.removeItem(f),c()},children:"Logout"})]})},M=function(t,e,n){var r=Object(i.c)(Object(j.jsx)(L,{login:t})),a=Object(c.a)(r,1)[0],o=Object(i.c)(Object(j.jsx)(I,{account:n||"",logout:e}));return{onPresentConnectModal:a,onPresentAccountModal:Object(c.a)(o,1)[0]}}}}]);
//# sourceMappingURL=1.f4b4281e.chunk.js.map