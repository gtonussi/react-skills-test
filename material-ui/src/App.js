import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicTable from './components/BasicTable'

export default function App() {
  const [userPref, setUserPref] = React.useState(
    localStorage.getItem("userPref") || "dark"
  );

  const theme = createTheme({
    palette: {
      mode: userPref,
    },
  });

  const toggleTheme = () => {
    setUserPref((previousValue) => {
      const newPref = previousValue === "light" ? "dark" : "light";
      localStorage.setItem("userPref", newPref);
      return newPref;
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <ThemeProvider theme={theme}>
        <BasicTable />
        <Button
          variant="contained"
          style={{ marginTop: "30px" }}
          onClick={toggleTheme}
        >
          Change theme
        </Button>
      </ThemeProvider>
    </div>
  );
}
