import { html } from 'htm/preact'
import { useState, useEffect } from 'preact/hooks'
import List from './list.js'

const App = () => {
    console.log(useState, useEffect)

    // const [dataArray, setDataArray] = useState(['Item one', 'Item two', 'Item three', 'item 4', 'item 5'])
    const [dataArray, setDataArray] = [['Item one', 'Item two', 'Item three', 'item 4', 'item 5'], (i) => console.log(i)]

    useEffect(() => {
        console.log('useEffect!!')
    }, [])
    
    return html`
        <${List} data=${dataArray} />
        <button onclick=${() => setDataArray([...dataArray, "another item"])}>add item</button>
    `
}

export default App