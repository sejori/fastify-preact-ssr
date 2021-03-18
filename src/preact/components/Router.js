import { html } from 'htm/preact'
import { Router as PreactRouter } from 'preact-router'

import Home from '../pages/Home'
import About from '../pages/About'

const Router = () => {
    return html`
        <${PreactRouter}>
            <${Home} path="/" />
            <${About} path="/about" />
        <//>
    `
}

export default Router

// this doesn't seem to work, gives undefined prop error...
//
// import pages from '../pages'
// ${pages.map(page => html`<${page.component} path="${page.route}">`)}
