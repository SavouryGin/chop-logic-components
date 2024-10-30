import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{d as c,S as B,F as R,C as p,U as y,B as _}from"./styled-components.browser.esm-BAmCwVtG.js";import{u as j,C as H}from"./Label-C3WErDxN.js";import{C as L,a as E}from"./CheckboxUnchecked-BN-0aOOA.js";import{r as F}from"./index-DJO9vBfz.js";const C=c.table`
  border-collapse: collapse;
  box-shadow: ${B.box};
`,q=c.thead`
  font-family: ${R.core};
  color: ${p.primary};
  font-size: 1rem;
`,I=c.tbody`
  font-family: ${R.core};
  color: ${p.primary};
`,h=c.th`
  padding: ${y.mediumGap};
  text-align: left;
`,w=c.tr`
  background-color: ${p.secondary};
  color: ${p.background};

  svg {
    color: ${p.background} !important;
  }
`,g=c.td`
  padding: ${y.mediumGap};
`,S=c.caption`
  font-family: ${R.core};
  color: ${p.primary};
  padding: ${y.mediumGap};
  font-weight: bold;
`,G=c.tr`
  border-bottom: ${_.light};

  ${e=>e.$selected&&`
      background-color: ${p.highlight};
    `}
`,b=c.col`
  border-right: ${_.light};

  ${e=>e.$isFirst&&`border-left: ${_.light};`}
  ${e=>e.$highlighted&&`background-color: ${p.highlight};`}
`,x=c.div`
  display: flex;
  gap: ${y.smallGap};
  padding: ${y.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${p.secondary};
  }

  label {
    cursor: pointer;
    gap: ${y.smallGap};
    font-size: 1rem !important;
    &:hover,
    &:active {
      text-shadow: ${B.text};
    }
  }

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`,A=c.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${_.outline};
    outline-offset: 2px;
  }
`;try{C.displayName="StyledGrid",C.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{q.displayName="StyledGridHeader",q.__docgenInfo={description:"",displayName:"StyledGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="StyledGridBody",I.__docgenInfo={description:"",displayName:"StyledGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{h.displayName="StyledGridHeaderCell",h.__docgenInfo={description:"",displayName:"StyledGridHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="StyledGridHeaderRow",w.__docgenInfo={description:"",displayName:"StyledGridHeaderRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{g.displayName="StyledGridCell",g.__docgenInfo={description:"",displayName:"StyledGridCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="StyledGridCaption",S.__docgenInfo={description:"",displayName:"StyledGridCaption",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{G.displayName="StyledGridRow",G.__docgenInfo={description:"",displayName:"StyledGridRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="StyledGridColumn",b.__docgenInfo={description:"",displayName:"StyledGridColumn",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{x.displayName="StyledGridCheckboxWrapper",x.__docgenInfo={description:"",displayName:"StyledGridCheckboxWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{A.displayName="StyledGridCheckboxInput",A.__docgenInfo={description:"",displayName:"StyledGridCheckboxInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}function O({item:e,columns:t,renderDataItem:l}){const i=[];for(const r of t){let n;l&&e[r.field]?n=l(e,r.field):e[r.field]?n=e[r.field].toString():n="",i.push(n)}return i}const z=({value:e})=>a.jsx(g,{children:e});try{DataCell.displayName="DataCell",DataCell.__docgenInfo={description:"",displayName:"DataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | Element"}}}}}catch{}const k=({name:e,label:t,disabled:l,required:i=!1,onChange:r,checked:n=!1,...o})=>{const{elementId:d}=j(o==null?void 0:o.id);return a.jsxs(x,{$disabled:!!l,children:[a.jsx(A,{id:d,name:e,type:"checkbox",disabled:l,required:i,checked:n,onChange:r}),a.jsx(H,{label:t,required:i,inputId:d,isTextHidden:!0,iconPosition:"left",icon:n?a.jsx(L,{}):a.jsx(E,{})})]})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const U=({rowId:e,isRowSelected:t,selectRowById:l,deselectRowById:i,disabled:r})=>{const n=o=>{const{checked:d}=o.target;d?l(e):i(e)};return a.jsx(g,{children:a.jsx(k,{label:"Select row",onChange:n,id:`select_row_${e}`,checked:t,disabled:r})})};try{SelectRowCell.displayName="SelectRowCell",SelectRowCell.__docgenInfo={description:"",displayName:"SelectRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const P=({rowId:e,selectRowById:t,deselectRowById:l,selectable:i,values:r,selectedIds:n,disabled:o})=>{const d=n.includes(e);return a.jsxs(G,{$selected:d,children:[i&&a.jsx(U,{rowId:e,selectRowById:t,deselectRowById:l,isRowSelected:d,disabled:o}),r.map((m,u)=>a.jsx(z,{value:m},`row_${u}`))]})};try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | Element)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const J=({selectRowById:e,deselectRowById:t,renderDataItem:l,selectedIds:i,selectable:r,data:n,columns:o})=>a.jsx(I,{children:n.map(d=>{const m=O({item:d,columns:o,renderDataItem:l});return a.jsx(P,{rowId:d.id,disabled:d==null?void 0:d.disabled,selectRowById:e,deselectRowById:t,selectable:r,values:m,selectedIds:i},d.id)})});try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch{}const X=({columns:e,selectable:t})=>a.jsxs("colgroup",{children:[t&&a.jsx(b,{$isFirst:!0,$highlighted:!1}),e.map((l,i)=>a.jsx(b,{$isFirst:i===0&&!t,$highlighted:!!(l!=null&&l.highlighted),className:l==null?void 0:l.className},l==null?void 0:l.title))]});try{ColumnGroup.displayName="ColumnGroup",ColumnGroup.__docgenInfo={description:"",displayName:"ColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch{}const K=({title:e,component:t})=>a.jsx(h,{children:t??e??""});try{HeaderCell.displayName="HeaderCell",HeaderCell.__docgenInfo={description:"",displayName:"HeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const v=({gridId:e,isAllSelected:t,selectAll:l,deselectAll:i,disabled:r})=>{const n=o=>{const{checked:d}=o.target;d?l():i()};return a.jsx(h,{children:a.jsx(k,{label:"Select all rows",onChange:n,id:`select_all_${e}`,checked:t,disabled:r})})};try{v.displayName="SelectAllRowsCell",v.__docgenInfo={description:"",displayName:"SelectAllRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const M=({columns:e,gridId:t,selectAll:l,deselectAll:i,selectable:r,isAllSelected:n,isAllCheckboxDisabled:o=!1})=>a.jsx(q,{children:a.jsxs(w,{children:[r&&a.jsx(v,{isAllSelected:n,disabled:o,gridId:t,selectAll:l,deselectAll:i}),e.map(d=>a.jsx(K,{title:d.title,component:d.component},`${d.title}_${t}`))]})});try{Head.displayName="Head",Head.__docgenInfo={description:"",displayName:"Head",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}}}}}catch{}const Q=({data:e,id:t,onSelect:l})=>{const{elementId:i}=j(t),[r,n]=F.useState([]),o=e.map(s=>s.id),d=o.length===r.length,m=e.some(s=>s==null?void 0:s.disabled),u=s=>{n(s),l==null||l(s)};return{elementId:i,isAllSelected:d,isAllCheckboxDisabled:m,selectedIds:r,handleSelectAll:()=>{u(o)},handleDeselectAll:()=>{u([])},handleSelectRowById:s=>{const f=[...r,s];u(f)},handleDeselectRowById:s=>{const f=r.filter(V=>V!==s);u(f)}}},te=({columns:e,data:t,id:l,onSelect:i,renderDataItem:r,caption:n,className:o,style:d,tabIndex:m,selectable:u=!1})=>{const{elementId:N,handleSelectAll:$,handleDeselectAll:T,isAllCheckboxDisabled:D,isAllSelected:s,handleDeselectRowById:f,handleSelectRowById:V,selectedIds:W}=Q({id:l,data:t,onSelect:i});return a.jsxs(C,{className:o,style:d,tabIndex:m,children:[n&&a.jsx(S,{children:n}),a.jsx(X,{columns:e,selectable:u}),a.jsx(M,{gridId:N,columns:e,selectable:u,selectAll:$,deselectAll:T,isAllSelected:s,isAllCheckboxDisabled:D}),a.jsx(J,{columns:e,data:t,selectable:u,selectRowById:V,deselectRowById:f,selectedIds:W,renderDataItem:r})]})};try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ChopLogicGridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChopLogicGridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}}}}}catch{}export{te as C};
