// IMPORTS
// preact (client-tech) imports
import { html } from 'htm/preact'
import { render } from 'preact-render-to-string'
import App from '../src/components/app'
import htmlShell from '../src/htmlTemplate'

// file path utils
import path from 'path'
const __dirname = path.dirname(new URL(import.meta.url).pathname)

// fastify (server-tech) requires
const fastify = require('fastify')
const fastistStatic = require('fastify-static')


// FASTIFY CONFIGURATION:
//  - enable logs
const app = fastify({ logger: true })
//  - set req/res schema for routes
const opts = {
    schema: {
        response: {
            200: {
                type: 'string',
            }
        }
    }
}

//  - host static build files
app.register(fastifyStatic, {
    root: path.join(__dirname, '../public')
})
// //  - use compression
// app.register(fastifyCompress)


// ROUTES
app.get('/', opts, async (request, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return htmlShell(render(html`<${App} />`))
})


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