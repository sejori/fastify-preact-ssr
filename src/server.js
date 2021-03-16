import render from 'preact-render-to-string'
import { html } from 'htm/preact'
import path from 'path'

import pages from './pages'
import htmlShell from './components/HtmlTemplate'

const fastify = require('fastify')
const fastifyStatic = require('fastify-static')
const fastifyCompress = require('fastify-compress')

// FASTIFY CONFIG
const app = fastify({ logger: true })
app.register(fastifyStatic, {
    root: path.join(__dirname, '../public')
})
// app.register(fastifyCompress) <- enable for on-demand compression of static files in public folder

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
        response.header('Content-Type', 'text/html; charset=utf-8')
        return htmlShell(render(html`<${page.component}/>`))
    }
}))

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
