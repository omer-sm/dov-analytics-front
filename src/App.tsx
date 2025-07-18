import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import TopBar from './Components/TopBar';

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box sx={{ m: 0, pt: '70px' }}>
        <TopBar {...{ themeMode, setThemeMode }} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
