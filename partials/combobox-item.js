import { LitElement, html, css } from 'lit-element';
import { comboboxItemStyles } from '../styles/combobox-item-styles.js';

export class comboboxItem extends LitElement {
  static get styles() {
    return comboboxItemStyles;
  }

  static get properties() {
    return {
      item: {
        type: Object,
      },
      selectedIndex: {
        type: Number,
      },
      selected: {
        type: Boolean,
      },
    };
  }

  render() {
    return html`
      <li ?hidden=${!this.item} @click=${this._setValue} ?selected=${this.selectedIndex === this.item.index}>
        <span>${this.item.title}</span>
      </li>
    `;
  }

  _setValue() {
    const customEvent = new CustomEvent('change', {
      detail: this.item.index,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(customEvent);
  }
}

customElements.define('combobox-item', comboboxItem);
