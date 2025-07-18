import { createTheme } from '@mui/material';

const theme = {
  typography: {
    fontFamily: 'Assistant',
    fontSize: 16,
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  ...theme
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light'
  },
  ...theme
});
