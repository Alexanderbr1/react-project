import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
		body {
      background-color: var(--theme);
    }
    html[data-theme=light] {
				--theme: white;
    }

    html[data-theme=dark] {
				--theme: black;
    }

`;

export default GlobalStyles;
