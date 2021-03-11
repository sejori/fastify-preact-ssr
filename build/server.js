'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

var n,i,r;function a(n,l,u){var i,t,r,o=arguments,f={};for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return v(n,f,i,t,null)}function v(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function y(n){return n.children}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=0;//# sourceMappingURL=preact.module.js.map

var n$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,o=/[&<>"]/g,a$1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},i$1=function(e){return a$1[e]||e};function l(e){return "string"!=typeof e&&(e=String(e)),e.replace(o,i$1)}var s=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},f=function(e,t,r){return String(e).length>(t||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},u={};function c(e){var t="";for(var r in e){var o=e[r];null!=o&&(t&&(t+=" "),t+="-"==r[0]?r:u[r]||(u[r]=r.replace(/([A-Z])/g,"-$1").toLowerCase()),t+=": ",t+=o,"number"==typeof o&&!1===n$1.test(r)&&(t+="px"),t+=";");}return t||void 0}function p(e,t){for(var r in t)e[r]=t[r];return e}function _(e,t){return Array.isArray(t)?t.reduce(_,e):null!=t&&!1!==t&&e.push(t),e}var v$1={shallow:!0},d=[],g=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,h=function(){};y$1.render=y$1;var m=function(e,t){return y$1(e,t,v$1)},x=[];function y$1(t,r,n$1){var o=b(t,r,n$1);return n.__c&&n.__c(t,x),o}function b(n$1,o,a$1,i,u,v){if(null==n$1||"boolean"==typeof n$1)return "";Array.isArray(n$1)&&(n$1=a(y,null,n$1));var m=n$1.type,x=n$1.props,y$1=!1;o=o||{};var S,w=(a$1=a$1||{}).pretty,k=w&&"string"==typeof w?w:"\t";if("object"!=typeof n$1&&!m)return l(n$1);if("function"==typeof m){if(y$1=!0,!a$1.shallow||!i&&!1!==a$1.renderRootComponent){if(m===y){var O="",C=[];_(C,n$1.props.children);for(var A=0;A<C.length;A++)O+=(A>0&&w?"\n":"")+b(C[A],o,a$1,!1!==a$1.shallowHighOrder,u,v);return O}var H,j=n$1.__c={__v:n$1,context:o,props:n$1.props,setState:h,forceUpdate:h,__h:[]};if(n.__b&&n.__b(n$1),n.__r&&n.__r(n$1),m.prototype&&"function"==typeof m.prototype.render){var F=m.contextType,M=F&&o[F.__c],T=null!=F?M?M.props.value:F.__:o;(j=n$1.__c=new m(x,T)).__v=n$1,j._dirty=j.__d=!0,j.props=x,null==j.state&&(j.state={}),null==j._nextState&&null==j.__s&&(j._nextState=j.__s=j.state),j.context=T,m.getDerivedStateFromProps?j.state=p(p({},j.state),m.getDerivedStateFromProps(j.props,j.state)):j.componentWillMount&&(j.componentWillMount(),j.state=j._nextState!==j.state?j._nextState:j.__s!==j.state?j.__s:j.state),H=j.render(j.props,j.state,j.context);}else {var $=m.contextType,L=$&&o[$.__c];H=m.call(n$1.__c,x,null!=$?L?L.props.value:$.__:o);}return j.getChildContext&&(o=p(p({},o),j.getChildContext())),n.diffed&&n.diffed(n$1),b(H,o,a$1,!1!==a$1.shallowHighOrder,u,v)}m=(S=m).displayName||S!==Function&&S.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var r=-1,n=d.length;n--;)if(d[n]===e){r=n;break}r<0&&(r=d.push(e)-1),t="UnnamedComponent"+r;}return t}(S);}var E,D,N="";if(x){var P=Object.keys(x);a$1&&!0===a$1.sortAttributes&&P.sort();for(var R=0;R<P.length;R++){var U=P[R],W=x[U];if("children"!==U){if(!U.match(/[\s\n\\/='"\0<>]/)&&(a$1&&a$1.allAttributes||"key"!==U&&"ref"!==U&&"__self"!==U&&"__source"!==U&&"defaultValue"!==U)){if("className"===U){if(x.class)continue;U="class";}else u&&U.match(/^xlink:?./)&&(U=U.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===U){if(x.for)continue;U="for";}"style"===U&&W&&"object"==typeof W&&(W=c(W)),"a"===U[0]&&"r"===U[1]&&"boolean"==typeof W&&(W=String(W));var q=a$1.attributeHook&&a$1.attributeHook(U,W,o,a$1,y$1);if(q||""===q)N+=q;else if("dangerouslySetInnerHTML"===U)D=W&&W.__html;else if("textarea"===m&&"value"===U)E=W;else if((W||0===W||""===W)&&"function"!=typeof W){if(!(!0!==W&&""!==W||(W=U,a$1&&a$1.xml))){N+=" "+U;continue}if("value"===U){if("select"===m){v=W;continue}"option"===m&&v==W&&(N+=" selected");}N+=" "+U+'="'+l(W)+'"';}}}else E=W;}}if(w){var z=N.replace(/^\n\s*/," ");z===N||~z.indexOf("\n")?w&&~N.indexOf("\n")&&(N+="\n"):N=z;}if(N="<"+m+N+">",String(m).match(/[\s\n\\/='"\0<>]/))throw new Error(m+" is not a valid HTML tag name in "+N);var I,V=String(m).match(g)||a$1.voidElements&&String(m).match(a$1.voidElements),Z=[];if(D)w&&f(D)&&(D="\n"+k+s(D,k)),N+=D;else if(null!=E&&_(I=[],E).length){for(var B=w&&~N.indexOf("\n"),G=!1,J=0;J<I.length;J++){var K=I[J];if(null!=K&&!1!==K){var Q=b(K,o,a$1,!0,"svg"===m||"foreignObject"!==m&&u,v);if(w&&!B&&f(Q)&&(B=!0),Q)if(w){var X=Q.length>0&&"<"!=Q[0];G&&X?Z[Z.length-1]+=Q:Z.push(Q),G=X;}else Z.push(Q);}}if(w&&B)for(var Y=Z.length;Y--;)Z[Y]="\n"+k+s(Z[Y],k);}if(Z.length||D)N+=Z.join("");else if(a$1&&a$1.xml)return N.substring(0,N.length-1)+" />";return !V||I||D?(w&&~N.indexOf("\n")&&(N+="\n"),N+="</"+m+">"):N=N.replace(/>$/," />"),N}y$1.shallowRender=m;//# sourceMappingURL=index.module.js.map

var n$2=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n$2(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t=new Map;function e(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n$2(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

var m$1=e.bind(a);

var t$1,u$1,r$1,o$1=0,i$2=[],c$1=n.__b,f$1=n.__r,e$1=n.diffed,a$2=n.__c,v$2=n.unmount;function m$2(t,r){n.__h&&n.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l$1(n){return o$1=1,p$1(w,n)}function p$1(n,r,o){var i=m$2(t$1++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u$1),i.__}function x$1(){i$2.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i$2=[];}n.__b=function(n){u$1=null,c$1&&c$1(n);},n.__r=function(n){f$1&&f$1(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j),r.__h=[]);},n.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i$2.push(o)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b$1&&(t=requestAnimationFrame(u));})(x$1)),u$1=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a$2&&a$2(t,u);},n.unmount=function(t){v$2&&v$2(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){n.__e(t,u.__v);}};var b$1="function"==typeof requestAnimationFrame;function g$1(n){var t=u$1;"function"==typeof n.__c&&n.__c(),u$1=t;}function j(n){var t=u$1;n.__c=n.__(),u$1=t;}function w(n,t){return "function"==typeof t?t(n):t}//# sourceMappingURL=hooks.module.js.map

const List = ({ data }) => { // takes a data prop
  // how many clicks have we counted? Default to 0
  const [count, setCount] = l$1(0);

  // shared event handler
  const handleClick = () => {
    setCount(count + 1);
  };

  return m$1`
    <ul>
      ${data && data.map(i => m$1`
        <li>
          <!-- listen for button clicks -->
          ${i}: <button onClick=${handleClick}>Click me</button>
        </li>
      `)}
      <li>
        <!-- list how many clicks we've seen, with the right plural -->
        ${count} ${count === 1 ? 'click' : 'clicks'} counted
      </li>
    </ul>
  `
};

const dataArray = ['Item one', 'Item two', 'Item three'];

const PreactApp = () => {
  return m$1`
    <${List} data=${dataArray} />
  `
};

const Home = () => {
    return m$1`
        <h1>Home!</h1>
        <${PreactApp} />
    `
};

const About = () => {
    return m$1`
        <h1>About!</h1>
        <${PreactApp} />
    `
};

var pages = [
    {
        route: "/",
        component: Home
    },
    {
        route: "/about",
        component: About
    },
];

var name = "howtobuild";
var version = "0.0.1";
var description = "Chat-based search that helps you build your next software project.";
var main = "build/index.js";
var scripts = {
	nodemon: "nodemon build/server.js",
	rollup: "rollup --config --watch --sourcemap",
	dev: "npm run rollup & npm run nodemon",
	start: "node lib/server.js",
	build: "rollup --config"
};
var repository = {
	type: "git",
	url: "git+https://github.com/sebringrose/HowToBuild.git"
};
var keywords = [
	"chat",
	"education",
	"preact",
	"fastify",
	"how",
	"to",
	"build",
	"your",
	"next",
	"project",
	"software",
	"tech"
];
var author = "Seb Ringrose <sebringrose@gmail.com>";
var license = "ISC";
var bugs = {
	url: "https://github.com/sebringrose/HowToBuild/issues"
};
var homepage = "https://github.com/sebringrose/HowToBuild#readme";
var dependencies = {
	"@rollup/plugin-json": "^4.1.0",
	fastify: "^3.13.0",
	"fastify-compress": "^3.4.2",
	"fastify-static": "^4.0.1",
	htm: "^3.0.4",
	preact: "^10.3.4",
	"preact-render-to-string": "^5.1.14",
	"preact-router": "^3.2.1"
};
var devDependencies = {
	"@rollup/plugin-node-resolve": "^7.1.3",
	nodemon: "^2.0.7",
	"preact-cli": "^3.0.5",
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

var htmlShell = (html) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${packageJson.name}</title>
        <meta name="description" content="${packageJson.description}">
        <meta name="keywords" content="${packageJson.keywords.join(", ")}">
    </head>
    <body>
        <div id="root">
            ${html}
        </div>
        <script type="module" src="client.js" async></script>
    </body>
    </html>
`;

const fastify = require('fastify');
const fastifyStatic = require('fastify-static');

// FASTIFY CONFIG
const app = fastify({ logger: true });
app.register(fastifyStatic, {
    root: path.join(__dirname, '../public')
});

// ROUTES
pages.forEach(page => app.route({
    method: 'GET',
    url: page.route,
    schema: {
        response: {
            200: {
                type: 'string',
            }
        }
    },
    handler: function (request, response) {
        response.header('Content-Type', 'text/html; charset=utf-8');
        return htmlShell(y$1(m$1`<${page.component}/>`))
    }
}));

// START SERVER
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
