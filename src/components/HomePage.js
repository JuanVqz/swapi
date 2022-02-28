import { LitElement, html } from "lit-element";

const URL_BASE = "https://swapi.dev/api";

export class HomePage extends LitElement {
  static properties = {
    _people: { state: true },
  };

  constructor() {
    super();
    this._people = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    const response = await fetch(`${URL_BASE}/people`);
    const { results } = await response.json();
    this._people = results;
  }

  render() {
    return html` <h1>Home Page</h1>
      <ul>
        ${this._people.map((person) => html` <li>${person.name}</li> `)}
      </ul>`;
  }
}

window.customElements.define("home-page", HomePage);
