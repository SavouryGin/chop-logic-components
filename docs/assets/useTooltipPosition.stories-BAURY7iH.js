import{j as t}from"./jsx-runtime-OAISXtky.js";import{r as s}from"./index-qVDZzPEr.js";import{E as f}from"./ExampleDivContainer.styled-Df2QS2yF.js";import{u as d}from"./index-BgqNcK8U.js";import{u as x}from"./index-7QOc-elU.js";const h=()=>{const[o,a]=s.useState(!1),r=s.useRef(null),i=s.useRef(null),{top:c,left:m}=x({wrapperRef:r,tooltipRef:i,isOpened:o}),u=d();return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>a(!o),ref:r,children:"Click me"}),o&&t.jsx(f,{$theme:u,ref:i,style:{position:"absolute",top:`${c}px`,left:`${m}px`},children:"Tooltip Content"})]})},j={component:h,title:"Hooks/useTooltipPosition"},e={};var n,p,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const T=["Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:T,default:j},Symbol.toStringTag,{value:"Module"}));export{P as U};
