import { hydrate } from 'preact'
import PreactApp from './components/PreactApp'

hydrate(PreactApp(), document.getElementById('root'))
