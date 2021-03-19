import Fastify from 'fastify'
import fastifyStatic from 'fastify-static'

import routes from './routes/index.js'

// FASTIFY CONFIG
const app = Fastify({ logger: true })
app.register(fastifyStatic, { root: `${process.cwd()}/public` })
app.register(fastifyStatic, { 
    root: `${process.cwd()}/node_modules`,
    prefix: '/node_modules/',
    decorateReply: false
 })

// ROUTES
routes.forEach(route => app.route(route))

// START SERVER
const start = async () => {
    try {
        await app.listen(8888);
    } catch (e) {
        app.log.error(e);
        process.exit(1);
    }
}
start()
