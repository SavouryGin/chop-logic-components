import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{u as d}from"./index-Bl1A3jYt.js";const p=()=>{const t=a.useRef(null),[s,r]=a.useState(!1);return d({modalRef:t,isOpened:s}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),children:"Open Modal"}),s&&e.jsxs("div",{ref:t,tabIndex:-1,style:{border:"1px solid black",padding:"20px",marginTop:"10px"},children:[e.jsx("button",{onClick:()=>r(!1),children:"Close Modal"}),e.jsx("input",{type:"text",placeholder:"Focusable Input"}),e.jsx("button",{children:"Another Button"})]})]})},u={title:"Hooks/useModalFocusTrap",component:p},o={};var n,l,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const i=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:i,default:u},Symbol.toStringTag,{value:"Module"}));export{o as D,b as U};
