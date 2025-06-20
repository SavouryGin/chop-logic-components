import{j as e}from"./iframe-C3nnaSfA.js";import{useMDXComponents as i}from"./index-CLU9rmCe.js";import{M as s}from"./blocks-ByoFTpja.js";import{S as l}from"./use-tooltip-position.stories-B7navQ0R.js";import"./index-DvEBFsL5.js";import"./index-CEakiLVs.js";import"./Container.module-B-gpr46f.js";import"./use-tooltip-position-BG-dpZMc.js";import"./use-container-dimensions-D1IAgZBx.js";import"./use-window-dimensions-BO7pOUZS.js";function o(t){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,title:"Hooks/useTooltipPosition"}),`
`,e.jsx(n.h1,{id:"usetooltipposition",children:"useTooltipPosition"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useTooltipPosition"})," hook calculates and manages the position of a tooltip relative to a reference element."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
import { useTooltipPosition } from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)} ref={wrapperRef}>
        Click me
      </button>
      {isOpened && (
        <div
          ref={tooltipRef}
          style={{ position: 'absolute', top: \`\${top}px\`, left: \`\${left}px\`, border: '1px solid black', padding: '10px' }}
        >
          Tooltip Content
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"wrapperRef"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLSpanElement | HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the element that the tooltip is relative to."}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"tooltipRef"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLSpanElement | HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the tooltip element."}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"isOpened"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"Description: A boolean indicating whether the tooltip is opened or not."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"spacing"})," (optional)"]}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.li,{children:"Description: The spacing between the tooltip and the reference element. Default is 4px."}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"position"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"{ top: number, left: number }"})]}),`
`,e.jsx(n.li,{children:"Description: Container coordinates in the viewport."}),`
`]})]})}function f(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{f as default};
