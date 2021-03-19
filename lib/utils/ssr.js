import render from 'preact-render-to-string'
import { html } from  'htm/preact/index.mjs'

export async function pageRouteHandler(page) {
    return (request, response) => {
        response.header('Content-Type', 'text/html; charset=utf-8')
        return page.template(render(html`<${page.component} />`), `
            import { hydrate } from '/node_modules/preact/dist/preact.mjs'
            import Page from '${page.js}'
            
            hydrate(Page(), document.querySelector('#root'))
        `)
    }
}