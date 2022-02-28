import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ref } from "lit/directives/ref.js";
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

  #updateOutlet(node) {
    router.setOutlet(node);
  }

  render() {
    return html`
      <header>
        <nav>
          <h1><a href="/">Swapi</a></h1>
          <ul>
            <li>
              <a href="/people">People</a>
            </li>
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
