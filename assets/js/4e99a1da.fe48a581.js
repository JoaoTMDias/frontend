"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[7351],{4169:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(2540),i=s(3023);const r={title:"useMergeRefs"},o=void 0,c={id:"js-utilities/hooks/use-merge-refs",title:"useMergeRefs",description:"Returns a function that receives the element and assign the value to the given React refs.",source:"@site/docs/js-utilities/hooks/use-merge-refs.mdx",sourceDirName:"js-utilities/hooks",slug:"/js-utilities/hooks/use-merge-refs",permalink:"/frontend/docs/js-utilities/hooks/use-merge-refs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useMergeRefs"},sidebar:"tutorialSidebar",previous:{title:"useLifecycle",permalink:"/frontend/docs/js-utilities/hooks/use-live-ref"},next:{title:"useMount",permalink:"/frontend/docs/js-utilities/hooks/use-mount"}},u={},l=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Returns a function that receives the element and assign the value to the given React refs."}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function useMergeRefs<Generic = HTMLElement>(firstRef: SingleRef<Generic>, secondRef: SingleRef<Generic>): MergedRefCallback<Generic>;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useMergeRefs } from '@jtmdias/js-utilities';\n\n// a div with multiple refs\nfunction Example({ ref, ...props }) {\n  const internalRef = React.useRef();\n  const refs = useMergeRefs(internalRef, ref);\n\n  return (\n    <div {...props} ref={refs}>\n      A div with multiple refs.\n    </div>\n  );\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3023:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(3696);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);