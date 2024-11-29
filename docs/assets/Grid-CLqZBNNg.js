import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{ae as r,af as s,ag as o}from"./index-BZ-G-mNy.js";import{C as c,D as l}from"./Grid.stories-CYyF9lzp.js";import"./index-qVDZzPEr.js";import"./iframe-rVyc2Aj9.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Button--7gU6zvB.js";import"./get-chop-logic-theme-C9Q9v90u.js";import"./Checkbox-CLF59sww.js";import"./chop-logic-form-context-lL0zfSzs.js";import"./index-B0wHt5J_.js";import"./MultiSelect-D4Q7nsBa.js";import"./Select.styled-C_20FPH2.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./NumericInput-DS56Xw2R.js";import"./Select-BBYs4roD.js";import"./TextInput-Bou9Y0KU.js";import"./Tabs-CmX9zseh.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./index-CeXmpD0I.js";function d(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,title:"Grid"}),`
`,e.jsx(t.h1,{id:"choplogicgrid",children:"ChopLogicGrid"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"ChopLogicGrid"})," component is a styled grid component built on top of the default HTML ",e.jsx(t.code,{children:"table"})," element."]}),`
`,e.jsx(s,{children:e.jsx(o,{of:l})}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React from 'react';
import ChopLogicGrid from 'chop-logic-components';
import { DATA, COLUMNS } from './constants';

const ExampleComponent = () => <ChopLogicGrid caption='Contact List' data={DATA} columns={COLUMNS} />;

export default ExampleComponent;
`})}),`
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"data"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ChopLogicGridItem[]"})}),e.jsxs(t.td,{children:["An array of items to be displayed in the grid. Each item is a JavaScript object with a mandatory ",e.jsx(t.code,{children:"id"})," field."]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[]"})}),e.jsx(t.td,{children:"Yes"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"columns"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ChopLogicGridColumn[]"})}),e.jsxs(t.td,{children:["An array of objects that describes the grid columns. Each column must contain ",e.jsx(t.code,{children:"field"})," property that points to the value in the data item, and ",e.jsx(t.code,{children:"title"})," property that describes the column title."]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"[]"})}),e.jsx(t.td,{children:"Yes"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"selectable"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"A value that indicates whether the grid has a column with checkboxes."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"false"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"caption"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"An optional title of the grid."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"onSelect"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(ids: string[]) => void"})}),e.jsx(t.td,{children:"An optional callback that is called when one or more grid rows are selected or deselected."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"renderDataItem"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"RenderDataItemCallback"})}),e.jsx(t.td,{children:"An optional callback that takes a data item and a column field as parameters and returns a JSX element. This callback is required for custom rendering of grid cells."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"id"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"className"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"style"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"CSSProperties"})}),e.jsx(t.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tabIndex"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"title"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"theme"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"'light'"})," or ",e.jsx(t.code,{children:"'dark'"})]}),e.jsx(t.td,{children:"The component's color theme."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]})]})]}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type ChopLogicGridProps = CommonComponentProps & {
  columns: ChopLogicGridColumn[];
  data: ChopLogicGridItem[];
  caption?: string;
  selectable?: boolean;
  renderDataItem?: RenderDataItemCallback;
  onSelect?: (ids: string[]) => void;
};

type ChopLogicGridColumn = {
  field: string;
  title?: string;
  component?: React.ReactElement;
  highlighted?: boolean;
  className?: string;
};

type ChopLogicGridItem = {
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
};

type RenderDataItemCallback = (item: ChopLogicGridItem, field: string) => JSX.Element;
`})})]})}function J(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{J as default};
