import { createTheme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

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
    fontFamily: `Red Hat Display, Arial, sans-serif`,
    fontSize: 16,
    h1: {
      fontSize: 72,
      fontFamily: 'Edu AU VIC WA NT Hand, "Arial", sans-serif',
      '@media (max-width:900px)': {
        fontSize: 48,
      },
    },
    h3: {
      fontSize: 22,
      fontWeight: 500,
      textTransform: 'capitalize',
      fontFamily: 'Edu AU VIC WA NT Hand, "Arial", sans-serif',
      paddingBottom: '8px',
    },
    small: {
      fontSize: 12,
    },
  },
  palette: {
    text: {
      primary: '#000',
    },
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: 'white',
      menu: 'rgba(255, 255, 255, 0.9)',
    },
  },
  components: {},
});
