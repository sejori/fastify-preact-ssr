import { html } from 'htm/preact'
import Layout from '../layouts/Layout'

const About = () => {
    return html`<${Layout} navColour="lavender">
        <h1>About!</h1>
        <img style=${imgStyle} src="/lighthouse-score.png" alt="lighthouse-score" />
        <p>Do I need to say anymore?</p>
        <a href="https://github.com/sebringrose/fastify-preact-ssr">Github</a>
    <//>`
}

const imgStyle = `
    max-width: 100%;
`
  
export default About