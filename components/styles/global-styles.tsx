import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  padding: 0;
  height: 100%;
  min-height: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}
body {
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  text-size-adjust: 100%;
  /* display: flex; */
  font-family: "Montserrat", sans-serif;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

#__next {  height: 100%; width: 100%;   }
`;
