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
      readonly: {
        type: Boolean,
      },
      value: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.label = 'Label';
    this.opened = false;
    this.items = [];
    this.readonly = false;
    this.value = null;
  }

  render() {
    return html`
      <link rel="stylesheet" href="./node_modules/material-icons/iconfont/material-icons.css" />
      <div class="main-container">
        <label class="pure-material-textfield-outlined">
          <div ?hidden=${!this.readonly} class="material-icons-outlined readonly-icon">
            lock
          </div>
      
          <input placeholder=" " />
          <span class="label-title">${this.label}</span>
        </label>
      
        <div class="icons-container-right">
          <div class="material-icons" ?hidden=${!this.value}>clear</div>
      
          <div ?hidden="${this.opened}" class="material-icons-outlined" @click="${this._toggleOverlay}">
            keyboard_arrow_down
          </div>
      
          <div ?hidden="${!this.opened}" class="material-icons-outlined" @click="${this._toggleOverlay}">
            keyboard_arrow_up
          </div>
        </div>
      
        <combobox-overlay ?opened=${this.opened}></combobox-overlay>
      </div>
    `;
  }

  _toggleOverlay() {
    this.opened = !this.opened;
  }
}

window.customElements.define('wh-combobox', WhCombobox);
