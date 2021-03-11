import { html } from 'htm/preact'
import App from '../components/PreactApp'

const Home = () => {
    return html`
        <h1>Home!</h1>
        <${App} />
    `
}
  
export default Home