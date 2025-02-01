"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[7514],{5328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(2540),s=n(3023);const o={title:"getValue"},a=void 0,r={id:"js-utilities/functions/objects/get-value",title:"getValue",description:"Gets the value corresponding to the path of an object.",source:"@site/docs/js-utilities/functions/objects/get-value.mdx",sourceDirName:"js-utilities/functions/objects",slug:"/js-utilities/functions/objects/get-value",permalink:"/frontend/docs/js-utilities/functions/objects/get-value",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"getValue"},sidebar:"tutorialSidebar",previous:{title:"clone",permalink:"/frontend/docs/js-utilities/functions/objects/clone"},next:{title:"get",permalink:"/frontend/docs/js-utilities/functions/objects/get"}},u={},c=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Gets the value corresponding to the path of an object."}),"\n",(0,i.jsx)(t.p,{children:"If the object is required to have that path and the path does not exists, there are 2 possible outcomes:\nif a default value is provided, a warning is emitted indicating that value. If not, an error is emitted."}),"\n",(0,i.jsx)(t.p,{children:"If the object is not required to have that path, the default value (provided or undefined) is returned,\nwithout any warning."}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function getValue<GenericValue, GenericReturnValue>(object: GenericValue | IGetValueObject<GenericValue>, path: string, payload?: IGetValuePayload<GenericReturnValue> | undefined): GenericReturnValue | undefined;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'import { getValue } from \'@jtmdias/js-utilities\';\n\nconst OBJ = {\n  a: {\n    b: {\n      c: 123,\n    },\n  },\n};\n\nconst RESULT = getValue(OBJ, "a.b.d", { defaultValue: "default", required: true });\n// => "default"\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3023:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(3696);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);