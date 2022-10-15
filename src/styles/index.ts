import { createTheme, withStyles } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    neutral2: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    neutral2?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    neutral2: true;
  }
}

const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#FF6F6F',
      contrastText: '#ffff',
    },
    secondary: {
      main: '#4488B3',
    },
    warning: {
      main: '#FFFD87',
    },
    neutral: {
      main: '#FFFF',
      contrastText: 'black',
    },
    neutral2: {
      main: '#fff',
      contrastText: '#000',
    },
  },
});

export default theme;
