import{j as V,c as r,h as l,k as s}from"./Tabs-Bdb2IOPp.js";import{j as e}from"./jsx-runtime-OAISXtky.js";import"./Checkbox-Cy36oHBn.js";import"./MultiSelect-B03UG5j9.js";import"./NumericInput-OcH_M56F.js";import"./Select-CV7tMcBH.js";import"./TextInput--1qgqhEs.js";const _=({tooltipContent:p,containerTag:y,visibleOn:t,id:O})=>e.jsx("div",{children:e.jsxs(V,{tooltipContent:p,containerTag:y,visibleOn:t,id:O,children:[t==="click"&&e.jsx(r,{text:"Click me",view:l.Flat}),t==="hover"&&e.jsx(r,{text:"Hover on me",view:l.Flat}),t==="focus"&&e.jsx(r,{text:"Focus on me",view:l.Flat}),t==="contextmenu"&&e.jsx(r,{text:"Right click on me",view:l.Flat})]})});try{Tooltipexample.displayName="Tooltipexample",Tooltipexample.__docgenInfo={description:"",displayName:"Tooltipexample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const j={component:_,title:"Modals/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:s.Span,visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:s.Div,visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:s.Div,visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:s.Div,visibleOn:"contextmenu",id:"tooltip"}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,g,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var T,C,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var f,h,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const S=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],M=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:a,VisibleOnFocus:n,VisibleOnHover:o,__namedExportsOrder:S,default:j},Symbol.toStringTag,{value:"Module"}));export{M as T};