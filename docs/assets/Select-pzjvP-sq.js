import{j as i}from"./jsx-runtime-OAISXtky.js";import{r as b}from"./index-qVDZzPEr.js";import{A as _,g as C,h as g,u as I,b as v}from"./index-CreP8U9z.js";import{S as w,d as j,b as k,h as D,m as N,c as O}from"./Select.styled-BuS3aa_P.js";import{u as L}from"./index-Bg4JDWSn.js";import{C as E,u as K}from"./index-1hWSJLP3.js";import{u as T}from"./index-BeH7sH-W.js";import{u as $}from"./index-BHitKVNr.js";const P=({opened:t,onClick:a,comboboxId:l,dropdownId:o,selected:e,name:d,placeholder:r,disabled:u,required:s,theme:p})=>i.jsxs(w,{type:"button",name:d,value:e==null?void 0:e.id,role:"combobox","aria-haspopup":"listbox","aria-expanded":t,"aria-controls":o,id:l,onClick:a,disabled:u,"aria-required":s,$theme:p,children:[e!=null&&e.label?i.jsx("span",{children:e==null?void 0:e.label}):i.jsx("span",{children:r}),t?i.jsx(_,{}):i.jsx(C,{})]});try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const R=({value:t,selected:a,onSelect:l,onClear:o,theme:e})=>{const{id:d,label:r}=t,u=p=>{a?o():l(p)},s=p=>n=>{switch(n.key){case" ":case"SpaceBar":case"Enter":n.preventDefault(),u(p);break}};return i.jsxs(j,{id:d,role:"option","aria-selected":a,tabIndex:0,onKeyDown:s(d),onClick:()=>u(d),$theme:e,$selected:a,children:[i.jsx("span",{children:r}),a&&i.jsx(g,{})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SelectValue"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const A=({options:t,opened:a,onClose:l,onSelect:o,dropdownId:e,comboboxId:d,selected:r,onClear:u,theme:s})=>{const p=n=>{o(n),l(),N(d)};return i.jsx(k,{role:"listbox",id:e,tabIndex:-1,onKeyDown:n=>D({e:n,options:t,onClose:l}),$opened:a,$theme:s,children:t.map(n=>i.jsx(R,{value:n,onSelect:()=>p(n.id),onClear:u,selected:n.id===(r==null?void 0:r.id),theme:s},n.id))})};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"SelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}function B({name:t,options:a,initialValues:l,defaultValue:o}){var d;let e;return l&&l[t]&&(e=((d=l[t])==null?void 0:d.id)??l[t]),!(l!=null&&l[t])&&o&&typeof o=="string"&&(e=o),a.find(r=>r.id===e)}function H({name:t,defaultValue:a,onChange:l,options:o}){const{onChangeFormInput:e,initialValues:d}=b.useContext(E),r=B({name:t,options:o,defaultValue:a,initialValues:d}),[u,s]=b.useState(!1),[p,n]=b.useState(r),m=()=>s(!1),f=()=>s(!u),h=x=>{const c=o.find(q=>q.id===x);n(c),l==null||l(c),e==null||e({name:t,value:c==null?void 0:c.id})},S=()=>{n(void 0),l==null||l(void 0)},y=b.useCallback(()=>{s(!1),n(r),e==null||e({name:t,value:r==null?void 0:r.id})},[t]);return $(y),{selected:p,opened:u,handleClear:S,handleClose:m,handleToggle:f,handleSelect:h}}const X=({options:t,onChange:a,name:l,label:o,defaultValue:e,id:d,placeholder:r="Not selected",required:u=!1,disabled:s=!1,...p})=>{const n=b.useRef(null),m=I(),{elementId:f,dropdownId:h}=K(d),{handleClear:S,handleClose:y,handleSelect:x,handleToggle:c,selected:q,opened:V}=H({options:t,onChange:a,defaultValue:e,name:l});return L({ref:n,onClickOutsideHandler:y}),T({keyCode:"Escape",ref:n,onKeyPress:y}),i.jsxs(O,{ref:n,$theme:m,...p,children:[i.jsx(v,{label:o,required:u,inputId:f,theme:m}),i.jsx(P,{name:l,opened:V,comboboxId:f,dropdownId:h,onClick:c,selected:q,placeholder:r,disabled:s,required:u,theme:m}),i.jsx(A,{options:t,selected:q,opened:V,onClose:y,dropdownId:h,comboboxId:f,onSelect:x,onClear:S,theme:m})]})};try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: SelectValue) => void)"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}}}}}catch{}export{X as C};
