import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "/components/PersonItem.js";
import { fetchPeople } from "/api.js";

export class PagePeople extends LitElement {
  static get styles() {
    return css`
      div {
        display: grid;
        grid-wrap: wrap;
        gap: 15px;
        justify-content: center;
        grid-template-columns: 1fr 1fr 1fr;
      }
      h2 {
        text-align: center;
      }
    `;
  }

  static properties = {
    _people: { state: true, type: Array },
    _loading: { state: true, type: Boolean },
  };

  constructor() {
    super();
    this._people = [];
    this._loading = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    try {
      this._loading = true;
      const response = await fetchPeople();
      const { results } = await response.json();

      results.forEach(console.log);
      this._people = results;
    } catch (e) {
      this._error = e.toString();
    } finally {
      this._loading = false;
    }
  }

  render() {
    return html`
      <h2>People</h2>
      ${this._loading ? html`<p>Loading...</p>` : null}
      ${this._error ? html`<p>${this._error}</p>` : null}
      <div>
        ${this._people.map(
          (person) => html`<person-item .val=${person}></person-item>`
        )}
      </div>
    `;
  }
}

// ${this._people.map((person) => html`<li>${person.name}</li>`)}
customElement("page-people")(PagePeople);
