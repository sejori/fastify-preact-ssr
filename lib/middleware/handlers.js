import fs from 'fs'
import render from 'preact-render-to-string'
import { html } from 'htm/preact/index.mjs'

import { createImportMap, writeImportMap } from '../utils/esm.js'

const importMap = createImportMap()
writeImportMap(importMap, `${process.cwd()}/public/js/import-map.json`)

export function ssrHandler(page) {
    return (request, response) => {
        response.header('Content-Type', 'text/html; charset=utf-8')
        return page.template(render(html`<${page.component} />`), `
            import { hydrate } from '/node_modules/preact/dist/preact.mjs'
            import Page from '${page.script}'
            
            hydrate(Page(), document.querySelector('#root'))
        `)
    }
}

export function jsHandler(jsFile) {
    return (request, response) => {
        response.header('Content-Type', 'application/javascript; charset=utf-8')
        const jsString = fs.readFileSync(jsFile).toString()

        const jsLines = jsString.split('\n')
        jsLines.forEach(line => {
            if (line.includes('import')) console.log(line)
        })

        // the below didn't work because some imports contain others
        // in their names e.g. htm/preact contains htm & preact so we
        // don't know which one would get replaced.
        //
        // Object.keys(importMap.imports).forEach(key => {
        //     if (jsString.indexOf(key) !== -1) {
        //         console.log('found import: ' + key)
        //         jsString.replace(key, importMap[key])
        //     }
        // })
        return jsString
    }
}