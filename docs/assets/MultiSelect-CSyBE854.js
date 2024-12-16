import{j as o}from"./jsx-runtime-OAISXtky.js";import{r as b}from"./index-qVDZzPEr.js";import{A as V,g as _,c as C,e as I,u as w,a as j,b as k}from"./index-CKByI2NX.js";import{S as M,a as D,b as N,h as v,c as L}from"./Select.styled-C2T8z4px.js";import{u as O}from"./index-Bg4JDWSn.js";import{a as A,u as $}from"./index-tKWUWaCX.js";import{u as K}from"./index-BeH7sH-W.js";const T=({opened:e,onClick:n,comboboxId:t,dropdownId:l,name:d,placeholder:a,disabled:r,required:i,values:s,theme:m})=>{const c=s==null?void 0:s.filter(u=>u.selected).map(u=>u.label),f=s==null?void 0:s.filter(u=>u.selected).map(u=>u.id);let p=o.jsx("span",{children:a});return c&&c.length>1?p=o.jsx("span",{children:`${c.length} items selected`}):c&&c.length===1&&(p=o.jsx("span",{children:c[0]})),o.jsxs(M,{type:"button",name:d,value:f,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":l,id:t,onClick:n,disabled:r,"aria-required":i,$theme:m,children:[p,e?o.jsx(V,{}):o.jsx(_,{})]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"MultiSelectValue[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const E=({value:e,onSelect:n,theme:t})=>{const{id:l,label:d,selected:a}=e,r=i=>s=>{switch(s.key){case" ":case"SpaceBar":case"Enter":s.preventDefault(),n(i);break}};return o.jsxs(D,{id:l,role:"option","aria-selected":a,tabIndex:0,onKeyDown:r(l),onClick:()=>n(l),$theme:t,$selected:a,children:[a?o.jsx(C,{}):o.jsx(I,{}),o.jsx("span",{children:d})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"MultiSelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const P=({options:e,opened:n,onClose:t,onSelect:l,dropdownId:d,theme:a})=>o.jsx(N,{$opened:n,role:"listbox",id:d,tabIndex:-1,onKeyDown:r=>v({e:r,options:e,onClose:t}),$theme:a,children:e.map(r=>o.jsx(E,{value:r,onSelect:()=>l(r.id),theme:a},r.id))});try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"MultiSelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}function R({name:e,options:n,initialValues:t,defaultValue:l}){return n.map(d=>{let a=!1;return t&&(t!=null&&t[e])&&Array.isArray(t[e])&&t[e].find(i=>i===d.id||(i==null?void 0:i.id)===d.id)&&(a=!0),!(t!=null&&t[e])&&Array.isArray(l)&&l.find(i=>i===d.id)&&(a=!0),{...d,selected:a}})}const q=e=>e.filter(n=>n.selected).map(n=>n.id),U=(e,n)=>{const t=e.find(l=>l.id===n);return e.map(l=>l.id===n?{...l,selected:!(t!=null&&t.selected)}:l)};function B({name:e,defaultValue:n,onChange:t,options:l}){const[d,a]=b.useState(!1),{onChangeFormInput:r,initialValues:i}=b.useContext(A),s=R({name:e,options:l,initialValues:i,defaultValue:n}),[m,c]=b.useState(s),f=()=>a(!1),p=()=>a(!d),u=x=>{const h=U(m,x);c(h),t==null||t(h),r==null||r({name:e,value:q(h)})},y=b.useCallback(()=>{a(!1),c(s),r==null||r({name:e,value:q(s)})},[e]);return w(y),{handleClose:f,handleToggle:p,handleSelect:u,opened:d,values:m}}const X=({options:e,name:n,label:t,required:l=!1,placeholder:d="Not selected",disabled:a=!1,onChange:r,defaultValue:i,id:s,...m})=>{const c=b.useRef(null),{elementId:f,dropdownId:p}=$(s),u=j(),{handleClose:y,handleSelect:x,handleToggle:h,opened:S,values:g}=B({name:n,options:e,defaultValue:i,onChange:r});return O({ref:c,onClickOutsideHandler:y}),K({keyCode:"Escape",ref:c,onKeyPress:y}),o.jsxs(L,{ref:c,$theme:u,...m,children:[o.jsx(k,{label:t,required:l,inputId:f,theme:u}),o.jsx(T,{name:n,opened:S,comboboxId:f,dropdownId:p,onClick:h,values:g,placeholder:d,disabled:a,required:l,theme:u}),o.jsx(P,{theme:u,options:g,opened:S,onClose:y,dropdownId:p,onSelect:x})]})};try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((values?: SelectValue[]) => void)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{X as C};