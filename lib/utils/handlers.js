import fs from 'fs'
import render from 'preact-render-to-string'
import { html } from  'htm/preact/index.mjs'

export function ssrHandler(page) {
    return (request, response) => {
        response.header('Content-Type', 'text/html; charset=utf-8')
        return page.template(render(html`<${page.component} />`), `
            import { hydrate } from '/node_modules/preact/dist/preact.mjs'
            import Page from '${page.js}'
            
            hydrate(Page(), document.querySelector('#root'))
        `)
    }
}

export function jsHandler(jsFile) {
    return (request, response) => {
        response.header('Content-Type', 'application/javascript; charset=utf-8')
        const jsString = fs.readFileSync(jsFile)
        return jsString.replace('//g', '')
    }
}