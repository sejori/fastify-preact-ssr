import render from 'preact-render-to-string'
import { html } from  'htm/preact/index.mjs'
import htmlShell from '../templates/default.js'

import Home from '../../public/js/pages/Home.js'
import About from '../../public/js/pages/About.js'

const pageRouteData = [
    {
        url: "/",
        template: htmlShell,
        component: Home,
        js: '/js/pages/Home.js'
    },
    {
        url: "/about",
        template: htmlShell,
        component: About,
        js: '/js/pages/About.js'
    }
]

export const pageRoutes = pageRouteData.map(page => ({
    method: 'GET',
    url: page.url,
    schema: {
        response: {
            200: {
                type: 'string',
            }
        }
    },
    handler: async function (request, response) {
        response.header('Content-Type', 'text/html; charset=utf-8')
        return page.template(render(html`<${page.component} />`), `
            import { hydrate } from '/node_modules/preact/dist/preact.mjs'
            import Page from '${page.js}'
            
            hydrate(Page(), document.querySelector('#root'))
        `)
    }
}))