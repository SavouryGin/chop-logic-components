import { j as r } from './jsx-runtime-OAISXtky.js';
import { r as b } from './index-qVDZzPEr.js';
import { A as g, h as C, i as I, o as v, b as w, g as j } from './get-chop-logic-theme-C9Q9v90u.js';
import { S as k, d as D, b as N, h as O, m as L, c as E } from './Select.styled-C_20FPH2.js';
import { u as K } from './index-Bg4JDWSn.js';
import { C as P, u as R } from './chop-logic-form-context-lL0zfSzs.js';
import { u as A } from './index-BeH7sH-W.js';
import { u as T } from './index-B0wHt5J_.js';
const B = ({ opened: l, onClick: d, comboboxId: t, dropdownId: o, selected: e, name: u, placeholder: a, disabled: s, required: i }) =>
  r.jsxs(k, {
    type: 'button',
    name: u,
    value: e == null ? void 0 : e.id,
    role: 'combobox',
    'aria-haspopup': 'listbox',
    'aria-expanded': l,
    'aria-controls': o,
    id: t,
    onClick: d,
    disabled: s,
    'aria-required': i,
    children: [
      e != null && e.label ? r.jsx('span', { children: e == null ? void 0 : e.label }) : r.jsx('span', { children: a }),
      l ? r.jsx(g, {}) : r.jsx(C, {}),
    ],
  });
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
        selected: { defaultValue: null, description: '', name: 'selected', required: !1, type: { name: 'SelectValue' } },
        placeholder: { defaultValue: null, description: '', name: 'placeholder', required: !1, type: { name: 'string' } },
        name: { defaultValue: null, description: '', name: 'name', required: !0, type: { name: 'string' } },
      },
    });
} catch {}
const H = ({ value: l, isSelected: d, onSelect: t, onClear: o }) => {
  const { id: e, label: u } = l,
    a = (i) => {
      d ? o() : t(i);
    },
    s = (i) => (n) => {
      switch (n.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          n.preventDefault(), a(i);
          break;
      }
    };
  return r.jsxs(D, {
    id: e,
    role: 'option',
    'aria-selected': d,
    tabIndex: 0,
    onKeyDown: s(e),
    onClick: () => a(e),
    children: [r.jsx('span', { children: u }), d && r.jsx(I, {})],
  });
};
try {
  (Option.displayName = 'Option'),
    (Option.__docgenInfo = {
      description: '',
      displayName: 'Option',
      props: {
        value: { defaultValue: null, description: '', name: 'value', required: !0, type: { name: 'SelectValue' } },
        isSelected: { defaultValue: null, description: '', name: 'isSelected', required: !0, type: { name: 'boolean' } },
        onSelect: { defaultValue: null, description: '', name: 'onSelect', required: !0, type: { name: '(id: string) => void' } },
        onClear: { defaultValue: null, description: '', name: 'onClear', required: !0, type: { name: '() => void' } },
      },
    });
} catch {}
const M = ({ options: l, opened: d, onClose: t, onSelect: o, dropdownId: e, comboboxId: u, selected: a, onClear: s }) => {
  const i = (n) => {
    o(n), t(), L(u);
  };
  return r.jsx(N, {
    role: 'listbox',
    id: e,
    tabIndex: -1,
    onKeyDown: (n) => O({ e: n, options: l, onClose: t }),
    $opened: d,
    children: l.map((n) =>
      r.jsx(H, { value: n, onSelect: () => i(n.id), onClear: s, isSelected: n.id === (a == null ? void 0 : a.id) }, n.id),
    ),
  });
};
try {
  (Dropdown.displayName = 'Dropdown'),
    (Dropdown.__docgenInfo = {
      description: '',
      displayName: 'Dropdown',
      props: {
        options: { defaultValue: null, description: '', name: 'options', required: !0, type: { name: 'SelectValue[]' } },
        opened: { defaultValue: null, description: '', name: 'opened', required: !0, type: { name: 'boolean' } },
        dropdownId: { defaultValue: null, description: '', name: 'dropdownId', required: !0, type: { name: 'string' } },
        comboboxId: { defaultValue: null, description: '', name: 'comboboxId', required: !0, type: { name: 'string' } },
        onClose: { defaultValue: null, description: '', name: 'onClose', required: !0, type: { name: '() => void' } },
        selected: { defaultValue: null, description: '', name: 'selected', required: !1, type: { name: 'SelectValue' } },
        onSelect: { defaultValue: null, description: '', name: 'onSelect', required: !0, type: { name: '(id: string) => void' } },
        onClear: { defaultValue: null, description: '', name: 'onClear', required: !0, type: { name: '() => void' } },
      },
    });
} catch {}
function U({ name: l, options: d, initialValues: t, defaultValue: o }) {
  var u;
  let e;
  return (
    t && t[l] && (e = ((u = t[l]) == null ? void 0 : u.id) ?? t[l]),
    !(t != null && t[l]) && o && typeof o == 'string' && (e = o),
    d.find((a) => a.id === e)
  );
}
function $({ name: l, defaultValue: d, onChange: t, options: o }) {
  const { onChangeFormInput: e, initialValues: u } = b.useContext(P),
    a = U({ name: l, options: o, defaultValue: d, initialValues: u }),
    [s, i] = b.useState(!1),
    [n, c] = b.useState(a),
    m = () => i(!1),
    x = () => i(!s),
    f = (y) => {
      const p = o.find((h) => h.id === y);
      c(p), t == null || t(p), e == null || e({ name: l, value: p == null ? void 0 : p.id });
    },
    S = () => {
      c(void 0), t == null || t(void 0);
    },
    q = b.useCallback(() => {
      i(!1), c(a), e == null || e({ name: l, value: a == null ? void 0 : a.id });
    }, [l]);
  return T(q), { selected: n, opened: s, handleClear: S, handleClose: m, handleToggle: x, handleSelect: f };
}
const Z = ({
  options: l,
  onChange: d,
  name: t,
  label: o,
  defaultValue: e,
  id: u,
  placeholder: a = 'Not selected',
  required: s = !1,
  disabled: i = !1,
  theme: n,
  ...c
}) => {
  const m = b.useRef(null),
    x = j(n),
    { elementId: f, dropdownId: S } = R(u),
    {
      handleClear: q,
      handleClose: y,
      handleSelect: p,
      handleToggle: h,
      selected: V,
      opened: _,
    } = $({ options: l, onChange: d, defaultValue: e, name: t });
  return (
    K({ ref: m, onClickOutsideHandler: y }),
    A({ keyCode: 'Escape', ref: m, onKeyPress: y }),
    r.jsx(v, {
      theme: x,
      children: r.jsxs(E, {
        ref: m,
        ...c,
        children: [
          r.jsx(w, { label: o, required: s, inputId: f }),
          r.jsx(B, { name: t, opened: _, comboboxId: f, dropdownId: S, onClick: h, selected: V, placeholder: a, disabled: i, required: s }),
          r.jsx(M, { options: l, selected: V, opened: _, onClose: y, dropdownId: S, comboboxId: f, onSelect: p, onClear: q }),
        ],
      }),
    })
  );
};
try {
  (Select.displayName = 'Select'),
    (Select.__docgenInfo = {
      description: '',
      displayName: 'Select',
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
          type: { name: '((value?: SelectValue) => void)' },
        },
        placeholder: {
          defaultValue: { value: 'Not selected' },
          description: '',
          name: 'placeholder',
          required: !1,
          type: { name: 'string' },
        },
        defaultValue: {
          defaultValue: null,
          description: '',
          name: 'defaultValue',
          required: !1,
          type: { name: 'string | number | readonly string[]' },
        },
      },
    });
} catch {}
export { Z as C };
