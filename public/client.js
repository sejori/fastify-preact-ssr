var n,
    l,
    u,
    i,
    o,
    r,
    f,
    e,
    c = {},
    s = [],
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    h = Array.isArray;

function v(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function p(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function y(l, u, t) {
  var i,
      o,
      r,
      f = {};

  for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return d(l, f, i, o, null);
}

function d(n, t, i, o, r) {
  var f = {
    type: n,
    props: t,
    key: i,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}

function k(n) {
  return n.children;
}

function b(n, l) {
  this.props = n, this.context = l;
}

function g(n, l) {
  if (null == l) return n.__ ? g(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? g(n) : null;
}

function m(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return m(n);
  }
}

function w(n) {
  (!n.__d && (n.__d = !0) && i.push(n) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}

function x() {
  var n, l, u, t, o, r, e, c, s;

  for (i.sort(f); n = i.shift();) n.__d && (l = i.length, t = void 0, o = void 0, r = void 0, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = v({}, e)).__v = e.__v + 1, L(s, e, r, u.__n, void 0 !== s.ownerSVGElement, null != e.__h ? [c] : null, t, null == c ? g(e) : c, e.__h, o), M(t, e, o), e.__e != c && m(e)), i.length > l && i.sort(f));

  x.__r = 0;
}

function P(n, l, u, t, i, o, r, f, e, a, v) {
  var p,
      y,
      _,
      b,
      g,
      m,
      w,
      x,
      P,
      S,
      H = 0,
      I = t && t.__k || s,
      T = I.length,
      j = T,
      z = l.length;

  for (u.__k = [], p = 0; p < z; p++) null != (b = u.__k[p] = null == (b = l[p]) || "boolean" == typeof b || "function" == typeof b ? null : "string" == typeof b || "number" == typeof b || "bigint" == typeof b ? d(null, b, null, null, b) : h(b) ? d(k, {
    children: b
  }, null, null, null) : b.__b > 0 ? d(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b) && (b.__ = u, b.__b = u.__b + 1, -1 === (x = A(b, I, w = p + H, j)) ? _ = c : (_ = I[x] || c, I[x] = void 0, j--), L(n, b, _, i, o, r, f, e, a, v), g = b.__e, (y = b.ref) && _.ref != y && (_.ref && O(_.ref, null, b), v.push(y, b.__c || g, b)), null != g && (null == m && (m = g), S = !(P = _ === c || null === _.__v) && x === w, P ? -1 == x && H-- : x !== w && (x === w + 1 ? (H++, S = !0) : x > w ? j > z - w ? (H += x - w, S = !0) : H-- : H = x < w && x == w - 1 ? x - w : 0), w = p + H, S = S || x == p && !P, "function" != typeof b.type || x === w && _.__k !== b.__k ? "function" == typeof b.type || S ? void 0 !== b.__d ? (e = b.__d, b.__d = void 0) : e = g.nextSibling : e = $(n, g, e) : e = C(b, e, n), "function" == typeof u.type && (u.__d = e)));

  for (u.__e = m, p = T; p--;) null != I[p] && ("function" == typeof u.type && null != I[p].__e && I[p].__e == u.__d && (u.__d = I[p].__e.nextSibling), q(I[p], I[p]));
}

function C(n, l, u) {
  for (var t, i = n.__k, o = 0; i && o < i.length; o++) (t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? C(t, l, u) : $(u, t.__e, l));

  return l;
}

function S(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (h(n) ? n.some(function (n) {
    S(n, l);
  }) : l.push(n)), l;
}

function $(n, l, u) {
  return null == u || u.parentNode !== n ? n.insertBefore(l, null) : l == u && null != l.parentNode || n.insertBefore(l, u), l.nextSibling;
}

function A(n, l, u, t) {
  var i = n.key,
      o = n.type,
      r = u - 1,
      f = u + 1,
      e = l[u];
  if (null === e || e && i == e.key && o === e.type) return u;
  if (t > (null != e ? 1 : 0)) for (; r >= 0 || f < l.length;) {
    if (r >= 0) {
      if ((e = l[r]) && i == e.key && o === e.type) return r;
      r--;
    }

    if (f < l.length) {
      if ((e = l[f]) && i == e.key && o === e.type) return f;
      f++;
    }
  }
  return -1;
}

function H(n, l, u, t, i) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || T(n, o, null, u[o], t);

  for (o in l) i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || T(n, o, l[o], u[o], t);
}

function I(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}

function T(n, l, u, t, i) {
  var o;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || I(n.style, l, "");
      if (u) for (l in u) t && u[l] === t[l] || I(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? z : j, o) : n.removeEventListener(l, o ? z : j, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}

function j(n) {
  return this.l[n.type + !1](l.event ? l.event(n) : n);
}

function z(n) {
  return this.l[n.type + !0](l.event ? l.event(n) : n);
}

function L(n, u, t, i, o, r, f, e, c, s) {
  var a,
      p,
      y,
      d,
      _,
      g,
      m,
      w,
      x,
      C,
      S,
      $,
      A,
      H,
      I,
      T = u.type;

  if (void 0 !== u.constructor) return null;
  null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);

  try {
    n: if ("function" == typeof T) {
      if (w = u.props, x = (a = T.contextType) && i[a.__c], C = a ? x ? x.props.value : a.__ : i, t.__c ? m = (p = u.__c = t.__c).__ = p.__E : ("prototype" in T && T.prototype.render ? u.__c = p = new T(w, C) : (u.__c = p = new b(w, C), p.constructor = T, p.render = B), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = C, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != T.getDerivedStateFromProps && (p.__s == p.state && (p.__s = v({}, p.__s)), v(p.__s, T.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == T.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
        if (null == T.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, C), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, C) || u.__v === t.__v)) {
          for (u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), S = 0; S < p._sb.length; S++) p.__h.push(p._sb[S]);

          p._sb = [], p.__h.length && f.push(p);
          break n;
        }

        null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, C), null != p.componentDidUpdate && p.__h.push(function () {
          p.componentDidUpdate(d, _, g);
        });
      }

      if (p.context = C, p.props = w, p.__P = n, p.__e = !1, $ = l.__r, A = 0, "prototype" in T && T.prototype.render) {
        for (p.state = p.__s, p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), H = 0; H < p._sb.length; H++) p.__h.push(p._sb[H]);

        p._sb = [];
      } else do {
        p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
      } while (p.__d && ++A < 25);

      p.state = p.__s, null != p.getChildContext && (i = v(v({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(d, _)), P(n, h(I = null != a && a.type === k && null == a.key ? a.props.children : a) ? I : [I], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), m && (p.__E = p.__ = null);
    } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = N(t.__e, u, t, i, o, r, f, c, s);

    (a = l.diffed) && a(u);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, t);
  }
}

function M(n, u, t) {
  for (var i = 0; i < t.length; i++) O(t[i], t[++i], t[++i]);

  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}

function N(l, u, t, i, o, r, f, e, s) {
  var a,
      v,
      y,
      d = t.props,
      _ = u.props,
      k = u.type,
      b = 0;
  if ("svg" === k && (o = !0), null != r) for (; b < r.length; b++) if ((a = r[b]) && "setAttribute" in a == !!k && (k ? a.localName === k : 3 === a.nodeType)) {
    l = a, r[b] = null;
    break;
  }

  if (null == l) {
    if (null === k) return document.createTextNode(_);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, _.is && _), r = null, e = !1;
  }

  if (null === k) d === _ || e && l.data === _ || (l.data = _);else {
    if (r = r && n.call(l.childNodes), v = (d = t.props || c).dangerouslySetInnerHTML, y = _.dangerouslySetInnerHTML, !e) {
      if (null != r) for (d = {}, b = 0; b < l.attributes.length; b++) d[l.attributes[b].name] = l.attributes[b].value;
      (y || v) && (y && (v && y.__html == v.__html || y.__html === l.innerHTML) || (l.innerHTML = y && y.__html || ""));
    }

    if (H(l, _, d, o, e), y) u.__k = [];else if (P(l, h(b = u.props.children) ? b : [b], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && g(t, 0), e, s), null != r) for (b = r.length; b--;) null != r[b] && p(r[b]);
    e || ("value" in _ && void 0 !== (b = _.value) && (b !== l.value || "progress" === k && !b || "option" === k && b !== d.value) && T(l, "value", b, d.value, !1), "checked" in _ && void 0 !== (b = _.checked) && b !== l.checked && T(l, "checked", b, d.checked, !1));
  }
  return l;
}

function O(n, u, t) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, t);
  }
}

function q(n, u, t) {
  var i, o;

  if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || O(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    i.base = i.__P = null, n.__c = void 0;
  }

  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && q(i[o], u, t || "function" != typeof n.type);
  t || null == n.__e || p(n.__e), n.__ = n.__e = n.__d = void 0;
}

function B(n, l, u) {
  return this.constructor(n, u);
}

function D(u, t, i) {
  var o, r, f, e;
  l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], L(t, u = (!o && i || t).__k = y(k, null, [u]), r || c, c, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), M(f, u, e);
}

function E(n, l) {
  D(n, l, E);
}

function F(l, u, t) {
  var i,
      o,
      r,
      f,
      e = v({}, l.props);

  for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];

  return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), d(l.type, e, i || l.key, o || l.ref, null);
}

function G(n, l) {
  var u = {
    __c: l = "__cC" + e++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, t;
      return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
        return t;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(function (n) {
          n.__e = !0, w(n);
        });
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = s.slice, l = {
  __e: function (n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u = 0, b.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n && (n = n(v({}, u), this.props)), n && v(u, n), null != n && this.__v && (l && this._sb.push(l), w(this));
}, b.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, x.__r = 0, e = 0;

var t,
    r$1,
    u$1,
    i$1,
    o$1 = 0,
    f$1 = [],
    c$1 = [],
    e$1 = l.__b,
    a$1 = l.__r,
    v$1 = l.diffed,
    l$1 = l.__c,
    m$1 = l.unmount;

function d$1(t, u) {
  l.__h && l.__h(r$1, t, o$1 || u), o$1 = 0;
  var i = r$1.__H || (r$1.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c$1
  }), i.__[t];
}

function h$1(n) {
  return o$1 = 1, s$1(B$1, n);
}

function s$1(n, u, i) {
  var o = d$1(t++, 2);

  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B$1(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
        r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r$1, !r$1.u)) {
    var f = function (n, t, r) {
      if (!o.__c.__H) return !0;

      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });

      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };

    r$1.u = !0;
    var c = r$1.shouldComponentUpdate,
        e = r$1.componentWillUpdate;
    r$1.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }

      e && e.call(this, n, t, r);
    }, r$1.shouldComponentUpdate = f;
  }

  return o.__N || o.__;
}

function b$1() {
  for (var t; t = f$1.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k$1), t.__H.__h.forEach(w$1), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], l.__e(r, t.__v);
  }
}

l.__b = function (n) {
  r$1 = null, e$1 && e$1(n);
}, l.__r = function (n) {
  a$1 && a$1(n), t = 0;
  var i = (r$1 = n.__c).__H;
  i && (u$1 === r$1 ? (i.__h = [], r$1.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c$1, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k$1), i.__h.forEach(w$1), i.__h = [], t = 0)), u$1 = r$1;
}, l.diffed = function (t) {
  v$1 && v$1(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f$1.push(o) && i$1 === l.requestAnimationFrame || ((i$1 = l.requestAnimationFrame) || j$1)(b$1)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c$1 && (n.__ = n.__V), n.i = void 0, n.__V = c$1;
  })), u$1 = r$1 = null;
}, l.__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k$1), t.__h = t.__h.filter(function (n) {
        return !n.__ || w$1(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], l.__e(u, t.__v);
    }
  }), l$1 && l$1(t, r);
}, l.unmount = function (t) {
  m$1 && m$1(t);
  var r,
      u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k$1(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && l.__e(r, u.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;

function j$1(n) {
  var t,
      r = function () {
    clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
  },
      u = setTimeout(r, 100);

  g$1 && (t = requestAnimationFrame(r));
}

function k$1(n) {
  var t = r$1,
      u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r$1 = t;
}

function w$1(n) {
  var t = r$1;
  n.__c = n.__(), r$1 = t;
}

function B$1(n, t) {
  return "function" == typeof t ? t(n) : t;
}

var a$2 = {};

function c$2(n, t) {
  for (var r in t) n[r] = t[r];

  return n;
}

function s$2(n, t, r) {
  var i,
      o = /(?:\?([^#]*))?(#.*)?$/,
      e = n.match(o),
      u = {};
  if (e && e[1]) for (var f = e[1].split("&"), c = 0; c < f.length; c++) {
    var s = f[c].split("=");
    u[decodeURIComponent(s[0])] = decodeURIComponent(s.slice(1).join("="));
  }
  n = d$2(n.replace(o, "")), t = d$2(t || "");

  for (var h = Math.max(n.length, t.length), v = 0; v < h; v++) if (t[v] && ":" === t[v].charAt(0)) {
    var l = t[v].replace(/(^:|[+*?]+$)/g, ""),
        p = (t[v].match(/[+*?]+$/) || a$2)[0] || "",
        m = ~p.indexOf("+"),
        y = ~p.indexOf("*"),
        U = n[v] || "";

    if (!U && !y && (p.indexOf("?") < 0 || m)) {
      i = !1;
      break;
    }

    if (u[l] = decodeURIComponent(U), m || y) {
      u[l] = n.slice(v).map(decodeURIComponent).join("/");
      break;
    }
  } else if (t[v] !== n[v]) {
    i = !1;
    break;
  }

  return (!0 === r.default || !1 !== i) && u;
}

function h$2(n, t) {
  return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}

function v$2(n, t) {
  return n.index = t, n.rank = function (n) {
    return n.props.default ? 0 : d$2(n.props.path).map(l$2).join("");
  }(n), n.props;
}

function d$2(n) {
  return n.replace(/(^\/+|\/+$)/g, "").split("/");
}

function l$2(n) {
  return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
}

var p$1 = {},
    m$2 = [],
    y$1 = [],
    U = null,
    g$2 = {
  url: R()
},
    k$2 = G(g$2);

function R() {
  var n;
  return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p$1).pathname || "") + (n.search || "");
}

function $$1(n, t) {
  return void 0 === t && (t = !1), "string" != typeof n && n.url && (t = n.replace, n = n.url), function (n) {
    for (var t = m$2.length; t--;) if (m$2[t].canRoute(n)) return !0;

    return !1;
  }(n) && function (n, t) {
    void 0 === t && (t = "push"), U && U[t] ? U[t](n) : "undefined" != typeof history && history[t + "State"] && history[t + "State"](null, null, n);
  }(n, t ? "replace" : "push"), I$1(n);
}

function I$1(n) {
  for (var t = !1, r = 0; r < m$2.length; r++) m$2[r].routeTo(n) && (t = !0);

  return t;
}

function M$1(n) {
  if (n && n.getAttribute) {
    var t = n.getAttribute("href"),
        r = n.getAttribute("target");
    if (t && t.match(/^\//g) && (!r || r.match(/^_?self$/i))) return $$1(t);
  }
}

function b$2(n) {
  return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), !1;
}

function W(n) {
  if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
    var t = n.target;

    do {
      if ("a" === t.localName && t.getAttribute("href")) {
        if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
        if (M$1(t)) return b$2(n);
      }
    } while (t = t.parentNode);
  }
}

var w$2 = !1;

function D$1(n) {
  n.history && (U = n.history), this.state = {
    url: n.url || R()
  };
}

c$2(D$1.prototype = new b(), {
  shouldComponentUpdate: function (n) {
    return !0 !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
  },
  canRoute: function (n) {
    var t = S(this.props.children);
    return void 0 !== this.g(t, n);
  },
  routeTo: function (n) {
    this.setState({
      url: n
    });
    var t = this.canRoute(n);
    return this.p || this.forceUpdate(), t;
  },
  componentWillMount: function () {
    this.p = !0;
  },
  componentDidMount: function () {
    var n = this;
    w$2 || (w$2 = !0, U || addEventListener("popstate", function () {
      I$1(R());
    }), addEventListener("click", W)), m$2.push(this), U && (this.u = U.listen(function (t) {
      var r = t.location || t;
      n.routeTo("" + (r.pathname || "") + (r.search || ""));
    })), this.p = !1;
  },
  componentWillUnmount: function () {
    "function" == typeof this.u && this.u(), m$2.splice(m$2.indexOf(this), 1);
  },
  componentWillUpdate: function () {
    this.p = !0;
  },
  componentDidUpdate: function () {
    this.p = !1;
  },
  g: function (n, t) {
    n = n.filter(v$2).sort(h$2);

    for (var r = 0; r < n.length; r++) {
      var i = n[r],
          o = s$2(t, i.props.path, i.props);
      if (o) return [i, o];
    }
  },
  render: function (n, t) {
    var e,
        u,
        f = n.onChange,
        a = t.url,
        s = this.c,
        h = this.g(S(n.children), a);

    if (h && (u = F(h[0], c$2(c$2({
      url: a,
      matches: e = h[1]
    }, e), {
      key: void 0,
      ref: void 0
    }))), a !== (s && s.url)) {
      c$2(g$2, s = this.c = {
        url: a,
        previous: s && s.url,
        current: u,
        path: u ? u.props.path : null,
        matches: e
      }), s.router = this, s.active = u ? [u] : [];

      for (var v = y$1.length; v--;) y$1[v]({});

      "function" == typeof f && f(s);
    }

    return y(k$2.Provider, {
      value: s
    }, u);
  }
});

const Layout = ({
  navColour,
  children
}) => {
  return y(k, null, y("nav", {
    style: navStyle(navColour)
  }, y("a", {
    style: navLinkStyle,
    href: "/"
  }, "Home"), y("a", {
    style: navLinkStyle,
    href: "/about"
  }, "About")), y("main", {
    style: mainStyle
  }, children));
};

const navStyle = colour => `
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background-color: ${colour};
`;

const navLinkStyle = `
    margin: 1rem;
`;
const mainStyle = `
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
`;

const List = ({
  data
}) => {
  // takes a data prop
  // how many clicks have we counted? Default to 0
  const [count, setCount] = h$1(0); // shared event handler

  const handleClick = () => {
    setCount(count + 1);
  };

  return y("ul", null, data && data.map(i => y("li", null, i, ": ", y("button", {
    onClick: handleClick
  }, "Click me"))), y("li", null, count, " ", count === 1 ? 'click' : 'clicks', " counted"));
};

const App = () => {
  const [dataArray, setDataArray] = h$1(['Item 0', 'Item 1', 'Item 2']);
  return y("div", null, y(List, {
    data: dataArray
  }), y("button", {
    style: buttonStyle,
    onClick: () => setDataArray(dataArray => [...dataArray, `Item ${dataArray.length}`])
  }, "add item"));
};

const buttonStyle = `
    border: solid 1px red;
    background-color: orange;
    padding: 0.5rem;
    font-size: 1rem;
`;

const Home = () => {
  return y(Layout, {
    navColour: "palegreen"
  }, y("h1", null, "Home!"), y(App, null));
};

const About = () => {
  return y(Layout, {
    navColour: "lavender"
  }, y("h1", null, "About!"), y("img", {
    style: imgStyle,
    src: "/lighthouse-score.png",
    alt: "lighthouse-score"
  }), y("p", null, "Do I need to say anymore?"), y("a", {
    href: "https://github.com/sebringrose/fastify-preact-ssr"
  }, "Github"));
};

const imgStyle = `
    max-width: 100%;
`;

var pages = [{
  route: "/",
  component: Home
}, {
  route: "/about",
  component: About
}];

const Router = () => {
  return y(D$1, null, pages.map(page => y(page.component, {
    path: page.route
  })));
};

E(Router(), document.querySelector('#root'));
//# sourceMappingURL=client.js.map
