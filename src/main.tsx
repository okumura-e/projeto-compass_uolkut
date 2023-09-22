import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/GlobalStyles.ts";
import FormPage from "./templates/FormPage/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FormPage />
    </ThemeProvider>
  </React.StrictMode>
);
