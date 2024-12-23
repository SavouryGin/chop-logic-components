import{j as a}from"./jsx-runtime-OAISXtky.js";import{r as b}from"./index-qVDZzPEr.js";import{u as V,b as _}from"./index-DOtmxc0W.js";import{S as C,a as I,b as w,h as j,c as k}from"./Select.styled-DzQtJzuL.js";import{u as M}from"./index-Bg4JDWSn.js";import{C as D,u as N}from"./index-1hWSJLP3.js";import{u as v}from"./index-BeH7sH-W.js";import L from"./ArrowDownIcon-CKvzOX2F.js";import O from"./ArrowUpIcon-B10qXdoa.js";import $ from"./CheckboxCheckedIcon-B0tMICzp.js";import A from"./CheckboxUncheckedIcon-Di1hGFhe.js";import{u as K}from"./index-BHitKVNr.js";const T=({opened:e,onClick:r,comboboxId:t,dropdownId:l,name:d,placeholder:o,disabled:n,required:i,values:s,theme:m})=>{const c=s==null?void 0:s.filter(u=>u.selected).map(u=>u.label),f=s==null?void 0:s.filter(u=>u.selected).map(u=>u.id);let p=a.jsx("span",{children:o});return c&&c.length>1?p=a.jsx("span",{children:`${c.length} items selected`}):c&&c.length===1&&(p=a.jsx("span",{children:c[0]})),a.jsxs(C,{type:"button",name:d,value:f,role:"combobox","aria-haspopup":"listbox","aria-expanded":e,"aria-controls":l,id:t,onClick:r,disabled:n,"aria-required":i,$theme:m,children:[p,e?a.jsx(O,{}):a.jsx(L,{})]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"",displayName:"Combobox",props:{opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},comboboxId:{defaultValue:null,description:"",name:"comboboxId",required:!0,type:{name:"string"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!1,type:{name:"MultiSelectValue[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const E=({value:e,onSelect:r,theme:t})=>{const{id:l,label:d,selected:o}=e,n=i=>s=>{switch(s.key){case" ":case"SpaceBar":case"Enter":s.preventDefault(),r(i);break}};return a.jsxs(I,{id:l,role:"option","aria-selected":o,tabIndex:0,onKeyDown:n(l),onClick:()=>r(l),$theme:t,$selected:o,children:[o?a.jsx($,{}):a.jsx(A,{}),a.jsx("span",{children:d})]})};try{Option.displayName="Option",Option.__docgenInfo={description:"",displayName:"Option",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"MultiSelectValue"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}const P=({options:e,opened:r,onClose:t,onSelect:l,dropdownId:d,theme:o})=>a.jsx(w,{$opened:r,role:"listbox",id:d,tabIndex:-1,onKeyDown:n=>j({e:n,options:e,onClose:t}),$theme:o,children:e.map(n=>a.jsx(E,{value:n,onSelect:()=>l(n.id),theme:o},n.id))});try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"MultiSelectValue[]"}},opened:{defaultValue:null,description:"",name:"opened",required:!0,type:{name:"boolean"}},dropdownId:{defaultValue:null,description:"",name:"dropdownId",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: string) => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"ChopLogicTheme"}}}}}catch{}function R({name:e,options:r,initialValues:t,defaultValue:l}){return r.map(d=>{let o=!1;return t&&(t!=null&&t[e])&&Array.isArray(t[e])&&t[e].find(i=>i===d.id||(i==null?void 0:i.id)===d.id)&&(o=!0),!(t!=null&&t[e])&&Array.isArray(l)&&l.find(i=>i===d.id)&&(o=!0),{...d,selected:o}})}const g=e=>e.filter(r=>r.selected).map(r=>r.id),U=(e,r)=>{const t=e.find(l=>l.id===r);return e.map(l=>l.id===r?{...l,selected:!(t!=null&&t.selected)}:l)};function B({name:e,defaultValue:r,onChange:t,options:l}){const[d,o]=b.useState(!1),{onChangeFormInput:n,initialValues:i}=b.useContext(D),s=R({name:e,options:l,initialValues:i,defaultValue:r}),[m,c]=b.useState(s),f=()=>o(!1),p=()=>o(!d),u=x=>{const h=U(m,x);c(h),t==null||t(h),n==null||n({name:e,value:g(h)})},y=b.useCallback(()=>{o(!1),c(s),n==null||n({name:e,value:g(s)})},[e]);return K(y),{handleClose:f,handleToggle:p,handleSelect:u,opened:d,values:m}}const le=({options:e,name:r,label:t,required:l=!1,placeholder:d="Not selected",disabled:o=!1,onChange:n,defaultValue:i,id:s,...m})=>{const c=b.useRef(null),{elementId:f,dropdownId:p}=N(s),u=V(),{handleClose:y,handleSelect:x,handleToggle:h,opened:S,values:q}=B({name:r,options:e,defaultValue:i,onChange:n});return M({ref:c,onClickOutsideHandler:y}),v({keyCode:"Escape",ref:c,onKeyPress:y}),a.jsxs(k,{ref:c,$theme:u,...m,children:[a.jsx(_,{label:t,required:l,inputId:f,theme:u}),a.jsx(T,{name:r,opened:S,comboboxId:f,dropdownId:p,onClick:h,values:q,placeholder:d,disabled:o,required:l,theme:u}),a.jsx(P,{theme:u,options:q,opened:S,onClose:y,dropdownId:p,onSelect:x})]})};try{MultiSelect.displayName="MultiSelect",MultiSelect.__docgenInfo={description:"",displayName:"MultiSelect",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((values?: SelectValue[]) => void)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}},placeholder:{defaultValue:{value:"Not selected"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{le as C};
