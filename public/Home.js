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

const Layout = ({
  navColour,
  children
}) => {
  return a(y, null, a("nav", {
    style: navStyle(navColour)
  }, a("a", {
    style: navLinkStyle,
    href: "/"
  }, "Home"), a("a", {
    style: navLinkStyle,
    href: "/about"
  }, "About")), a("main", {
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
    u,
    r$1,
    o = 0,
    i$1 = [],
    c = n.__b,
    f = n.__r,
    e = n.diffed,
    a$1 = n.__c,
    v$1 = n.unmount;

function m(t, r) {
  n.__h && n.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function x() {
  i$1.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], n.__e(u, t.__v);
    }
  }), i$1 = [];
}

n.__b = function (n) {
  u = null, c && c(n);
}, n.__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, n.diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i$1.push(o) && r$1 === n.requestAnimationFrame || ((r$1 = n.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b && (t = requestAnimationFrame(u));
  })(x)), u = void 0;
}, n.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], n.__e(r, t.__v);
    }
  }), a$1 && a$1(t, u);
}, n.unmount = function (t) {
  v$1 && v$1(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    n.__e(t, u.__v);
  }
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u;
  "function" == typeof n.__c && n.__c(), u = t;
}

function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}

const List = ({
  data
}) => {
  // takes a data prop
  // how many clicks have we counted? Default to 0
  const [count, setCount] = l(0); // shared event handler

  const handleClick = () => {
    setCount(count + 1);
  };

  return a("ul", null, data && data.map(i => a("li", null, i, ": ", a("button", {
    onClick: handleClick
  }, "Click me"))), a("li", null, count, " ", count === 1 ? 'click' : 'clicks', " counted"));
};

const App = () => {
  const [dataArray, setDataArray] = l(['Item 0', 'Item 1', 'Item 2']);
  return a("div", null, a(List, {
    data: dataArray
  }), a("button", {
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
  return a(Layout, {
    navColour: "palegreen"
  }, a("h1", null, "Home!"), a(App, null));
};

var Home$1 = {
  component: Home,
  route: "/"
};

export default Home$1;
//# sourceMappingURL=Home.js.map
