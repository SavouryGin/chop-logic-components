import{j as d}from"./jsx-runtime-OAISXtky.js";import{r as b}from"./index-qVDZzPEr.js";import{A as _,g as C,h as g,u as I,b as v}from"./index-yZyA0tCI.js";import{S as w,d as j,b as k,h as D,m as N,c as O}from"./Select.styled-DOvGcH51.js";import{u as L}from"./index-Bg4JDWSn.js";import{C as E,u as K}from"./index-1hWSJLP3.js";import{u as T}from"./index-BeH7sH-W.js";import{u as $}from"./index-BHitKVNr.js";const P=({opened:t,onClick:i,comboboxId:l,dropdownId:a,selected:e,name:o,placeholder:r,disabled:u,required:s,theme:p})=>d.jsxs(w,{type:"button",name:o,value:e==null?void 0:e.id,role:"combobox","aria-haspopup":"listbox","aria-expanded":t,"aria-controls":a,id:l,onClick:i,disabled:u,"aria-required":s,$theme:p,children:[e!=null&&e.label?d.jsx("span",{children:e==null?void 0:e.label}):d.jsx("span",{children:r}),t?d.jsx(_,{}):d.jsx(C,{})]});try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const R=({value:t,isSelected:i,onSelect:l,onClear:a,theme:e})=>{const{id:o,label:r}=t,u=p=>{i?a():l(p)},s=p=>n=>{switch(n.key){case" ":case"SpaceBar":case"Enter":n.preventDefault(),u(p);break}};return d.jsxs(j,{id:o,role:"option","aria-selected":i,tabIndex:0,onKeyDown:s(o),onClick:()=>u(o),$theme:e,children:[d.jsx("span",{children:r}),i&&d.jsx(g,{})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectValue"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const A=({options:t,opened:i,onClose:l,onSelect:a,dropdownId:e,comboboxId:o,selected:r,onClear:u,theme:s})=>{const p=n=>{a(n),l(),N(o)};return d.jsx(k,{role:"listbox",id:e,tabIndex:-1,onKeyDown:n=>D({e:n,options:t,onClose:l}),$opened:i,$theme:s,children:t.map(n=>d.jsx(R,{value:n,onSelect:()=>p(n.id),onClear:u,isSelected:n.id===(r==null?void 0:r.id),theme:s},n.id))})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}function B({name:t,options:i,initialValues:l,defaultValue:a}){var o;let e;return l&&l[t]&&(e=((o=l[t])==null?void 0:o.id)??l[t]),!(l!=null&&l[t])&&a&&typeof a=="string"&&(e=a),i.find(r=>r.id===e)}function H({name:t,defaultValue:i,onChange:l,options:a}){const{onChangeFormInput:e,initialValues:o}=b.useContext(E),r=B({name:t,options:a,defaultValue:i,initialValues:o}),[u,s]=b.useState(!1),[p,n]=b.useState(r),m=()=>s(!1),f=()=>s(!u),h=x=>{const c=a.find(S=>S.id===x);n(c),l==null||l(c),e==null||e({name:t,value:c==null?void 0:c.id})},q=()=>{n(void 0),l==null||l(void 0)},y=b.useCallback(()=>{s(!1),n(r),e==null||e({name:t,value:r==null?void 0:r.id})},[t]);return $(y),{selected:p,opened:u,handleClear:q,handleClose:m,handleToggle:f,handleSelect:h}}const X=({options:t,onChange:i,name:l,label:a,defaultValue:e,id:o,placeholder:r="Not selected",required:u=!1,disabled:s=!1,...p})=>{const n=b.useRef(null),m=I(),{elementId:f,dropdownId:h}=K(o),{handleClear:q,handleClose:y,handleSelect:x,handleToggle:c,selected:S,opened:V}=H({options:t,onChange:i,defaultValue:e,name:l});return L({ref:n,onClickOutsideHandler:y}),T({keyCode:"Escape",ref:n,onKeyPress:y}),d.jsxs(O,{ref:n,$theme:m,...p,children:[d.jsx(v,{label:a,required:u,inputId:f,theme:m}),d.jsx(P,{name:l,opened:V,comboboxId:f,dropdownId:h,onClick:c,selected:S,placeholder:r,disabled:s,required:u,theme:m}),d.jsx(A,{options:t,selected:S,opened:V,onClose:y,dropdownId:h,comboboxId:f,onSelect:x,onClear:q,theme:m})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: SelectValue) => void)"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}}}}}catch{}export{X as C};