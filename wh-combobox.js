import {LitElement, html, css} from 'lit-element';
import {materialTextfieldOutlinedStyles} from '/styles/material-textfield-outlined-styles.js';

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

        li {
          color: #6b6b6b;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
        }

        li:hover {
          background: #ebebeb;
        }

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

        .drop ul li {
          display: block;
          width: 100%;
        }

        .drop ul li span {
          width: 100%;
          padding: 1em 18px;
          display: inline-block;
          white-space: pre;
          box-sizing: border-box;
        }

        .drop ul li span:hover {
          background: #ebebeb;
        }

        .drop[opened] ul {
          transform: scale(1);
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
      <link
        rel="stylesheet"
        href="./node_modules/material-icons/iconfont/material-icons.css"
      />

      <div class="main-container">
        <label class="pure-material-textfield-outlined">
          <div
            ?hidden=${!this.readonly}
            class="material-icons-outlined readonly-icon"
          >
            lock
          </div>

          <input placeholder=" " />
          <span class="label-title">${this.label}</span>
        </label>

        <div class="icons-container-right">
          <div class="material-icons" ?hidden=${!this.value}>clear</div>

          <div
            ?hidden="${this.opened}"
            class="material-icons-outlined"
            @click="${this._toggleOverlay}"
          >
            keyboard_arrow_down
          </div>

          <div
            ?hidden="${!this.opened}"
            class="material-icons-outlined"
            @click="${this._toggleOverlay}"
          >
            keyboard_arrow_up
          </div>
        </div>

        <div class="drop" ?opened=${this.opened}>
          <ul>
            <li><span href="http://www.g.com">Art</span></li>
            <li><span href="http://www.g.com">Coding</span></li>
            <li><span href="http://www.g.com">Design</span></li>
            <li><span href="http://www.g.com">Web Development</span></li>
          </ul>
        </li>
        </div>
      </div>
    `;
  }

  _toggleOverlay() {
    this.opened = !this.opened;
  }
}

window.customElements.define('wh-combobox', WhCombobox);
