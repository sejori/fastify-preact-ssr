import { html } from 'htm/preact'
import Layout from '../layouts/layout'

const About = () => {
    return html`<${Layout}>
        <h1>About!</h1>
        <img src="/lighthouse-score.png" alt="lighthouse-score" />
    <//>`
}
  
export default About