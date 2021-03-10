import { hydrate } from 'preact'
import App from './components/app.js'

hydrate(App(), document.querySelector('#root'))