import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
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
      main: '#BF101F',
      contrastText: '#ffff',
    },
  },
});

export default theme;
