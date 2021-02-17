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

        :host([disabled]) {
          pointer-events: none;
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
      disabled: {
        type: Boolean,
        reflect: true
      },
      value: {
        type: String
      },
      selectedIndex: {
        type: Number
      },
      invalid: {
        type: Boolean
      },
      required: {
        type: Boolean
      },
      // detection for current mouseover/mouseleave events state on overlay
      isOverlayHovered: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.isOverlayHovered = false;
    this.opened = false;
    this.items = ['Apple', 'Banana', 'Pussy', 'I will fuck you like a pig!', 'Bitch'];
    this.filteredItems = this.items.map((item, index) => ({title: item, index: index}));
    this.disabled = false;
    this.value = '';
    this.selectedIndex = -1;
    this.invalid = false;
    this.required = false;
    this.label = this.required ? 'Label (Required)' : 'Label';
  }

  render() {
    return html`
      <link rel="stylesheet" href="./node_modules/material-icons/iconfont/material-icons.css" />
      <div class="main-container">
        <label class="pure-material-textfield-outlined">
          <div ?hidden=${!this.disabled} class="material-icons-outlined readonly-icon">
            lock
          </div>
          <input .value=${this.value} placeholder=" " @input=${this._search} @focus=${this._onFocus} ?invalid=${this.invalid}
            ?required=${this.required} ?disabled=${this.disabled} @blur=${this._onBlur} />
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
        <combobox-overlay .selectedIndex=${this.selectedIndex} .opened=${this.opened} .items=${this.filteredItems}
          @change=${this._setValue} @set-hover-state=${this._setIsOverlayHovered} @clear-value=${this._clearValue}></combobox-overlay>
      </div>
    `;
  }

  get _input() {
    return this.shadowRoot.querySelector('input');
  }

  _onFocus() {
    this.opened = true;
  }

  _setIsOverlayHovered({detail: state}) {
    this.isOverlayHovered = state;
  }

  _onBlur() {
    if (!this.isOverlayHovered) this.opened = false;
  }

  _toggleOverlay() {
    this.opened = !this.opened;
  }

  _setValue({ detail: index }) {
    this.value = this.items[index];
    this.selectedIndex = index;
    this._input.value = this.value;
    this.invalid = false;
    this.opened = false;
  }

  _clearValue() {
    this.value = '';
    this._input.value = '';
    this.selectedIndex = -1;
    this.opened = false;
  }

  _search({ currentTarget }) {
    const inputValue = currentTarget.value.toLowerCase();
    const filteredItems = [];
    this.items.forEach((item, index) => item.toLowerCase().includes(inputValue) && filteredItems.push({title: item, index: index}));
    this.filteredItems = filteredItems;
  }

  validate() {
    if (!this.required) return true;
    this.invalid = !this.value;
    return !this.invalid;
  }

  updated(changedProperties) {
    const isOpenedPropChanged = changedProperties.has('opened');
    if (isOpenedPropChanged && this.opened) {
      this._input.focus();
    } else if (isOpenedPropChanged && !this.opened) {
      this.filteredItems = this.items.map((item, index) => ({ title: item, index: index }));
    }

    return true;
  }
}

window.customElements.define('wh-combobox', WhCombobox);
