import{j as o}from"./jsx-runtime-OAISXtky.js";import{r as m}from"./index-qVDZzPEr.js";import{C as d}from"./Button-DlAqbfbK.js";import"./Checkbox-BNBt8dsz.js";import"./MultiSelect-DjqRWfJo.js";import"./NumericInput-DNTS1C8q.js";import"./Select-pzjvP-sq.js";import"./TextInput-7Wwh-_Ox.js";import{a as r,b as u}from"./Tabs-BsL0Wnaq.js";import{C as g}from"./index-CreP8U9z.js";const f=c=>{const[i,t]=m.useState(!1),l=()=>t(!0),p=()=>t(!1);return o.jsxs("div",{children:[o.jsx(d,{onClick:l,text:"Trigger Alert"}),o.jsx(u,{...c,isOpened:i,onClose:p})]})},x={argTypes:{title:{control:"text"},message:{control:"text"},mode:{control:"select",options:Object.values(r)},icon:{control:"select",options:Object.values(g)}},args:{message:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",mode:r.Info},component:f,title:"Modals/Alert"},e={};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const C=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{y as A};