import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as t}from"./index-CcnH5Kt0.js";import{ae as o,af as i,ag as l}from"./index-U1HBKBoF.js";import{U as c,D as d}from"./useKeyPress.stories-2N5aOnTl.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./index-l8NP1wY-.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c,title:"Hooks/useKeyPress"}),`
`,e.jsx(n.h1,{id:"usekeypress",children:"useKeyPress"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useKeyPress"})," hook listens for a specific key press event and calls a callback function when the key is pressed."]}),`
`,e.jsx(i,{children:e.jsx(l,{of:d})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef } from 'react';
import { useKeyPress } from 'chop-logic-components';

const ExampleComponent = () => {
  const ref = useRef(null);

  const handleKeyPress = () => {
    console.log('Key pressed!');
  };

  useKeyPress({ ref, keyCode: 'Enter', onKeyPress: handleKeyPress });

  return (
    <div ref={ref} tabIndex={0}>
      Press "Enter" key
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.p,{children:"##Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ref"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element that will be used to check if the key press event is within the element's bounds."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"keyCode"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsx(n.li,{children:"Description: The key code of the key to listen for."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onKeyPress"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"() => void"})]}),`
`,e.jsx(n.li,{children:"Description: The callback function to call when the key is pressed."}),`
`]}),`
`]}),`
`]})]})}function K(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{K as default};