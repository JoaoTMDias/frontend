"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[1775],{6238:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(2540),n=s(3023);const o={title:"usePageVisibility"},a=void 0,r={id:"js-utilities/hooks/use-page-visibility",title:"usePageVisibility",description:"Detects when the user's page visibility changes.",source:"@site/docs/js-utilities/hooks/use-page-visibility.mdx",sourceDirName:"js-utilities/hooks",slug:"/js-utilities/hooks/use-page-visibility",permalink:"/frontend/docs/js-utilities/hooks/use-page-visibility",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"usePageVisibility"},sidebar:"tutorialSidebar",previous:{title:"useNetworkState",permalink:"/frontend/docs/js-utilities/hooks/use-network-state"},next:{title:"usePermission",permalink:"/frontend/docs/js-utilities/hooks/use-permission"}},l={},c=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Detects when the user's page visibility changes.\nThe Page Visibility API provides events you can watch for to know when a document becomes\nvisible or hidden, as well as features to look at the current visibility state of the page."}),"\n",(0,t.jsx)(i.p,{children:"This is especially useful for saving resources and improving performance by letting\na page avoid performing unnecessary tasks when the document isn't visible."}),"\n",(0,t.jsx)(i.p,{children:"This can happen when, for example:\na) A site has an image carousel that shouldn't advance to the next slide unless the user is viewing the page.\nb) An application showing a dashboard of information doesn't want to poll the server for updates when the page isn't visible.\nc) A page wants to detect when it is being prerendered so it can keep accurate count of page views\nd) A site wants to switch off sounds when a device is in standby mode (user pushes power button to turn screen off)"}),"\n",(0,t.jsx)(i.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"function usePageVisibility(handlerCallback: (isVisible: boolean) => void, delay?: number): void;\n"})}),"\n",(0,t.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"import { usePageVisibility } from '@jtmdias/js-utilities';\n\nfunction App() {\n  // When the user changes tabs, save the written note draft\n  usePageVisibility((isVisible) => {\n    if (!isVisible) {\n      saveNoteDraft();\n    }\n  });\n\n // Wait two seconds before saving the written note draft\n usePageVisibility((isVisible) => {\n   if (!isVisible) {\n     saveNoteDraft();\n   }\n }, 2000);\n}\n"})})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},3023:(e,i,s)=>{s.d(i,{R:()=>a,x:()=>r});var t=s(3696);const n={},o=t.createContext(n);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);