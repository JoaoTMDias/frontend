"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[3234],{9950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(2540),o=t(3023);const i={title:"combine-reports"},s=void 0,a={id:"merge-coverage/commands/combine-reports",title:"combine-reports",description:"Combines multiple JUnit XML files.",source:"@site/docs/merge-coverage/commands/combine-reports.mdx",sourceDirName:"merge-coverage/commands",slug:"/merge-coverage/commands/combine-reports",permalink:"/frontend/docs/merge-coverage/commands/combine-reports",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"combine-reports"},sidebar:"tutorialSidebar",previous:{title:"combine-coverage",permalink:"/frontend/docs/merge-coverage/commands/combine-coverage"},next:{title:"Introduction",permalink:"/frontend/docs/react-a11y-tools/introduction"}},c={},l=[{value:"API",id:"api",level:2},{value:"Optional Parameters",id:"optional-parameters",level:3},{value:"Usage",id:"usage",level:2},{value:"Combine coverage using the terminal",id:"combine-coverage-using-the-terminal",level:3},{value:"Combine coverage after running tests and generate a JUnit XML file",id:"combine-coverage-after-running-tests-and-generate-a-junit-xml-file",level:3}];function m(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Combines multiple JUnit XML files."}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.h3,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'# Custom reports folder (default: "results")\n--folder=<string>\n--folder=<string,string>\n\n# Custom output XML file destination (default: "junit.xml")\n--outputFile=<string>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"combine-coverage-using-the-terminal",children:"Combine coverage using the terminal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'# Option A - Default reports folder and outfile file\n$ merge-coverage combine-reports\n\n# Option B - Custom reports folder and outfile file\n$ merge-coverage combine-reports --folder=custom-results --outputFile="custom-junit.xml"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"combine-coverage-after-running-tests-and-generate-a-junit-xml-file",children:"Combine coverage after running tests and generate a JUnit XML file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "devDependencies": {\n    "@jtmdias/merge-coverage": "x.y.z",\n  },\n  "scripts": {\n    "posttest": "merge-coverage combine-coverage && merge-coverage combine-reports",\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(3696);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);