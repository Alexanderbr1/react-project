import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
		body {
      background-color: var(--theme);
    }

    .ant-btn[type=button] {
      background-color: var(--button-background);
      color: var(--button-text);
    }

    .ant-btn[disabled] {
      opacity: .5;
      background-color: var(--button-background);
      color: var(--button-text);
    }

    html[data-theme=light] {
      --theme: white;
      --button-background: white; 
      --button-text: black;
    }

    html[data-theme=dark] {
      --theme: black;
      --button-background: #333; 
      --button-text: #fff;
    }
`;

export default GlobalStyles;
