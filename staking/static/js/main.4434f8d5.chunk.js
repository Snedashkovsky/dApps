(this["webpackJsonpnative-staking"]=this["webpackJsonpnative-staking"]||[]).push([[0],{1154:function(e,t,n){},1155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),i=n.n(o),c=(n(306),n(210)),s=n.n(c),l=(n(123),n(39)),u=n.n(l),m=(n(70),n(19)),f=n.n(m),d=(n(548),n(514)),g=n.n(d),v=n(4),p=n(28),h=n(1161),b=n(505),y=n(38),E=n(79),x=n(98),j=n(506),k=n(138),O=n(507),w=n(510),P=n(26);var S={contracts:[],addContract:function(){}},T=r.a.createContext(S);function A(e){var t=e.children,n=Object(a.useState)(S.contracts),o=n[0],i=n[1];var c={contracts:o,addContract:function(e){i((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(T.Provider,{value:c},t)}var C={setError:function(){},clearError:function(){}},D=Object(a.createContext)(C),B=function(){return Object(a.useContext)(D)};function z(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],i={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(D.Provider,{value:i},t)}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var U=function(e){try{var t,n=window;if(!n.getOfflineSigner)throw new Error("Keplr extension is not available");var a=n.getOfflineSigner(e);return a.signAmino=null!==(t=a.signAmino)&&void 0!==t?t:a.sign,Promise.resolve(a)}catch(r){return Promise.reject(r)}},I=function(e,t){try{return Promise.resolve(O.a.create(12e4,12e4)).then((function(e){return new j.LedgerSigner(e,{hdPaths:[Object(E.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},F=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=y.Bip39.encode(y.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(E.makeCosmoshubPath)(0);return Promise.resolve(x.DirectSecp256k1HdWallet.fromMnemonic(n,{hdPaths:[a],prefix:t}))}catch(r){return Promise.reject(r)}};var N=function(){function e(){}return e.prototype.then=function(t,n){var a=new e,r=this.s;if(r){var o=1&r?t:n;if(o){try{R(a,1,o(this.v))}catch(i){R(a,2,i)}return a}return this}return this.o=function(e){try{var r=e.v;1&e.s?R(a,1,t?t(r):r):n?R(a,1,n(r)):R(a,2,r)}catch(i){R(a,2,i)}},a},e}();function R(e,t,n){if(!e.s){if(n instanceof N){if(!n.s)return void(n.o=R.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(R.bind(null,e,t),R.bind(null,e,2));e.s=t,e.v=n;var a=e.o;a&&a(e)}}function $(e,t,n){var a=[];for(var r in e)a.push(r);return function(e,t,n){var a,r,o=-1;return function i(c){try{for(;++o<e.length&&(!n||!n());)if((c=t(o))&&c.then){if(!((s=c)instanceof N&&1&s.s))return void c.then(i,r||(r=R.bind(null,a=new N,2)));c=c.v}a?R(a,1,c):a=c}catch(l){R(a||(a=new N),2,l)}var s}(),a}(a,(function(e){return t(a[e])}),n)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function L(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function V(){throw new Error("Not yet initialized")}var W={initialized:!1,init:V,clear:V,config:{},changeConfig:V,address:"",balance:[],refreshBalance:V,hitFaucet:V,getSigner:V,changeSigner:V,getClient:V,getStakingClient:V},q=Object(a.createContext)(W),H=function(){return Object(a.useContext)(q)};function J(e){var t=function(e){try{if(!s.faucetUrl||!s.feeToken)return Promise.resolve();var t=L((function(){var t=new w.FaucetClient(s.faucetUrl);return Promise.resolve(t.credit(e,s.feeToken)).then((function(){}))}),(function(e){i(e.message),console.error(e)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(n){return Promise.reject(n)}},n=function(e,t){try{if(!g)return Promise.resolve();t.length=0;var n=$(s.coinMap,(function(n){return Promise.resolve(g.getBalance(e,n)).then((function(e){e&&t.push(e)}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},r=e.config,o=e.children,i=B().setError,c=Object(a.useState)(r),s=c[0],l=c[1],u=Object(a.useState)(),m=u[0],f=u[1],d=Object(a.useState)(),g=d[0],v=d[1],p=M({},W,{init:f}),h=Object(a.useState)(p),y=h[0],x=h[1];function j(){x(M({},p)),v(void 0),f(void 0),l(r)}function O(e){l((function(t){return M({},t,e)}))}return Object(a.useEffect)((function(){m&&function(){try{var e=L((function(){return Promise.resolve(function(e,t){try{var n=M({},E.defaultGasLimits,{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4});return Promise.resolve(b.SigningCosmWasmClient.connectWithSigner(e.rpcUrl,t,{prefix:e.addressPrefix,gasPrice:E.GasPrice.fromString(""+e.gasPrice+e.feeToken),gasLimits:n}))}catch(a){return Promise.reject(a)}}(s,m)).then((function(e){v(e)}))}),(function(e){i(e.message)}));e&&e.then&&e.then((function(){}))}catch(t){Promise.reject(t)}}()}),[m,s]),Object(a.useEffect)((function(){if(m&&g){var e=[];!function(){try{Promise.resolve(m.getAccounts()).then((function(a){var r=a[0].address;return Promise.resolve(n(r,e)).then((function(){function a(){return Promise.resolve(n(r,e)).then((function(){return Promise.resolve(function(e){try{return Promise.resolve(k.Tendermint34Client.connect(e)).then((function(e){return E.QueryClient.withExtensions(e,E.setupStakingExtension,E.setupDistributionExtension)}))}catch(t){return Promise.reject(t)}}(s.rpcUrl)).then((function(a){x({initialized:!0,init:function(){},clear:j,config:s,changeConfig:O,address:r,balance:e,refreshBalance:n.bind(null,r,e),hitFaucet:t.bind(null,r),getSigner:function(){return m},changeSigner:f,getClient:function(){return g},getStakingClient:function(){return a}})}))}))}var o=function(){if(!e.find((function(e){return e.denom===s.feeToken})))return Promise.resolve(t(r)).then((function(){}))}();return o&&o.then?o.then(a):a()}))}))}catch(a){Promise.reject(a)}}()}}),[g]),Object(a.createElement)(q.Provider,{value:y},o)}function K(e){var t=e.authPath,n=e.children,a=e.location;return H().initialized?r.a.createElement(p.d,{location:a},n):r.a.createElement(p.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function G(e,t){if(!t)return e;var n=t[e.denom];if(!n)return e;var a=P.Decimal.fromAtomics(e.amount,n.fractionalDigits).toString();return{denom:n.denom,amount:a}}function _(e,t,n){var a,r=null===(a=t[n])||void 0===a?void 0:a.fractionalDigits;return r?P.Decimal.fromUserInput(e,r).atomics:e}function Q(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var X=n(206),Y=n.n(X);function Z(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function ee(e,t){return t||(t=e.slice(0)),e.raw=t,e}function te(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=Z(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function ne(){var e=ee(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ne=function(){return e},e}var ae=Object(v.b)(te)(ne());function re(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=Z(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function oe(){var e=ee(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return oe=function(){return e},e}var ie=Object(v.b)(re)(oe());function ce(e){var t=e.children,n=Z(e,["children"]);return Object(a.createElement)(ae,Object.assign({tag:"main"},n),t)}function se(){var e=ee(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return se=function(){return e},e}var le=Object(v.b)(ce)(se());function ue(e){var t=e.icon,n=e.path,a=e.state,o=Z(e,["icon","path","state"]),i=Object(p.g)(),c=n?function(){return i.push(n,a)}:i.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:c},o))}function me(){var e=ee(["\n  cursor: pointer;\n"]);return me=function(){return e},e}var fe=Object(v.b)(ue)(me());function de(){var e=ee(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return de=function(){return e},e}var ge=Object(v.b)(g.a)(de()),ve=Object(a.createElement)(h.a,{style:{fontSize:"6.25rem"},spin:!0});function pe(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(le,null,Object(a.createElement)(ge,{indicator:ve,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function he(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function be(){var e=ee(["\n  color: var(--color-red);\n"]);return be=function(){return e},e}function ye(){var e=ee(["\n  display: block;\n  font-weight: lighter;\n"]);return ye=function(){return e},e}function Ee(){var e=ee(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ee=function(){return e},e}function xe(){var e=ee(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return xe=function(){return e},e}var je=f.a.Text,ke=Object(v.b)(ie)(xe()),Oe=Object(v.b)(ie)(Ee()),we=Object(v.b)(je)(ye()),Pe=Object(v.b)(je)(be()),Se=f.a.Title;function Te(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ae(e){var t=function(e){try{E(!0),v();var t=he((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){h.init(e)}))}),(function(e){console.error(e),g(Error(e).message),E(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,i=e.appName,c=Z(e,["config","pathAfterLogin","appName","appLogo"]),s=Object(p.g)(),l=s.location.state,m=B(),d=m.error,g=m.setError,v=m.clearError,h=H(),b=Object(a.useState)(!1),y=b[0],E=b[1];return Object(a.useEffect)((function(){h.initialized&&(l?s.push(l.redirectPathname,l.redirectState):s.push(o))}),[h.initialized,l,s]),y?r.a.createElement(pe,{loadingText:"Initializing app..."}):r.a.createElement(le,Object.assign({},c),r.a.createElement(ke,null,r.a.createElement(Oe,null,r.a.createElement(f.a,null,r.a.createElement(Se,{level:2},"Hello!"),r.a.createElement(we,null,"Welcome to your ",i),r.a.createElement(we,null,"Select one of the following options to start:")),d&&r.a.createElement(Pe,null,d),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(F)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:Te(),onClick:function(){try{return Promise.resolve(t(I)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=he((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(U)).then((function(){}))}))}))}),(function(e){console.error(e),g(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function Ce(){var e=ee(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Ce=function(){return e},e}function De(){var e=ee(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return De=function(){return e},e}var Be=f.a.Text,ze=Object(v.b)(ie)(De()),Me=Object(v.b)(Be)(Ce());function Ue(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(p.g)(),i=o.location.state,c=i.success,s=i.message,l=i.error,m=i.customButtonText,f=i.customButtonActionPath,d=i.customButtonActionState;var g=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(c),v=g.icon,h=g.result,b=g.buttonText,y=g.buttonAction,E=m||b,x=f?function(){return o.push(f,d)}:y;return r.a.createElement(le,null,r.a.createElement(ze,null,r.a.createElement("img",{src:v,alt:"Result icon"}),r.a.createElement(Me,{"data-result":h},s),l&&r.a.createElement(Me,{"data-result":h},l),r.a.createElement(u.a,{type:"primary",onClick:x},E)))}f.a.Title,f.a.Text;function Ie(){var e=ee(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Ie=function(){return e},e}var Fe=Object(v.a)(Ie());function Ne(){var e=ee(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Ne=function(){return e},e}var Re=Object(v.a)(Ne());function $e(){var e=ee(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return $e=function(){return e},e}var Le=Object(v.a)($e());function Ve(){var e=ee(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Ve=function(){return e},e}var We=Object(v.a)(Ve());function qe(){var e=ee(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return qe=function(){return e},e}var He=Object(v.a)(qe());function Je(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(We,null),r.a.createElement(He,null),r.a.createElement(Re,null),r.a.createElement(Le,null),r.a.createElement(Fe,null))}var Ke=n(88);const Ge=function(e){var t=e.uninet;if(!t)throw new Error("No configuration found for network uninet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"wasm",rpcUrl:"http://localhost:26659",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025},uninet:{chainId:"uni",chainName:"Uni",addressPrefix:"juno",rpcUrl:"https://rpc.uni.juno.deuslabs.fi",httpUrl:"https://lcd.uni.juno.deuslabs.fi",faucetUrl:"https://faucet.uni.juno.deuslabs.fi",feeToken:"ujunox",stakingToken:"ujunox",coinMap:{ujunox:{denom:"JUNOX",fractionalDigits:6}},gasPrice:.025},pebblenet:{chainId:"pebblenet-1",chainName:"Pebblenet",addressPrefix:"wasm",rpcUrl:"https://rpc.pebblenet.cosmwasm.com",httpUrl:"https://lcd.pebblenet.cosmwasm.com",faucetUrl:"https://faucet.pebblenet.cosmwasm.com",feeToken:"upebble",stakingToken:"urock",coinMap:{urock:{denom:"ROCK",fractionalDigits:6},upebble:{denom:"PEBBLE",fractionalDigits:6}},gasPrice:.025}});var _e=n(64),Qe=n(521),Xe=n.n(Qe),Ye=n(522),Ze=n.n(Ye),et=n(523),tt=n.n(et),nt=n(524),at=n.n(nt),rt=n(525),ot=n.n(rt);const{Text:it}=f.a,ct=v.b.img`
  cursor: pointer;
  width: 2.625rem;
`,st=v.b.img`
  cursor: pointer;
  width: 1.75rem;
`,lt=Object(v.b)(ae)`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  min-width: var(--max-width);
  padding: var(--s0);
  background-color: var(--color-blue);
`,ut=Object(v.b)(ie)`
  width: 100%;
  color: var(--color-gray-light);

  & > * {
    --gap: var(--s4);
  }
`,mt=Object(v.b)(ie)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > * {
    --gap: var(--s0);
  }

  & > img {
    align-self: flex-end;
  }
`,ft=v.b.div`
  display: flex;
`,dt=Object(v.b)(it)`
  margin-left: var(--s-1);
  font-size: var(--s2);
  color: inherit;
`,gt=v.b.div`
  width: 100%;
  padding: var(--s-4) 0;
  border-radius: 2px;
  background-color: var(--color-gray-light);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,vt=Object(v.b)(it)`
  font-size: var(--s-2);
`,pt=v.b.img`
  cursor: pointer;
`;Object(v.b)(ie)`
  & > * {
    --gap: var(--s-3);
  }
`,Object(v.b)(it)`
  cursor: pointer;

  font-family: var(--ff-iceland);
  font-size: var(--s5);

  color: inherit;
`;function ht({name:e,...t}){const{address:n}=H(),[o,i]=Object(a.useState)(!1),c=e?e+"'s":"Your";return r.a.createElement(r.a.Fragment,null,r.a.createElement(ct,Object.assign({src:ot.a,alt:"Open account menu",onClick:()=>i(!0)},t)),o&&r.a.createElement(lt,t,r.a.createElement(ut,null,r.a.createElement(mt,null,r.a.createElement(st,{src:at.a,alt:"Close account menu",onClick:()=>i(!1)}),r.a.createElement(ft,null,r.a.createElement("img",{src:Ze.a,alt:"Avatar"}),r.a.createElement(dt,null,c," account")),r.a.createElement(gt,null,r.a.createElement(vt,null,n),r.a.createElement(pt,{src:tt.a,alt:"Copy address icon",onClick:()=>{Y()(n)}}))))))}const bt=v.b.header`
  display: flex;
  justify-content: space-between;
`;function yt({path:e,state:t,name:n,...a}){return r.a.createElement(bt,a,r.a.createElement(fe,{icon:Xe.a,path:e,state:t}),r.a.createElement(ht,{name:n}))}var Et=n(21);function xt(e){const{setError:t}=B(),{getStakingClient:n}=H(),[r,o]=Object(a.useState)();return Object(a.useEffect)(()=>{!async function(){try{const{validator:t}=await n().staking.validator(e);o(t)}catch(a){t(a.message),console.error(a)}}()},[n,e,t]),r}var jt=n(50),kt=n(1160),Ot=n(529),wt=n(1162),Pt=n(153);const St=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Tt=(v.b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }

  span + span {
    margin-left: var(--s2);

    font-family: var(--ff-montserrat);
    font-weight: bolder;
    font-size: var(--s2);
    line-height: var(--s2);
  }
`,v.b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-typography {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: left;
  }

  .ant-form-item {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }
`),{Text:At}=f.a;function Ct({submitDelegateBalance:e}){const{balance:t}=H(),n=t.find(e=>e.denom===Ge.stakingToken),a=Ge.coinMap[Ge.stakingToken].fractionalDigits,o=n?Et.Decimal.fromAtomics(n.amount,a).toFloatApproximation():0,i=Pt.b().shape({amount:Pt.a().required("An amount is required").positive("Amount should be positive").max(o)});return r.a.createElement(jt.c,{initialValues:{amount:""},onSubmit:e,validationSchema:i},e=>{const t=!(e.isValid&&e.dirty);return r.a.createElement(kt.a,null,r.a.createElement(St,null,r.a.createElement(Tt,null,r.a.createElement(At,null,Ge.coinMap[Ge.stakingToken].denom),r.a.createElement(Ot.a,{name:"amount"},r.a.createElement(wt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:t},"Delegate")))})}const Dt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s6);
  }
`,Bt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:zt}=(Object(v.b)(ae)`
  --max-width: none;
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`,f.a);function Mt(){var e;const[t,n]=Object(a.useState)(!1),o=Object(p.g)(),{validatorAddress:i}=Object(p.h)(),{getClient:c,address:s,refreshBalance:l}=H(),u=xt(i);return t&&r.a.createElement(pe,{loadingText:"Delegating..."})||!t&&r.a.createElement(le,null,r.a.createElement(Dt,null,r.a.createElement(Bt,null,r.a.createElement(yt,{path:"/validators/"+i}),r.a.createElement(zt,null,"Delegate"),r.a.createElement(zt,{level:2},null!==(e=null===u||void 0===u?void 0:u.description.moniker)&&void 0!==e?e:"")),r.a.createElement(Ct,{submitDelegateBalance:async function({amount:e}){n(!0);const t={amount:_(e,Ge.coinMap,Ge.stakingToken),denom:Ge.stakingToken},a={typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:{delegatorAddress:s,validatorAddress:i,amount:t}},r={amount:Object(_e.coins)(Ge.gasPrice*10**Ge.coinMap[Ge.feeToken].fractionalDigits,Ge.feeToken),gas:"1500000"};try{const t=await c().signAndBroadcast(s,[a],r);if(Object(_e.isBroadcastTxFailure)(t))throw Error("Delegate failed");l(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Ge.coinMap[Ge.stakingToken].denom} successfully delegated`,customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(u){console.error(u),o.push({pathname:"/result",state:{success:!1,message:"Delegate transaction failed:",error:Q(u),customButtonActionPath:`/validators/${i}/delegate`}})}}})))}var Ut=n(530),It=n.n(Ut);function Ft(){return r.a.createElement(Ae,{pathAfterLogin:"/validators",appName:"Staking service",appLogo:It.a,config:Ge})}var Nt=n(531),Rt=n.n(Nt),$t=n(532),Lt=n.n($t);function Vt(e){e.push("/validators")}function Wt(){return r.a.createElement(Ue,{defaultButtonAction:Vt,successIcon:Lt.a,failIcon:Rt.a})}const{Text:qt}=f.a,Ht=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  div[role="separator"] {
    margin-bottom: 0;
  }
`,Jt=v.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`,Kt=Object(v.b)(qt)`
  font-family: var(--ff-iceland);
  font-size: var(--s2);
  line-height: var(--s2);
`,Gt=Object(v.b)(qt)`
  font-family: var(--ff-montserrat);
  font-weight: bolder;
  font-size: var(--s-1);
  line-height: var(--s-1);
`;function _t(e){return r.a.createElement(Ht,null,Object.entries(e).map(([e,t],n)=>r.a.createElement(r.a.Fragment,{key:e},n>0&&r.a.createElement(s.a,null),r.a.createElement(Jt,null,r.a.createElement(Kt,null,e.charAt(0).toUpperCase()+e.slice(1)),r.a.createElement(Gt,null,t)))))}const Qt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s6);
  }

  width: 100%;
`,Xt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:Yt,Text:Zt}=(Object(v.b)(ie)`
  & > * {
    --gap: var(--s2);
  }
`,f.a);function en(){var e;const[t,n]=Object(a.useState)(!1),o=Object(p.g)(),{validatorAddress:i}=Object(p.h)(),{config:c,getClient:s,getStakingClient:l,address:m,refreshBalance:f}=H(),d=xt(i),[g,v]=Object(a.useState)([]);return Object(a.useEffect)(()=>{!async function(){try{const{rewards:e}=await l().distribution.delegationRewards(m,i),t=e.map(e=>({amount:e.amount?e.amount.slice(0,-18):"",denom:e.denom||""})).filter(e=>e.amount.length&&e.denom.length);v(t)}catch(e){console.error(e.message)}}()},[l,m,i]),t&&r.a.createElement(pe,{loadingText:"Withdrawing rewards..."})||!t&&r.a.createElement(le,null,r.a.createElement(Qt,null,r.a.createElement(Xt,null,r.a.createElement(yt,{path:"/validators/"+i}),r.a.createElement(Yt,null,"Pending rewards"),r.a.createElement(Yt,{level:2},null!==(e=null===d||void 0===d?void 0:d.description.moniker)&&void 0!==e?e:"")),g.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(_t,function(e,t){if(!e.coinMap)return{};const n={};for(const a of t){const t=G(a,e.coinMap);n[t.denom]=t.amount}return n}(c,g)),r.a.createElement(u.a,{type:"primary",onClick:async function(){n(!0);const e={typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:{delegatorAddress:m,validatorAddress:i}},t={amount:Object(_e.coins)(c.gasPrice*10**c.coinMap[c.feeToken].fractionalDigits,c.feeToken),gas:"1500000"};try{const n=await s().signAndBroadcast(m,[e],t);if(Object(_e.isBroadcastTxFailure)(n))throw Error("Rewards withdrawal failed");f(),o.push({pathname:"/result",state:{success:!0,message:"Successfully withdrawn",customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(a){console.error(a),o.push({pathname:"/result",state:{success:!1,message:"Rewards withdrawal transaction failed:",error:Q(a),customButtonActionPath:`/validators/${i}/rewards`}})}}},"Withdraw rewards")):r.a.createElement(Zt,null,"No rewards found")))}const tn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,nn=v.b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-typography {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: left;
  }

  .ant-typography + .ant-typography {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
    text-align: right;

    font-family: var(--ff-montserrat);
    font-weight: bolder;
    font-size: var(--s4);
    line-height: var(--s4);
  }

  .ant-form-item {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }
`,{Text:an}=f.a;function rn({validatorAddress:e,submitUndelegateBalance:t}){const{config:n,getStakingClient:o,address:i}=H(),[c,s]=Object(a.useState)(Et.Decimal.fromUserInput("0",0)),l=c.toFloatApproximation(),m=Pt.b().shape({amount:Pt.a().required("An amount is required").positive("Amount should be positive").max(l)});return Object(a.useEffect)(()=>{!async function(){try{const{delegationResponse:t}=await o().staking.delegation(i,e),{balance:a}=t,r=Et.Decimal.fromAtomics(a.amount,n.coinMap[n.stakingToken].fractionalDigits);s(r)}catch(t){console.error(t.message)}}()},[i,e,n,o]),r.a.createElement(jt.c,{initialValues:{amount:""},onSubmit:t,validationSchema:m},e=>r.a.createElement(kt.a,null,r.a.createElement(tn,null,r.a.createElement(nn,null,r.a.createElement(an,null,"Balance"),r.a.createElement(an,null,c.toString())),r.a.createElement(nn,null,r.a.createElement(an,null,"Undelegate"),r.a.createElement(Ot.a,{name:"amount"},r.a.createElement(wt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Undelegate"))))}const{Text:on}=f.a,cn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s6);
  }
`,sn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:ln}=(Object(v.b)(ae)`
  --max-width: none;
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s3);
  }
`,Object(v.b)(on)`
  font-size: var(--s-1);
  color: var(--color-blue);
`,f.a);function un(){var e;const[t,n]=Object(a.useState)(!1),o=Object(p.g)(),{validatorAddress:i}=Object(p.h)(),{getClient:c,address:s,refreshBalance:l}=H(),u=xt(i);return t&&r.a.createElement(pe,{loadingText:"Undelegating..."})||!t&&r.a.createElement(le,null,r.a.createElement(cn,null,r.a.createElement(sn,null,r.a.createElement(yt,{path:"/validators/"+i}),r.a.createElement(ln,null,"Undelegate"),r.a.createElement(ln,{level:2},null!==(e=null===u||void 0===u?void 0:u.description.moniker)&&void 0!==e?e:"")),r.a.createElement(rn,{validatorAddress:i,submitUndelegateBalance:async function({amount:e}){n(!0);const t={amount:_(e,Ge.coinMap,Ge.stakingToken),denom:Ge.stakingToken},a={typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:{delegatorAddress:s,validatorAddress:i,amount:t}},r={amount:Object(_e.coins)(Ge.gasPrice*10**Ge.coinMap[Ge.feeToken].fractionalDigits,Ge.feeToken),gas:"1500000"};try{const t=await c().signAndBroadcast(s,[a],r);if(Object(_e.isBroadcastTxFailure)(t))throw Error("Undelegate failed");l(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Ge.coinMap[Ge.stakingToken].denom} successfully undelegated`,customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(u){console.error(u),o.push({pathname:"/result",state:{success:!1,message:"Undelegate transaction failed:",error:Q(u),customButtonActionPath:`/validators/${i}/undelegate`}})}}})))}const mn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s5);
  }
`,fn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,dn=(Object(v.b)(ae)`
  --max-width: none;
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`),{Title:gn}=f.a;function vn(){var e;const t=Object(p.g)(),{validatorAddress:n}=Object(p.h)(),o=xt(n),{config:i,getStakingClient:c,address:s}=H(),[l,m]=Object(a.useState)(Et.Decimal.fromUserInput("0",0));return Object(a.useEffect)(()=>{!async function(){try{const{delegationResponse:e}=await c().staking.delegation(s,n),t=Et.Decimal.fromAtomics(e.balance.amount,i.coinMap[i.stakingToken].fractionalDigits);m(t)}catch(e){console.error(e.message)}}()},[c,s,n,i]),r.a.createElement(le,null,r.a.createElement(mn,null,r.a.createElement(yt,{path:"/validators"}),r.a.createElement(fn,null,r.a.createElement(gn,null,null!==(e=null===o||void 0===o?void 0:o.description.moniker)&&void 0!==e?e:"")),r.a.createElement(_t,function(e,t){return t?{Tokens:`${G({denom:Ge.stakingToken,amount:t.tokens},Ge.coinMap).amount} ${Ge.coinMap[Ge.stakingToken].denom}`,Commission:t.commission.commissionRates.rate.slice(0,-16)+" %",Balance:e.toString()}:{}}(l,o)),r.a.createElement(dn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/delegate`)}},"Delegate"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/undelegate`)}},"Undelegate"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/rewards`)}},"Rewards"))))}const pn=Object(v.b)(ie)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,hn=v.b.header`
  display: flex;
  justify-content: flex-end;
`,bn=Object(v.b)(ie)`
  & > * {
    --gap: 0;
  }
`,yn=v.b.div`
  --v-padding: var(--s-2);
  --border-size: 1px;

  padding-top: var(--v-padding);
  padding-bottom: var(--v-padding);

  padding-left: var(--s4);
  margin-left: calc(-1 * var(--s4));
  padding-right: var(--s4);
  margin-right: calc(-1 * var(--s4));

  margin-bottom: calc(-1 * var(--border-size));

  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-primary);

    & * {
      color: white;
    }
  }

  &:first-child > * {
    --border-size: 0;
  }

  & > * {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    span:first-child {
      font-family: var(--ff-iceland);
      font-size: var(--s2);
    }

    span:not(:first-child) {
      font-weight: bolder;
      font-size: var(--s-1);
    }
  }
`,En=v.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Title:xn,Text:jn}=f.a;function kn(e,t){return e.name<t.name?-1:e.name>t.name?1:0}function On(){const e=Object(p.g)(),{getStakingClient:t}=H(),[n,o]=Object(a.useState)([]);return Object(a.useEffect)(()=>{!async function(){const{validators:e}=await t().staking.validators("BOND_STATUS_BONDED"),n=e.map(e=>({name:e.description.moniker,address:e.operatorAddress})).sort(kn);o(n)}()},[t]),r.a.createElement(le,null,r.a.createElement(pn,null,r.a.createElement(hn,null,r.a.createElement(ht,null)),r.a.createElement(xn,null,"Validators"),r.a.createElement(bn,null,n.map(t=>r.a.createElement(yn,{key:t.name,onClick:()=>{return n=t.address,void e.push("/validators/"+n);var n}},r.a.createElement(En,null,r.a.createElement(jn,null,t.name)))))))}function wn(){return r.a.createElement(z,null,r.a.createElement(J,{config:Ge},r.a.createElement(A,null,r.a.createElement(Je,null),r.a.createElement(Ke.a,{basename:"/staking"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:Ft}),r.a.createElement(p.b,{exact:!0,path:"/login",component:Ft}),r.a.createElement(K,{authPath:"/login"},r.a.createElement(p.b,{exact:!0,path:"/validators",component:On}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress",component:vn}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress/delegate",component:Mt}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress/undelegate",component:un}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress/rewards",component:en}),r.a.createElement(p.b,{exact:!0,path:"/result",component:Wt})))))))}n(1154);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(wn,null)),document.getElementById("root"))},334:function(e,t){},521:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},522:function(e,t,n){e.exports=n.p+"static/media/avatar.e6ceb267.svg"},523:function(e,t,n){e.exports=n.p+"static/media/copy.173891ca.svg"},524:function(e,t,n){e.exports=n.p+"static/media/cross.ccb4620e.svg"},525:function(e,t,n){e.exports=n.p+"static/media/hamburger.87d19430.svg"},530:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},531:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},532:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},537:function(e,t,n){e.exports=n(1155)},557:function(e,t){},562:function(e,t){},564:function(e,t){},574:function(e,t){},576:function(e,t){},619:function(e,t){},624:function(e,t){},626:function(e,t){},650:function(e,t){}},[[537,1,2]]]);
//# sourceMappingURL=main.4434f8d5.chunk.js.map