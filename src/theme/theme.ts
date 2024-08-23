import { createTheme } from '@mui/material/styles';

export const SPACER = 5;

interface ColorConfigInterface {
  headlineColor: string;
  textColor: string;
  backgroundColor: string;
  buttonColor: 'primary' | 'secondary';
}

const colorConfigs: { [key: string]: ColorConfigInterface } = {};

export const getColorConfigFromPalette = (palette: string): ColorConfigInterface => {
  if (colorConfigs[`palette-${palette}`] === undefined) {
    return colorConfigs['palette-1. White (#FFFFFF)'];
  }

  return colorConfigs[`palette-${palette}`];
};

export const theme = createTheme({
  spacing: SPACER,
  typography: {
    fontFamily: `EB Garamond, Arial, sans-serif`,
    fontSize: 18,
    h1: {
      fontSize: 72,
      fontFamily: 'Amalfi Coast, "Arial", sans-serif',
      '@media (max-width:900px)': {
        fontSize: 48,
        margin: '24px 8px',
      },
      margin: '32px 16px',
      lineHeight: '2',
    },
    h2: {
      fontSize: 52,
      fontFamily: 'Amalfi Coast, "Arial", sans-serif',
    },
    h3: {
      fontSize: 22,
      fontWeight: 500,
      fontFamily: 'Amalfi Coast, "Arial", sans-serif',
      paddingBottom: '24px',
    },
    small: {
      fontSize: 12,
    },
    menu: {
      fontFamily: 'Cinzel, "Arial", sans-serif',
      fontSize: 16,
    },
  },
  palette: {
    text: {
      primary: '#34382c',
      secondary: '#4e4e49',
    },
    primary: {
      main: '#34382c',
      light: '#4e4e49',
    },
    secondary: {
      main: '#fffff2',
      dark: '#a09f8d',
    },
    background: {
      default: '#fffff2',
      paper: '#fffff2',
      overlay: 'rgba(255, 255, 255, 0.9)',
      primary: '#34382c',
      greyDark: '#4e4e49',
      greyLight: '#a09f8d',
    },
  },
  components: {},
});
