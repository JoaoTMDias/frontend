"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[1904],{902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var i=t(2540),s=t(3023);const a={title:"makeCancelable"},c=void 0,l={id:"js-utilities/functions/utils/make-cancelable",title:"makeCancelable",description:"Wraps a native Promise and allows it to be cancelled.",source:"@site/docs/js-utilities/functions/utils/make-cancelable.mdx",sourceDirName:"js-utilities/functions/utils",slug:"/js-utilities/functions/utils/make-cancelable",permalink:"/frontend/docs/js-utilities/functions/utils/make-cancelable",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"makeCancelable"},sidebar:"tutorialSidebar",previous:{title:"emptyFunction",permalink:"/frontend/docs/js-utilities/functions/utils/empty-function"},next:{title:"throwError",permalink:"/frontend/docs/js-utilities/functions/utils/throw-error"}},o={},r=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Wraps a native Promise and allows it to be cancelled."}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function makeCancelable<GenericPromiseValue = unknown>(promise: Promise<GenericPromiseValue>): MakeCancelablePromise<GenericPromiseValue>;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { wait } from '@jtmdias/js-utilities';\n\n// A Promise that resolves after 1 second\nconst somePromise = wait(1000);\n\n// Can also be made cancellable by wrapping it\nconst cancelable = makeCancelable(somePromise);\n\n// So that when we execute said wrapped promise...\ncancelable.promise.then(console.log).catch(({ isCanceled }) => console.error('isCanceled', isCanceled));\n\n// We can cancel it on demand\ncancelable.cancel();\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(3696);const s={},a=i.createContext(s);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);