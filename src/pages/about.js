import { html } from 'htm/preact'
import App from '../components/PreactApp'

const About = () => {
    return html`
        <h1>About!</h1>
        <${App} />
    `
}
  
export default About