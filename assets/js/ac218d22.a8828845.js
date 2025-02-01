"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[4580],{7720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var s=t(2540),o=t(3023);const i={title:"useLifecycle"},c=void 0,l={id:"js-utilities/hooks/use-lifecycle",title:"useLifecycle",description:"React lifecycle hook that calls mount and unmount callbacks, when component is mounted and un-mounted, respectively.",source:"@site/docs/js-utilities/hooks/use-lifecycle.mdx",sourceDirName:"js-utilities/hooks",slug:"/js-utilities/hooks/use-lifecycle",permalink:"/frontend/docs/js-utilities/hooks/use-lifecycle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useLifecycle"},sidebar:"tutorialSidebar",previous:{title:"useEffectOnce",permalink:"/frontend/docs/js-utilities/hooks/use-effect-once"},next:{title:"useLifecycle",permalink:"/frontend/docs/js-utilities/hooks/use-live-ref"}},u={},r=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"React lifecycle hook that calls mount and unmount callbacks, when component is mounted and un-mounted, respectively."}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function useLifecycle(mount: () => void, unmount?: () => void): void;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useLifecycle } from '@jtmdias/js-utilities';\n\nuseLifecycle(\n () => console.log('runs on mount'),\n () => console.log('runs on unmount'),\n);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(3696);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);