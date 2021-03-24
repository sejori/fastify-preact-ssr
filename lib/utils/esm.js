import path from 'path'
import fs from 'fs'

import { recursiveReaddir } from './helpers.js'

export const createImportMap = () => {
    const importMap = {
        imports: {}
    }
    const pkgJsonPaths = recursiveReaddir(`${process.cwd()}/node_modules`)
        .filter(fileName => fileName.includes('package.json'))
    
    pkgJsonPaths.forEach(pkgJsonPath => {
        const moduleName = pkgJsonPath.slice(
            pkgJsonPath.indexOf('/node_modules/') + 14, 
            pkgJsonPath.indexOf('/package.json')
        )
        const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath))
    
        let mainFileName = pkgJson.module 
            ? pkgJson.module
            : pkgJson.browser 
                ? pkgJson.browser
                : pkgJson.main 
                    ? pkgJson.main
                    : 'index.js'
    
        const mainFilePath = path.join(pkgJsonPath.slice(0, pkgJsonPath.indexOf('/package.json')), mainFileName.toString())
    
        importMap.imports[moduleName] = mainFilePath
    })

    return importMap
}

export const writeImportMap = (importMap, location) => {
    fs.writeFileSync(location, JSON.stringify(importMap))
}