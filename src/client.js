import { hydrate } from 'preact'
import Router from './preact/components/Router.js'

hydrate(Router(), document.querySelector('#root'))
