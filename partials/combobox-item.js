import {LitElement, html, css} from 'lit-element';

export class comboboxItem extends LitElement {
  static get styles() {
    return css`
      li {
        color: #6b6b6b;
        text-decoration: none;
        cursor: pointer;
        display: block;
        width: 100%;
      }

      li:hover {
        background: #ebebeb;
      }

      li span {
        width: 100%;
        padding: 1em 18px;
        display: inline-block;
        white-space: pre;
        box-sizing: border-box;
      }

      li span:hover {
        background: #ebebeb;
      }
    `;
  }

  static get properties() {
    return {
      item: {
        type: String,
      },
      index: {
        type: Number,
      },
    };
  }

  render() {
    return html`
      <li @click=${this._setValue}>
        <span>${this.item}</span>
      </li>
    `;
  }

  _setValue(event) {
    const customEvent = new CustomEvent('change', {
      detail: this.index,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(customEvent);
  }
}

customElements.define('combobox-item', comboboxItem);
