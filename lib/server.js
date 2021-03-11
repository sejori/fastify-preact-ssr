import render from 'preact-render-to-string'
import { html } from 'htm/preact' // use the provided preact binding
import PreactApp from '../src/components/PreactApp'
import path from 'path'
import htmlShell from '../src/htmlTemplate'

const fastify = require('fastify')
const fastifyStatic = require('fastify-static')

// FASTIFY CONFIG
const app = fastify({ logger: true })
app.register(fastifyStatic, {
  root: path.join(__dirname, '../public')
})

// ROUTES
app.get('/', (request, response) => { // listen for requests to the root path
  response.header('Content-Type', 'text/html; charset=utf-8')
  return htmlShell(render(html`<${PreactApp} />`)) // send the HTML string
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
