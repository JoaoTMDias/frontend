"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[8437],{5819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var o=n(2540),r=n(3023),s=n(7723),a=n(3053);const c={sidebar_position:2,title:"useAutoId"},i=void 0,d={id:"react-a11y-tools/hooks/useAutoId",title:"useAutoId",description:"Generate automatic IDs to facilitate WAI-ARIA",source:"@site/docs/react-a11y-tools/hooks/useAutoId.mdx",sourceDirName:"react-a11y-tools/hooks",slug:"/react-a11y-tools/hooks/useAutoId",permalink:"/frontend/docs/react-a11y-tools/hooks/useAutoId",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"useAutoId"},sidebar:"tutorialSidebar",previous:{title:"useTabbable",permalink:"/frontend/docs/react-a11y-tools/hooks/use-tabbable"}},l={},u=[{value:"Usage",id:"usage",level:3}];function f(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Pd,{children:"Generate automatic IDs to facilitate WAI-ARIA"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"useAutoId"})," hook creates an autogenerated unique id for an element. An id from props can used instead of the autogenerated id when available."]}),"\n",(0,o.jsx)(s.Zx,{children:(0,o.jsx)(a.f,{})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'import { useAutoId } from "@jtmdias/react-a11y-tools";\n\n...\n// Auto-generated Id\nconst generatedId = useAutoId();\n\n(or)\n\n// Auto-generated Id, with a prefix\nconst generatedId = useAutoId(undefined, "js-component");\n\n(or)\n\n// An pre-defined id (from props), with a prefix\nconst generatedId = useAutoId(props.id, "js-component");\n\n\n...\n\nreturn (\n\t<button id={generatedId} {...htmlProps}>{htmlProps.children}</button>\n);\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},3053:(e,t,n)=>{n.d(t,{f:()=>h,U:()=>b});var o=n(3696),r=n(705);const s="q4FcYcsz9Skm4d8jMAer",a="WnaTmVofGQs_PfjST6Fh",c="dtTkx8MHggIF8wE0zKlS",i="T9x10_OtbiA4whyazXnv",d="XcU6q48XhVc1XVrynO9Q",l="fkiOHOFepYoGjHa6tmxu";var u=n(2540);const f=({id:e,disabled:t,...n})=>{const s=(0,r.ub)(e),{current:a}=(0,o.useRef)((0,r.M4)("js-tabbable-button-",s)),{focusable:i,...d}=(0,r.bc)({...n,disabled:t});return(0,u.jsx)("button",{id:a,className:c,"data-focusable":i,...d,children:n.children})},p=({id:e,disabled:t,...n})=>{const s=(0,r.ub)(e),{current:a}=(0,o.useRef)((0,r.M4)("js-tabbable-",s)),{label:c,focusable:f,...p}=(0,r.bc)({...n,disabled:t});return(0,u.jsxs)("fieldset",{className:i,children:[(0,u.jsx)("label",{htmlFor:a,className:d,children:c}),(0,u.jsx)("input",{id:a,className:l,"data-focusable":f,...p})]})},b=()=>{const[e,t]=(0,o.useState)("John Doe");return(0,u.jsxs)("div",{className:s,children:[(0,u.jsxs)("div",{className:a,children:[(0,u.jsx)(f,{children:"Enabled"}),(0,u.jsx)(f,{focusable:!1,disabled:!0,children:"Disabled"}),(0,u.jsx)(f,{focusable:!0,disabled:!0,children:"Disabled, but Tabbable"})]}),(0,u.jsxs)("div",{className:a,children:[(0,u.jsx)(p,{id:"ebff7158-f91d-4770-97fe-fb50a1e43a25",label:"Name",onChange:e=>t(e.currentTarget.value),name:"tabbable",value:e}),(0,u.jsx)(p,{type:"password",id:"be9a3567-1b65-4d2a-8f6c-77b24ef571c0",label:"Password",name:"tabbable",value:"780fe320$5c9e&4425-a41b-0f8fa0594510",focusable:!0,disabled:!0})]})]})},m="whGhiGPKRBQnUN4sA38j",h=()=>{const e=(0,r.ub)(),t=(0,r.ub)(null,"js-component"),n=(0,r.ub)("f23104a4-ea6c-49bf-9156-5759037e388d","js-component");return(0,u.jsxs)("div",{className:m,children:[(0,u.jsxs)("p",{children:["Auto Id: ",(0,u.jsx)("strong",{children:e})]}),(0,u.jsxs)("p",{children:["Auto Id, with a prefix: ",(0,u.jsx)("strong",{children:t})]}),(0,u.jsxs)("p",{children:["Props Id, with a prefix: ",(0,u.jsx)("strong",{children:n})]})]})}},7723:(e,t,n)=>{n.d(t,{Zx:()=>a,Xy:()=>l,Pd:()=>i});var o=n(3696);const r={browser:"browser_y9Ks",browser__header:"browser__header_w5dH","browser__address-bar":"browser__address-bar_Il1i","browser__menu-icon":"browser__menu-icon_vWG4",browser__body:"browser__body_m1YU",row:"row_QhZw",buttons:"buttons_oLl9",right:"right_qGsg",dot:"dot_vm3H",bar:"bar_cvx5"};var s=n(2540);function a({children:e,minHeight:t}){return(0,s.jsxs)("article",{className:r.browser,style:{minHeight:t},"data-testid":"js-docs-browser-window",tabIndex:-1,children:[(0,s.jsxs)("div",{className:r.browser__header,children:[(0,s.jsxs)("div",{className:r.buttons,children:[(0,s.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:r["browser__address-bar"]}),(0,s.jsx)("div",{className:r["browser__menu-icon"],children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar}),(0,s.jsx)("span",{className:r.bar})]})})]}),(0,s.jsx)("div",{className:r.browser__body,children:e})]})}const c="subtitle_HHy5",i=({children:e})=>(0,s.jsx)("h2",{className:c,children:e}),d="table_PmtG",l=({name:e})=>{const{props:t}=(e=>{const[t,r]=(0,o.useState)({});return(0,o.useEffect)((()=>{let t=!1;try{Promise.resolve().then(n.t.bind(n,9568,19)).then((n=>{if(!t){t=!0;const o=n.default["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e)).map((e=>({props:e.props,description:e.description})));r(o[0])}})).catch((()=>console.error(`Not found DocgenInfo for ${e}.`)))}catch(o){console.error(o)}return()=>{t=!0}}),[e]),t})(e);return!t||Object.keys(t).length<=0?null:(0,s.jsxs)("table",{className:d,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:Object.keys(t).map((e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:e})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:t[e].type?.name})}),(0,s.jsx)("td",{children:t[e].defaultValue?(0,s.jsx)("code",{children:t[e].defaultValue.value}):(0,s.jsx)("span",{children:"-"})}),(0,s.jsx)("td",{children:t[e].required?"Yes":"No"}),(0,s.jsx)("td",{children:t[e].description})]},e)))})]})}},705:(e,t,n)=>{n.d(t,{c_:()=>pe,DZ:()=>Ee,AG:()=>J,$t:()=>we,yq:()=>S,jD:()=>N,Wp:()=>De,Dw:()=>Se,s6:()=>Ve,M4:()=>R,ub:()=>F,iQ:()=>Ue,v2:()=>g,OC:()=>Fe,bc:()=>Z});var o=n(3696);const r=typeof window<"u"&&typeof window.document<"u";!function(){const e=r?document.createElement("div"):null}();const s="End",a="Home",c="ArrowLeft",i="ArrowUp",d="ArrowRight",l="ArrowDown";function u(e){return[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length}function f(e){return!b(e)&&e.constructor===Object}function p(e){return"string"==typeof e||e instanceof String}function b(e){return null==e}const m=/[\\^$.*+?()[\]{}|]/g;RegExp(m.source);Symbol("setNextState");const h=r?window.navigator:void 0;h&&(h.connection||h.mozConnection||h.webkitConnection);var x=n(2540);const w={id:"js-route-announcer",styles:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"},E=({id:e=w.id,styles:t=w.styles,"aria-live":n=w["aria-live"],"aria-atomic":o=w["aria-atomic"],message:r=w.message})=>(0,x.jsx)("div",{id:e,"aria-live":n,"aria-atomic":o,className:"css-announcer","data-testid":"js-announcer",style:t,children:p(r)&&0!==r.length?(0,x.jsx)("p",{children:r}):null}),v={message:"",politeness:"polite",setMessage:()=>{}},I=(0,o.createContext)(v);function y(e,t){switch(t.politeness){case"polite":case"assertive":return{politeness:t.politeness,message:t.message};default:return e}}const S=({children:e})=>{const[t,n]=(0,o.useReducer)(y,{message:v.message,politeness:v.politeness});return(0,x.jsxs)(I.Provider,{value:{...t,setMessage:n},children:[e,(0,x.jsx)(E,{"aria-live":t.politeness,id:"notifications-announcer",message:t.message})]})};function g(){return(0,o.useContext)(I)}S.displayName="MessagesAnnouncer";const _="content-focus-wrapper",j=_,T={navigation:"Navigated to",fallback:"new page at"};const N=({id:e=j,pathname:t,action:n=T,children:r})=>{const[s,a]=(0,o.useState)(""),c=function(e){const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current=e})),t.current}(t),i=(0,o.useCallback)((()=>{const o=!!document.title,r=function(e){const t=document.querySelector(`#${e} h1`);return t&&t.textContent?t.textContent:void 0}(e||_);let s=`${n.fallback} ${t}`;o&&(s=document.title),"string"==typeof r&&r.length>1&&(s=r);const c=`${n.navigation} ${s}`;a(c)}),[n,e,t]);return(0,o.useEffect)((()=>{c&&c!==t&&i()}),[t,c,i]),(0,x.jsxs)("div",{id:e,style:{outline:"none"},tabIndex:-1,children:[r,(0,x.jsx)(E,{message:s})]})};function R(...e){return e.filter((e=>null!==e)).join("--")}N.displayName="RouteAnnouncer";const A=new Map,O=new Set;function k(e){if(function(){if(null==P){P=!1;try{document.createElement("div").focus({get preventScroll(){return P=!0,!0}})}catch(e){}}return P}())e.focus({preventScroll:!0});else{const t=function(e){let t=e.parentNode;const n=[],o=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==o;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return o instanceof HTMLElement&&n.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),n}(e);e.focus(),function(e){for(const{element:t,scrollTop:n,scrollLeft:o}of e)t.scrollTop=n,t.scrollLeft=o}(t)}}let P=null;const L=r?o.useLayoutEffect:o.useEffect;let C=!1,D=0;const M=()=>++D;function F(e,t){const{current:n}=(0,o.useRef)(t),r=e||(C?M():null),[s,a]=(0,o.useState)(r);L((()=>{null===s&&a(M())}),[]),(0,o.useEffect)((()=>{!1===C&&(C=!0)}),[]);return(0,o.useMemo)((()=>{if(!s)return;const e=String(s);return t?R(t,e):e}),[s,n])}function U(e){return(0,o.useCallback)((t=>{t.defaultPrevented||e&&(t.stopPropagation(),t.preventDefault())}),[e])}const K=new Set;let W=null,V=!1,H=!1,Y=!1;function G(e,t){for(const n of K)n(e,t)}function B(e){H=!0,function(e){return!(e.metaKey||!/^Mac/i.test((window.navigator.userAgentData||window.navigator).platform)&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(W="keyboard",G("keyboard",e))}function $(e){W="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(H=!0,G("pointer",e))}function X(e){(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType})(e)&&(H=!0,W="virtual")}function q(e){e.target!==window&&e.target!==document&&(H||Y||(W="virtual",G("virtual",e)),H=!1,Y=!1)}function z(){H=!1,Y=!0}function Q(){if("undefined"==typeof window||V)return;const e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){H=!0,e.apply(this,arguments)},document.addEventListener("keydown",B,!0),document.addEventListener("keyup",B,!0),document.addEventListener("click",X,!0),window.addEventListener("focus",q,!0),window.addEventListener("blur",z,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",$,!0),document.addEventListener("pointermove",$,!0),document.addEventListener("pointerup",$,!0)):(document.addEventListener("mousedown",$,!0),document.addEventListener("mousemove",$,!0),document.addEventListener("mouseup",$,!0)),V=!0}"undefined"!=typeof document&&("loading"!==document.readyState?Q():document.addEventListener("DOMContentLoaded",Q));function Z({focusable:e,...t}){const n=(0,o.useMemo)((()=>function(e,t){switch(!0){case!t&&e:return{disabled:!0,"aria-disabled":void 0};case t&&e:return{"aria-disabled":!0,disabled:void 0};default:return{"aria-disabled":void 0,disabled:!1}}}(t.disabled,e)),[t.disabled,e]),r=U(t.disabled),s=U(t.disabled),a=U(t.disabled),c=U(t.disabled);return{...t,...n,onDragCapture:c,onClickCapture:r,onMouseDownCapture:s,onKeyPressCapture:a,"data-focusable":(i=e,!i||!0!==i&&"true"!==i?void 0:"")};var i}const J=()=>(L((()=>{var e;return e="css-no-mouse",document.documentElement.classList.add(e),()=>{(e=>{document.documentElement.classList.remove(e)})("css-no-mouse")}}),[]),(0,x.jsx)("div",{"data-testid":"js-audit"}));function ee(e){const t=document.activeElement;var n;n=()=>{document.activeElement===t&&document.contains(e)&&k(e)},requestAnimationFrame((()=>{0===A.size?n():O.add(n)}))}function te(e,t){return t?.some((t=>t.contains(e)))}function ne(e,t){for(const n of t.values())if(te(e,n.current))return!0;return!1}J.displayName="KeyboardOnly";const oe=(0,o.createContext)(null),re=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],se=re.join(",")+",[tabindex]";re.push('[tabindex]:not([tabindex="-1"])');const ae=re.join(':not([tabindex="-1"]),');let ce=null;const ie=new Set;function de(e,{tabbable:t}){const n=[],o=t?ae:se;if(e)for(const r of e){r.matches(o)&&n.push(r);const e=Array.from(r.querySelectorAll(o));n.push(...e)}return n}function le(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(n){}}else try{ee(e)}catch(n){}}function ue(e){le(de(e,{tabbable:!0})[0])}function fe({items:e,restoreFocus:t,contain:n}){L((()=>{const o=e.current,r=document.activeElement,s=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return;const t=document.activeElement;if(!te(t,o))return;const n=function(e,t){const n=t?.tabbable?ae:se,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>t?.from?.contains(e)?NodeFilter.FILTER_REJECT:e.matches(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});t?.from&&(o.currentNode=t.from);return o}(document.body,{tabbable:!0});n.currentNode=t;let s=e.shiftKey?n.previousNode():n.nextNode();if((!s||!te(s,o))&&r){n.currentNode=r;do{s=e.shiftKey?n.previousNode():n.nextNode()}while(te(s,o));e.preventDefault(),e.stopPropagation(),s?s.focus():t.blur()}};return n||document.addEventListener("keydown",s,!0),()=>{n||document.removeEventListener("keydown",s,!0),t&&r&&requestAnimationFrame((()=>{document.body.contains(r)&&le(r)}))}}),[e,t,n])}const pe=({children:e,contain:t,restoreFocus:n,autoFocus:r})=>{const s=(0,o.useRef)(null),a=(0,o.useRef)(null),c=(0,o.useRef)([]);L((()=>{let e=s?.current?.nextSibling;const t=[];for(;e&&e!==a.current;)t.push(e),e=e.nextSibling;return c.current=t,ie.add(c),()=>{ie.delete(c)}}),[e]),function(e,t){const n=(0,o.useRef)(),r=(0,o.useRef)(null);(0,o.useEffect)((()=>{const o=e.current;if(!t)return;const s=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return;const t=document.activeElement;if(!te(t,o))return;const n=de(o,{tabbable:!0}),r=n.indexOf(t),s=n.length-1;let a=null;a=e.shiftKey?r<=0?n[s]:n[r-1]:r===s?n[0]:n[r+1],e.preventDefault(),a&&le(a,!0)},a=t=>{ne(t.target,ie)?(ce=e,n.current=t.target):n.current?n.current.focus():ce&&ue(ce.current)},c=t=>{r.current=requestAnimationFrame((()=>{ne(document.activeElement,ie)||(ce=e,n.current=t.target,n?.current?.focus())}))};return document.addEventListener("keydown",s,!1),document.addEventListener("focusin",a,!1),o?.forEach((e=>e.addEventListener("focusin",a,!1))),o?.forEach((e=>e.addEventListener("focusout",c,!1))),()=>{document.removeEventListener("keydown",s,!1),document.removeEventListener("focusin",a,!1),o?.forEach((e=>e.removeEventListener("focusin",a,!1))),o?.forEach((e=>e.removeEventListener("focusout",c,!1)))}}),[e,t]),(0,o.useEffect)((()=>()=>{if(r.current)return cancelAnimationFrame(r.current)}),[r])}(c,t),fe({items:c,restoreFocus:n,contain:t}),function(e,t){(0,o.useEffect)((()=>{t&&(ce=e,te(document.activeElement,ce.current)||ue(e.current))}),[e,t])}(c,r);const i=function(e){return{focusFirst(t={}){const n=de(e.current,t);if(n){const e=n[0];return e.focus(),e}},focusPrevious(t={}){const n=t.from||document.activeElement,o=de(e.current,t).reverse();let r=o.find((e=>!!(n&&n.compareDocumentPosition(e)&(Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINED_BY))));if(!r&&t.wrap&&(r=o[0]),r)return r.focus(),r},focusNext(t={}){const n=t.from||document.activeElement,o=de(e.current,t);let r=o.find((e=>!!(n&&n.compareDocumentPosition(e)&(Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY))));if(!r&&t.wrap&&(r=o[0]),r)return r.focus(),r},focusLast(t={}){const n=de(e.current,t);if(n){const e=n[n.length-1];return e.focus(),e}}}}(c);return(0,x.jsxs)(oe.Provider,{value:i,children:[(0,x.jsx)("span",{hidden:!0,ref:s,"data-testid":"js-focus-manager-guard-initial"}),e,(0,x.jsx)("span",{hidden:!0,ref:a,"data-testid":"js-focus-manager-guard-final"})]})};pe.displayName="FocusManager";const be=1,me=6;function he(e){return!0===function(e,t,n=0){return t<e&&e<n||n<e&&e<t}(e,be,me)?e:Math.min(Math.max(be,e),me)}const xe=(0,o.createContext)(be);function we({dangerouslySetHeadingLevel:e,children:t}){const n=(0,o.useContext)(xe),r=he(void 0!==e?e:n+1);return(0,x.jsx)(xe.Provider,{value:r,children:t})}we.displayName="Level";const Ee=(0,o.forwardRef)((({children:e,offset:t,...n},r)=>{const s=`h${he((0,o.useContext)(xe)+(void 0!==t?t:0))}`,a={"data-testid":"js-heading",...n,ref:r};return(0,o.createElement)(s,a,e)}));Ee.displayName="Heading";const ve={target:"#content",text:"Skip to main content",as:"link"},Ie=({target:e,text:t,as:n})=>{const r=(0,o.useCallback)((t=>{if("Enter"===t.key||" "===t.key){const t=document.querySelector(e);t?.focus()}}),[e]);return"button"===n?(0,x.jsx)("button",{role:"link",type:"button",onKeyUp:r,className:"css-skip-links__item","data-testid":"js-skip-link",children:t}):(0,x.jsx)("a",{href:e,className:"css-skip-links__item","data-testid":"js-skip-link",children:t})};Ie.displayName="SkipLink",Ie.defaultProps=ve;const ye={items:[{...ve}]},Se=({items:e})=>function(){const t=e&&e.length>0?e.map((e=>(0,x.jsx)(Ie,{...e},e.target))):(0,x.jsx)(Ie,{as:ve.as,target:ve.target,text:ve.text});return(0,x.jsx)("div",{className:"css-skip-links","data-testid":"js-skip-links",children:t})}();function ge(...e){return e}Se.displayName="SkipLinks",Se.defaultProps=ye;const _e={ArrowLeft:c,ArrowRight:d,ArrowUp:i,ArrowDown:l,Home:a,End:s},je=(ge(...Object.values(_e)),{PREVIOUS:"PREVIOUS",NEXT:"NEXT",VERY_FIRST:"VERY_FIRST",VERY_LAST:"VERY_LAST",PREVIOUS_ROW:"PREVIOUS_ROW",NEXT_ROW:"NEXT_ROW",FIRST_IN_ROW:"FIRST_IN_ROW",LAST_IN_ROW:"LAST_IN_ROW"});ge(...Object.values(je));let Te=function(e){return e.REGISTER_TAB_STOP="REGISTER_TAB_STOP",e.UNREGISTER_TAB_STOP="UNREGISTER_TAB_STOP",e.KEY_DOWN="KEY_DOWN",e.CLICKED="CLICKED",e.TAB_STOP_UPDATED="TAB_STOP_UPDATED",e.OPTIONS_UPDATED="OPTIONS_UPDATED",e}({});const Ne={allowFocusing:!1,direction:"horizontal",focusOnClick:!0,loopAround:!0,rowStartMap:null,selectedId:null,tabStops:[]},Re=(0,o.createContext)({state:Ne,dispatch:()=>{}});Re.displayName="RoverContext";function Ae(e){return e.findIndex((e=>!e.disabled))}function Oe(e){for(let t=e.length-1;t>=0;--t){if(!e[t].disabled)return t}return-1}function ke(e,t){if(null===t){const t=e.findIndex((e=>!e.disabled));return-1===t?null:e[t].id}let n=e.findIndex((e=>e.id===t));return-1===n||e[n].disabled?(n=e.findIndex((e=>!e.disabled)),-1===n?null:e[n].id):t}function Pe(e,t,n,o=!0){return{...e,allowFocusing:o,selectedId:t.id,rowStartMap:n||e.rowStartMap}}function Le(e){const t=new Map;for(let n=0;n<e.tabStops.length;++n){const{rowIndex:o}=e.tabStops[n];null===o||t.has(o)||t.set(o,n)}return t}function Ce(e,t){switch(t.type){case Te.REGISTER_TAB_STOP:{const n=t.payload;if(!n.domElementRef.current)return e;let o=-1;for(let t=e.tabStops.length-1;t>=0;--t){const r=e.tabStops[t];if(r.id===n.id)return console.warn(`'${n.id}' tab stop already registered`),e;if(-1===o&&r.domElementRef.current&&4&r.domElementRef.current.compareDocumentPosition(n.domElementRef.current)){o=t+1;break}}-1===o&&(o=0);const r=e.tabStops.slice();return r.splice(o,0,n),{...e,selectedId:ke(r,e.selectedId),tabStops:r,rowStartMap:null}}case Te.UNREGISTER_TAB_STOP:{const n=t.payload.id,o=e.tabStops.filter((e=>e.id!==n));return o.length===e.tabStops.length?(console.warn(`'${n}' tab stop already unregistered`),e):{...e,selectedId:ke(o,e.selectedId),tabStops:o,rowStartMap:null}}case Te.TAB_STOP_UPDATED:{const{id:n,rowIndex:o,disabled:r}=t.payload,s=e.tabStops.findIndex((e=>e.id===n));if(-1===s)return console.warn(`'${n}' tab stop not registered`),e;const a=e.tabStops[s];if(a.disabled===r&&a.rowIndex===o)return e;const c={...a,rowIndex:o,disabled:r},i=e.tabStops.slice();return i.splice(s,1,c),{...e,selectedId:ke(i,e.selectedId),tabStops:i,rowStartMap:null}}case Te.KEY_DOWN:{const{id:n,key:o,ctrlKey:r}=t.payload,s=e.tabStops.findIndex((e=>e.id===n));if(-1===s)return console.warn(`'${n}' tab stop not registered`),e;const a=e.tabStops[s];if(a.disabled)return e;const c=null!==a.rowIndex,i=s===Ae(e.tabStops),d=s===Oe(e.tabStops),l=function(e,t,n,o,r,s,a){switch(e){case _e.ArrowLeft:return n||"horizontal"===o||"both"===o?!n&&r&&s?je.VERY_LAST:je.PREVIOUS:null;case _e.ArrowRight:return n||"horizontal"===o||"both"===o?!n&&r&&a?je.VERY_FIRST:je.NEXT:null;case _e.ArrowUp:return n?je.PREVIOUS_ROW:"vertical"===o||"both"===o?r&&s?je.VERY_LAST:je.PREVIOUS:null;case _e.ArrowDown:return n?je.NEXT_ROW:"vertical"===o||"both"===o?r&&a?je.VERY_FIRST:je.NEXT:null;case _e.Home:return!n||t?je.VERY_FIRST:je.FIRST_IN_ROW;case _e.End:return!n||t?je.VERY_LAST:je.LAST_IN_ROW;default:return null}}(o,r,c,e.direction,e.loopAround,i,d);if(!l)return e;switch(l){case je.NEXT:for(let t=s+1;t<e.tabStops.length;++t){const n=e.tabStops[t];if(c&&n.rowIndex!==a.rowIndex)break;if(!n.disabled)return Pe(e,n)}break;case je.PREVIOUS:for(let t=s-1;t>=0;--t){const n=e.tabStops[t];if(c&&n.rowIndex!==a.rowIndex)break;if(!n.disabled)return Pe(e,n)}break;case je.VERY_FIRST:{const t=Ae(e.tabStops);if(t>-1)return Pe(e,e.tabStops[t])}break;case je.VERY_LAST:{const t=Oe(e.tabStops);if(t>-1)return Pe(e,e.tabStops[t])}break;case je.PREVIOUS_ROW:{if(b(a.rowIndex)||0===a.rowIndex)return e;const t=e.rowStartMap||Le(e),n=t.get(a.rowIndex);if(void 0===n)return e;const o=s-n;for(let r=a.rowIndex-1;r>=0;--r){const n=t.get(r);if(void 0===n)return e;const s=e.tabStops[n+o];if(s&&!s.disabled)return Pe(e,s,t)}return{...e,allowFocusing:!0,rowStartMap:t}}case je.NEXT_ROW:{const t=e.tabStops[e.tabStops.length-1].rowIndex;if(b(a.rowIndex)||b(t)||a.rowIndex===t)return e;const n=e.rowStartMap||Le(e),o=n.get(a.rowIndex);if(void 0===o)return e;const r=s-o;for(let s=a.rowIndex+1;s<=t;++s){const t=n.get(s);if(void 0===t)return e;const o=e.tabStops[t+r];if(o&&!o.disabled)return Pe(e,o,n)}return{...e,allowFocusing:!0,rowStartMap:n}}case je.FIRST_IN_ROW:{if(null===a.rowIndex)return e;const t=e.rowStartMap||Le(e),n=t.get(a.rowIndex);if(void 0===n)return e;for(let o=n;o<e.tabStops.length;++o){const n=e.tabStops[o];if(n.rowIndex!==a.rowIndex)break;if(!n.disabled)return Pe(e,e.tabStops[o],t)}}break;case je.LAST_IN_ROW:{if(b(a.rowIndex))return e;const t=e.rowStartMap||Le(e);for(let n=t.has(a.rowIndex+1)?(t.get(a.rowIndex+1)||0)-1:e.tabStops.length-1;n>=0;--n){const o=e.tabStops[n];if(o.rowIndex!==a.rowIndex)break;if(!o.disabled)return Pe(e,e.tabStops[n],t)}}}return e}case Te.CLICKED:{const n=t.payload.id,o=e.tabStops.findIndex((e=>e.id===n));if(-1===o)return console.warn(`'${n}' tab stop not registered`),e;const r=e.tabStops[o];return r.disabled?e:Pe(e,r,void 0,e.focusOnClick)}case Te.OPTIONS_UPDATED:return{...e,...t.payload};default:return e}}const De=({children:e,direction:t,options:n})=>{const r=(0,o.useMemo)((()=>{b(t);if(!0===!(!f(n)||u(n))){const e=n;return{focusOnClick:e.focusOnClick?e.focusOnClick:Ne.focusOnClick,direction:e.direction?e.direction:Ne.direction,loopAround:e.loopAround?e.loopAround:Ne.loopAround}}return{direction:t,focusOnClick:Ne.focusOnClick,loopAround:Ne.loopAround}}),[t,n]),[s,a]=(0,o.useReducer)(Ce,{...Ne,...r});(0,o.useEffect)((()=>{a({type:Te.OPTIONS_UPDATED,payload:{...r}})}),[r?.direction,r?.focusOnClick,r?.loopAround]);const c=(0,o.useMemo)((()=>({state:s,dispatch:a})),[s]);return(0,x.jsx)(Re.Provider,{value:c,children:e})};let Me=0;function Fe(e,t=!1){const n=(0,o.useMemo)((()=>!(!f(t)||u(t))?{disabled:t.disabled,rowIndex:t.rowIndex?t.rowIndex:null}:{disabled:t,rowIndex:null}),[t]),r=(0,o.useRef)(null);function s(){return r.current||(r.current=R("react-a11y-tools-rover",++Me)),r.current}const a=(0,o.useRef)(!1),c=(0,o.useContext)(Re);(0,o.useEffect)((()=>{const t=s(),o={id:t,domElementRef:e,rowIndex:n.rowIndex,disabled:n.disabled};return c.dispatch({type:Te.REGISTER_TAB_STOP,payload:o}),()=>{c.dispatch({type:Te.UNREGISTER_TAB_STOP,payload:{id:t}})}}),[]),(0,o.useEffect)((()=>{a.current?c.dispatch({type:Te.TAB_STOP_UPDATED,payload:{id:s(),rowIndex:n.rowIndex,disabled:!!n.disabled&&n.disabled}}):a.current=!0}),[n.rowIndex,n.disabled]);const i=(0,o.useCallback)((e=>{const t=_e[e.key];t&&(c.dispatch({type:Te.KEY_DOWN,payload:{id:s(),key:t,ctrlKey:e.ctrlKey}}),e.preventDefault())}),[]),d=(0,o.useCallback)((()=>{c.dispatch({type:Te.CLICKED,payload:{id:s()}})}),[]),l=s()===c.state.selectedId;return[l?0:-1,l&&c.state.allowFocusing,i,d,c]}function Ue(e,t=!0,n=!0){(0,o.useEffect)((()=>{const o="current"in e?e.current:e;t&&o&&(n?o.focus():k(o))}),[e,t])}const Ke={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",margin:"-1px",overflow:"hidden",height:"1px",width:"1px",padding:"0",position:"absolute",whiteSpace:"nowrap"},We="js-visually-hidden",Ve=({as:e,id:t,"data-testid":n=We,style:r,children:s,...a})=>{const c=F(t),{current:i}=(0,o.useRef)(R(n,c)),d={...Ke,...r},l=e||"span";return(0,x.jsx)(l,{id:i,"data-testid":n,...a,style:d,children:s})};Ve.displayName="VisuallyHidden"},3023:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(3696);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);