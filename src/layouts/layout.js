import { html } from 'htm/preact'

const Layout = ({ children }) => {
    return html`
        <nav>
            <a href="/">Home...</a><a href="/about">About...</a>
        </nav>
        <main>
            ${html`${children}`}
        </main>
    `
}
  
export default Layout