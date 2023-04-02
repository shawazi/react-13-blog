import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import WazRouter from "./router/WazRouter";

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
      <WazRouter />
    </ThemeProvider>
  );
}

export default App;
