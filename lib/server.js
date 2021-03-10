// IMPORTS
// fastify (server-tech) imports
import fastify from 'fastify'
import fastifyStatic from 'fastify-static'
import fastifyCompress from 'fastify-compress'

// preact (client-tech) imports
import { html } from '../src/htm.js'
import { render } from 'preact-render-to-string'
import App from '../src/components/app.js'
import htmlShell from '../src/htmlTemplate.js'

// file path utils
import path from 'path'
const __dirname = path.dirname(new URL(import.meta.url).pathname)

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

// - static dev files (DEV ONLY)
if (process.argv[2] === "--dev") {
    app.register(fastifyStatic, {
        root: path.join(__dirname, '../src'),
        prefix: "/src/",
        decorateReply: false
    })
    app.register(fastifyStatic, {
        root: path.join(__dirname, '../node_modules'),
        prefix: "/node_modules/",
        decorateReply: false
    })
}


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