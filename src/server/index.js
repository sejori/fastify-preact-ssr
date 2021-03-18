import { h } from  'preact'
import render from 'preact-render-to-string'
import path from 'path'

import htmlShell from '../templates/default'

const glob = require('glob')
const fastify = require('fastify')
const fastifyStatic = require('fastify-static')

// FASTIFY CONFIG
const app = fastify({ logger: true })
app.register(fastifyStatic, {
    root: path.join(__dirname, '../public')
})

// ROUTES
glob.sync('../preact/pages/*.js').forEach(file => {
    const fileName = file.split('/').slice(-1)[0]
    import(`../src/pages/${fileName.split(".")[0]}.js`).then(page => app.route({
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
            return htmlShell(render(<page.component />), fileName)
        }
    }))
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
