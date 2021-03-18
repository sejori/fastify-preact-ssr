'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

var n,
    i,
    r;

function a(n, l, u) {
  var i,
      t,
      r,
      o = arguments,
      f = {};

  for (r in l) "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];

  if (arguments.length > 3) for (u = [u], r = 3; r < arguments.length; r++) u.push(o[r]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (r in n.defaultProps) void 0 === f[r] && (f[r] = n.defaultProps[r]);
  return v(n, f, i, t, null);
}

function v(l, u, i, t, r) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++n.__v : r
  };
  return null != n.vnode && n.vnode(o), o;
}

function y(n) {
  return n.children;
}

n = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, r = 0;

var n$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
    o = /[&<>"]/g,
    a$1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
},
    i$1 = function (e) {
  return a$1[e] || e;
};

function l(e) {
  return "string" != typeof e && (e = String(e)), e.replace(o, i$1);
}

var s = function (e, t) {
  return String(e).replace(/(\n+)/g, "$1" + (t || "\t"));
},
    f = function (e, t, r) {
  return String(e).length > (t || 40) || !r && -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<");
},
    u = {};

function c(e) {
  var t = "";

  for (var r in e) {
    var o = e[r];
    null != o && (t && (t += " "), t += "-" == r[0] ? r : u[r] || (u[r] = r.replace(/([A-Z])/g, "-$1").toLowerCase()), t += ": ", t += o, "number" == typeof o && !1 === n$1.test(r) && (t += "px"), t += ";");
  }

  return t || void 0;
}

function p(e, t) {
  for (var r in t) e[r] = t[r];

  return e;
}

function _(e, t) {
  return Array.isArray(t) ? t.reduce(_, e) : null != t && !1 !== t && e.push(t), e;
}

var v$1 = {
  shallow: !0
},
    d = [],
    g = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
    h = function () {};

y$1.render = y$1;

var m = function (e, t) {
  return y$1(e, t, v$1);
},
    x = [];

function y$1(t, r, n$1) {
  var o = b(t, r, n$1);
  return n.__c && n.__c(t, x), o;
}

function b(n$1, o, a$1, i, u, v) {
  if (null == n$1 || "boolean" == typeof n$1) return "";
  Array.isArray(n$1) && (n$1 = a(y, null, n$1));
  var m = n$1.type,
      x = n$1.props,
      y$1 = !1;
  o = o || {};
  var S,
      w = (a$1 = a$1 || {}).pretty,
      k = w && "string" == typeof w ? w : "\t";
  if ("object" != typeof n$1 && !m) return l(n$1);

  if ("function" == typeof m) {
    if (y$1 = !0, !a$1.shallow || !i && !1 !== a$1.renderRootComponent) {
      if (m === y) {
        var O = "",
            C = [];

        _(C, n$1.props.children);

        for (var A = 0; A < C.length; A++) O += (A > 0 && w ? "\n" : "") + b(C[A], o, a$1, !1 !== a$1.shallowHighOrder, u, v);

        return O;
      }

      var H,
          j = n$1.__c = {
        __v: n$1,
        context: o,
        props: n$1.props,
        setState: h,
        forceUpdate: h,
        __h: []
      };

      if (n.__b && n.__b(n$1), n.__r && n.__r(n$1), m.prototype && "function" == typeof m.prototype.render) {
        var F = m.contextType,
            M = F && o[F.__c],
            T = null != F ? M ? M.props.value : F.__ : o;
        (j = n$1.__c = new m(x, T)).__v = n$1, j._dirty = j.__d = !0, j.props = x, null == j.state && (j.state = {}), null == j._nextState && null == j.__s && (j._nextState = j.__s = j.state), j.context = T, m.getDerivedStateFromProps ? j.state = p(p({}, j.state), m.getDerivedStateFromProps(j.props, j.state)) : j.componentWillMount && (j.componentWillMount(), j.state = j._nextState !== j.state ? j._nextState : j.__s !== j.state ? j.__s : j.state), H = j.render(j.props, j.state, j.context);
      } else {
        var $ = m.contextType,
            L = $ && o[$.__c];
        H = m.call(n$1.__c, x, null != $ ? L ? L.props.value : $.__ : o);
      }

      return j.getChildContext && (o = p(p({}, o), j.getChildContext())), n.diffed && n.diffed(n$1), b(H, o, a$1, !1 !== a$1.shallowHighOrder, u, v);
    }

    m = (S = m).displayName || S !== Function && S.name || function (e) {
      var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];

      if (!t) {
        for (var r = -1, n = d.length; n--;) if (d[n] === e) {
          r = n;
          break;
        }

        r < 0 && (r = d.push(e) - 1), t = "UnnamedComponent" + r;
      }

      return t;
    }(S);
  }

  var E,
      D,
      N = "";

  if (x) {
    var P = Object.keys(x);
    a$1 && !0 === a$1.sortAttributes && P.sort();

    for (var R = 0; R < P.length; R++) {
      var U = P[R],
          W = x[U];

      if ("children" !== U) {
        if (!U.match(/[\s\n\\/='"\0<>]/) && (a$1 && a$1.allAttributes || "key" !== U && "ref" !== U && "__self" !== U && "__source" !== U && "defaultValue" !== U)) {
          if ("className" === U) {
            if (x.class) continue;
            U = "class";
          } else u && U.match(/^xlink:?./) && (U = U.toLowerCase().replace(/^xlink:?/, "xlink:"));

          if ("htmlFor" === U) {
            if (x.for) continue;
            U = "for";
          }

          "style" === U && W && "object" == typeof W && (W = c(W)), "a" === U[0] && "r" === U[1] && "boolean" == typeof W && (W = String(W));
          var q = a$1.attributeHook && a$1.attributeHook(U, W, o, a$1, y$1);
          if (q || "" === q) N += q;else if ("dangerouslySetInnerHTML" === U) D = W && W.__html;else if ("textarea" === m && "value" === U) E = W;else if ((W || 0 === W || "" === W) && "function" != typeof W) {
            if (!(!0 !== W && "" !== W || (W = U, a$1 && a$1.xml))) {
              N += " " + U;
              continue;
            }

            if ("value" === U) {
              if ("select" === m) {
                v = W;
                continue;
              }

              "option" === m && v == W && (N += " selected");
            }

            N += " " + U + '="' + l(W) + '"';
          }
        }
      } else E = W;
    }
  }

  if (w) {
    var z = N.replace(/^\n\s*/, " ");
    z === N || ~z.indexOf("\n") ? w && ~N.indexOf("\n") && (N += "\n") : N = z;
  }

  if (N = "<" + m + N + ">", String(m).match(/[\s\n\\/='"\0<>]/)) throw new Error(m + " is not a valid HTML tag name in " + N);
  var I,
      V = String(m).match(g) || a$1.voidElements && String(m).match(a$1.voidElements),
      Z = [];
  if (D) w && f(D) && (D = "\n" + k + s(D, k)), N += D;else if (null != E && _(I = [], E).length) {
    for (var B = w && ~N.indexOf("\n"), G = !1, J = 0; J < I.length; J++) {
      var K = I[J];

      if (null != K && !1 !== K) {
        var Q = b(K, o, a$1, !0, "svg" === m || "foreignObject" !== m && u, v);
        if (w && !B && f(Q) && (B = !0), Q) if (w) {
          var X = Q.length > 0 && "<" != Q[0];
          G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
        } else Z.push(Q);
      }
    }

    if (w && B) for (var Y = Z.length; Y--;) Z[Y] = "\n" + k + s(Z[Y], k);
  }
  if (Z.length || D) N += Z.join("");else if (a$1 && a$1.xml) return N.substring(0, N.length - 1) + " />";
  return !V || I || D ? (w && ~N.indexOf("\n") && (N += "\n"), N += "</" + m + ">") : N = N.replace(/>$/, " />"), N;
}

y$1.shallowRender = m;

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
	fastify: "^3.13.0",
	"fastify-static": "^4.0.1",
	preact: "^10.3.4",
	"preact-render-to-string": "^5.1.14",
	"preact-router": "^3.2.1"
};
var devDependencies = {
	"@babel/plugin-transform-react-jsx": "^7.12.17",
	"@rollup/plugin-babel": "^5.3.0",
	"@rollup/plugin-dynamic-import-vars": "^1.1.1",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^7.1.3",
	glob: "^7.1.6",
	nodemon: "^2.0.7",
	rollup: "^1.32.1",
	"rollup-plugin-copy": "^3.4.0"
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

var htmlShell = ((html, route) => `
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
        <script type="module" src="${route}.js" async></script>
    </body>
    </html>
`);

function __variableDynamicImportRuntime0__(path) {
   switch (path) {
  
     default: return Promise.reject(new Error("Unknown variable dynamic import: " + path));
   }
 }

const glob = require('glob');

const fastify = require('fastify');

const fastifyStatic = require('fastify-static'); // FASTIFY CONFIG


const app = fastify({
  logger: true
});
app.register(fastifyStatic, {
  root: path.join(__dirname, '../public')
}); // ROUTES

glob.sync('../preact/pages/*.js').forEach(file => {
  const fileName = file.split('/').slice(-1)[0];
  __variableDynamicImportRuntime0__(`../src/pages/${fileName.split(".")[0]}.js`).then(page => app.route({
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
      return htmlShell(y$1(a(page.component, null)), fileName);
    }
  }));
}); // START SERVER

const start = async () => {
  try {
    await app.listen(8888);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
//# sourceMappingURL=server.js.map
