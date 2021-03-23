import { recursiveReaddir } from '../utils/helpers.js'
import { ssrHandler } from '../utils/handlers.js'
import { stringResponse } from '../utils/schemas.js'

import htmlTemplate from '../templates/default.js'

export const getPageRoutes = async () => {
    const pagePaths = recursiveReaddir(`${process.cwd()}/public/js/pages`)
    
    return await Promise.all(pagePaths.map(pagePath => {
        const pageData = {
            route: pagePath.slice(pagePath.indexOf('/pages/') + 7),
            template: htmlTemplate,
            component: await import(pagePath).default,
            js: pagePath.slice(pagePath.indexOf('/js'))
        }

        return ({
            method: 'GET',
            url: pageData.url,
            schema: stringResponse,
            handler: ssrHandler(pageData)
        })
    }))
}