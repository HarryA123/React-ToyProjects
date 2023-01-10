import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    background-color: black;
    margin: 0;
    padding: 0;
    border: 0;
    color:white;
    font-size: 12px;
  }
`;

export default GlobalStyle;
