import { j as e } from './jsx-runtime-OAISXtky.js';
import './Button--7gU6zvB.js';
import './Checkbox-CLF59sww.js';
import './MultiSelect-D4Q7nsBa.js';
import './NumericInput-DS56Xw2R.js';
import './Select-BBYs4roD.js';
import './TextInput-Bou9Y0KU.js';
import { C as l } from './Tabs-CmX9zseh.js';
const d = [
    { id: 'tab1', title: 'Tab 1', content: e.jsx('div', { children: 'Content for Tab 1' }) },
    { id: 'tab2', title: 'Tab 2', content: e.jsx('div', { children: 'Content for Tab 2' }) },
    { id: 'tab3', title: 'Tab 3', content: e.jsx('div', { children: 'Content for Tab 3' }) },
  ],
  m = {
    argTypes: {
      tabs: { control: 'object' },
      defaultTabId: { control: 'text' },
      mode: { control: 'radio', options: ['vertical', 'horizontal'] },
      theme: { control: 'radio', options: ['light', 'dark'] },
    },
    args: { tabs: d, defaultTabId: 'tab1', theme: 'light' },
    component: l,
    title: 'Containers/Tabs',
  },
  t = {},
  o = { args: { mode: 'vertical' } };
var r, a, s;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((r = t.parameters) == null ? void 0 : r.docs),
    source: { originalSource: '{}', ...((s = (a = t.parameters) == null ? void 0 : a.docs) == null ? void 0 : s.source) },
  },
};
var i, n, c;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((i = o.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    mode: 'vertical'
  }
}`,
      ...((c = (n = o.parameters) == null ? void 0 : n.docs) == null ? void 0 : c.source),
    },
  },
};
const p = ['Default', 'VerticalTabs'],
  C = Object.freeze(
    Object.defineProperty({ __proto__: null, Default: t, VerticalTabs: o, __namedExportsOrder: p, default: m }, Symbol.toStringTag, {
      value: 'Module',
    }),
  );
export { C, t as D };
