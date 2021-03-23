import { recursiveReaddir } from '../utils/helpers.js'
import { jsHandler } from '../utils/handlers.js'
import { stringResponse } from '../utils/schemas.js'

export const getJsRoutes = async () => {
    const jsPaths = recursiveReaddir(`${process.cwd()}/public/js`)

    jsPaths.map(jsPath => ({
        method: 'GET',
        url: jsPath.slice(jsPath.indexOf('/js')),
        schema: stringResponse,
        handler: jsHandler(jsPath)
    }))
}