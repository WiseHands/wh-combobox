import { css } from 'lit-element';

export const materialTextfieldOutlinedStyles = css`
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

  /* Input */
  .pure-material-textfield-outlined > input {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px; /* Safari */
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-top-color: transparent;
    border-radius: 4px;
    padding: 15px;
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

  :host([disabled]) .pure-material-textfield-outlined > input {
    padding: 15px 30px;
  }

  /* Span */
  .pure-material-textfield-outlined > input + span {
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
  .pure-material-textfield-outlined > input + span::after {
    content: '';
    display: block;
    box-sizing: border-box;
    margin-top: 6px;
    border-top: solid 1px;
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    min-width: 10px;
    height: 8px;
    pointer-events: none;
    box-shadow: inset 0 1px transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .pure-material-textfield-outlined > input + span::before {
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }

  .pure-material-textfield-outlined > input + span::after {
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 4px;
  }

  /* Hover */
  .pure-material-textfield-outlined:hover > input {
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    border-top-color: transparent;
  }

  .pure-material-textfield-outlined:hover > input + span::before,
  .pure-material-textfield-outlined:hover > input + span::after {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  }

  .pure-material-textfield-outlined:hover
    > input:not(:focus):placeholder-shown {
    border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  }

  /* Placeholder-shown */
  .pure-material-textfield-outlined > input:not(:focus):placeholder-shown {
    border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  }

  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span {
    font-size: inherit;
    line-height: 68px;
  }

  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > input:not(:focus):placeholder-shown
    + span::after {
    border-top-color: transparent;
  }

  /* Focus */
  .pure-material-textfield-outlined > input:focus {
    border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    border-top-color: transparent;
    box-shadow: inset 1px 0 var(--pure-material-safari-helper1),
      inset -1px 0 var(--pure-material-safari-helper1),
      inset 0 -1px var(--pure-material-safari-helper1);
    outline: none;
  }

  .pure-material-textfield-outlined > input:focus + span {
    color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  }

  .pure-material-textfield-outlined > input:focus + span::before,
  .pure-material-textfield-outlined > input:focus + span::after {
    border-top-color: var(--pure-material-safari-helper1) !important;
    box-shadow: inset 0 1px var(--pure-material-safari-helper1);
  }

  /* Disabled */
  .pure-material-textfield-outlined > input:disabled,
  .pure-material-textfield-outlined > input:disabled + span {
    border-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.38
    ) !important;
    border-top-color: transparent !important;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    pointer-events: none;
  }

  .pure-material-textfield-outlined > input:disabled + span::before,
  .pure-material-textfield-outlined > input:disabled + span::after {
    border-top-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.38
    ) !important;
  }

  .pure-material-textfield-outlined > input:disabled:placeholder-shown,
  .pure-material-textfield-outlined > input:disabled:placeholder-shown + span {
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
    + span::after {
    border-top-color: transparent !important;
  }

  /* Invalid */
  .pure-material-textfield-outlined > input[invalid],
  .pure-material-textfield-outlined > input[invalid] + span {
    border-color: red !important;
    border-top-color: transparent !important;
    color: red;
    pointer-events: none;
  }

  .pure-material-textfield-outlined > input[invalid] + span::before,
  .pure-material-textfield-outlined > input[invalid] + span::after {
    border-top-color: red !important;
  }

  .pure-material-textfield-outlined > input[invalid]:placeholder-shown:not(:focus),
  .pure-material-textfield-outlined > input[invalid]:placeholder-shown:not(:focus) + span {
    border-top-color: red !important;
  }

  .pure-material-textfield-outlined
    > input[invalid]:placeholder-shown
    + span::before,
  .pure-material-textfield-outlined
    > input[invalid]:placeholder-shown
    + span::after {
    border-top-color: transparent !important;
  }

  .pure-material-textfield-outlined > input[invalid]:focus {
    border-color: red;
    border-top-color: transparent;
    box-shadow: inset 1px 0 red,
      inset -1px 0 red,
      inset 0 -1px red;
    outline: none;
  }

  .pure-material-textfield-outlined > input[invalid]:focus + span {
    color: red;
  }

  .pure-material-textfield-outlined > input[invalid]:focus + span::before,
  .pure-material-textfield-outlined > input[invalid]:focus + span::after {
    border-top-color: red !important;
    box-shadow: inset 0 1px red;
  }

  /* Faster transition in Safari for less noticable fractional font-size issue */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      .pure-material-textfield-outlined > input,
      .pure-material-textfield-outlined > input + span,
      .pure-material-textfield-outlined > input + span::before,
      .pure-material-textfield-outlined > input + span::after,
      .drop {
        transition-duration: 0.1s;
      }
    }
  }
`;
