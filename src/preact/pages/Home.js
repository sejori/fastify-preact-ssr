import { h } from  'preact'

import Layout from '../layouts/Layout'
import App from '../components/App'

const Home = () => {
    return <Layout navColour="palegreen">
        <h1>Home!</h1>
        <App />
    </Layout>
}
  
export default Home
