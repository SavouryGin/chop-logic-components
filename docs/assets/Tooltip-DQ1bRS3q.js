import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as o}from"./index-DOvxcyG1.js";import{ae as r,af as d}from"./index-BZ-G-mNy.js";import{T as s,V as c}from"./Tooltip.stories-BZh4P1f4.js";import"./index-qVDZzPEr.js";import"./iframe-rVyc2Aj9.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Button--7gU6zvB.js";import"./get-chop-logic-theme-C9Q9v90u.js";import"./Checkbox-CLF59sww.js";import"./chop-logic-form-context-lL0zfSzs.js";import"./index-B0wHt5J_.js";import"./MultiSelect-D4Q7nsBa.js";import"./Select.styled-C_20FPH2.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./NumericInput-DS56Xw2R.js";import"./Select-BBYs4roD.js";import"./TextInput-Bou9Y0KU.js";import"./Tabs-CmX9zseh.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./index-CeXmpD0I.js";function i(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s,title:"Tooltip"}),`
`,e.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Tooltip"})," component displays a tooltip with customizable content when the user hovers over, clicks, or focuses on the container element."]}),`
`,e.jsx(d,{of:c}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ChopLogicTooltip } from 'chop-logic-components';

const TooltipUsageExample = () => {
  return (
    <ChopLogicTooltip tooltipContent='This is a tooltip' containerTag='span' visibleOn='hover' id='tooltip'>
      <span>Hover over me</span>
    </ChopLogicTooltip>
  );
};

export default TooltipUsageExample;
`})}),`
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"}),e.jsx(t.th,{children:"Required"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tooltipContent"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"string"})," or ",e.jsx(t.code,{children:"ReactElement"})]}),e.jsx(t.td,{children:"The content to be displayed inside the tooltip."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"Yes"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"containerTag"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"TooltipContainerTag"})}),e.jsx(t.td,{children:"The HTML tag to be used for the container element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'span'"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"visibleOn"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"'hover'"})," or ",e.jsx(t.code,{children:"'click'"})," or ",e.jsx(t.code,{children:"'focus'"})," or ",e.jsx(t.code,{children:"'contextmenu'"})]}),e.jsx(t.td,{children:"The event that triggers the tooltip to be displayed."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"'hover'"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"children"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ReactNode"})}),e.jsx(t.td,{children:"The content inside the container element that triggers the tooltip."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"id"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"className"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"style"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"CSSProperties"})}),e.jsx(t.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"tabIndex"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"theme"})}),e.jsxs(t.td,{children:[e.jsx(t.code,{children:"'light'"})," or ",e.jsx(t.code,{children:"'dark'"})]}),e.jsx(t.td,{children:"The component's color theme."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})}),e.jsx(t.td,{children:"No"})]})]})]}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`export type ChopLogicTooltipProps = React.PropsWithChildren &
  CommonComponentProps & {
    tooltipContent: string | React.ReactElement;
    containerTag?: TooltipContainerTag;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  };

export type TooltipContainerTag = 'span' | 'div' | 'p' | 'strong' | 'em';

export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
  theme?: 'dark' | 'light';
};
`})})]})}function X(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{X as default};
