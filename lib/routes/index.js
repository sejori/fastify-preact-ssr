import { getPageRoutes } from './pages.js'
import { getJsRoutes } from './scripts.js'

const getRoutes = async () => [
    ...await getPageRoutes(),
    ...await getJsRoutes()
]

export default getRoutes