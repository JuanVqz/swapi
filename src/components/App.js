import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ref } from "lit/directives/ref.js";
import { fetchTopics } from "../api";
import { router } from "/router.js";

class AppElement extends LitElement {
  static get styles() {
    return css`
      h1 {
        margin: 0;
      }

      header,
      main {
        padding: 1rem;
      }

      header {
        background-color: #403539;
        color: white;
        box-shadow: 0 0 0 3px hsl(340 20% 6% / 0.95);
      }

      nav {
        display: flex;
        align-items: center;
      }

      a {
        color: inherit;
        text-transform: capitalize;
        margin-left: 15px;
      }

      a:not(:hover) {
        text-decoration: none;
      }

      ul {
        margin-left: auto;
        list-style: none;
        padding: 0;
        display: flex;
      }
    `;
  }

  static properties = {
    _topics: { state: true, type: Object },
  }

  constructor() {
    super();
    this._topics = {};
    this._loading = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    try {
      this._loading = true;
      const response = await fetchTopics();
      const results = await response.json();
      console.log(results)

      this._topics = results;
    } catch (e) {
      this._error = e.toString();
    } finally {
      this._loading = false;
    }
  }

  #updateOutlet(node) {
    router.setOutlet(node);
  }

  render() {
    return html`
      <header>
        <nav>
          <h1><a href="/">Swapi</a></h1>
          <ul>
            ${
              Object.entries(this._topics).map(([topic]) => 
                html`
                  <li>
                    <a href="/${topic}">
                      ${topic}
                    </a>
                  </li>`
              )
            }
          </ul>
        </nav>
      </header>
      <main>
        <!-- Route outlet -->
        <div ${ref(this.#updateOutlet)}></div>
      </main>
    `;
  }
}

customElement("x-app")(AppElement);
