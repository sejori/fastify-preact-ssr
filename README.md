# Fastify Preact SSR.

![lighthouse-score](https://raw.githubusercontent.com/sebringrose/how-to-build/main/public/lighthouse-score.png)

### Overview:

The **Fastify** app bundle ```lib/server.js -> rollup -> build/server.js``` uses ```src/pages/index.js``` to render the html for each page on the server side using **preact-render-to-string** and serve via the correct url path. 

The **Preact** bundle (```src/client.js -> rollup -> public/client.js```) is referrenced in the html and once loaded will Hydrate the DOM with all the juicy **Preact** goodness with **preact-router**  ```src/components/Router.js``` to hydrate the correct content for the page. 

This does mean that Preact components for all pages are loaded in the ```client.js``` bundle, making the initial time-to-interactive slower if you have many pages with many components. The perk of this is that once this file is cached by the browser your pages will all be super snappy!

### Commands:

- ```$ npm run dev``` - rollup src/client.js into public/client.js and lib/server.js into build/server.js with sourcemaps and file-watching & run build/server.js with nodemon. App available at localhost:8888.
- ```$ npm build``` - rollup src/client.js into public/client.js and lib/server.js into build/server.js.
- ```$ npm start``` - run build/server.js

### Get started:

To build on this codebase check out ```src/client.js``` and ```lib/server.js``` then have a go at editing:
 - ```src/components```
 - ```src/pages```
 - ```src/layouts```

Make sure you update both ```src/components/Router.js``` and ```src/pages/index.js``` if you add new pages. Ultimately the Router component should import and use the pages index.js file but this doesn't seem to work in practice. Anyone fancy a PR? ;)

**WARNING: This has not been tested in production. Use at your own risk.**


Codebase inspired by [Kyle Macquarrie](https://kylemacquarrie.co.uk/blog/preact-ssr-tutorial).