import { pageRouteHandler } from '../utils/ssr.js'

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
    handler: pageRouteHandler(page)
}))