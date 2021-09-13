(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,s,t){},77:function(e,s,t){},79:function(e,s,t){},80:function(e,s,t){},82:function(e,s,t){},85:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),n=t(10),l=t.n(n),j=(t(49),t(6)),i=t(36),r=t(15),d=t.n(r),o=t(87),b=(t(77),t(1));var h=function(e){var s=Object(c.useState)(),t=Object(j.a)(s,2),a=t[0],n=t[1],l=Object(c.useState)(!1),i=Object(j.a)(l,2),r=i[0],h=i[1];return Object(c.useEffect)((function(){h(!1),d.a.get("https://stockanalyser110.herokuapp.com/stocks/".concat(e.stock)).then((function(e){n(e.data),console.log("Child Data",e.data),h(!0)})).catch((function(e){console.log("Something goes wrong")}))}),[e.stock]),r?Object(b.jsxs)("div",{className:"stock-box",children:[Object(b.jsx)("span",{className:"stock-hdr",children:a[0].Name}),Object(b.jsxs)("div",{className:"stock-details",children:[Object(b.jsxs)("span",{className:"item-a",children:[Object(b.jsx)("p",{className:"dt-key",children:"Market Cap"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:["\u20b9",a[0].MarketCap]})})]}),Object(b.jsxs)("span",{className:"item-b",children:[Object(b.jsx)("p",{className:"dt-key",children:"Divident Yield"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:[a[0].Yield,"%"]})})]}),Object(b.jsxs)("span",{className:"item-c",children:[Object(b.jsx)("p",{className:"dt-key",children:"Debt Equality"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:[a[0].Equity,"%"]})})]}),Object(b.jsxs)("span",{className:"item-d",children:[Object(b.jsx)("p",{className:"dt-key",children:"Current Price"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:["\u20b9",a[0].Price]})})]}),Object(b.jsxs)("span",{className:"item-e",children:[Object(b.jsx)("p",{className:"dt-key",children:"ROCE"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:[a[0].ROCE,"%"]})})]}),Object(b.jsxs)("span",{className:"item-f",children:[Object(b.jsx)("p",{className:"dt-key",children:"Eps"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:["\u20b9",a[0].EPS]})})]}),Object(b.jsxs)("span",{className:"item-g",children:[Object(b.jsx)("p",{className:"dt-key",children:"Stock P/E"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:[a[0].Stock,"%"]})})]}),Object(b.jsxs)("span",{className:"item-h",children:[Object(b.jsx)("p",{className:"dt-key",children:"ROE"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:[a[0].ROE_PY,"%"]})})]}),Object(b.jsxs)("span",{className:"item-i",children:[Object(b.jsx)("p",{className:"dt-key",children:"Reserves"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:["\u20b9",a[0].Reserves]})})]}),Object(b.jsxs)("span",{className:"item-j",children:[Object(b.jsx)("p",{className:"dt-key",children:"Debt"}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"dt-result",children:["\u20b9",a[0].Debt]})})]})]})]}):Object(b.jsx)("div",{className:"spin",children:Object(b.jsx)(o.a,{animation:"border",role:"status"})})};t(79);var O=function(){var e=Object(c.useState)(!1),s=Object(j.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)(),l=Object(j.a)(n,2),r=l[0],o=l[1],O=Object(c.useState)(),m=Object(j.a)(O,2),x=m[0],u=m[1],p=Object(c.useState)(!1),N=Object(j.a)(p,2),g=N[0],f=N[1];return Object(c.useEffect)((function(){d.a.get("https://stockanalyser110.herokuapp.com/liststocks").then((function(e){u(e.data),f(!0)})).catch((function(e){console.log("Something goes wrong")}))}),[]),g?Object(b.jsxs)("div",{className:"Main",children:[Object(b.jsx)("header",{children:Object(b.jsx)("span",{className:"header-text",children:"Stocks"})}),Object(b.jsx)("div",{className:"stock-text",children:Object(b.jsx)("h2",{className:"first-text",children:"The Easiest way to buy and Sell Stocks."})}),Object(b.jsx)("div",{className:"stock-subtext",children:Object(b.jsx)("h6",{className:"sub-text",children:"Stock analysis and screening tool for investors in india."})}),Object(b.jsx)("div",{className:"search-box",children:Object(b.jsx)(i.ReactSearchAutocomplete,{items:x,onSelect:function(e){console.log("Selection on"),a(!0),o(e)},autoFocus:!0,fuseOptions:{minMatchCharLength:2},showClear:!1,styling:{borderRadius:"5px",color:"#8f0d0d"}})}),Object(b.jsx)("div",{children:t&&Object(b.jsx)(h,{stock:r.name})})]}):Object(b.jsx)("div",{className:"loader",children:"Loading..."})},m=t(90),x=t(88),u=t(89);t(80);var p=function(e){var s=Object(c.useState)(""),t=Object(j.a)(s,2),a=t[0],n=t[1],l=Object(c.useState)(),i=Object(j.a)(l,2),r=i[0],d=i[1],o=Object(c.useState)(),h=Object(j.a)(o,2),O=h[0],p=h[1];return Object(b.jsxs)("div",{className:"Login",children:[Object(b.jsx)("div",{className:"login-head",children:"Login"}),Object(b.jsxs)(m.a,{className:"form-login",onSubmit:function(){"Batman"==O&&"iambatman"==r?(e.setLogin(!0),n("")):n("Invalid Username/Password")},children:[Object(b.jsx)(m.a.Group,{className:"mb-3",controlId:"formBasicName",children:Object(b.jsx)(m.a.Control,{type:"text",placeholder:"User Name",onChange:function(e){p(e.target.value)},value:O})}),Object(b.jsx)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(b.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)},value:r})}),Object(b.jsx)(x.a,{variant:"success",type:"submit",children:"Log In"}),0!=a.length&&Object(b.jsx)(u.a,{variant:"danger",className:"alert",children:a})]})]})};t(82);var N=function(){var e=Object(c.useState)(!1),s=Object(j.a)(e,2),t=s[0],a=s[1];return t?Object(b.jsx)(O,{}):t?void 0:Object(b.jsx)(p,{setLogin:a})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,l=s.getTTFB;t(e),c(e),a(e),n(e),l(e)}))};t(83);l.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),g()}},[[85,1,2]]]);
//# sourceMappingURL=main.8a7c2ed9.chunk.js.map