import WazNav from "./components/WazNav";
import WazFoot from "./components/WazFoot";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Anonymous Pro, monospace',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WazNav />
      <WazFoot />
    </ThemeProvider>
  );
}

export default App;
