import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "/components/HomePage.js";

export class PageIndex extends LitElement {
  render() {
    return html`<home-page></home-page>`;
  }
}

customElement("page-index")(PageIndex);
