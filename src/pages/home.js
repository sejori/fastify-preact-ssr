import { html } from 'htm/preact/index.module.js'
import { useState } from 'preact/hooks'

export default () => {
    const [count, setCount] = useState(0)

    return html`
        <div>
            <h1>Hello!!</h1>
            <p>${count}</p>
            <button onClick=${() => setCount(count => count++)}>up</button>
            <button onClick=${() => setCount(count => count--)}>down</button>
        </div>
    `
}