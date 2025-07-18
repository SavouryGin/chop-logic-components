import{j as n}from"./iframe-CrArNGRw.js";import{useMDXComponents as c}from"./index-BSFtI4hN.js";import{M as s,I as a,c as p,b as h}from"./blocks-Bk_K6NSa.js";import{C as l}from"./Icon.stories-K2Ce5ML3.js";import"./Header-B5vN0EW1.js";import{C as m,a as d}from"./Icon-DIoQVp2Y.js";import"./Loader-BNVb9kEc.js";import"./Portal-Ew3E3LJ6.js";import"./index-B4hisE-5.js";import"./index-BU1teVQ0.js";import"./get-class-name-CHDn80c0.js";import"./use-click-outside-BTqyhR4p.js";import"./use-key-press-C4UT8Udw.js";import"./use-tooltip-position-m2XZZY1W.js";import"./use-container-dimensions-CPlJeG3S.js";import"./use-window-dimensions-CxUo9BCs.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"Icon"}),`
`,n.jsx(o.h1,{id:"choplogicicon",children:"ChopLogicIcon"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"ChopLogicIcon"})," component allows you to render one of the icons from the list as an SVG element. Icons can be inserted into inputs, buttons, menu items and any other React components."]}),`
`,n.jsx(o.h2,{id:"iconography",children:"Iconography"}),`
`,n.jsx(a,{children:Object.entries(m).map(([t,r])=>n.jsx(p,{name:t,children:n.jsx(d,{name:r})},t))}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import React from 'react';
import { ChopLogicIcon, ChopLogicIconName } from 'chop-logic-components';

const MyButton = () => (
  <button>
    <ChopLogicIcon name={ChopLogicIconName.Delete} />
    <span>Delete</span>
  </button>
);

export default MyButton;
`})}),`
`,n.jsx(o.h3,{id:"when-to-use",children:"When to Use"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"When you need to draw attention to UI elements"}),`
`,n.jsx(o.li,{children:"When you need to replace a long text description with a clear picture"}),`
`]}),`
`,n.jsx(o.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsx(o.p,{children:"When using icons, ensure they're purely decorative or provide additional context via ARIA attributes if they convey meaning."}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(h,{})]})}function W(e={}){const{wrapper:o}={...c(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{W as default};
