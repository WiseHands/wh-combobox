import {LitElement, html, css} from 'lit-element';

export class WhCombobox extends LitElement {
  static get styles() {
    return css`
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

      .pure-material-textfield-outlined {
        --pure-material-safari-helper1: rgb(
          var(--pure-material-primary-rgb, 33, 150, 243)
        );
        position: relative;
        display: flex;
        padding-top: 6px;
        font-size: 16px;
        line-height: 1.5;
        overflow: hidden;
      }

      /* Input, Textarea */
      .pure-material-textfield-outlined > input,
      .pure-material-textfield-outlined > textarea {
        box-sizing: border-box;
        margin: 0;
        border: solid 1px; /* Safari */
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        border-top-color: transparent;
        border-radius: 4px;
        padding: 15px 30px;
        width: 100%;
        height: inherit;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        background-color: transparent;
        box-shadow: none; /* Firefox */
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        caret-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        transition: border 0.2s, box-shadow 0.2s;
      }

      /* Span */
      .pure-material-textfield-outlined > input + span,
      .pure-material-textfield-outlined > textarea + span {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        width: 100%;
        max-height: 100%;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
        font-size: 75%;
        line-height: 15px;
        cursor: text;
        transition: color 0.2s, font-size 0.2s, line-height 0.2s;
      }

      /* Corners */
      .pure-material-textfield-outlined > input + span::before,
      .pure-material-textfield-outlined > input + span::after,
      .pure-material-textfield-outlined > textarea + span::before,
      .pure-material-textfield-outlined > textarea + span::after {
        content: '';
        display: block;
        box-sizing: border-box;
        margin-top: 6px;
        border-top: solid 1px;
        border-top-color: rgba(
          var(--pure-material-onsurface-rgb, 0, 0, 0),
          0.6
        );
        min-width: 10px;
        height: 8px;
        pointer-events: none;
        box-shadow: inset 0 1px transparent;
        transition: border-color 0.2s, box-shadow 0.2s;
      }

      .pure-material-textfield-outlined > input + span::before,
      .pure-material-textfield-outlined > textarea + span::before {
        margin-right: 4px;
        border-left: solid 1px transparent;
        border-radius: 4px 0;
      }

      .pure-material-textfield-outlined > input + span::after,
      .pure-material-textfield-outlined > textarea + span::after {
        flex-grow: 1;
        margin-left: 4px;
        border-right: solid 1px transparent;
        border-radius: 0 4px;
      }

      /* Hover */
      .pure-material-textfield-outlined:hover > input,
      .pure-material-textfield-outlined:hover > textarea {
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        border-top-color: transparent;
      }

      .pure-material-textfield-outlined:hover > input + span::before,
      .pure-material-textfield-outlined:hover > textarea + span::before,
      .pure-material-textfield-outlined:hover > input + span::after,
      .pure-material-textfield-outlined:hover > textarea + span::after {
        border-top-color: rgba(
          var(--pure-material-onsurface-rgb, 0, 0, 0),
          0.87
        );
      }

      .pure-material-textfield-outlined:hover
        > input:not(:focus):placeholder-shown,
      .pure-material-textfield-outlined:hover
        > textarea:not(:focus):placeholder-shown {
        border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
      }

      /* Placeholder-shown */
      .pure-material-textfield-outlined > input:not(:focus):placeholder-shown,
      .pure-material-textfield-outlined
        > textarea:not(:focus):placeholder-shown {
        border-top-color: rgba(
          var(--pure-material-onsurface-rgb, 0, 0, 0),
          0.6
        );
      }

      .pure-material-textfield-outlined
        > input:not(:focus):placeholder-shown
        + span,
      .pure-material-textfield-outlined
        > textarea:not(:focus):placeholder-shown
        + span {
        font-size: inherit;
        line-height: 68px;
      }

      .pure-material-textfield-outlined
        > input:not(:focus):placeholder-shown
        + span::before,
      .pure-material-textfield-outlined
        > textarea:not(:focus):placeholder-shown
        + span::before,
      .pure-material-textfield-outlined
        > input:not(:focus):placeholder-shown
        + span::after,
      .pure-material-textfield-outlined
        > textarea:not(:focus):placeholder-shown
        + span::after {
        border-top-color: transparent;
      }

      /* Focus */
      .pure-material-textfield-outlined > input:focus,
      .pure-material-textfield-outlined > textarea:focus {
        border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        border-top-color: transparent;
        box-shadow: inset 1px 0 var(--pure-material-safari-helper1),
          inset -1px 0 var(--pure-material-safari-helper1),
          inset 0 -1px var(--pure-material-safari-helper1);
        outline: none;
      }

      .pure-material-textfield-outlined > input:focus + span,
      .pure-material-textfield-outlined > textarea:focus + span {
        color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
      }

      .pure-material-textfield-outlined > input:focus + span::before,
      .pure-material-textfield-outlined > input:focus + span::after,
      .pure-material-textfield-outlined > textarea:focus + span::before,
      .pure-material-textfield-outlined > textarea:focus + span::after {
        border-top-color: var(--pure-material-safari-helper1) !important;
        box-shadow: inset 0 1px var(--pure-material-safari-helper1);
      }

      /* Disabled */
      .pure-material-textfield-outlined > input:disabled,
      .pure-material-textfield-outlined > input:disabled + span,
      .pure-material-textfield-outlined > textarea:disabled,
      .pure-material-textfield-outlined > textarea:disabled + span {
        border-color: rgba(
          var(--pure-material-onsurface-rgb, 0, 0, 0),
          0.38
        ) !important;
        border-top-color: transparent !important;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
        pointer-events: none;
      }

      .pure-material-textfield-outlined > input:disabled + span::before,
      .pure-material-textfield-outlined > input:disabled + span::after,
      .pure-material-textfield-outlined > textarea:disabled + span::before,
      .pure-material-textfield-outlined > textarea:disabled + span::after {
        border-top-color: rgba(
          var(--pure-material-onsurface-rgb, 0, 0, 0),
          0.38
        ) !important;
      }

      .pure-material-textfield-outlined > input:disabled:placeholder-shown,
      .pure-material-textfield-outlined
        > input:disabled:placeholder-shown
        + span,
      .pure-material-textfield-outlined > textarea:disabled:placeholder-shown,
      .pure-material-textfield-outlined
        > textarea:disabled:placeholder-shown
        + span {
        border-top-color: rgba(
          var(--pure-material-onsurface-rgb, 0, 0, 0),
          0.38
        ) !important;
      }

      .pure-material-textfield-outlined
        > input:disabled:placeholder-shown
        + span::before,
      .pure-material-textfield-outlined
        > input:disabled:placeholder-shown
        + span::after,
      .pure-material-textfield-outlined
        > textarea:disabled:placeholder-shown
        + span::before,
      .pure-material-textfield-outlined
        > textarea:disabled:placeholder-shown
        + span::after {
        border-top-color: transparent !important;
      }

      /* Faster transition in Safari for less noticable fractional font-size issue */
      @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {
          .pure-material-textfield-outlined > input,
          .pure-material-textfield-outlined > input + span,
          .pure-material-textfield-outlined > textarea,
          .pure-material-textfield-outlined > textarea + span,
          .pure-material-textfield-outlined > input + span::before,
          .pure-material-textfield-outlined > input + span::after,
          .pure-material-textfield-outlined > textarea + span::before,
          .pure-material-textfield-outlined > textarea + span::after,
          .drop {
            transition-duration: 0.1s;
          }
        }
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
    `;
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
        type: Object
      }
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
