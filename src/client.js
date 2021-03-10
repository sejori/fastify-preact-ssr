import { hydrate } from 'preact'
import App from './components/app'

hydrate(App(), document.querySelector('#root'))