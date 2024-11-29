import { j as a } from './jsx-runtime-OAISXtky.js';
import { C as i } from './MultiSelect-D4Q7nsBa.js';
const s = (l) =>
  a.jsx('div', {
    style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '20px' },
    children: a.jsx(i, { ...l, style: { width: '240px' } }),
  });
try {
  (MultiSelectExample.displayName = 'MultiSelectExample'),
    (MultiSelectExample.__docgenInfo = {
      description: '',
      displayName: 'MultiSelectExample',
      props: {
        id: { defaultValue: null, description: '', name: 'id', required: !1, type: { name: 'string' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } },
        tabIndex: { defaultValue: null, description: '', name: 'tabIndex', required: !1, type: { name: 'number' } },
        title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
        theme: {
          defaultValue: null,
          description: '',
          name: 'theme',
          required: !1,
          type: { name: 'enum', value: [{ value: '"dark"' }, { value: '"light"' }] },
        },
        label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
        name: { defaultValue: null, description: '', name: 'name', required: !0, type: { name: 'string' } },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        required: { defaultValue: null, description: '', name: 'required', required: !1, type: { name: 'boolean' } },
        options: { defaultValue: null, description: '', name: 'options', required: !0, type: { name: 'SelectValue[]' } },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: { name: '((values?: SelectValue[]) => void)' },
        },
        defaultValue: {
          defaultValue: null,
          description: '',
          name: 'defaultValue',
          required: !1,
          type: { name: 'string | number | readonly string[]' },
        },
        placeholder: { defaultValue: null, description: '', name: 'placeholder', required: !1, type: { name: 'string' } },
      },
    });
} catch {}
const u = [
    { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English', selected: !1 },
    { id: '583e8b60-0177-4e38-a423-4b1d5d0a2236', label: 'Spanish', selected: !1 },
    { id: 'b20bea7b-8172-4d12-b172-d5feac02d863', label: 'French', selected: !1 },
    { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German', selected: !1 },
  ],
  d = { component: s, title: 'Inputs/MultiSelect' },
  e = {
    args: {
      id: 'example-multiselect',
      name: 'languages',
      label: 'Select Languages',
      options: u,
      placeholder: 'Select languages',
      onChange: (l) => console.log(l),
      required: !0,
      disabled: !1,
      theme: 'light',
    },
    argTypes: { theme: { control: 'radio', options: ['light', 'dark'] } },
  };
var t, n, r;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((t = e.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    id: 'example-multiselect',
    name: 'languages',
    label: 'Select Languages',
    options: MULTI_SELECT_VALUES,
    placeholder: 'Select languages',
    onChange: values => console.log(values),
    required: true,
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,
      ...((r = (n = e.parameters) == null ? void 0 : n.docs) == null ? void 0 : r.source),
    },
  },
};
const o = ['Default'],
  m = Object.freeze(
    Object.defineProperty({ __proto__: null, Default: e, __namedExportsOrder: o, default: d }, Symbol.toStringTag, { value: 'Module' }),
  );
export { e as D, m as M };
