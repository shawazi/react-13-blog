import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import ToastProvider from "./utilities/ToastProvider";
import Main from "./pages/Main";

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
    <ToastProvider>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </ToastProvider>
  );
}

export default App;
