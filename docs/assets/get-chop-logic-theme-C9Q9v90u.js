import { j as a } from './jsx-runtime-OAISXtky.js';
import { e as G, r as br } from './index-qVDZzPEr.js';
var M = function () {
  return (
    (M =
      Object.assign ||
      function (r) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
          t = arguments[n];
          for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
        }
        return r;
      }),
    M.apply(this, arguments)
  );
};
function xe(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, o = r.length, s; n < o; n++) (s || !(n in r)) && (s || (s = Array.prototype.slice.call(r, 0, n)), (s[n] = r[n]));
  return e.concat(s || Array.prototype.slice.call(r));
}
var x = '-ms-',
  se = '-moz-',
  h = '-webkit-',
  Ur = 'comm',
  Se = 'rule',
  Cr = 'decl',
  bt = '@import',
  Yr = '@keyframes',
  Ct = '@layer',
  Qr = Math.abs,
  Sr = String.fromCharCode,
  Ve = Object.assign;
function St(e, r) {
  return z(e, 0) ^ 45 ? (((((((r << 2) ^ z(e, 0)) << 2) ^ z(e, 1)) << 2) ^ z(e, 2)) << 2) ^ z(e, 3) : 0;
}
function Kr(e) {
  return e.trim();
}
function F(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function d(e, r, t) {
  return e.replace(r, t);
}
function me(e, r, t) {
  return e.indexOf(r, t);
}
function z(e, r) {
  return e.charCodeAt(r) | 0;
}
function K(e, r, t) {
  return e.slice(r, t);
}
function $(e) {
  return e.length;
}
function Zr(e) {
  return e.length;
}
function ae(e, r) {
  return r.push(e), e;
}
function kt(e, r) {
  return e.map(r).join('');
}
function Er(e, r) {
  return e.filter(function (t) {
    return !F(t, r);
  });
}
var ke = 1,
  Z = 1,
  Jr = 0,
  R = 0,
  j = 0,
  ee = '';
function je(e, r, t, n, o, s, i, l) {
  return { value: e, root: r, parent: t, type: n, props: o, children: s, line: ke, column: Z, length: i, return: '', siblings: l };
}
function D(e, r) {
  return Ve(je('', null, null, '', null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Y(e) {
  for (; e.root; ) e = D(e.root, { children: [e] });
  ae(e, e.siblings);
}
function jt() {
  return j;
}
function At() {
  return (j = R > 0 ? z(ee, --R) : 0), Z--, j === 10 && ((Z = 1), ke--), j;
}
function B() {
  return (j = R < Jr ? z(ee, R++) : 0), Z++, j === 10 && ((Z = 1), ke++), j;
}
function O() {
  return z(ee, R);
}
function ge() {
  return R;
}
function Ae(e, r) {
  return K(ee, e, r);
}
function De(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function zt(e) {
  return (ke = Z = 1), (Jr = $((ee = e))), (R = 0), [];
}
function Mt(e) {
  return (ee = ''), e;
}
function $e(e) {
  return Kr(Ae(R - 1, Le(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Et(e) {
  for (; (j = O()) && j < 33; ) B();
  return De(e) > 2 || De(j) > 3 ? '' : ' ';
}
function Nt(e, r) {
  for (; --r && B() && !(j < 48 || j > 102 || (j > 57 && j < 65) || (j > 70 && j < 97)); );
  return Ae(e, ge() + (r < 6 && O() == 32 && B() == 32));
}
function Le(e) {
  for (; B(); )
    switch (j) {
      case e:
        return R;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Le(j);
        break;
      case 40:
        e === 41 && Le(e);
        break;
      case 92:
        B();
        break;
    }
  return R;
}
function Rt(e, r) {
  for (; B() && e + j !== 57; ) if (e + j === 84 && O() === 47) break;
  return '/*' + Ae(r, R - 1) + '*' + Sr(e === 47 ? e : B());
}
function Bt(e) {
  for (; !De(O()); ) B();
  return Ae(e, R);
}
function $t(e) {
  return Mt(ye('', null, null, null, [''], (e = zt(e)), 0, [0], e));
}
function ye(e, r, t, n, o, s, i, l, c) {
  for (var g = 0, f = 0, y = i, v = 0, p = 0, I = 0, S = 1, E = 1, k = 1, b = 0, w = '', C = o, A = s, _ = n, u = w; E; )
    switch (((I = b), (b = B()))) {
      case 40:
        if (I != 108 && z(u, y - 1) == 58) {
          me((u += d($e(b), '&', '&\f')), '&\f', Qr(g ? l[g - 1] : 0)) != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        u += $e(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        u += Et(I);
        break;
      case 92:
        u += Nt(ge() - 1, 7);
        continue;
      case 47:
        switch (O()) {
          case 42:
          case 47:
            ae(Ht(Rt(B(), ge()), r, t, c), c);
            break;
          default:
            u += '/';
        }
        break;
      case 123 * S:
        l[g++] = $(u) * k;
      case 125 * S:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            E = 0;
          case 59 + f:
            k == -1 && (u = d(u, /\f/g, '')),
              p > 0 && $(u) - y && ae(p > 32 ? Rr(u + ';', n, t, y - 1, c) : Rr(d(u, ' ', '') + ';', n, t, y - 2, c), c);
            break;
          case 59:
            u += ';';
          default:
            if ((ae((_ = Nr(u, r, t, g, f, o, l, w, (C = []), (A = []), y, s)), s), b === 123))
              if (f === 0) ye(u, r, _, _, C, s, y, l, A);
              else
                switch (v === 99 && z(u, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ye(e, _, _, n && ae(Nr(e, _, _, 0, 0, o, l, w, o, (C = []), y, A), A), o, A, y, l, n ? C : A);
                    break;
                  default:
                    ye(u, _, _, _, [''], A, 0, l, A);
                }
        }
        (g = f = p = 0), (S = k = 1), (w = u = ''), (y = i);
        break;
      case 58:
        (y = 1 + $(u)), (p = I);
      default:
        if (S < 1) {
          if (b == 123) --S;
          else if (b == 125 && S++ == 0 && At() == 125) continue;
        }
        switch (((u += Sr(b)), b * S)) {
          case 38:
            k = f > 0 ? 1 : ((u += '\f'), -1);
            break;
          case 44:
            (l[g++] = ($(u) - 1) * k), (k = 1);
            break;
          case 64:
            O() === 45 && (u += $e(B())), (v = O()), (f = y = $((w = u += Bt(ge())))), b++;
            break;
          case 45:
            I === 45 && $(u) == 2 && (S = 0);
        }
    }
  return s;
}
function Nr(e, r, t, n, o, s, i, l, c, g, f, y) {
  for (var v = o - 1, p = o === 0 ? s : [''], I = Zr(p), S = 0, E = 0, k = 0; S < n; ++S)
    for (var b = 0, w = K(e, v + 1, (v = Qr((E = i[S])))), C = e; b < I; ++b)
      (C = Kr(E > 0 ? p[b] + ' ' + w : d(w, /&\f/g, p[b]))) && (c[k++] = C);
  return je(e, r, t, o === 0 ? Se : l, c, g, f, y);
}
function Ht(e, r, t, n) {
  return je(e, r, t, Ur, Sr(jt()), K(e, 2, -2), 0, n);
}
function Rr(e, r, t, n, o) {
  return je(e, r, t, Cr, K(e, 0, n), K(e, n + 1, -1), n, o);
}
function Xr(e, r, t) {
  switch (St(e, r)) {
    case 5103:
      return h + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return h + e + e;
    case 4789:
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return h + e + se + e + x + e + e;
    case 5936:
      switch (z(e, r + 11)) {
        case 114:
          return h + e + x + d(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return h + e + x + d(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return h + e + x + d(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return h + e + x + e + e;
    case 6165:
      return h + e + x + 'flex-' + e + e;
    case 5187:
      return h + e + d(e, /(\w+).+(:[^]+)/, h + 'box-$1$2' + x + 'flex-$1$2') + e;
    case 5443:
      return (
        h + e + x + 'flex-item-' + d(e, /flex-|-self/g, '') + (F(e, /flex-|baseline/) ? '' : x + 'grid-row-' + d(e, /flex-|-self/g, '')) + e
      );
    case 4675:
      return h + e + x + 'flex-line-pack' + d(e, /align-content|flex-|-self/g, '') + e;
    case 5548:
      return h + e + x + d(e, 'shrink', 'negative') + e;
    case 5292:
      return h + e + x + d(e, 'basis', 'preferred-size') + e;
    case 6060:
      return h + 'box-' + d(e, '-grow', '') + h + e + x + d(e, 'grow', 'positive') + e;
    case 4554:
      return h + d(e, /([^-])(transform)/g, '$1' + h + '$2') + e;
    case 6187:
      return d(d(d(e, /(zoom-|grab)/, h + '$1'), /(image-set)/, h + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return d(e, /(image-set\([^]*)/, h + '$1$`$1');
    case 4968:
      return d(d(e, /(.+:)(flex-)?(.*)/, h + 'box-pack:$3' + x + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + h + e + e;
    case 4200:
      if (!F(e, /flex-|baseline/)) return x + 'grid-column-align' + K(e, r) + e;
      break;
    case 2592:
    case 3360:
      return x + d(e, 'template-', '') + e;
    case 4384:
    case 3616:
      return t &&
        t.some(function (n, o) {
          return (r = o), F(n.props, /grid-\w+-end/);
        })
        ? ~me(e + (t = t[r].value), 'span', 0)
          ? e
          : x + d(e, '-start', '') + e + x + 'grid-row-span:' + (~me(t, 'span', 0) ? F(t, /\d+/) : +F(t, /\d+/) - +F(e, /\d+/)) + ';'
        : x + d(e, '-start', '') + e;
    case 4896:
    case 4128:
      return t &&
        t.some(function (n) {
          return F(n.props, /grid-\w+-start/);
        })
        ? e
        : x + d(d(e, '-end', '-span'), 'span ', '') + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return d(e, /(.+)-inline(.+)/, h + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($(e) - 1 - r > 6)
        switch (z(e, r + 1)) {
          case 109:
            if (z(e, r + 4) !== 45) break;
          case 102:
            return d(e, /(.+:)(.+)-([^]+)/, '$1' + h + '$2-$3$1' + se + (z(e, r + 3) == 108 ? '$3' : '$2-$3')) + e;
          case 115:
            return ~me(e, 'stretch', 0) ? Xr(d(e, 'stretch', 'fill-available'), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return d(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (n, o, s, i, l, c, g) {
        return x + o + ':' + s + g + (i ? x + o + '-span:' + (l ? c : +c - +s) + g : '') + e;
      });
    case 4949:
      if (z(e, r + 6) === 121) return d(e, ':', ':' + h) + e;
      break;
    case 6444:
      switch (z(e, z(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            d(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' + h + (z(e, 14) === 45 ? 'inline-' : '') + 'box$3$1' + h + '$2$3$1' + x + '$2box$3',
            ) + e
          );
        case 100:
          return d(e, ':', ':' + x) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return d(e, 'scroll-', 'scroll-snap-') + e;
  }
  return e;
}
function we(e, r) {
  for (var t = '', n = 0; n < e.length; n++) t += r(e[n], n, e, r) || '';
  return t;
}
function Ft(e, r, t, n) {
  switch (e.type) {
    case Ct:
      if (e.children.length) break;
    case bt:
    case Cr:
      return (e.return = e.return || e.value);
    case Ur:
      return '';
    case Yr:
      return (e.return = e.value + '{' + we(e.children, n) + '}');
    case Se:
      if (!$((e.value = e.props.join(',')))) return '';
  }
  return $((t = we(e.children, n))) ? (e.return = e.value + '{' + t + '}') : '';
}
function Pt(e) {
  var r = Zr(e);
  return function (t, n, o, s) {
    for (var i = '', l = 0; l < r; l++) i += e[l](t, n, o, s) || '';
    return i;
  };
}
function Vt(e) {
  return function (r) {
    r.root || ((r = r.return) && e(r));
  };
}
function Dt(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Cr:
        e.return = Xr(e.value, e.length, t);
        return;
      case Yr:
        return we([D(e, { value: d(e.value, '@', '@' + h) })], n);
      case Se:
        if (e.length)
          return kt((t = e.props), function (o) {
            switch (F(o, (n = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                Y(D(e, { props: [d(o, /:(read-\w+)/, ':' + se + '$1')] })), Y(D(e, { props: [o] })), Ve(e, { props: Er(t, n) });
                break;
              case '::placeholder':
                Y(D(e, { props: [d(o, /:(plac\w+)/, ':' + h + 'input-$1')] })),
                  Y(D(e, { props: [d(o, /:(plac\w+)/, ':' + se + '$1')] })),
                  Y(D(e, { props: [d(o, /:(plac\w+)/, x + 'input-$1')] })),
                  Y(D(e, { props: [o] })),
                  Ve(e, { props: Er(t, n) });
                break;
            }
            return '';
          });
    }
}
var Lt = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  N = {},
  J = (typeof process < 'u' && N !== void 0 && (N.REACT_APP_SC_ATTR || N.SC_ATTR)) || 'data-styled',
  et = 'active',
  rt = 'data-styled-version',
  ze = '6.1.13',
  kr = `/*!sc*/
`,
  Ie = typeof window < 'u' && 'HTMLElement' in window,
  Tt = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' && N !== void 0 && N.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && N.REACT_APP_SC_DISABLE_SPEEDY !== ''
      ? N.REACT_APP_SC_DISABLE_SPEEDY !== 'false' && N.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < 'u' &&
        N !== void 0 &&
        N.SC_DISABLE_SPEEDY !== void 0 &&
        N.SC_DISABLE_SPEEDY !== '' &&
        N.SC_DISABLE_SPEEDY !== 'false' &&
        N.SC_DISABLE_SPEEDY),
  Me = Object.freeze([]),
  X = Object.freeze({});
function Ot(e, r, t) {
  return t === void 0 && (t = X), (e.theme !== t.theme && e.theme) || r || t.theme;
}
var tt = new Set([
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'u',
    'ul',
    'use',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]),
  qt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Gt = /(^-|-$)/g;
function Br(e) {
  return e.replace(qt, '-').replace(Gt, '');
}
var Wt = /(a)(d)/gi,
  he = 52,
  $r = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Te(e) {
  var r,
    t = '';
  for (r = Math.abs(e); r > he; r = (r / he) | 0) t = $r(r % he) + t;
  return ($r(r % he) + t).replace(Wt, '$1-$2');
}
var He,
  nt = 5381,
  Q = function (e, r) {
    for (var t = r.length; t; ) e = (33 * e) ^ r.charCodeAt(--t);
    return e;
  },
  ot = function (e) {
    return Q(nt, e);
  };
function Ut(e) {
  return Te(ot(e) >>> 0);
}
function Yt(e) {
  return e.displayName || e.name || 'Component';
}
function Fe(e) {
  return typeof e == 'string' && !0;
}
var at = typeof Symbol == 'function' && Symbol.for,
  st = at ? Symbol.for('react.memo') : 60115,
  Qt = at ? Symbol.for('react.forward_ref') : 60112,
  Kt = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Zt = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  it = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Jt = (((He = {})[Qt] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (He[st] = it), He);
function Hr(e) {
  return ('type' in (r = e) && r.type.$$typeof) === st ? it : '$$typeof' in e ? Jt[e.$$typeof] : Kt;
  var r;
}
var Xt = Object.defineProperty,
  en = Object.getOwnPropertyNames,
  Fr = Object.getOwnPropertySymbols,
  rn = Object.getOwnPropertyDescriptor,
  tn = Object.getPrototypeOf,
  Pr = Object.prototype;
function ct(e, r, t) {
  if (typeof r != 'string') {
    if (Pr) {
      var n = tn(r);
      n && n !== Pr && ct(e, n, t);
    }
    var o = en(r);
    Fr && (o = o.concat(Fr(r)));
    for (var s = Hr(e), i = Hr(r), l = 0; l < o.length; ++l) {
      var c = o[l];
      if (!(c in Zt || (t && t[c]) || (i && c in i) || (s && c in s))) {
        var g = rn(r, c);
        try {
          Xt(e, c, g);
        } catch {}
      }
    }
  }
  return e;
}
function W(e) {
  return typeof e == 'function';
}
function jr(e) {
  return typeof e == 'object' && 'styledComponentId' in e;
}
function T(e, r) {
  return e && r ? ''.concat(e, ' ').concat(r) : e || r || '';
}
function Vr(e, r) {
  if (e.length === 0) return '';
  for (var t = e[0], n = 1; n < e.length; n++) t += e[n];
  return t;
}
function ie(e) {
  return e !== null && typeof e == 'object' && e.constructor.name === Object.name && !('props' in e && e.$$typeof);
}
function Oe(e, r, t) {
  if ((t === void 0 && (t = !1), !t && !ie(e) && !Array.isArray(e))) return r;
  if (Array.isArray(r)) for (var n = 0; n < r.length; n++) e[n] = Oe(e[n], r[n]);
  else if (ie(r)) for (var n in r) e[n] = Oe(e[n], r[n]);
  return e;
}
function Ar(e, r) {
  Object.defineProperty(e, 'toString', { value: r });
}
function U(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  return new Error(
    'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
      .concat(e, ' for more information.')
      .concat(r.length > 0 ? ' Args: '.concat(r.join(', ')) : ''),
  );
}
var nn = (function () {
    function e(r) {
      (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = r);
    }
    return (
      (e.prototype.indexOfGroup = function (r) {
        for (var t = 0, n = 0; n < r; n++) t += this.groupSizes[n];
        return t;
      }),
      (e.prototype.insertRules = function (r, t) {
        if (r >= this.groupSizes.length) {
          for (var n = this.groupSizes, o = n.length, s = o; r >= s; ) if ((s <<= 1) < 0) throw U(16, ''.concat(r));
          (this.groupSizes = new Uint32Array(s)), this.groupSizes.set(n), (this.length = s);
          for (var i = o; i < s; i++) this.groupSizes[i] = 0;
        }
        for (var l = this.indexOfGroup(r + 1), c = ((i = 0), t.length); i < c; i++)
          this.tag.insertRule(l, t[i]) && (this.groupSizes[r]++, l++);
      }),
      (e.prototype.clearGroup = function (r) {
        if (r < this.length) {
          var t = this.groupSizes[r],
            n = this.indexOfGroup(r),
            o = n + t;
          this.groupSizes[r] = 0;
          for (var s = n; s < o; s++) this.tag.deleteRule(n);
        }
      }),
      (e.prototype.getGroup = function (r) {
        var t = '';
        if (r >= this.length || this.groupSizes[r] === 0) return t;
        for (var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n, i = o; i < s; i++)
          t += ''.concat(this.tag.getRule(i)).concat(kr);
        return t;
      }),
      e
    );
  })(),
  ve = new Map(),
  be = new Map(),
  _e = 1,
  fe = function (e) {
    if (ve.has(e)) return ve.get(e);
    for (; be.has(_e); ) _e++;
    var r = _e++;
    return ve.set(e, r), be.set(r, e), r;
  },
  on = function (e, r) {
    (_e = r + 1), ve.set(e, r), be.set(r, e);
  },
  an = 'style['.concat(J, '][').concat(rt, '="').concat(ze, '"]'),
  sn = new RegExp('^'.concat(J, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
  cn = function (e, r, t) {
    for (var n, o = t.split(','), s = 0, i = o.length; s < i; s++) (n = o[s]) && e.registerName(r, n);
  },
  ln = function (e, r) {
    for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : '').split(kr), o = [], s = 0, i = n.length; s < i; s++) {
      var l = n[s].trim();
      if (l) {
        var c = l.match(sn);
        if (c) {
          var g = 0 | parseInt(c[1], 10),
            f = c[2];
          g !== 0 && (on(f, g), cn(e, f, c[3]), e.getTag().insertRules(g, o)), (o.length = 0);
        } else o.push(l);
      }
    }
  },
  Dr = function (e) {
    for (var r = document.querySelectorAll(an), t = 0, n = r.length; t < n; t++) {
      var o = r[t];
      o && o.getAttribute(J) !== et && (ln(e, o), o.parentNode && o.parentNode.removeChild(o));
    }
  };
function dn() {
  return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
}
var lt = function (e) {
    var r = document.head,
      t = e || r,
      n = document.createElement('style'),
      o = (function (l) {
        var c = Array.from(l.querySelectorAll('style['.concat(J, ']')));
        return c[c.length - 1];
      })(t),
      s = o !== void 0 ? o.nextSibling : null;
    n.setAttribute(J, et), n.setAttribute(rt, ze);
    var i = dn();
    return i && n.setAttribute('nonce', i), t.insertBefore(n, s), n;
  },
  un = (function () {
    function e(r) {
      (this.element = lt(r)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (t) {
          if (t.sheet) return t.sheet;
          for (var n = document.styleSheets, o = 0, s = n.length; o < s; o++) {
            var i = n[o];
            if (i.ownerNode === t) return i;
          }
          throw U(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (r, t) {
        try {
          return this.sheet.insertRule(t, r), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (r) {
        this.sheet.deleteRule(r), this.length--;
      }),
      (e.prototype.getRule = function (r) {
        var t = this.sheet.cssRules[r];
        return t && t.cssText ? t.cssText : '';
      }),
      e
    );
  })(),
  pn = (function () {
    function e(r) {
      (this.element = lt(r)), (this.nodes = this.element.childNodes), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (r, t) {
        if (r <= this.length && r >= 0) {
          var n = document.createTextNode(t);
          return this.element.insertBefore(n, this.nodes[r] || null), this.length++, !0;
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (r) {
        this.element.removeChild(this.nodes[r]), this.length--;
      }),
      (e.prototype.getRule = function (r) {
        return r < this.length ? this.nodes[r].textContent : '';
      }),
      e
    );
  })(),
  hn = (function () {
    function e(r) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (r, t) {
        return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
      }),
      (e.prototype.deleteRule = function (r) {
        this.rules.splice(r, 1), this.length--;
      }),
      (e.prototype.getRule = function (r) {
        return r < this.length ? this.rules[r] : '';
      }),
      e
    );
  })(),
  Lr = Ie,
  fn = { isServer: !Ie, useCSSOMInjection: !Tt },
  dt = (function () {
    function e(r, t, n) {
      r === void 0 && (r = X), t === void 0 && (t = {});
      var o = this;
      (this.options = M(M({}, fn), r)),
        (this.gs = t),
        (this.names = new Map(n)),
        (this.server = !!r.isServer),
        !this.server && Ie && Lr && ((Lr = !1), Dr(this)),
        Ar(this, function () {
          return (function (s) {
            for (
              var i = s.getTag(),
                l = i.length,
                c = '',
                g = function (y) {
                  var v = (function (k) {
                    return be.get(k);
                  })(y);
                  if (v === void 0) return 'continue';
                  var p = s.names.get(v),
                    I = i.getGroup(y);
                  if (p === void 0 || !p.size || I.length === 0) return 'continue';
                  var S = ''.concat(J, '.g').concat(y, '[id="').concat(v, '"]'),
                    E = '';
                  p !== void 0 &&
                    p.forEach(function (k) {
                      k.length > 0 && (E += ''.concat(k, ','));
                    }),
                    (c += ''.concat(I).concat(S, '{content:"').concat(E, '"}').concat(kr));
                },
                f = 0;
              f < l;
              f++
            )
              g(f);
            return c;
          })(o);
        });
    }
    return (
      (e.registerId = function (r) {
        return fe(r);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Ie && Dr(this);
      }),
      (e.prototype.reconstructWithOptions = function (r, t) {
        return t === void 0 && (t = !0), new e(M(M({}, this.options), r), this.gs, (t && this.names) || void 0);
      }),
      (e.prototype.allocateGSInstance = function (r) {
        return (this.gs[r] = (this.gs[r] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((r = (function (t) {
              var n = t.useCSSOMInjection,
                o = t.target;
              return t.isServer ? new hn(o) : n ? new un(o) : new pn(o);
            })(this.options)),
            new nn(r)))
        );
        var r;
      }),
      (e.prototype.hasNameForId = function (r, t) {
        return this.names.has(r) && this.names.get(r).has(t);
      }),
      (e.prototype.registerName = function (r, t) {
        if ((fe(r), this.names.has(r))) this.names.get(r).add(t);
        else {
          var n = new Set();
          n.add(t), this.names.set(r, n);
        }
      }),
      (e.prototype.insertRules = function (r, t, n) {
        this.registerName(r, t), this.getTag().insertRules(fe(r), n);
      }),
      (e.prototype.clearNames = function (r) {
        this.names.has(r) && this.names.get(r).clear();
      }),
      (e.prototype.clearRules = function (r) {
        this.getTag().clearGroup(fe(r)), this.clearNames(r);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  mn = /&/g,
  gn = /^\s*\/\/.*$/gm;
function ut(e, r) {
  return e.map(function (t) {
    return (
      t.type === 'rule' &&
        ((t.value = ''.concat(r, ' ').concat(t.value)),
        (t.value = t.value.replaceAll(',', ','.concat(r, ' '))),
        (t.props = t.props.map(function (n) {
          return ''.concat(r, ' ').concat(n);
        }))),
      Array.isArray(t.children) && t.type !== '@keyframes' && (t.children = ut(t.children, r)),
      t
    );
  });
}
function yn(e) {
  var r,
    t,
    n,
    o = X,
    s = o.options,
    i = s === void 0 ? X : s,
    l = o.plugins,
    c = l === void 0 ? Me : l,
    g = function (v, p, I) {
      return I.startsWith(t) && I.endsWith(t) && I.replaceAll(t, '').length > 0 ? '.'.concat(r) : v;
    },
    f = c.slice();
  f.push(function (v) {
    v.type === Se && v.value.includes('&') && (v.props[0] = v.props[0].replace(mn, t).replace(n, g));
  }),
    i.prefix && f.push(Dt),
    f.push(Ft);
  var y = function (v, p, I, S) {
    p === void 0 && (p = ''),
      I === void 0 && (I = ''),
      S === void 0 && (S = '&'),
      (r = S),
      (t = p),
      (n = new RegExp('\\'.concat(t, '\\b'), 'g'));
    var E = v.replace(gn, ''),
      k = $t(I || p ? ''.concat(I, ' ').concat(p, ' { ').concat(E, ' }') : E);
    i.namespace && (k = ut(k, i.namespace));
    var b = [];
    return (
      we(
        k,
        Pt(
          f.concat(
            Vt(function (w) {
              return b.push(w);
            }),
          ),
        ),
      ),
      b
    );
  };
  return (
    (y.hash = c.length
      ? c
          .reduce(function (v, p) {
            return p.name || U(15), Q(v, p.name);
          }, nt)
          .toString()
      : ''),
    y
  );
}
var vn = new dt(),
  qe = yn(),
  pt = G.createContext({ shouldForwardProp: void 0, styleSheet: vn, stylis: qe });
pt.Consumer;
G.createContext(void 0);
function Tr() {
  return br.useContext(pt);
}
var _n = (function () {
    function e(r, t) {
      var n = this;
      (this.inject = function (o, s) {
        s === void 0 && (s = qe);
        var i = n.name + s.hash;
        o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, '@keyframes'));
      }),
        (this.name = r),
        (this.id = 'sc-keyframes-'.concat(r)),
        (this.rules = t),
        Ar(this, function () {
          throw U(12, String(n.name));
        });
    }
    return (
      (e.prototype.getName = function (r) {
        return r === void 0 && (r = qe), this.name + r.hash;
      }),
      e
    );
  })(),
  xn = function (e) {
    return e >= 'A' && e <= 'Z';
  };
function Or(e) {
  for (var r = '', t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === '-' && e[0] === '-') return e;
    xn(n) ? (r += '-' + n.toLowerCase()) : (r += n);
  }
  return r.startsWith('ms-') ? '-' + r : r;
}
var ht = function (e) {
    return e == null || e === !1 || e === '';
  },
  ft = function (e) {
    var r,
      t,
      n = [];
    for (var o in e) {
      var s = e[o];
      e.hasOwnProperty(o) &&
        !ht(s) &&
        ((Array.isArray(s) && s.isCss) || W(s)
          ? n.push(''.concat(Or(o), ':'), s, ';')
          : ie(s)
            ? n.push.apply(n, xe(xe([''.concat(o, ' {')], ft(s), !1), ['}'], !1))
            : n.push(
                ''
                  .concat(Or(o), ': ')
                  .concat(
                    ((r = o),
                    (t = s) == null || typeof t == 'boolean' || t === ''
                      ? ''
                      : typeof t != 'number' || t === 0 || r in Lt || r.startsWith('--')
                        ? String(t).trim()
                        : ''.concat(t, 'px')),
                    ';',
                  ),
              ));
    }
    return n;
  };
function q(e, r, t, n) {
  if (ht(e)) return [];
  if (jr(e)) return ['.'.concat(e.styledComponentId)];
  if (W(e)) {
    if (!W((s = e)) || (s.prototype && s.prototype.isReactComponent) || !r) return [e];
    var o = e(r);
    return q(o, r, t, n);
  }
  var s;
  return e instanceof _n
    ? t
      ? (e.inject(t, n), [e.getName(n)])
      : [e]
    : ie(e)
      ? ft(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            Me,
            e.map(function (i) {
              return q(i, r, t, n);
            }),
          )
        : [e.toString()];
}
function wn(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (W(t) && !jr(t)) return !1;
  }
  return !0;
}
var In = ot(ze),
  bn = (function () {
    function e(r, t, n) {
      (this.rules = r),
        (this.staticRulesId = ''),
        (this.isStatic = (n === void 0 || n.isStatic) && wn(r)),
        (this.componentId = t),
        (this.baseHash = Q(In, t)),
        (this.baseStyle = n),
        dt.registerId(t);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (r, t, n) {
        var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : '';
        if (this.isStatic && !n.hash)
          if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = T(o, this.staticRulesId);
          else {
            var s = Vr(q(this.rules, r, t, n)),
              i = Te(Q(this.baseHash, s) >>> 0);
            if (!t.hasNameForId(this.componentId, i)) {
              var l = n(s, '.'.concat(i), void 0, this.componentId);
              t.insertRules(this.componentId, i, l);
            }
            (o = T(o, i)), (this.staticRulesId = i);
          }
        else {
          for (var c = Q(this.baseHash, n.hash), g = '', f = 0; f < this.rules.length; f++) {
            var y = this.rules[f];
            if (typeof y == 'string') g += y;
            else if (y) {
              var v = Vr(q(y, r, t, n));
              (c = Q(c, v + f)), (g += v);
            }
          }
          if (g) {
            var p = Te(c >>> 0);
            t.hasNameForId(this.componentId, p) || t.insertRules(this.componentId, p, n(g, '.'.concat(p), void 0, this.componentId)),
              (o = T(o, p));
          }
        }
        return o;
      }),
      e
    );
  })(),
  Ce = G.createContext(void 0);
Ce.Consumer;
function En(e) {
  var r = G.useContext(Ce),
    t = br.useMemo(
      function () {
        return (function (n, o) {
          if (!n) throw U(14);
          if (W(n)) {
            var s = n(o);
            return s;
          }
          if (Array.isArray(n) || typeof n != 'object') throw U(8);
          return o ? M(M({}, o), n) : n;
        })(e.theme, r);
      },
      [e.theme, r],
    );
  return e.children ? G.createElement(Ce.Provider, { value: t }, e.children) : null;
}
var Pe = {};
function Cn(e, r, t) {
  var n = jr(e),
    o = e,
    s = !Fe(e),
    i = r.attrs,
    l = i === void 0 ? Me : i,
    c = r.componentId,
    g =
      c === void 0
        ? (function (C, A) {
            var _ = typeof C != 'string' ? 'sc' : Br(C);
            Pe[_] = (Pe[_] || 0) + 1;
            var u = ''.concat(_, '-').concat(Ut(ze + _ + Pe[_]));
            return A ? ''.concat(A, '-').concat(u) : u;
          })(r.displayName, r.parentComponentId)
        : c,
    f = r.displayName,
    y =
      f === void 0
        ? (function (C) {
            return Fe(C) ? 'styled.'.concat(C) : 'Styled('.concat(Yt(C), ')');
          })(e)
        : f,
    v = r.displayName && r.componentId ? ''.concat(Br(r.displayName), '-').concat(r.componentId) : r.componentId || g,
    p = n && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
    I = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var E = r.shouldForwardProp;
      I = function (C, A) {
        return S(C, A) && E(C, A);
      };
    } else I = S;
  }
  var k = new bn(t, v, n ? o.componentStyle : void 0);
  function b(C, A) {
    return (function (_, u, re) {
      var ce = _.attrs,
        gt = _.componentStyle,
        yt = _.defaultProps,
        vt = _.foldedComponentIds,
        _t = _.styledComponentId,
        xt = _.target,
        wt = G.useContext(Ce),
        It = Tr(),
        Ne = _.shouldForwardProp || It.shouldForwardProp,
        zr = Ot(u, wt, yt) || X,
        H = (function (de, ne, ue) {
          for (var oe, L = M(M({}, ne), { className: void 0, theme: ue }), Be = 0; Be < de.length; Be += 1) {
            var pe = W((oe = de[Be])) ? oe(L) : oe;
            for (var V in pe) L[V] = V === 'className' ? T(L[V], pe[V]) : V === 'style' ? M(M({}, L[V]), pe[V]) : pe[V];
          }
          return ne.className && (L.className = T(L.className, ne.className)), L;
        })(ce, u, zr),
        le = H.as || xt,
        te = {};
      for (var P in H)
        H[P] === void 0 ||
          P[0] === '$' ||
          P === 'as' ||
          (P === 'theme' && H.theme === zr) ||
          (P === 'forwardedAs' ? (te.as = H.forwardedAs) : (Ne && !Ne(P, le)) || (te[P] = H[P]));
      var Mr = (function (de, ne) {
          var ue = Tr(),
            oe = de.generateAndInjectStyles(ne, ue.styleSheet, ue.stylis);
          return oe;
        })(gt, H),
        Re = T(vt, _t);
      return (
        Mr && (Re += ' ' + Mr),
        H.className && (Re += ' ' + H.className),
        (te[Fe(le) && !tt.has(le) ? 'class' : 'className'] = Re),
        (te.ref = re),
        br.createElement(le, te)
      );
    })(w, C, A);
  }
  b.displayName = y;
  var w = G.forwardRef(b);
  return (
    (w.attrs = p),
    (w.componentStyle = k),
    (w.displayName = y),
    (w.shouldForwardProp = I),
    (w.foldedComponentIds = n ? T(o.foldedComponentIds, o.styledComponentId) : ''),
    (w.styledComponentId = v),
    (w.target = n ? o.target : e),
    Object.defineProperty(w, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (C) {
        this._foldedDefaultProps = n
          ? (function (A) {
              for (var _ = [], u = 1; u < arguments.length; u++) _[u - 1] = arguments[u];
              for (var re = 0, ce = _; re < ce.length; re++) Oe(A, ce[re], !0);
              return A;
            })({}, o.defaultProps, C)
          : C;
      },
    }),
    Ar(w, function () {
      return '.'.concat(w.styledComponentId);
    }),
    s &&
      ct(w, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    w
  );
}
function qr(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}
var Gr = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function Sn(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  if (W(e) || ie(e)) return Gr(q(qr(Me, xe([e], r, !0))));
  var n = e;
  return r.length === 0 && n.length === 1 && typeof n[0] == 'string' ? q(n) : Gr(q(qr(n, r)));
}
function Ge(e, r, t) {
  if ((t === void 0 && (t = X), !r)) throw U(1, r);
  var n = function (o) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return e(r, t, Sn.apply(void 0, xe([o], s, !1)));
  };
  return (
    (n.attrs = function (o) {
      return Ge(e, r, M(M({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
    }),
    (n.withConfig = function (o) {
      return Ge(e, r, M(M({}, t), o));
    }),
    n
  );
}
var mt = function (e) {
    return Ge(Cn, e);
  },
  Ee = mt;
tt.forEach(function (e) {
  Ee[e] = mt(e);
});
const We = Ee.span`
  font-size: ${(e) => e.theme.smallFontSize};
  font-family: ${(e) => e.theme.coreFontFamily};
  color: ${(e) => e.theme.accentColor};
  display: ${({ $visible: e }) => (e ? 'block' : 'none')};
`;
try {
  (We.displayName = 'StyledErrorMessage'),
    (We.__docgenInfo = {
      description: '',
      displayName: 'StyledErrorMessage',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
const Nn = ({ errorId: e, testId: r, message: t = 'Invalid input', visible: n = !1, style: o }) =>
  a.jsx(We, { id: e, $visible: n, 'data-testid': r, style: o, children: t });
try {
  (ErrorMessage.displayName = 'ErrorMessage'),
    (ErrorMessage.__docgenInfo = {
      description: '',
      displayName: 'ErrorMessage',
      props: {
        errorId: { defaultValue: null, description: '', name: 'errorId', required: !0, type: { name: 'string' } },
        visible: { defaultValue: { value: 'false' }, description: '', name: 'visible', required: !1, type: { name: 'boolean' } },
        message: { defaultValue: { value: 'Invalid input' }, description: '', name: 'message', required: !1, type: { name: 'string' } },
        testId: { defaultValue: null, description: '', name: 'testId', required: !1, type: { name: 'string' } },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } },
      },
    });
} catch {}
var m = ((e) => (
  (e.ArrowDown = 'arrow-down'),
  (e.ArrowUp = 'arrow-up'),
  (e.Back = 'back'),
  (e.Cancel = 'cancel'),
  (e.CheckboxChecked = 'checkbox-checked'),
  (e.CheckboxUnchecked = 'checkbox-unchecked'),
  (e.CheckMark = 'check-mark'),
  (e.ChevronDown = 'chevron-down'),
  (e.ChevronLeft = 'chevron-left'),
  (e.ChevronRight = 'chevron-right'),
  (e.ChevronUp = 'chevron-up'),
  (e.Clear = 'clear'),
  (e.Copy = 'copy'),
  (e.Cut = 'cut'),
  (e.Delete = 'delete'),
  (e.Download = 'download'),
  (e.Error = 'error'),
  (e.Forward = 'forward'),
  (e.Help = 'help'),
  (e.Hide = 'hide'),
  (e.Info = 'info'),
  (e.Paste = 'paste'),
  (e.Question = 'question'),
  (e.Save = 'save'),
  (e.Show = 'show'),
  (e.Upload = 'upload'),
  (e.Warning = 'warning'),
  (e.Remove = 'remove'),
  e
))(m || {});
function Ue(e) {
  return a.jsx('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M21.886 5.536A1.002 1.002 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13a.998.998 0 001.644 0l9-13a.998.998 0 00.064-1.033zM12 17.243L4.908 7h14.184L12 17.243z',
    }),
  });
}
try {
  (Ue.displayName = 'ArrowDownIcon'), (Ue.__docgenInfo = { description: '', displayName: 'ArrowDownIcon', props: {} });
} catch {}
function Ye(e) {
  return a.jsx('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M3 19h18a1.002 1.002 0 00.823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 003 19zm9-12.243L19.092 17H4.908L12 6.757z',
    }),
  });
}
try {
  (Ye.displayName = 'ArrowUpIcon'), (Ye.__docgenInfo = { description: '', displayName: 'ArrowUpIcon', props: {} });
} catch {}
function Qe(e) {
  return a.jsx('svg', {
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 48,
      d: 'M328 112L184 256l144 144',
    }),
  });
}
try {
  (Qe.displayName = 'BackIcon'), (Qe.__docgenInfo = { description: '', displayName: 'BackIcon', props: {} });
} catch {}
function Ke(e) {
  return a.jsx('svg', {
    viewBox: '0 0 470 1000',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156',
    }),
  });
}
try {
  (Ke.displayName = 'CancelIcon'), (Ke.__docgenInfo = { description: '', displayName: 'CancelIcon', props: {} });
} catch {}
function Ze(e) {
  return a.jsx('svg', {
    viewBox: '0 0 16 16',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fill: 'currentColor',
      d: 'M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 12.414L3.293 8.707l1.414-1.414L7 9.586l4.793-4.793 1.414 1.414L7 12.414z',
    }),
  });
}
try {
  (Ze.displayName = 'CheckboxCheckedIcon'), (Ze.__docgenInfo = { description: '', displayName: 'CheckboxCheckedIcon', props: {} });
} catch {}
function Je(e) {
  return a.jsx('svg', {
    viewBox: '0 0 16 16',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fill: 'currentColor',
      d: 'M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14H2V2h12v12z',
    }),
  });
}
try {
  (Je.displayName = 'CheckboxUncheckedIcon'), (Je.__docgenInfo = { description: '', displayName: 'CheckboxUncheckedIcon', props: {} });
} catch {}
function Xe(e) {
  return a.jsx('svg', {
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z',
    }),
  });
}
try {
  (Xe.displayName = 'CheckMarkIcon'), (Xe.__docgenInfo = { description: '', displayName: 'CheckMarkIcon', props: {} });
} catch {}
function er(e) {
  return a.jsx('svg', {
    fill: 'currentColor',
    viewBox: '0 0 16 16',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fillRule: 'evenodd',
      d: 'M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z',
    }),
  });
}
try {
  (er.displayName = 'ChevronDownIcon'), (er.__docgenInfo = { description: '', displayName: 'ChevronDownIcon', props: {} });
} catch {}
function rr(e) {
  return a.jsx('svg', {
    fill: 'currentColor',
    viewBox: '0 0 16 16',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fillRule: 'evenodd',
      d: 'M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z',
    }),
  });
}
try {
  (rr.displayName = 'ChevronLeftIcon'), (rr.__docgenInfo = { description: '', displayName: 'ChevronLeftIcon', props: {} });
} catch {}
function tr(e) {
  return a.jsx('svg', {
    fill: 'currentColor',
    viewBox: '0 0 16 16',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fillRule: 'evenodd',
      d: 'M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z',
    }),
  });
}
try {
  (tr.displayName = 'ChevronRightIcon'), (tr.__docgenInfo = { description: '', displayName: 'ChevronRightIcon', props: {} });
} catch {}
function nr(e) {
  return a.jsx('svg', {
    fill: 'currentColor',
    viewBox: '0 0 16 16',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fillRule: 'evenodd',
      d: 'M7.776 5.553a.5.5 0 01.448 0l6 3a.5.5 0 11-.448.894L8 6.56 2.224 9.447a.5.5 0 11-.448-.894l6-3z',
    }),
  });
}
try {
  (nr.displayName = 'ChevronUpIcon'), (nr.__docgenInfo = { description: '', displayName: 'ChevronUpIcon', props: {} });
} catch {}
function or(e) {
  return a.jsxs('svg', {
    viewBox: '0 0 1024 1024',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('defs', { children: a.jsx('style', {}) }),
      a.jsx('path', {
        d: 'M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z',
      }),
    ],
  });
}
try {
  (or.displayName = 'ClearIcon'), (or.__docgenInfo = { description: '', displayName: 'ClearIcon', props: {} });
} catch {}
function ar(e) {
  return a.jsxs('svg', {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    viewBox: '0 0 24 24',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', { d: 'M11 9 H20 A2 2 0 0 1 22 11 V20 A2 2 0 0 1 20 22 H11 A2 2 0 0 1 9 20 V11 A2 2 0 0 1 11 9 z' }),
      a.jsx('path', { d: 'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1' }),
    ],
  });
}
try {
  (ar.displayName = 'CopyIcon'), (ar.__docgenInfo = { description: '', displayName: 'CopyIcon', props: {} });
} catch {}
function sr(e) {
  return a.jsxs('svg', {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    viewBox: '0 0 24 24',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', { stroke: 'none', d: 'M0 0h24v24H0z' }),
      a.jsx('path', { d: 'M10 17 A3 3 0 0 1 7 20 A3 3 0 0 1 4 17 A3 3 0 0 1 10 17 z' }),
      a.jsx('path', { d: 'M20 17 A3 3 0 0 1 17 20 A3 3 0 0 1 14 17 A3 3 0 0 1 20 17 z' }),
      a.jsx('path', { d: 'M9.15 14.85L18 4M6 4l8.85 10.85' }),
    ],
  });
}
try {
  (sr.displayName = 'CutIcon'), (sr.__docgenInfo = { description: '', displayName: 'CutIcon', props: {} });
} catch {}
function ir(e) {
  return a.jsx('svg', {
    viewBox: '0 0 1024 1024',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z',
    }),
  });
}
try {
  (ir.displayName = 'DeleteIcon'), (ir.__docgenInfo = { description: '', displayName: 'DeleteIcon', props: {} });
} catch {}
function cr(e) {
  return a.jsx('svg', {
    viewBox: '0 0 1024 1024',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z',
    }),
  });
}
try {
  (cr.displayName = 'DownloadIcon'), (cr.__docgenInfo = { description: '', displayName: 'DownloadIcon', props: {} });
} catch {}
function lr(e) {
  return a.jsxs('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', { d: 'M11 7h2v7h-2zm0 8h2v2h-2z' }),
      a.jsx('path', {
        d: 'M21.707 7.293l-5-5A.996.996 0 0016 2H8a.996.996 0 00-.707.293l-5 5A.996.996 0 002 8v8c0 .266.105.52.293.707l5 5A.996.996 0 008 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0022 16V8a.996.996 0 00-.293-.707zM20 15.586L15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z',
      }),
    ],
  });
}
try {
  (lr.displayName = 'ErrorIcon'), (lr.__docgenInfo = { description: '', displayName: 'ErrorIcon', props: {} });
} catch {}
function dr(e) {
  return a.jsx('svg', {
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 48,
      d: 'M184 112l144 144-144 144',
    }),
  });
}
try {
  (dr.displayName = 'ForwardIcon'), (dr.__docgenInfo = { description: '', displayName: 'ForwardIcon', props: {} });
} catch {}
function ur(e) {
  return a.jsx('svg', {
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM192.13 260.18a64 64 0 1159.69 59.69 64.07 64.07 0 01-59.69-59.69zm240-66.64l-96.37 5.84a4.06 4.06 0 01-3.44-1.59 96 96 0 00-18.07-18.07 4.06 4.06 0 01-1.59-3.44l5.84-96.37a4 4 0 015.42-3.51A193 193 0 01435.6 188.12a4 4 0 01-3.51 5.42zM193.54 79.91l5.84 96.37a4.06 4.06 0 01-1.59 3.44 96 96 0 00-18.07 18.07 4.06 4.06 0 01-3.44 1.59l-96.37-5.84a4 4 0 01-3.51-5.42A193 193 0 01188.12 76.4a4 4 0 015.42 3.51zM79.91 318.46l96.37-5.84a4.06 4.06 0 013.44 1.59 96 96 0 0018.07 18.07 4.06 4.06 0 011.59 3.44l-5.84 96.37a4 4 0 01-5.42 3.51A193 193 0 0176.4 323.88a4 4 0 013.51-5.42zm238.55 113.63l-5.84-96.37a4.06 4.06 0 011.59-3.44 96 96 0 0018.07-18.07 4.06 4.06 0 013.44-1.59l96.37 5.84a4 4 0 013.51 5.42A193 193 0 01323.88 435.6a4 4 0 01-5.42-3.51z',
    }),
  });
}
try {
  (ur.displayName = 'HelpIcon'), (ur.__docgenInfo = { description: '', displayName: 'HelpIcon', props: {} });
} catch {}
function pr(e) {
  return a.jsx('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 011.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 000 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 000-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0112 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z',
    }),
  });
}
try {
  (pr.displayName = 'HideIcon'), (pr.__docgenInfo = { description: '', displayName: 'HideIcon', props: {} });
} catch {}
function hr(e) {
  return a.jsxs('svg', {
    viewBox: '0 0 1024 1024',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', {
        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
      }),
      a.jsx('path', {
        d: 'M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z',
      }),
    ],
  });
}
try {
  (hr.displayName = 'InfoIcon'), (hr.__docgenInfo = { description: '', displayName: 'InfoIcon', props: {} });
} catch {}
function fr(e) {
  return a.jsx('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 00-1-1H8a1 1 0 00-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z',
    }),
  });
}
try {
  (fr.displayName = 'PasteIcon'), (fr.__docgenInfo = { description: '', displayName: 'PasteIcon', props: {} });
} catch {}
function mr(e) {
  return a.jsxs('svg', {
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', {
        fill: 'none',
        stroke: 'currentColor',
        strokeMiterlimit: 10,
        strokeWidth: 32,
        d: 'M256 80a176 176 0 10176 176A176 176 0 00256 80z',
      }),
      a.jsx('path', {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 28,
        d: 'M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296',
      }),
      a.jsx('path', { d: 'M270 348 A20 20 0 0 1 250 368 A20 20 0 0 1 230 348 A20 20 0 0 1 270 348 z' }),
    ],
  });
}
try {
  (mr.displayName = 'QuestionIcon'), (mr.__docgenInfo = { description: '', displayName: 'QuestionIcon', props: {} });
} catch {}
function gr(e) {
  return a.jsxs('svg', {
    viewBox: '0 0 512 512',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinejoin: 'round',
        strokeWidth: 32,
        d: 'M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84v0L46.33 256l88.86 134.11z',
      }),
      a.jsx('path', {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 32,
        d: 'M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33',
      }),
    ],
  });
}
try {
  (gr.displayName = 'RemoveIcon'), (gr.__docgenInfo = { description: '', displayName: 'RemoveIcon', props: {} });
} catch {}
function yr(e) {
  return a.jsx('svg', {
    viewBox: '0 0 1024 1024',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: a.jsx('path', {
      d: 'M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z',
    }),
  });
}
try {
  (yr.displayName = 'SaveIcon'), (yr.__docgenInfo = { description: '', displayName: 'SaveIcon', props: {} });
} catch {}
function vr(e) {
  return a.jsxs('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', { d: 'M12 9a3.02 3.02 0 00-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z' }),
      a.jsx('path', {
        d: 'M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z',
      }),
    ],
  });
}
try {
  (vr.displayName = 'ShowIcon'), (vr.__docgenInfo = { description: '', displayName: 'ShowIcon', props: {} });
} catch {}
function _r(e) {
  return a.jsxs('svg', {
    fill: 'currentColor',
    viewBox: '0 0 16 16',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', {
        d: 'M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z',
      }),
      a.jsx('path', {
        d: 'M7.646 1.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 2.707V11.5a.5.5 0 01-1 0V2.707L5.354 4.854a.5.5 0 11-.708-.708l3-3z',
      }),
    ],
  });
}
try {
  (_r.displayName = 'UploadIcon'), (_r.__docgenInfo = { description: '', displayName: 'UploadIcon', props: {} });
} catch {}
function xr(e) {
  return a.jsxs('svg', {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
    ...e,
    children: [
      a.jsx('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
      a.jsx('path', {
        d: 'M4 20v-6a8 8 0 1116 0v6h1v2H3v-2h1zm2 0h12v-6a6 6 0 10-12 0v6zm5-18h2v3h-2V2zm8.778 2.808l1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222zM7 14a5 5 0 015-5v2a3 3 0 00-3 3H7z',
      }),
    ],
  });
}
try {
  (xr.displayName = 'WarningIcon'), (xr.__docgenInfo = { description: '', displayName: 'WarningIcon', props: {} });
} catch {}
const kn = ({ name: e }) => {
  switch (e) {
    case m.ArrowDown:
      return a.jsx(Ue, {});
    case m.ArrowUp:
      return a.jsx(Ye, {});
    case m.Back:
      return a.jsx(Qe, {});
    case m.Cancel:
      return a.jsx(Ke, {});
    case m.CheckboxChecked:
      return a.jsx(Ze, {});
    case m.CheckboxUnchecked:
      return a.jsx(Je, {});
    case m.CheckMark:
      return a.jsx(Xe, {});
    case m.ChevronDown:
      return a.jsx(er, {});
    case m.ChevronUp:
      return a.jsx(nr, {});
    case m.ChevronLeft:
      return a.jsx(rr, {});
    case m.ChevronRight:
      return a.jsx(tr, {});
    case m.Clear:
      return a.jsx(or, {});
    case m.Copy:
      return a.jsx(ar, {});
    case m.Cut:
      return a.jsx(sr, {});
    case m.Delete:
      return a.jsx(ir, {});
    case m.Download:
      return a.jsx(cr, {});
    case m.Error:
      return a.jsx(lr, {});
    case m.Forward:
      return a.jsx(dr, {});
    case m.Help:
      return a.jsx(ur, {});
    case m.Hide:
      return a.jsx(pr, {});
    case m.Info:
      return a.jsx(hr, {});
    case m.Paste:
      return a.jsx(fr, {});
    case m.Question:
      return a.jsx(mr, {});
    case m.Save:
      return a.jsx(yr, {});
    case m.Show:
      return a.jsx(vr, {});
    case m.Upload:
      return a.jsx(_r, {});
    case m.Warning:
      return a.jsx(xr, {});
    case m.Remove:
      return a.jsx(gr, {});
    default:
      return null;
  }
};
try {
  (Icon.displayName = 'Icon'),
    (Icon.__docgenInfo = {
      description: '',
      displayName: 'Icon',
      props: {
        name: {
          defaultValue: null,
          description: '',
          name: 'name',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"arrow-down"' },
              { value: '"arrow-up"' },
              { value: '"back"' },
              { value: '"cancel"' },
              { value: '"checkbox-checked"' },
              { value: '"checkbox-unchecked"' },
              { value: '"check-mark"' },
              { value: '"chevron-down"' },
              { value: '"chevron-left"' },
              { value: '"chevron-right"' },
              { value: '"chevron-up"' },
              { value: '"clear"' },
              { value: '"copy"' },
              { value: '"cut"' },
              { value: '"delete"' },
              { value: '"download"' },
              { value: '"error"' },
              { value: '"forward"' },
              { value: '"help"' },
              { value: '"hide"' },
              { value: '"info"' },
              { value: '"paste"' },
              { value: '"question"' },
              { value: '"save"' },
              { value: '"show"' },
              { value: '"upload"' },
              { value: '"warning"' },
              { value: '"remove"' },
            ],
          },
        },
      },
    });
} catch {}
const wr = Ee.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: ${(e) => e.theme.baseFontSize};
  color: ${(e) => e.theme.secondaryColor};
  padding: 0;

  &:focus-visible {
    outline: ${(e) => e.theme.outlineBorder};
    outline-offset: -1px;
  }

  &:hover {
    color: ${(e) => e.theme.tertiaryColor};
    filter: drop-shadow(${(e) => e.theme.textShadow});
  }

  svg {
    cursor: pointer;
    height: ${(e) => e.theme.iconSize};
    width: ${(e) => e.theme.iconSize};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;
try {
  (wr.displayName = 'StyledInputInnerButton'),
    (wr.__docgenInfo = {
      description: '',
      displayName: 'StyledInputInnerButton',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
const Wr = ({ onClick: e, label: r, icon: t, disabled: n }) =>
  a.jsx(wr, { onClick: e, 'aria-label': r, type: 'button', disabled: n, children: a.jsx(kn, { name: t }) });
try {
  (Wr.displayName = 'InputInnerButton'),
    (Wr.__docgenInfo = {
      description: '',
      displayName: 'InputInnerButton',
      props: {
        onClick: {
          defaultValue: null,
          description: '',
          name: 'onClick',
          required: !0,
          type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
        },
        label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
        icon: {
          defaultValue: null,
          description: '',
          name: 'icon',
          required: !0,
          type: {
            name: 'enum',
            value: [
              { value: '"arrow-down"' },
              { value: '"arrow-up"' },
              { value: '"back"' },
              { value: '"cancel"' },
              { value: '"checkbox-checked"' },
              { value: '"checkbox-unchecked"' },
              { value: '"check-mark"' },
              { value: '"chevron-down"' },
              { value: '"chevron-left"' },
              { value: '"chevron-right"' },
              { value: '"chevron-up"' },
              { value: '"clear"' },
              { value: '"copy"' },
              { value: '"cut"' },
              { value: '"delete"' },
              { value: '"download"' },
              { value: '"error"' },
              { value: '"forward"' },
              { value: '"help"' },
              { value: '"hide"' },
              { value: '"info"' },
              { value: '"paste"' },
              { value: '"question"' },
              { value: '"save"' },
              { value: '"show"' },
              { value: '"upload"' },
              { value: '"warning"' },
              { value: '"remove"' },
            ],
          },
        },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
      },
    });
} catch {}
const Ir = Ee.label`
  display: flex;
  align-items: center;
  font-size: ${(e) => e.theme.smallFontSize};
  font-family: ${(e) => e.theme.coreFontFamily};
  gap: ${(e) => e.theme.smallGap};
  color: ${(e) => e.theme.primaryColor};

  & + span {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & abbr {
    text-decoration: none;
    cursor: pointer;
    color: ${(e) => e.theme.accentColor};
  }
`;
try {
  (Ir.displayName = 'StyledLabel'),
    (Ir.__docgenInfo = {
      description: '',
      displayName: 'StyledLabel',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
const Rn = ({ label: e, required: r, inputId: t, icon: n, iconPosition: o, isTextHidden: s = !1, style: i }) => {
  const l = !!n && o === 'left',
    c = !!n && o === 'right';
  return a.jsxs(Ir, {
    htmlFor: t,
    style: i,
    children: [l && n, !s && a.jsx('span', { children: e }), r && a.jsx('abbr', { title: 'required', children: '*' }), c && n],
  });
};
try {
  (Label.displayName = 'Label'),
    (Label.__docgenInfo = {
      description: '',
      displayName: 'Label',
      props: {
        label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
        required: { defaultValue: null, description: '', name: 'required', required: !0, type: { name: 'boolean' } },
        inputId: { defaultValue: null, description: '', name: 'inputId', required: !0, type: { name: 'string' } },
        isTextHidden: { defaultValue: { value: 'false' }, description: '', name: 'isTextHidden', required: !1, type: { name: 'boolean' } },
        icon: {
          defaultValue: null,
          description: '',
          name: 'icon',
          required: !1,
          type: { name: 'ReactElement<any, string | JSXElementConstructor<any>>' },
        },
        iconPosition: {
          defaultValue: null,
          description: '',
          name: 'iconPosition',
          required: !1,
          type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }] },
        },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } },
      },
    });
} catch {}
const jn = {
    primaryColor: 'hsl(0, 0%, 0%)',
    secondaryColor: 'hsl(209, 59%, 34%)',
    tertiaryColor: 'hsl(191, 95%, 43%)',
    backgroundColor: 'hsl(240, 100%, 100%)',
    accentColor: 'hsl(358, 85%, 52%)',
    transparentBackgroundColor: 'hsla(0, 0%, 0%, 0.3)',
    primaryGradient:
      'linear-gradient(to left, hsl(209, 59%, 14%) 0%, hsl(209, 59%, 24%) 8%, hsl(209, 59%, 24%) 92%, hsl(209, 59%, 14%) 100%)',
    accentGradient: 'linear-gradient(to left, hsl(12, 83%, 22%) 0%, hsl(12, 83%, 42%) 8%, hsl(12, 83%, 42%) 92%, hsl(12, 83%, 22%) 100%)',
    tintGradient: 'linear-gradient(to left, hsl(195, 53%, 23%) 0%, hsl(195, 53%, 33%) 8%, hsl(195, 53%, 33%) 92%, hsl(195, 53%, 23%) 100%)',
    boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
    insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
    regularBorder: '1px solid #24588AFF',
    accentBorder: '1px solid #ED1D23FF',
    outlineBorder: '1px solid #05B0D6FF',
    coreFontFamily: 'Arial, Helvetica, sans-serif',
    monospaceFontFamily: "'Courier New', Courier, monospace",
    baseFontSize: '1rem',
    smallFontSize: '0.8rem',
    headerFontSize: '2rem',
    smallGap: '0.25rem',
    mediumGap: '0.6rem',
    bigGap: '1rem',
    iconSize: '1rem',
    blockBorderRadius: '0.2rem',
    baseIndex: '1',
    tooltipIndex: '100',
    dropdownIndex: '200',
    modalIndex: '300',
  },
  An = {
    primaryColor: 'hsl(30, 36%, 90%)',
    secondaryColor: 'hsl(45, 77%, 79%)',
    tertiaryColor: 'hsl(184, 36%, 63%)',
    backgroundColor: 'hsl(345, 6%, 13%)',
    accentColor: 'hsl(9, 59%, 46%)',
    transparentBackgroundColor: 'hsla(45, 77%, 79%, 0.3)',
    primaryGradient: 'linear-gradient(to left, hsl(45, 77%, 20%) 0%, hsl(45, 77%, 59%) 8%, hsl(45, 77%, 50%) 92%, hsl(45, 77%, 20%) 100%)',
    accentGradient: 'linear-gradient(to left, hsl(9, 59%, 16%) 0%, hsl(9, 59%, 36%) 8%, hsl(9, 59%, 36%) 92%, hsl(9, 59%, 16%) 100%)',
    tintGradient: 'linear-gradient(to left, hsl(184, 36%, 20%) 0%, hsl(184, 36%, 43%) 8%, hsl(184, 36%, 43%) 92%, hsl(184, 36%, 20%) 100%)',
    boxShadow: 'rgba(239, 230, 220, 0.15) 2.4px 2.4px 3.2px',
    textShadow: '2.4px 2.4px 3.2px rgba(127, 190, 195, 0.3)',
    insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
    regularBorder: '1px solid #7FBEC3FF',
    accentBorder: '1px solid #BB4530FF',
    outlineBorder: '1px solid #EFE6DCFF',
    coreFontFamily: 'Arial, Helvetica, sans-serif',
    monospaceFontFamily: "'Courier New', Courier, monospace",
    baseFontSize: '1rem',
    smallFontSize: '0.8rem',
    headerFontSize: '2rem',
    smallGap: '0.25rem',
    mediumGap: '0.6rem',
    bigGap: '1rem',
    iconSize: '1rem',
    blockBorderRadius: '0.375rem',
    baseIndex: '1',
    tooltipIndex: '100',
    dropdownIndex: '200',
    modalIndex: '300',
  };
function Bn(e, r) {
  return e === 'dark' ? An : jn;
}
export {
  Ye as A,
  m as C,
  lr as E,
  ur as H,
  Wr as I,
  xr as W,
  kn as a,
  Rn as b,
  Ze as c,
  Ee as d,
  Je as e,
  Nn as f,
  Bn as g,
  Ue as h,
  Xe as i,
  hr as j,
  En as o,
};
