"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[6951],{6965:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var e=i(2540),s=i(3023);const o={title:"isFunction"},c=void 0,r={id:"js-utilities/functions/typed/is-function",title:"isFunction",description:"Checks if value is classified as a String primitive or object.",source:"@site/docs/js-utilities/functions/typed/is-function.mdx",sourceDirName:"js-utilities/functions/typed",slug:"/js-utilities/functions/typed/is-function",permalink:"/frontend/docs/js-utilities/functions/typed/is-function",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"isFunction"},sidebar:"tutorialSidebar",previous:{title:"isEmpty",permalink:"/frontend/docs/js-utilities/functions/typed/is-empty"},next:{title:"isNil",permalink:"/frontend/docs/js-utilities/functions/typed/is-nil"}},u={},a=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function l(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.p,{children:["Checks if ",(0,e.jsx)(t.code,{children:"value"})," is classified as a String primitive or object."]}),"\n",(0,e.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:"function isFunction(value?: any): value is Function;\n"})}),"\n",(0,e.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-typescript",children:"import { isFunction } from '@jtmdias/js-utilities';\n\nisFunction(function () {})\n// true\n\nisFunction(() => {})\n// true\n\nisFunction(class NotAFunction {})\n// true\n\nisFunction(/abc/)\n// false\n"})})]})}function d(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},3023:(n,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var e=i(3696);const s={},o=e.createContext(s);function c(n){const t=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),e.createElement(o.Provider,{value:t},n.children)}}}]);