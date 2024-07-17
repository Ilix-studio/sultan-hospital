import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
  
    font-family: "Open Sans", sans-serif;
    font-size: .940rem;
    background-color: white;
    line-height: normal;
  }
  ul {

    background-color: white;
    list-style: none;
}
`;

export default GlobalStyles;
