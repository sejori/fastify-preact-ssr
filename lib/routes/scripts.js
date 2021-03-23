import { recursiveReaddir } from '../utils/helpers.js'
import { jsHandler } from '../utils/handlers.js'
import { stringResponse } from '../utils/schemas.js'

export const getJsRoutes = async () => {
    const jsPaths = recursiveReaddir(`${process.cwd()}/public/js`)

    return jsPaths.map(jsPath => {
        return {
            method: 'GET',
            url: jsPath.slice(jsPath.indexOf('/js')),
            schema: stringResponse,
            handler: jsHandler(jsPath)
        }
    })
}

export const getNMRoutes = async () => {
    const nodeModulePaths = recursiveReaddir(`${process.cwd()}/node_modules`)

    return nodeModulePaths.map(nmPath => {
        return {
            method: 'GET',
            url: nmPath.slice(nmPath.indexOf('/node_modules')),
            schema: stringResponse,
            handler: jsHandler(nmPath)
        }
    })
}