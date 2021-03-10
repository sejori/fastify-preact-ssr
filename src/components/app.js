import { html } from '../htm.js'
import { useState } from 'preact/hooks'
import List from './list.js'

const PreactApp = () => {
    const [dataArray, setDataArray] = useState(['Item one', 'Item two', 'Item three', 'item 4', 'item 5'])

    return html`
        <${List} data=${dataArray} />
        <button onclick=${() => setDataArray(dataArray => [...dataArray, "another item"])}>add item</button>
    `
}

export default PreactApp