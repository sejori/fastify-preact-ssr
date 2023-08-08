'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

var n,
    l,
    u,
    r,
    e,
    s = [];

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

n = s.slice, l = {
  __e: function (n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u = 0, r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = 0;

var o = /[\s\n\\/='"\0<>]/,
    n$1 = /^xlink:?./,
    a = /["&<]/;

function i(e) {
  if (0 === e.length || !1 === a.test(e)) return e;

  for (var t = 0, r = 0, o = "", n = ""; r < e.length; r++) {
    switch (e.charCodeAt(r)) {
      case 34:
        n = "&quot;";
        break;

      case 38:
        n = "&amp;";
        break;

      case 60:
        n = "&lt;";
        break;

      default:
        continue;
    }

    r !== t && (o += e.slice(t, r)), o += n, t = r + 1;
  }

  return r !== t && (o += e.slice(t, r)), o;
}

var l$1 = {},
    c = new Set(["animation-iteration-count", "border-image-outset", "border-image-slice", "border-image-width", "box-flex", "box-flex-group", "box-ordinal-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-negative", "flex-order", "flex-positive", "flex-shrink", "flood-opacity", "font-weight", "grid-column", "grid-row", "line-clamp", "line-height", "opacity", "order", "orphans", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit", "stroke-opacity", "stroke-width", "tab-size", "widows", "z-index", "zoom"]),
    s$1 = /[A-Z]/g;

function _(e) {
  var t = "";

  for (var r in e) {
    var o = e[r];

    if (null != o && "" !== o) {
      var n = "-" == r[0] ? r : l$1[r] || (l$1[r] = r.replace(s$1, "-$&").toLowerCase()),
          a = ";";
      "number" != typeof o || n.startsWith("--") || c.has(n) || (a = "px;"), t = t + n + ":" + o + a;
    }
  }

  return t || void 0;
}

var u$1,
    p,
    d$1,
    f,
    v = [],
    h = Array.isArray,
    m = Object.assign;

function y$1(o, n) {
  var a = l.__s;
  l.__s = !0, u$1 = l.__b, p = l.diffed, d$1 = l.__r, f = l.unmount;
  var i = y(k, null);
  i.__k = [o];

  try {
    return x(o, n || k$1, !1, void 0, i);
  } finally {
    l.__c && l.__c(o, v), l.__s = a, v.length = 0;
  }
}

function g() {
  this.__d = !0;
}

var k$1 = {};

function b(e, t) {
  var r,
      o = e.type,
      n = !0;
  return e.__c ? (n = !1, (r = e.__c).state = r.__s) : r = new o(e.props, t), e.__c = r, r.__v = e, r.props = e.props, r.context = t, r.__d = !0, null == r.state && (r.state = k$1), null == r.__s && (r.__s = r.state), o.getDerivedStateFromProps ? r.state = m({}, r.state, o.getDerivedStateFromProps(r.props, r.state)) : n && r.componentWillMount ? (r.componentWillMount(), r.state = r.__s !== r.state ? r.__s : r.state) : !n && r.componentWillUpdate && r.componentWillUpdate(), d$1 && d$1(e), r.render(r.props, r.state, t);
}

function x(t, a, l$1, c, s) {
  if (null == t || !0 === t || !1 === t || "" === t) return "";
  if ("object" != typeof t) return "function" == typeof t ? "" : i(t + "");

  if (h(t)) {
    var v = "";
    s.__k = t;

    for (var y = 0; y < t.length; y++) {
      var k$1 = t[y];
      null != k$1 && "boolean" != typeof k$1 && (v += x(k$1, a, l$1, c, s));
    }

    return v;
  }

  if (void 0 !== t.constructor) return "";
  t.__ = s, u$1 && u$1(t);
  var S,
      D,
      A,
      E = t.type,
      F = t.props,
      L = a;

  if ("function" == typeof E) {
    if (E === k) {
      if (F.UNSTABLE_comment) return "\x3c!--" + i(F.UNSTABLE_comment || "") + "--\x3e";
      D = F.children;
    } else {
      if (null != (S = E.contextType)) {
        var T = a[S.__c];
        L = T ? T.props.value : S.__;
      }

      if (E.prototype && "function" == typeof E.prototype.render) D = b(t, L), A = t.__c;else {
        t.__c = A = {
          __v: t,
          props: F,
          context: L,
          setState: g,
          forceUpdate: g,
          __d: !0,
          __h: []
        };

        for (var U = 0; A.__d && U++ < 25;) A.__d = !1, d$1 && d$1(t), D = E.call(A, F, L);

        A.__d = !0;
      }

      if (null != A.getChildContext && (a = m({}, a, A.getChildContext())), (E.getDerivedStateFromError || A.componentDidCatch) && l.errorBoundaries) {
        var W = "";
        D = null != D && D.type === k && null == D.key ? D.props.children : D;

        try {
          return W = x(D, a, l$1, c, t);
        } catch (e) {
          return E.getDerivedStateFromError && (A.__s = E.getDerivedStateFromError(e)), A.componentDidCatch && A.componentDidCatch(e, {}), A.__d && (D = b(t, a), null != (A = t.__c).getChildContext && (a = m({}, a, A.getChildContext())), W = x(D = null != D && D.type === k && null == D.key ? D.props.children : D, a, l$1, c, t)), W;
        } finally {
          p && p(t), t.__ = void 0, f && f(t);
        }
      }
    }

    var j = x(D = null != D && D.type === k && null == D.key ? D.props.children : D, a, l$1, c, t);
    return p && p(t), t.__ = void 0, f && f(t), j;
  }

  var M,
      z = "<" + E,
      B = "";

  for (var N in F) {
    var H = F[N];

    switch (N) {
      case "children":
        M = H;
        continue;

      case "key":
      case "ref":
      case "__self":
      case "__source":
        continue;

      case "htmlFor":
        if ("for" in F) continue;
        N = "for";
        break;

      case "className":
        if ("class" in F) continue;
        N = "class";
        break;

      case "defaultChecked":
        N = "checked";
        break;

      case "defaultSelected":
        N = "selected";
        break;

      case "defaultValue":
      case "value":
        switch (N = "value", E) {
          case "textarea":
            M = H;
            continue;

          case "select":
            c = H;
            continue;

          case "option":
            c != H || "selected" in F || (z += " selected");
        }

        break;

      case "dangerouslySetInnerHTML":
        B = H && H.__html;
        continue;

      case "style":
        "object" == typeof H && (H = _(H));
        break;

      default:
        if (l$1 && n$1.test(N)) N = N.toLowerCase().replace(w, "xlink:");else {
          if (o.test(N)) continue;
          "-" !== N[4] && "draggable" !== N || null == H || (H += "");
        }
    }

    null != H && !1 !== H && "function" != typeof H && (z = !0 === H || "" === H ? z + " " + N : z + " " + N + '="' + i(H + "") + '"');
  }

  if (o.test(E)) throw new Error(E + " is not a valid HTML tag name in " + z + ">");
  return B || ("string" == typeof M ? B = i(M) : null != M && !1 !== M && !0 !== M && (B = x(M, a, "svg" === E || "foreignObject" !== E && l$1, c, t))), p && p(t), t.__ = void 0, f && f(t), !B && C.has(E) ? z + "/>" : z + ">" + B + "</" + E + ">";
}

var w = /^xlink:?/,
    C = new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);

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

var t,
    r$1,
    u$2,
    i$1,
    o$1 = 0,
    f$1 = [],
    c$1 = [],
    e$1 = l.__b,
    a$1 = l.__r,
    v$1 = l.diffed,
    l$2 = l.__c,
    m$1 = l.unmount;

function d$2(t, u) {
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
  return o$1 = 1, s$2(B, n);
}

function s$2(n, u, i) {
  var o = d$2(t++, 2);

  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
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
    t.__H.__h.forEach(k$2), t.__H.__h.forEach(w$1), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], l.__e(r, t.__v);
  }
}

l.__b = function (n) {
  r$1 = null, e$1 && e$1(n);
}, l.__r = function (n) {
  a$1 && a$1(n), t = 0;
  var i = (r$1 = n.__c).__H;
  i && (u$2 === r$1 ? (i.__h = [], r$1.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c$1, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k$2), i.__h.forEach(w$1), i.__h = [], t = 0)), u$2 = r$1;
}, l.diffed = function (t) {
  v$1 && v$1(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f$1.push(o) && i$1 === l.requestAnimationFrame || ((i$1 = l.requestAnimationFrame) || j)(b$1)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c$1 && (n.__ = n.__V), n.i = void 0, n.__V = c$1;
  })), u$2 = r$1 = null;
}, l.__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k$2), t.__h = t.__h.filter(function (n) {
        return !n.__ || w$1(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], l.__e(u, t.__v);
    }
  }), l$2 && l$2(t, r);
}, l.unmount = function (t) {
  m$1 && m$1(t);
  var r,
      u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k$2(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && l.__e(r, u.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;

function j(n) {
  var t,
      r = function () {
    clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
  },
      u = setTimeout(r, 100);

  g$1 && (t = requestAnimationFrame(r));
}

function k$2(n) {
  var t = r$1,
      u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r$1 = t;
}

function w$1(n) {
  var t = r$1;
  n.__c = n.__(), r$1 = t;
}

function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}

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

var name = "fastify-preact-ssr";
var version = "1.0.0";
var description = "Fastify server-side renders Preact to html and serves with a Preact client.js bundle for DOM hydration. Powered by Rollup.";
var main = "build/index.js";
var scripts = {
	nodemon: "nodemon build/server.js",
	rollup: "rollup --config --sourcemap --watch",
	dev: "npm run rollup & npm run nodemon",
	start: "node build/server.js",
	build: "rollup --config"
};
var repository = {
	type: "git",
	url: "git+https://github.com/sebringrose/fastify-preact-ssr.git"
};
var keywords = [
	"fastify",
	"preact",
	"ssr"
];
var author = "Seb Ringrose <sebringrose@gmail.com>";
var license = "ISC";
var bugs = {
	url: "https://github.com/sebringrose/fastify-preact-ssr/issues"
};
var homepage = "https://github.com/sebringrose/fastify-preact-ssr#readme";
var dependencies = {
	"@fastify/static": "^6.10.2",
	fastify: "^4.21.0",
	preact: "^10.16.0",
	"preact-render-to-string": "^6.2.0",
	"preact-router": "^4.1.2"
};
var devDependencies = {
	"@babel/plugin-transform-react-jsx": "^7.22.5",
	"@rollup/plugin-babel": "^5.3.1",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^7.1.3",
	nodemon: "^3.0.1",
	rollup: "^1.32.1"
};
var packageJson = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	dependencies: dependencies,
	devDependencies: devDependencies
};

var htmlShell = (html => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${packageJson.name}</title>
        <meta name="description" content="${packageJson.description}">
        <meta name="keywords" content="${packageJson.keywords.join(", ")}">
        <style>
            html, body {
                height: 100%;
                width: 100%;
                margin: 0;
                font-family: helvetica;
            }
        </style>
    </head>
    <body>
        <div id="root">
            ${html}
        </div>
        <script type="module" src="client.js" async></script>
    </body>
    </html>
`);

const fastify = require('fastify');

const fastifyStatic = require('@fastify/static'); // FASTIFY CONFIG


const app = fastify({
  logger: true
});
app.register(fastifyStatic, {
  root: path.join(__dirname, '../public')
}); // ROUTES

pages.forEach(page => app.route({
  method: 'GET',
  url: page.route,
  schema: {
    response: {
      200: {
        type: 'string'
      }
    }
  },
  handler: function (request, response) {
    response.header('Content-Type', 'text/html; charset=utf-8');
    return htmlShell(y$1(y(page.component, null)));
  }
})); // START SERVER

const start = async () => {
  try {
    await app.listen({
      port: 8888
    });
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
//# sourceMappingURL=server.js.map
