// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
// * {
//     box-sizing: border-box;
// }
//   body {
//     padding: 0;
//     margin : 0;
//     font-family: "Montserrat";
//     font-size: .940rem;
//     background-color: hsl(200, 100%,97%);
//   }
//   ul {
//     list-style: none;
//   }
// `;
// export default GlobalStyles;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: .940rem;
    background-color: hsl(200, 100%,97%);
    line-height: normal;
  }
  ul {

    background-color: white;
}
ul {

    list-style: none;
}
`;

export default GlobalStyles;

