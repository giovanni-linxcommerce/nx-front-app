import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-body);/*${(props) => props.theme.colors.background};*/
    color: var(--color-brand-stone-color-stone-primary-darkest);/*${(props) => props.theme.colors.text};*/
    font: var( --font-font-size-font-size-md);
  }
`;
