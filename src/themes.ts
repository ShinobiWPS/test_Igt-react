import { ThemeOptions } from '@mui/material/styles';



export const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#00347a',
      dark: '#162840',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffffff',
      dark: '#242325',
      contrastText: '#ffffff',
    },
    action: {
      active: '#166ba7',
    },
    text: {
      primary: '#000000',
    },
    warning: {
      main: '#ed811e',
    },
    divider: '#e3e3e380',
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#292F36',
      dark: '#162840',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#242325',
      dark: '#242325',
      contrastText: '#ffffff',
    },
    action: {
      active: '#292F36',
    },
    text: {
      primary: '#ffffff',
    },
    warning: {
      main: '#ed811e',
    },
    divider: '#e3e3e380',
  },
};
