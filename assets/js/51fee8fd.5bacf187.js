"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[3803],{7474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(2540),s=t(3023);const r={title:"findIndex"},o=void 0,a={id:"js-utilities/functions/arrays/find-index",title:"findIndex",description:"This method is like find except that it returns the index of the first element predicate returns truthy for instead of the element itself.",source:"@site/docs/js-utilities/functions/arrays/find-index.mdx",sourceDirName:"js-utilities/functions/arrays",slug:"/js-utilities/functions/arrays/find-index",permalink:"/frontend/docs/js-utilities/functions/arrays/find-index",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"findIndex"},sidebar:"tutorialSidebar",previous:{title:"chunk",permalink:"/frontend/docs/js-utilities/functions/arrays/chunk"},next:{title:"find",permalink:"/frontend/docs/js-utilities/functions/arrays/find"}},d={},c=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This method is like find except that it returns the index of the first element predicate returns truthy for instead of the element itself."}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function findIndex<T>(\n\tarr: T[],\n\tpredicate: (value: T, index: number, obj: T[]) => unknown\n): number;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { findIndex } from \"@jtmdias/js-utilities\";\n\nconst users = [\n { user: 'barney', age: 36, active: true },\n { user: 'fred', age: 40, active: false },\n { user: 'pebbles', age: 1, active: true },\n]\n\nfindIndex(users, o => o.age >= 40)\n\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(3696);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);