(this["webpackJsonpsimple-hooks"]=this["webpackJsonpsimple-hooks"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),o=(n(10),n(0)),i=function(){return Object(o.jsx)("nav",{className:"navbar navbar-light mb-4",style:{backgroundColor:"#e3f2fd"},children:Object(o.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Simple hooks"})})},b=n(3),l=[{background:"primary",name:"Default",foreground:"white"},{background:"warning",name:"Warning",foreground:"dark"},{background:"info",name:"Info",foreground:"dark"},{background:"danger",name:"Danger",foreground:"white"},{background:"success",name:"Success",foreground:"white"}],u=l[0],d=function(){var e=Object(c.useState)(u),t=Object(b.a)(e,2),n=t[0],a=t[1],r={cardRoot:"card text-".concat(n.foreground," bg-").concat(n.background||u.foreground," mb-3")},s=function(e){return l.filter((function(t){return t.background===e}))[0]};return Object(o.jsx)("div",{className:r.cardRoot,style:{maxWidth:"18rem"},children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"Sample Card"}),Object(o.jsx)("p",{className:"card-text",children:"When you select a color, then the theme of this card changes"}),Object(o.jsx)("label",{children:"Select a color"}),Object(o.jsx)("select",{className:"custom-select mx-1",defaultValue:u.background,onChange:function(e){return a(s(e.target.value))},onBlur:function(e){return a(s(e.target.value))},children:l.map((function(e){return Object(o.jsx)("option",{value:e.background,children:e.name},e.background)}))})]})})},j=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return a(new Date)}),1e3);return function(){return clearTimeout(e)}}),[n,a]),Object(o.jsx)("div",{className:"shadow-lg p-3 mb-5 bg-body rounded",children:Object(o.jsxs)("h1",{children:["Time now: ",n.toLocaleTimeString()]})})},m=n(2),O=50,h=function(e){return e<0?0:e>255?255:e},x=function(e,t){switch(t.type){case"INCREMENT_R":return Object(m.a)(Object(m.a)({},e),{r:h(e.r+O)});case"DECREMENT_R":return Object(m.a)(Object(m.a)({},e),{r:h(e.r-O)});case"INCREMENT_G":return Object(m.a)(Object(m.a)({},e),{g:h(e.g+O)});case"DECREMENT_G":return Object(m.a)(Object(m.a)({},e),{g:h(e.g-O)});case"INCREMENT_B":return Object(m.a)(Object(m.a)({},e),{b:h(e.b+O)});case"DECREMENT_B":return Object(m.a)(Object(m.a)({},e),{b:h(e.b-O)});default:return e}},f=function(){var e=Object(c.useReducer)(x,{r:0,g:0,b:0}),t=Object(b.a)(e,2),n=t[0],a=n.r,r=n.g,s=n.b,i=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{style:{color:"rgb(".concat(a,", ").concat(r,", ").concat(s,")")},children:"useReducer Example"}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("button",{onClick:function(){return i({type:"INCREMENT_R"})},className:"btn btn-outline-danger mx-3",children:"+"}),Object(o.jsx)("button",{onClick:function(){return i({type:"DECREMENT_R"})},className:"btn btn-outline-danger mx-3",children:"-"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("button",{onClick:function(){return i({type:"INCREMENT_G"})},className:"btn btn-outline-success mx-3",children:"+"}),Object(o.jsx)("button",{onClick:function(){return i({type:"DECREMENT_G"})},className:"btn btn-outline-success mx-3",children:"-"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("button",{onClick:function(){return i({type:"INCREMENT_B"})},className:"btn btn-outline-primary mx-3",children:"+"}),Object(o.jsx)("button",{onClick:function(){return i({type:"DECREMENT_B"})},className:"btn btn-outline-primary mx-3",children:"-"})]})]})},g=function(e){var t=e.tabs;return Object(o.jsx)("nav",{children:Object(o.jsx)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:t.map((function(e,t){return Object(o.jsx)("button",{className:"nav-link ".concat(0===t?"active":""),id:"nav-".concat(e.link,"-tab"),"data-bs-toggle":"tab","data-bs-target":"#nav-".concat(e.link),type:"button",role:"tab","aria-controls":"nav-".concat(e.link),"aria-selected":0===t,children:e.title},e.title+e.link)}))})})},N=function(e){var t=e.tabs;return Object(o.jsx)("div",{className:"tab-content",id:"nav-tabContent",children:t.map((function(e,t){return Object(o.jsx)("div",{className:"tab-pane fade show ".concat(0===t?"active":""),id:"nav-".concat(e.link),role:"tabpanel","aria-labelledby":"nav-".concat(e.link,"-tab"),children:e.component},e.link)}))})},v=function(){var e=[{link:"home",title:"useState",component:Object(o.jsx)(d,{})},{link:"dynamicClock",title:"useEffect",component:Object(o.jsx)(j,{})},{link:"textColorScaler",title:"useReducer",component:Object(o.jsx)(f,{})}];return Object(o.jsx)("div",{className:"mx-3",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(g,{tabs:e}),Object(o.jsx)(N,{tabs:e})]})})},k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(v,{})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ecb89eb5.chunk.js.map