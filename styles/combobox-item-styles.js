import { css } from 'lit-element';

export const comboboxItemStyles = css`
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

      [selected] {
        color: dodgerblue;
      }
`;
