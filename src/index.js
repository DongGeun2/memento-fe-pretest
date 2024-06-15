import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import ThemeProvider from "./styled/ThemeProvider";

const container = document.getElementById("root");

ReactDOM.createRoot(container).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
