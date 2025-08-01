import{j as n}from"./iframe--IBuYMIm.js";import{useMDXComponents as r}from"./index-B2uT0Rcg.js";import{M as l,b as s}from"./blocks-CLsIill3.js";import{D as t}from"./Dialog.stories-Cv3j2fRG.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Button-BqxMyPGy.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";import"./Checkbox-Do2bbQD4.js";import"./use-reset-form-input-D1XtAl5p.js";import"./MultiSelect-nFOyaBs1.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-DZkiHKI_.js";import"./Select-CFTdNQer.js";import"./TextInput-CfNjb3Po.js";import"./Dialog-C4OBx1r6.js";import"./use-is-mounted-2drd75fE.js";import"./use-modal-focus-trap-DS7aX025.js";function o(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:t,title:"ChopLogicDialog"}),`
`,n.jsx(e.h1,{id:"choplogicdialog",children:"ChopLogicDialog"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ChopLogicDialog"})," allows you to render a pop-up window with any content. The dialog appearance trigger can be a button or any event on the page. If there are several dialogs, they will appear on top of each other in the order they are called. When adding a dialog, you must think through the conditions for opening and closing it, so props ",n.jsx(e.code,{children:"isOpened"})," and ",n.jsx(e.code,{children:"onClose"})," are mandatory."]}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import ChopLogicDialog from 'chop-logic-components';

const ConfirmationDialog = ({ isOpen, onClose }) => {
  return (
    <ChopLogicDialog
      isOpened={isOpen}
      onClose={onClose}
      title="Confirm Action"
    >
      <p>Are you sure you want to perform this action?</p>
      <div className="dialog-actions">
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </ChopLogicDialog>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Focus is trapped within the dialog when open"}),`
`,n.jsx(e.li,{children:"Focus returns to the triggering element when closed"}),`
`,n.jsx(e.li,{children:"Close button is keyboard accessible"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces dialog title when opened"}),`
`,n.jsx(e.li,{children:'Announces role="dialog" and aria-modal="true"'}),`
`,n.jsx(e.li,{children:"Provides clear close action"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Escape key closes dialog"}),`
`,n.jsx(e.li,{children:"Tab cycles through focusable elements"}),`
`,n.jsx(e.li,{children:"Shift+Tab reverses focus order"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Content Structure"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep titles concise"}),`
`,n.jsx(e.li,{children:"Organize content logically"}),`
`,n.jsx(e.li,{children:"Place primary actions on the right"}),`
`,n.jsx(e.li,{children:"Include a visible close button"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Behavior"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Close on overlay click (optional)"}),`
`,n.jsx(e.li,{children:"Prevent body scroll when open"}),`
`,n.jsx(e.li,{children:"Consider stacking order for multiple dialogs"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Performance"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Load heavy content dynamically"}),`
`,n.jsx(e.li,{children:"Consider virtualization for long content"}),`
`,n.jsx(e.li,{children:"Memoize dialog contents when appropriate"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(s,{})]})}function S(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{S as default};
