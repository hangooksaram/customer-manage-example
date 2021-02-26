import React from "react";
import "./App.css";
import MainPage from "./pages/mainpage.jsx";
import theme from "./styles/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import globals from "./styles/globals.js";

const App = () => {
  const globalStyle = globals();
  return (
    <div className={globalStyle.root}>
      <MuiThemeProvider theme={theme}>
        <MainPage />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
