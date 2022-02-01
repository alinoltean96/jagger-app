import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Dashboard } from "./screens/dashboard/Dashboard";
import JSONData from "./assets/data.json";

export const AppContext = React.createContext({
  data: {},
  setData: () => {},
});

// Overwrite some MUI items to match UX
const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#678A9D",
          fontWeight: "bold",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          width: "50px",
        },
        input: {
          padding: "5px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#E24F43",
    },
    secondary: {
      light: "#E8E8E8",
      main: "#8C8C8C",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "roboto",
    },
    body2: {
      fontSize: 12,
      color: "#8C8C8C",
    },
    h2: { fontSize: 18, fontWeight: "bold" },
    h3: {
      color: "#E24F43",
      fontSize: 16,
      marginBottom: 12,
    },
    h4: {
      color: "#8C8C8C",
      fontSize: 14,
      marginTop: 8,
      marginBottom: 8,
    },
    caption: {
      color: "yellow",
    },
  },
});

export const App = () => {
  const [data, setData] = useState(JSONData);
  const value = { data, setData };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={value}>
        <div className="App">
          <Dashboard />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
