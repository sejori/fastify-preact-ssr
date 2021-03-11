import { html } from 'htm/preact'
import List from './List'

const dataArray = ['Item one', 'Item two', 'Item three']

const PreactApp = () => {
  return html`
    <${List} data=${dataArray} />
  `
}

export default PreactApp
