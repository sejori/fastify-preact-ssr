import Layout from '../layouts/Layout.js'
import { html } from 'htm/preact/index.mjs'

import usePreHydrate from '../hooks/usePreHydrate'

const About = () => {
    let html
    usePreHydrate(async (html) => {
        const { html } = await import('https://cdn.skypack.dev/htm/preact')
    })

    return html`
        <${Layout} navColour="lavender">
            <h1>About!</h1>
            <img style=${imgStyle} src="/assets/lighthouse-score.png" alt="lighthouse-score" />
            <p>Do I need to say anymore?</p>
            <a href="https://github.com/sebringrose/fastify-preact-ssr">Github</a>
        </${Layout}>
    `
}

const imgStyle = `
    max-width: 100%;
`

export default About
