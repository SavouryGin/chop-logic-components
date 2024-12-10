import{j as e}from"./jsx-runtime-OAISXtky.js";import{r as p}from"./index-qVDZzPEr.js";import"./Button-BaR6FR-0.js";import{C as g}from"./Checkbox-Czr_VCiy.js";import{C as f}from"./MultiSelect-ByFgA7bZ.js";import{C as h}from"./NumericInput-NGS4m8B5.js";import{C as x}from"./Select-i1EVr_el.js";import{C as o}from"./TextInput-Cn-RaTLB.js";import{c as b}from"./Tabs-BXf0_0X9.js";const y=[{id:"lang-1",label:"English"},{id:"lang-2",label:"Russian"},{id:"lang-3",label:"German"}],C=[{id:"pr-lang-1",label:"JavaScript"},{id:"pr-lang-2",label:"Python"},{id:"pr-lang-3",label:"Java"},{id:"pr-lang-4",label:"C#"}],r=({columns:l})=>{const[n,i]=p.useState(),c={firstName:"John",lastName:"Doe",age:42};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",paddingTop:"2rem"},children:[e.jsxs(b,{columns:l,initialValues:c,onReset:()=>i(void 0),onClickSubmit:a=>i(a),children:[e.jsx(o,{name:"firstName",label:"First Name",errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}}),e.jsx(o,{name:"lastName",label:"Last Name",errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}}),e.jsx(h,{name:"age",label:"Age",validator:a=>!!a&&a>=1&&a<100,errorMessage:"Enter a number between 1 and 99"}),e.jsx(x,{name:"language",label:"Language",options:y}),e.jsx(f,{name:"programmingLanguages",label:"Programming Languages",options:C}),e.jsx(g,{name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0})]}),n&&e.jsxs("table",{style:{marginTop:"2rem",fontFamily:"Arial",textAlign:"left"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Type"})]})}),e.jsx("tbody",{children:Object.entries(n).map(a=>{var s;return e.jsxs("tr",{children:[e.jsx("td",{children:a[0]}),e.jsx("td",{children:(s=a[1])==null?void 0:s.toString()}),e.jsx("td",{children:typeof a[1]})]},a[0])})})]})]})};try{r.displayName="FormExample",r.__docgenInfo={description:"",displayName:"FormExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"number"}},initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"ChopLogicFormData"}},hasReset:{defaultValue:null,description:"",name:"hasReset",required:!1,type:{name:"boolean"}},onClickSubmit:{defaultValue:null,description:"",name:"onClickSubmit",required:!1,type:{name:"((data: ChopLogicFormData) => void)"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLFormElement>"}}}}}catch{}const j={args:{columns:2,hasReset:!0,initialValues:{firstName:"John",lastName:"Doe",age:42},onClickSubmit:l=>console.log(l)},component:r,title:"Containers/Form"},t={};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:S,default:j},Symbol.toStringTag,{value:"Module"}));export{A as C,t as D};