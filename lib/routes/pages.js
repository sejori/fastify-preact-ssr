import { ssrHandler } from '../utils/ssr.js'

import htmlShell from '../templates/default.js'

import Home from '../../src/pages/Home.js'
import About from '../../src/pages/About.js'

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

export const ssrPageRoutes = pageRouteData.map(page => ({
    method: 'GET',
    url: page.url,
    schema: {
        response: {
            200: {
                type: 'string',
            }
        }
    },
    handler: ssrHandler(page)
}))