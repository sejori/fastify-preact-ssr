import Fastify from 'fastify'
import fastifyStatic from 'fastify-static'

import getRoutes from './routes/index.js'


// INITIALISE FASTIFY
const app = Fastify({ logger: true })
const start = async () => {
    try {
        await app.listen(8888);
    } catch (e) {
        app.log.error(e);
        process.exit(1);
    }
}


// FASTIFY CONFIGURATION
//
// expose public static contents on base routes
// note: /js/... files are being served via import modifying middleware
// (see jsHandler() in lib/utils/handlers.js)
app.register(fastifyStatic, { 
    root: `${process.cwd()}/public`
})
// expose node_modules so that js files sent to client can request them
// via import map or modified import statements
// (see lib/utils/handlers.js)
app.register(fastifyStatic, { 
    root: `${process.cwd()}/node_modules`,
    prefix: '/node_modules/',
    decorateReply: false
})


// GET ALL ROUTES AND INITIALISE SERVER
//
// this uses a promise bc page components are dynamically imported for SSR
getRoutes().then(routes => {
    routes.forEach(route => app.route(route))

    // start server once all getRoutes resolved & added
    start()
})
