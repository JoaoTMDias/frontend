"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[5863],{8109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=n(2540),i=n(3023);const o={title:"TupleToUnion"},r=void 0,c={id:"js-utilities/typings/object-as-tuple",title:"TupleToUnion",description:"Use Object keys as a union type",source:"@site/docs/js-utilities/typings/object-as-tuple.mdx",sourceDirName:"js-utilities/typings",slug:"/js-utilities/typings/object-as-tuple",permalink:"/frontend/docs/js-utilities/typings/object-as-tuple",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"TupleToUnion"},sidebar:"tutorialSidebar",previous:{title:"GenericComponentProps",permalink:"/frontend/docs/js-utilities/typings/generic"},next:{title:"Polymorphic",permalink:"/frontend/docs/js-utilities/typings/polymorphic-ref"}},l={},p=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Use Object keys as a union type"}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"const tuple = <T extends string[]>(...args: T) => args;\ntype TupleToUnion<T extends [...unknown[]]> = T[number];\n"})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'import { tuple, TupleToUnion } from \'@jtmdias/js-utilities\';\n\nexport const ICON_POSITION = {\n left: \'left\',\n right: \'right\',\n} as const;\n\nconst IconPositionTuple = tuple(Object.keys(ICON_POSITION)); // ["left", "right"]\n\ntype IconPosition = TupleToUnion<typeof IconPositionTuple> // "left" | "right"\n'})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3023:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(3696);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);