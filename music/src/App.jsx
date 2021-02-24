import React from "react";
import "./App.css";
import MainPage from "./pages/mainpage";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import theme from "./styles/theme";

import { MuiThemeProvider } from "@material-ui/core/styles";
import MainPageT from "./pages/mainpageT";
import globals from "./styles/globals.js";

const App = () => {
  const globalStyle = globals();
  return (
    <div className={globalStyle.root}>
      <MuiThemeProvider theme={theme}>
        <MainPageT />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
