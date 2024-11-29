import { j as a } from './jsx-runtime-OAISXtky.js';
import { r as b } from './index-qVDZzPEr.js';
import { A as _, h as C, c as I, e as w, o as j, b as k, g as v } from './get-chop-logic-theme-C9Q9v90u.js';
import { S as M, a as D, b as N, h as O, c as L } from './Select.styled-C_20FPH2.js';
import { u as A } from './index-Bg4JDWSn.js';
import { C as K, u as E } from './chop-logic-form-context-lL0zfSzs.js';
import { u as P } from './index-BeH7sH-W.js';
import { u as R } from './index-B0wHt5J_.js';
const T = ({ opened: e, onClick: l, comboboxId: t, dropdownId: r, name: o, placeholder: n, disabled: s, required: d, values: i }) => {
  const c = i == null ? void 0 : i.filter((u) => u.selected).map((u) => u.label),
    m = i == null ? void 0 : i.filter((u) => u.selected).map((u) => u.id);
  let p = a.jsx('span', { children: n });
  return (
    c && c.length > 1
      ? (p = a.jsx('span', { children: `${c.length} items selected` }))
      : c && c.length === 1 && (p = a.jsx('span', { children: c[0] })),
    a.jsxs(M, {
      type: 'button',
      name: o,
      value: m,
      role: 'combobox',
      'aria-haspopup': 'listbox',
      'aria-expanded': e,
      'aria-controls': r,
      id: t,
      onClick: l,
      disabled: s,
      'aria-required': d,
      children: [p, e ? a.jsx(_, {}) : a.jsx(C, {})],
    })
  );
};
try {
  (Combobox.displayName = 'Combobox'),
    (Combobox.__docgenInfo = {
      description: '',
      displayName: 'Combobox',
      props: {
        opened: { defaultValue: null, description: '', name: 'opened', required: !0, type: { name: 'boolean' } },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !0, type: { name: 'boolean' } },
        required: { defaultValue: null, description: '', name: 'required', required: !0, type: { name: 'boolean' } },
        onClick: { defaultValue: null, description: '', name: 'onClick', required: !0, type: { name: '() => void' } },
        comboboxId: { defaultValue: null, description: '', name: 'comboboxId', required: !0, type: { name: 'string' } },
        dropdownId: { defaultValue: null, description: '', name: 'dropdownId', required: !0, type: { name: 'string' } },
        values: { defaultValue: null, description: '', name: 'values', required: !1, type: { name: 'MultiSelectValue[]' } },
        placeholder: { defaultValue: null, description: '', name: 'placeholder', required: !1, type: { name: 'string' } },
        name: { defaultValue: null, description: '', name: 'name', required: !0, type: { name: 'string' } },
      },
    });
} catch {}
const U = ({ value: e, onSelect: l }) => {
  const { id: t, label: r, selected: o } = e,
    n = (s) => (d) => {
      switch (d.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          d.preventDefault(), l(s);
          break;
      }
    };
  return a.jsxs(D, {
    id: t,
    role: 'option',
    'aria-selected': o,
    tabIndex: 0,
    onKeyDown: n(t),
    onClick: () => l(t),
    children: [o ? a.jsx(I, {}) : a.jsx(w, {}), a.jsx('span', { children: r })],
  });
};
try {
  (Option.displayName = 'Option'),
    (Option.__docgenInfo = {
      description: '',
      displayName: 'Option',
      props: {
        value: { defaultValue: null, description: '', name: 'value', required: !0, type: { name: 'MultiSelectValue' } },
        onSelect: { defaultValue: null, description: '', name: 'onSelect', required: !0, type: { name: '(id: string) => void' } },
      },
    });
} catch {}
const $ = ({ options: e, opened: l, onClose: t, onSelect: r, dropdownId: o }) =>
  a.jsx(N, {
    $opened: l,
    role: 'listbox',
    id: o,
    tabIndex: -1,
    onKeyDown: (n) => O({ e: n, options: e, onClose: t }),
    children: e.map((n) => a.jsx(U, { value: n, onSelect: () => r(n.id) }, n.id)),
  });
try {
  (Dropdown.displayName = 'Dropdown'),
    (Dropdown.__docgenInfo = {
      description: '',
      displayName: 'Dropdown',
      props: {
        options: { defaultValue: null, description: '', name: 'options', required: !0, type: { name: 'MultiSelectValue[]' } },
        opened: { defaultValue: null, description: '', name: 'opened', required: !0, type: { name: 'boolean' } },
        dropdownId: { defaultValue: null, description: '', name: 'dropdownId', required: !0, type: { name: 'string' } },
        onClose: { defaultValue: null, description: '', name: 'onClose', required: !0, type: { name: '() => void' } },
        onSelect: { defaultValue: null, description: '', name: 'onSelect', required: !0, type: { name: '(id: string) => void' } },
      },
    });
} catch {}
function B({ name: e, options: l, initialValues: t, defaultValue: r }) {
  return l.map((o) => {
    let n = !1;
    return (
      t && t != null && t[e] && Array.isArray(t[e]) && t[e].find((d) => d === o.id || (d == null ? void 0 : d.id) === o.id) && (n = !0),
      !(t != null && t[e]) && Array.isArray(r) && r.find((d) => d === o.id) && (n = !0),
      { ...o, selected: n }
    );
  });
}
const q = (e) => e.filter((l) => l.selected).map((l) => l.id),
  H = (e, l) => {
    const t = e.find((r) => r.id === l);
    return e.map((r) => (r.id === l ? { ...r, selected: !(t != null && t.selected) } : r));
  };
function z({ name: e, defaultValue: l, onChange: t, options: r }) {
  const [o, n] = b.useState(!1),
    { onChangeFormInput: s, initialValues: d } = b.useContext(K),
    i = B({ name: e, options: r, initialValues: d, defaultValue: l }),
    [c, m] = b.useState(i),
    p = () => n(!1),
    u = () => n(!o),
    h = (f) => {
      const y = H(c, f);
      m(y), t == null || t(y), s == null || s({ name: e, value: q(y) });
    },
    x = b.useCallback(() => {
      n(!1), m(i), s == null || s({ name: e, value: q(i) });
    }, [e]);
  return R(x), { handleClose: p, handleToggle: u, handleSelect: h, opened: o, values: c };
}
const ee = ({
  options: e,
  name: l,
  label: t,
  required: r = !1,
  placeholder: o = 'Not selected',
  disabled: n = !1,
  onChange: s,
  defaultValue: d,
  id: i,
  theme: c,
  ...m
}) => {
  const p = b.useRef(null),
    { elementId: u, dropdownId: h } = E(i),
    x = v(c),
    { handleClose: f, handleSelect: y, handleToggle: V, opened: S, values: g } = z({ name: l, options: e, defaultValue: d, onChange: s });
  return (
    A({ ref: p, onClickOutsideHandler: f }),
    P({ keyCode: 'Escape', ref: p, onKeyPress: f }),
    a.jsx(j, {
      theme: x,
      children: a.jsxs(L, {
        ref: p,
        ...m,
        children: [
          a.jsx(k, { label: t, required: r, inputId: u }),
          a.jsx(T, { name: l, opened: S, comboboxId: u, dropdownId: h, onClick: V, values: g, placeholder: o, disabled: n, required: r }),
          a.jsx($, { options: g, opened: S, onClose: f, dropdownId: h, onSelect: y }),
        ],
      }),
    })
  );
};
try {
  (MultiSelect.displayName = 'MultiSelect'),
    (MultiSelect.__docgenInfo = {
      description: '',
      displayName: 'MultiSelect',
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
        disabled: { defaultValue: { value: 'false' }, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        required: { defaultValue: { value: 'false' }, description: '', name: 'required', required: !1, type: { name: 'boolean' } },
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
        placeholder: {
          defaultValue: { value: 'Not selected' },
          description: '',
          name: 'placeholder',
          required: !1,
          type: { name: 'string' },
        },
      },
    });
} catch {}
export { ee as C };
