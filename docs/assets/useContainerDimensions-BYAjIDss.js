import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as t}from"./index-BrnU7xv7.js";import{ae as o,af as r,ag as l}from"./index-BvbQ7fbP.js";import{U as a,D as h}from"./useContainerDimensions.stories-BkuCan68.js";import"./index-DJO9vBfz.js";import"./iframe-ptQ9viUU.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./index-LBdVPU7m.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a,title:"Hooks/useContainerDimensions"}),`
`,e.jsx(n.h1,{id:"usecontainerdimensions",children:"useContainerDimensions"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useContainerDimensions"})," hook measures the dimensions (width and height) of a container element and returns these values as an object."]}),`
`,e.jsx(r,{children:e.jsx(l,{of:h})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { useContainerDimensions } from 'chop-logic-components';

const ExampleComponent = () => {
  const ref = useRef(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref} style={{ width: '200px', height: '150px', border: '1px solid black' }}>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.h2,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ref"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element whose dimensions will be measured."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isVisible"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Optional: true"}),`
`,e.jsx(n.li,{children:"Description: A flag to indicate whether the element is visible. If true, the dimensions will be measured."}),`
`]}),`
`]}),`
`]})]})}function b(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{b as default};