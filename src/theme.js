import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova, sans-serif",
  },
  palette: {
    primary: {
      main: "#2995DA",
      contrastText: "#fff",
    },
    secondary: {
      main: "#40D2BF",
      contrastText: "#fff",
    },
  },
});

export default theme;
