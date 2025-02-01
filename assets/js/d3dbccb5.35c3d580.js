"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[387],{4913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(2540),r=n(3023);const s={title:"draw"},o=void 0,a={id:"js-utilities/functions/arbitrarily/draw",title:"draw",description:"Draw a random item from a list. Returns null if the list is empty.",source:"@site/docs/js-utilities/functions/arbitrarily/draw.mdx",sourceDirName:"js-utilities/functions/arbitrarily",slug:"/js-utilities/functions/arbitrarily/draw",permalink:"/frontend/docs/js-utilities/functions/arbitrarily/draw",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"draw"},sidebar:"tutorialSidebar",previous:{title:"wait",permalink:"/frontend/docs/js-utilities/functions/DOM/wait"},next:{title:"random",permalink:"/frontend/docs/js-utilities/functions/arbitrarily/random"}},l={},c=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Draw a random item from a list. Returns null if the list is empty."}),"\n",(0,i.jsx)(t.p,{children:"This helper can also be useful for using inside tests where - given a list of possible outcomes - one is randomly selected."}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function random(lower?: number, upper?: number | boolean, floating?: boolean): number;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { draw } from \'@jtmdias/js-utilities\';\n\nconst SIMPSONS = [\n\t"Homer Simpson",\n\t"Marge Simpson",\n\t"Bart Simpson",\n\t"Lisa Simpson",\n\t"Maggie Simpson",\n];\n\ndraw(SIMPSONS)\n// => a random Simpsons Character e.g "Bart Simpson"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(3696);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);