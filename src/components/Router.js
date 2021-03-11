import { html } from 'htm/preact'
import { Router as PreactRouter } from 'preact-router'

import Home from '../pages/home'
import About from '../pages/about'

const Router = () => {
    return html`
        <${PreactRouter}>
            <${Home} path="/">
            <${About} path="/about">
        <//>
    `
}

export default Router

// pages.map(page => `<${page.component} path="${page.route}">`)
