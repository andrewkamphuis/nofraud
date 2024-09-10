import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Commerce7AdminUI } from '@commerce7/admin-ui';
import { ThemeProvider } from 'styled-components';
// import SettingsView from './settings/SettingsView';
import OrderView from './order/OrderView';
import queryString from 'query-string';
import React, { useState } from 'react';
import AppErrorBoundary from './AppErrorBoundary';

const NoFraud = () => {
  const parsed = queryString.parse(window.location.search);
  const { adminUITheme } = parsed;
  let theme = adminUITheme === 'dark' ? darkTheme : lightTheme;
  let mode = adminUITheme === 'dark' ? 'dark' : 'light';
  const [error, setError] = useState();

  return (
    <Commerce7AdminUI mode={mode}>
      <ThemeProvider theme={theme}>
        <AppErrorBoundary error={error}></AppErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route
              path="/orderView"
              element={<OrderView setError={setError} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Commerce7AdminUI>
  );
};

export default NoFraud;

const lightTheme = {
  mode: 'light'
};

const darkTheme = {
  mode: 'dark'
};
