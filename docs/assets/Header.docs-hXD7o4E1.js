import{j as e}from"./iframe-CrArNGRw.js";import{useMDXComponents as s}from"./index-BSFtI4hN.js";import{M as r,b as t}from"./blocks-Bk_K6NSa.js";import{H as a}from"./Header.stories-CCy05qRj.js";import"./index-B4hisE-5.js";import"./index-BU1teVQ0.js";import"./Header-B5vN0EW1.js";import"./get-class-name-CHDn80c0.js";import"./Icon-DIoQVp2Y.js";import"./Loader-BNVb9kEc.js";import"./use-click-outside-BTqyhR4p.js";import"./use-key-press-C4UT8Udw.js";import"./use-tooltip-position-m2XZZY1W.js";import"./use-container-dimensions-CPlJeG3S.js";import"./use-window-dimensions-CxUo9BCs.js";import"./Portal-Ew3E3LJ6.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a,title:"Header"}),`
`,e.jsx(n.h1,{id:"choplogicheader",children:"ChopLogicHeader"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicHeader"})," component provides a flexible heading element that can render as any HTML heading level (h1-h6) and optionally include an icon. It's designed to maintain consistent styling across all heading levels while providing semantic HTML structure."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChopLogicHeader, ChopLogicIconName } from 'chop-logic-components';

const PageHeader = () => (
  <div>
    <ChopLogicHeader as="h1" icon={ChopLogicIconName.Home}>Welcome</ChopLogicHeader>
    <ChopLogicHeader as="h2">Section Title</ChopLogicHeader>
    <ChopLogicHeader as="h3" className="special-header" id="subsection">
      With Custom Class
    </ChopLogicHeader>
  </div>
);

export default PageHeader;
`})}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to Use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For all heading elements in your application"}),`
`,e.jsx(n.li,{children:"When you need semantic heading structure (h1-h6)"}),`
`,e.jsx(n.li,{children:"When you want to maintain consistent heading styles across your application"}),`
`,e.jsx(n.li,{children:"When you need headings with optional icons"}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Heading Hierarchy"}),": Maintain a logical heading structure (h1 followed by h2, etc.) for proper document outline."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon Decoration"}),": When using icons, ensure they're purely decorative or provide additional context via ARIA attributes if they convey meaning."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Landmark Roles"}),": Consider wrapping standalone headers in ",e.jsx(n.code,{children:"<ChopLogicHeader>"})," elements when appropriate."]}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use only one h1 per page"}),`
`,e.jsx(n.li,{children:"Maintain heading hierarchy (don't skip levels)"}),`
`,e.jsx(n.li,{children:"Keep header text concise and descriptive"}),`
`,e.jsx(n.li,{children:"Use icons sparingly and only when they add value"}),`
`,e.jsx(n.li,{children:"Prefer semantic heading levels over visual appearance"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{})]})}function M(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{M as default};
