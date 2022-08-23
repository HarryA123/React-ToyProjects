import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: "Arial", sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
