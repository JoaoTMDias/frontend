"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[1570],{3289:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(2540),s=n(3023);const o={title:"wait"},a=void 0,r={id:"js-utilities/functions/DOM/wait",title:"wait",description:"Returns a promise that resolves after how many milliseconds you pass it. Great for waiting any amount of time. If you do not pass it any value, it will immediately resolve. This is handy when you need to ensure the following code is put at the end of the JS event callstack.",source:"@site/docs/js-utilities/functions/DOM/wait.mdx",sourceDirName:"js-utilities/functions/DOM",slug:"/js-utilities/functions/DOM/wait",permalink:"/frontend/docs/js-utilities/functions/DOM/wait",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"wait"},sidebar:"tutorialSidebar",previous:{title:"toggleDataAttribute",permalink:"/frontend/docs/js-utilities/functions/DOM/toggle-data-attribute"},next:{title:"draw",permalink:"/frontend/docs/js-utilities/functions/arbitrarily/draw"}},l={},c=[{value:"API",id:"api",level:3},{value:"Usage",id:"usage",level:3}];function u(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Returns a promise that resolves after how many milliseconds you pass it. Great for waiting any amount of time. If you do not pass it any value, it will immediately resolve. This is handy when you need to ensure the following code is put at the end of the JS event callstack."}),"\n",(0,i.jsx)(e.h3,{id:"api",children:"API"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"function wait(amount = 0): Promise<NodeJS.Timeout>;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"import { wait } from \"@jtmdias/js-utilities\";\n\nasync function doStuff() {\n  doSomething();\n  await wait(); // does not wait\n  doSomethingElse();\n  await wait(2000); // waits 2 seconds\n  console.log('2000ms later');\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},3023:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var i=n(3696);const s={},o=i.createContext(s);function a(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);