# Server-side rendered Preact Fastify app.

**Commands:**
- ```$ npm run dev``` - rollup Preact app into public/client.js and watch for changes & run lib/server.js with nodemon. App available at localhost:8888.
- ```$ npm build``` - rollup Preact app into public/client.js.
- ```$ npm start``` - run lib/server.js

### Overview

This application will use the Preact pages & components on the server side to render html to return to the client (using ```preact-render-to-string```). The Preact app bundle in ```public/client.js``` is referrenced in the html once pulled into the user's web client is used to Hydrate the html with all the juicy Preact goodness. 

Check out ```src/client.js``` to see the client file before it is bundled by rollup.

Codebase inspired by [Kyle Macquarrie](https://kylemacquarrie.co.uk/blog/preact-ssr-tutorial).