import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Commerce7AdminUI } from "@commerce7/admin-ui";
import { ThemeProvider } from "styled-components";
import { components } from "./Styles";
import SettingsView from "./settings/SettingsView";
import OrderView from "./order/OrderView";
import queryString from "query-string";
import React, { useState } from "react";
import AppErrorBoundary from "./AppErrorBoundary";

const NoFraud = () => {
  const parsed = queryString.parse(window.location.search);
  const { adminUITheme } = parsed;
  let theme = adminUITheme === "dark" ? darkTheme : lightTheme;
  let mode = adminUITheme === "dark" ? "dark" : "light";
  const [error, setError] = useState();

  return (
    <Commerce7AdminUI mode={mode}>
      <ThemeProvider theme={theme}>
        <AppErrorBoundary error={error}></AppErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SettingsView />} />
            <Route
              path="/setting"
              element={<SettingsView setError={setError} />}
            />
            <Route path="/order" element={<OrderView setError={setError} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Commerce7AdminUI>
  );
};

export default NoFraud;

const lightTheme = {
  components: components.light,
  mode: "light",
};

const darkTheme = {
  components: components.dark,
  mode: "dark",
};
