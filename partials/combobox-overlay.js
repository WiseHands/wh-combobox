import { LitElement, html, css } from 'lit-element';

export class comboboxOverlay extends LitElement {
  static get styles() {
    return css`
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
      opened: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="drop" ?opened=${this.opened}>
        <ul>
          <li><span>Art</span></li>
          <li><span>Coding</span></li>
          <li><span>Design</span></li>
          <li><span>Web Development</span></li>
        </ul>
        </li>
      </div>
    `;
  }
}

customElements.define('combobox-overlay', comboboxOverlay);
