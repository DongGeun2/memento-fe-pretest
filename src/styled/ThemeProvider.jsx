import React from "react";

import {
  ThemeProvider as Provider,
  createGlobalStyle,
} from "styled-components";
import { normalize } from "styled-normalize";

// Theme Styled
const GlobalStyle = createGlobalStyle`
    ${normalize}
  `;

const ThemeProvider = ({ children }) => {
  const theme = {
    mainColor: "#ffd66e",
  };

  return (
    <Provider theme={theme}>
      <GlobalStyle />

      {children}
    </Provider>
  );
};

export default ThemeProvider;
