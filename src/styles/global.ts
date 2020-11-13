import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    --e-global-color-text-default: #4F4F4F;
    --e-global-color-text-primary: #2962FF;
    --e-global-color-text-header: #9E9E9E;
    --e-global-color-text-header-selected: #090F31;

    --e-global-color-button-text-default: #3F3F3F;
    --e-global-color-button-text-span: #333333;
    --e-global-color-button-default: #E0E0E0;
    --e-global-color-button-default-hover: #AEAEAE;
    --e-global-color-button-primary: #2962FF;
    --e-global-color-button-primary-hover: #0039CB;
    --e-global-color-button-secondary: #455A64;
    --e-global-color-button-secondary-hover: #1C313A;
    --e-global-color-button-danger: #D32F2F;
    --e-global-color-button-danger: #9A0007;

    --e-global-color-background-default: #333333;
    --e-global-color-background-primary: #ffffff;
    --e-global-color-background-header: #FAFBFD;

    font-size: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input, button {
    font-family: 'Noto Sans JP', sans-serif;
    background: var(--e-global-color-background);
    color: var(--e-global-color-default);
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.715rem;
    line-height: 36px;
    font-weight: 500;
  }
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    line-height: 19px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 20px;
    font-weight: 500;
  }

  button {
    cursor: pointer
  }

  a, button {
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }
  
`;
