import { html } from 'htm/preact'
import Layout from '../layouts/layout'
import App from '../components/PreactApp'

const Home = () => {
    return html`<${Layout}>
        <h1>Home!</h1>
        <${App} />
    <//>`
}
  
export default Home