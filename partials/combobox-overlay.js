import { LitElement, html, css } from 'lit-element';
import { comboboxItem } from './combobox-item.js';

export class comboboxOverlay extends LitElement {
  static get styles() {
    return css`
      .drop {
        position: relative;
      }

      .drop ul {
        width: 100%;
        position: absolute;
        left: 0;
        margin-top: 1px;
        padding-left: 0;
        transition: all 0.3s ease;
        transform: scale(1, 0);
        transform-origin: 0 0;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16),
          0 2px 8px 0 rgba(0, 0, 0, 0.12);
      }

      .drop[opened] ul {
        transform: scale(1);
      }
    `;
  }

  static get properties() {
    return {
      opened: {
        type: Boolean
      },
      items: {
        type: Array
      }
    };
  }

  render() {
    return html`
      <div class="drop" ?opened=${this.opened}>
        <ul>
          ${this.items.map((item, index) => html`<combobox-item index=${index} item=${item}></combobox-item>`)}
        </ul>
        </li>
      </div>
    `;
  }
}

customElements.define('combobox-overlay', comboboxOverlay);
