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
    fontFamily: `Playfair Display, Arial, sans-serif`,
    fontSize: 16,
    h1: {
      fontSize: 68,
      fontFamily: 'Amalfi Coast, "Arial", sans-serif',
      '@media (max-width:900px)': {
        fontSize: 42,
        margin: '16px 8px',
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
      fontWeight: 600,
      fontFamily: 'Cinzel, "Arial", sans-serif',
      paddingBottom: '8px',
    },
    small: {
      fontSize: 12,
    },
    menu: {
      fontFamily: 'Cinzel, "Arial", sans-serif',
    },
  },
  palette: {
    text: {
      primary: '#34382c',
      secondary: '#fffff5',
    },
    primary: {
      main: '#34382c',
      light: '#4e4e49',
    },
    secondary: {
      main: '#fffff5',
      dark: '#a09f8d',
    },
    background: {
      default: '#fffff2',
      paper: '#fffff5',
      overlay: 'rgba(255, 255, 245, 0.9)',
      primary: '#34382c',
      greyDark: '#4e4e49',
      greyLight: '#a09f8d',
    },
  },
  components: {},
});
