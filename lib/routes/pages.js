import { recursiveReaddir } from '../utils/helpers.js'
import { ssrHandler } from '../utils/handlers.js'
import { stringResponse } from '../utils/schemas.js'

import htmlTemplate from '../templates/default.js'

export const getPageRoutes = async () => {
    const pagePaths = recursiveReaddir(`${process.cwd()}/public/js/pages`)
    
    return await Promise.all(pagePaths.map(async pagePath => {
        return import(pagePath).then(pageImport => ({
            method: 'GET',
            url: pagePath.slice(pagePath.indexOf('/pages') + 6, -3).toLowerCase(),
            schema: stringResponse,
            handler: ssrHandler({
                component: pageImport.default,
                script: pagePath.slice(pagePath.indexOf('/js')),
                template: htmlTemplate
            })
        }))
    }))
}