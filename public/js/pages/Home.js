import { html } from  'htm/preact/index.mjs'

import Layout from '../layouts/Layout.js'
import App from '../components/App.js'

const Home = () => {
    return html`
        <${Layout} navColour="palegreen">
            <h1>Home!</h1>
            <${App} />
        </${Layout}>
    `
}
  
export default Home
