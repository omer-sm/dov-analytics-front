import { Box, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';
import TopBar from './Components/TopBar';
import Menu from './Components/Menu';
import { tabs } from './tabs';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Api/queryClient';

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [currentTab, setCurrentTab] = useState<number>(1);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <Box sx={{ m: 0, pt: '70px' }}>
          <TopBar {...{ themeMode, setThemeMode }} />
          <Menu {...{ currentTab, setCurrentTab }} />
          <Stack>{tabs[currentTab - 1].element}</Stack>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
