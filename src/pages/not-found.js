import { LitElement, html } from "lit";

class NotFound extends LitElement {
  render() {
    return html` <p>This page doesn't exist yet.</p> `;
  }
}
customElements.define("not-found", NotFound);
