import { LitElement, html } from "lit";

export class HomePage extends LitElement {
  render() {
    return html` <h1>Home Page</h1> `;
  }
}

window.customElements.define("home-page", HomePage);
