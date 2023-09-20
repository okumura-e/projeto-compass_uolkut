import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto Flex", sans-serif;
    }

    html {
        font-size: 62.5% /* Change the default font-size value from 16px to 10px */;
    }
`;

export default GlobalStyles;
