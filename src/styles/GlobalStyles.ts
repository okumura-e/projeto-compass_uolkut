import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5% /* Change the default value from font-size from 16px to 10px */;
    }
`;

export default GlobalStyles;