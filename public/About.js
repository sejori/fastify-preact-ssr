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

const About = () => {
  return a(Layout, {
    navColour: "lavender"
  }, a("h1", null, "About!"), a("img", {
    style: imgStyle,
    src: "/lighthouse-score.png",
    alt: "lighthouse-score"
  }), a("p", null, "Do I need to say anymore?"), a("a", {
    href: "https://github.com/sebringrose/fastify-preact-ssr"
  }, "Github"));
};

const imgStyle = `
    max-width: 100%;
`;
var About$1 = {
  component: About,
  route: "/about"
};

export default About$1;
//# sourceMappingURL=About.js.map
