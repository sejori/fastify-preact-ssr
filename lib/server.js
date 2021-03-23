import Fastify from 'fastify'
import fastifyStatic from 'fastify-static'

import getRoutes from './routes/index.js'

// INITIALISE FASTIFY
const app = Fastify({ logger: true })

// FASTIFY START FCN
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
// register public static contents on base routes
// exclude all /js/ routes as we need to serve modified versions
// with CDN-ified node_module imports
// (see jsHandler() in lib/utils/handlers.js)
app.register(fastifyStatic, { 
    root: `${process.cwd()}/public`,
    allowedPath: (pathname, root) => !pathname.includes('/js/')
})
//
// this uses a promise bc page components are dynamically imported for SSR
getRoutes.then(routes => {
    routes.forEach(route => app.route(route))

    // start server once all getRoutes resolved & added
    start()
})
