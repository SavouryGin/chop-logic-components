import { j as a } from './jsx-runtime-OAISXtky.js';
import { r as n } from './index-qVDZzPEr.js';
import './chop-logic-form-context-lL0zfSzs.js';
import { u as l } from './index-BeH7sH-W.js';
const p = () => {
    const s = n.useRef(null);
    return (
      l({
        ref: s,
        keyCode: 'Enter',
        onKeyPress: () => {
          console.log('Key pressed!');
        },
      }),
      a.jsx('div', { ref: s, tabIndex: 0, style: { padding: '20px', border: '1px solid black' }, children: 'Press Enter key' })
    );
  },
  c = { component: p, title: 'Hooks/useKeyPress' },
  e = {};
var r, o, t;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((r = e.parameters) == null ? void 0 : r.docs),
    source: { originalSource: '{}', ...((t = (o = e.parameters) == null ? void 0 : o.docs) == null ? void 0 : t.source) },
  },
};
const d = ['Default'],
  x = Object.freeze(
    Object.defineProperty({ __proto__: null, Default: e, __namedExportsOrder: d, default: c }, Symbol.toStringTag, { value: 'Module' }),
  );
export { e as D, x as U };
