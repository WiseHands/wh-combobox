import { LitElement, html, css } from 'lit-element';
import { materialTextfieldOutlinedStyles } from '/styles/material-textfield-outlined-styles.js';
import { comboboxOverlay } from '/partials/combobox-overlay.js';

export class WhCombobox extends LitElement {
  static get styles() {
    return [
      materialTextfieldOutlinedStyles,
      css`
        :host {
          font-family: var(
            --pure-material-font,
            'Roboto',
            'Segoe UI',
            BlinkMacSystemFont,
            system-ui,
            -apple-system
          );
        }

        .readonly-icon {
          position: absolute;
          top: 20px;
          padding-left: 3px;
        }

        .icons-container-right {
          position: absolute;
          top: 30px;
          right: 20px;
          cursor: pointer;
        }

        span.label-title::before {
          padding-left: 1.4em;
        }

        [hidden] {
          display: none;
        }
      `,
    ];
  }

  static get properties() {
    return {
      label: {
        type: String,
      },
      opened: {
        type: Boolean,
      },
      items: {
        type: Array,
      },
      filteredItems: {
        type: Array
      },
      readonly: {
        type: Boolean,
      },
      value: {
        type: String
      },
      selectedIndex: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.label = 'Label';
    this.opened = false;
    this.items = ['Apple', 'Banana', 'Pussy', 'I will fuck you like a pig!', 'Bitch'];
    this.filteredItems = [];
    this.readonly = false;
    this.value = '';
    this.selectedIndex = -1;
  }

  render() {
    return html`
      <link rel="stylesheet" href="./node_modules/material-icons/iconfont/material-icons.css" />
      <div class="main-container">
        <label class="pure-material-textfield-outlined">
          <div ?hidden=${!this.readonly} class="material-icons-outlined readonly-icon">
            lock
          </div>
          <input .value=${this.value} placeholder=" " @input=${this._search} @focus=${this._onFocus} @blur=${this._onBlur} />
          <span class="label-title">${this.label}</span>
        </label>
      
        <div class="icons-container-right">
          <div class="material-icons" ?hidden=${!this.value} @click=${this._clearValue}>clear</div>
      
          <div ?hidden="${this.opened}" class="material-icons-outlined" @click="${this._toggleOverlay}">
            keyboard_arrow_down
          </div>
      
          <div ?hidden="${!this.opened}" class="material-icons-outlined" @click="${this._toggleOverlay}">
            keyboard_arrow_up
          </div>
        </div>
      
        <combobox-overlay .selectedIndex=${this.selectedIndex} .opened=${this.opened} .items=${this.items}
          @change=${this._setValue}></combobox-overlay>
      </div>
    `;
  }

  _onFocus() {
    this.shadowRoot.querySelector('input').value = '';
    this.opened = true;
  }

  _onBlur() {
    this.shadowRoot.querySelector('input').value = this.value;
  }

  updated(values) {
    if (values.has('value')) this.opened = false;
  }

  _toggleOverlay() {
    this.opened = !this.opened;
  }

  _setValue({ detail: index }) {
    this.value = this.items[index];
    this.selectedIndex = index;
  }

  _clearValue() {
    this.selectedIndex = -1;
    this.value = '';
  }

  _search({ currentTarget }) {
    const inputValue = currentTarget.value;
    console.log(inputValue, this.items);
  }
}

window.customElements.define('wh-combobox', WhCombobox);
