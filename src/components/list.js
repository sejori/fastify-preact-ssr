import { html } from '../htm.js'

const List = ({ data }) => { // takes a data prop
    return html`
        <ul>
            <!-- loop over data array -->
            ${data.map(i => html`
                <li> 
                    <!-- render out each item -->
                    ${i}
                </li>
            `)}
        </ul>
    `
}

export default List