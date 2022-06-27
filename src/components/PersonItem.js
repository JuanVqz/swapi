import { html, css, LitElement } from "lit";

export class PersonItem extends LitElement {
  static get styles() {
    return css`
			div {
				text-align: center;
				border: 1px solid white;
				border-radius: 5px;
				padding: 10px;
			}
			span {
				font-size: 8px;
			}
		`;
  }
  static get properties() {
    return {
      val: { type: Object },
    };
  }

  render() {
    return html`
      <div>
        <h3>${this.val.name}</h3>
        <p>Skin color: ${this.val.skin_color}</p>
        <p>Birth of year: ${this.val.birth_year}</p>
        <p>Number of films: ${this.val.films.length}</p>
        <span>Gender: ${this.val.gender}</span>
        <p></p>
      </div>
    `;
  }
}

window.customElements.define("person-item", PersonItem);
