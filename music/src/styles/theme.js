import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EEE4FF",
      light: "#F7F3FF",
      dark: "#E1CEFF",
    },
    secondary: {
      main: "#FF9661",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f6f5f5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: `"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default responsiveFontSizes(theme);
