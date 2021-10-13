import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-fuschia-60);/*${(props) => props.theme.colors.background};*/
    color: var(--color-iris-100);/*${(props) => props.theme.colors.text};*/
    font: var(--font-header-1);
  }
`;
