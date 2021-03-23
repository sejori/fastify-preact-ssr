import { getPageRoutes } from './pages.js'
import { getJsRoutes, getNMRoutes } from './scripts.js'

const getRoutes = async () => [
    ...await getPageRoutes(),
    ...await getJsRoutes(),
    ...await getNMRoutes()
]

export default getRoutes