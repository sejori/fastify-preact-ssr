import Layout from '../layouts/Layout.js'
import { html } from 'htm/preact/index.mjs'

const About = () => {
    // usePreHydration({
    //     node: 'htm/preact/index.mjs',
    //     browser: 'https://cdn.skypack.dev/htm/preact'
    // })

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
