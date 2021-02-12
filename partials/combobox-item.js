import {LitElement, html, css} from 'lit-element';
import {comboboxItemStyles} from '../styles/combobox-item-styles.js';

export class comboboxItem extends LitElement {
  static get styles() {
    return comboboxItemStyles;
  }

  static get properties() {
    return {
      item: {
        type: String,
      },
      index: {
        type: Number,
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
      <li
        ?hidden=${!this.item}
        @click=${this._setValue}
        ?selected=${this.selectedIndex === this.index}
      >
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
