import{d as r}from"./index-zGLxtP0c.js";function d(e){const t=document.getElementById(e);t&&t.focus()}function h({e,options:t,onClose:m}){let n="";t.forEach(o=>{document.getElementById(o.id)===document.activeElement&&(n=o.id)});const i=t.findIndex(o=>o.id===n);switch(e.key){case"Escape":e.preventDefault(),m();break;case"ArrowUp":{e.preventDefault();const o=i-1>=0?i-1:t.length-1,a=t[o];a&&d(a.id);break}case"ArrowDown":case"Tab":{e.preventDefault();const o=i===t.length-1?0:i+1,a=t[o];a&&d(a.id);break}}}const s=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${e=>e.$theme.gapMedium};
  background: transparent;
`,c=r.button`
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.gapMedium};
  padding: ${e=>e.$theme.gapMedium};
  border: ${e=>e.$theme.borderLight};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  background-color: ${e=>e.$theme.backgroundColorBase};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  & > span:nth-child(1) {
    font-size: ${e=>e.$theme.fontSizeBase};
    color: ${e=>e.$theme.fontColorBase};
    font-family: ${e=>e.$theme.fontFamilyCore};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    cursor: pointer;
    color: ${e=>e.$theme.fontColorLight};
    height: ${e=>e.$theme.iconSize};
    width: ${e=>e.$theme.iconSize};

    &:hover {
      color: ${e=>e.$theme.fontColorAccent};
    }
  }

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
    outline-offset: 2px;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`,p=r.ul`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background: ${e=>e.$theme.backgroundColorBase};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${e=>e.$theme.zIndexPopup};
  width: 100%;
  top: 72px;
  left: -1px;
  border: ${e=>e.$theme.borderLight};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  box-shadow: ${e=>e.$theme.boxShadow};
  overflow-y: auto;
  max-height: 180px;

  ${e=>e.$opened&&"visibility: visible; opacity: 1;"}
`,l=r.li`
  padding: ${e=>e.$theme.gapMedium};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>e.$theme.gapMedium};
  font-size: ${e=>e.$theme.fontSizeBase};
  color: ${e=>e.$theme.fontColorBase};
  font-family: ${e=>e.$theme.fontFamilyCore};

  &:hover,
  &:active {
    color: ${e=>e.$theme.fontColorAccent};
  }

  &:focus-visible {
    outline: ${e=>e.$theme.borderOutline};
    outline-offset: -4px;
  }

  svg {
    color: ${e=>e.$selected?e.$theme.fontColorAccent:e.$theme.fontColorLight};
    width: ${e=>e.$theme.iconSize};
    height: ${e=>e.$theme.iconSize};
  }
`,u=r(l)`
  justify-content: flex-start;
`;try{s.displayName="StyledSelect",s.__docgenInfo={description:"",displayName:"StyledSelect",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="StyledSelectCombobox",c.__docgenInfo={description:"",displayName:"StyledSelectCombobox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="StyledSelectDropdown",p.__docgenInfo={description:"",displayName:"StyledSelectDropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledSelectOption",l.__docgenInfo={description:"",displayName:"StyledSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.displayName="StyledMultiSelectOption",u.__docgenInfo={description:"",displayName:"StyledMultiSelectOption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{c as S,u as a,p as b,s as c,l as d,h,d as m};
