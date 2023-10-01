import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import ConfigProvider from "antd/es/config-provider";
import { PersistGate } from "redux-persist/integration/react";
import router from "./App";
import GlobalStyle from "./styles/global.styles";
import { theme } from "./styles/global.theme";
import { persistor, store } from "./features/store";
import "antd/dist/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.orange,
          },
        }}
      >
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
