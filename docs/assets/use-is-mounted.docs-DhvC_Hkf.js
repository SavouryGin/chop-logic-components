import{j as e}from"./iframe-CrArNGRw.js";import{useMDXComponents as s}from"./index-BSFtI4hN.js";import{M as r}from"./blocks-Bk_K6NSa.js";import{S as i}from"./use-is-mounted.stories-B2lMXvYc.js";import"./index-B4hisE-5.js";import"./index-BU1teVQ0.js";import"./Container.module-B8PmPZGi.js";import"./use-is-mounted-B6_2xkAA.js";import"./Checkbox-CzF6Y5Op.js";import"./Header-B5vN0EW1.js";import"./get-class-name-CHDn80c0.js";import"./Icon-DIoQVp2Y.js";import"./Loader-BNVb9kEc.js";import"./use-click-outside-BTqyhR4p.js";import"./use-key-press-C4UT8Udw.js";import"./use-tooltip-position-m2XZZY1W.js";import"./use-container-dimensions-CPlJeG3S.js";import"./use-window-dimensions-CxUo9BCs.js";import"./Portal-Ew3E3LJ6.js";import"./use-reset-form-input-8DRyh_nF.js";import"./MultiSelect-CrfVaaUF.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D25HSE1Q.js";import"./Button-CxK7O7_f.js";import"./Select-BqR4HHLk.js";import"./TextInput-D0TrkhU5.js";function o(t){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,title:"Hooks/useIsMounted"}),`
`,e.jsx(n.h1,{id:"useismounted",children:"useIsMounted"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useIsMounted"})," hook manages the mounting state of a component with a delay."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { useIsMounted } from 'chop-logic-components';

const ExampleComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useIsMounted(isOpened, 1000);

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)}>Toggle Component</button>
      {isMounted && <div>Component is mounted!</div>}
    </div>
  );
};

export default ExampleComponent;
`})}),`
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Param"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"isOpened"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"A boolean indicating whether the component is opened or not."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"delay"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"The delay in milliseconds before the component is unmounted. Default is 300."})]})]})]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"isMounted"})," ",e.jsx(n.code,{children:"boolean"}),": A boolean indicating whether the component is mounted or not."]})]})}function X(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{X as default};
