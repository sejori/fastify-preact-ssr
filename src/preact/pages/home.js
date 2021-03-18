import { html } from 'htm/preact'
import Layout from '../layouts/Layout'
import App from '../components/App'

const Home = () => {
    return html`<${Layout} navColour="palegreen">
        <h1>Home!</h1>
        <${App} />
    <//>`
}
  
export default Home