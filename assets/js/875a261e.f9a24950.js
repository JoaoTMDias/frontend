"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[8932],{36:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var s=n(2540),i=n(3023);const c={title:"get"},a=void 0,l={id:"js-utilities/functions/objects/get",title:"get",description:"Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place.",source:"@site/docs/js-utilities/functions/objects/get.mdx",sourceDirName:"js-utilities/functions/objects",slug:"/js-utilities/functions/objects/get",permalink:"/frontend/docs/js-utilities/functions/objects/get",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"get"},sidebar:"tutorialSidebar",previous:{title:"getValue",permalink:"/frontend/docs/js-utilities/functions/objects/get-value"},next:{title:"has",permalink:"/frontend/docs/js-utilities/functions/objects/has"}},o={},u=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function r(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place."}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function get<TDefault = unknown>(value: any, path: string, defaultValue?: TDefault): TDefault | undefined;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { get } from '@jtmdias/js-utilities';\n\nconst simpleObject = { a: { b: 2 } }\nconst complexObject = { a: [{ bar: { c: 3 } }] }\nconst falsyObject = { a: null, b: undefined, c: 0 }\n\nget(simpleObject, 'a.b')\n// => 2\n\nget(complexObject, 'a[0].bar.c')\n// => 3\n\nget(complexObject, ['a', '0', 'bar', 'c'])\n// => 2\n\nget(simpleObject, 'a.bar.c', 'default')\n// => 'default'\n\nget(complexObject, 'a.bar.c', 'default')\n// =>  'default'\n\nget(complexObject, null)\n// =>  undefined\n\nget(falsyObject, 'a', 'default')\n// =>  null\n\nget(falsyObject, 'b', 'default')\n// =>  undefined\n\nget(falsyObject, 'c', 'default')\n// =>  zero\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},3023:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(3696);const i={},c=s.createContext(i);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);