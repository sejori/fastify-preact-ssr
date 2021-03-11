import { hydrate } from 'preact'
import Router from './components/Router.js'

hydrate(Router(), document.querySelector('#root'))
