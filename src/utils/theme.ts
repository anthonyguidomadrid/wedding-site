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

const colorfulTheme = createTheme({
  spacing: SPACER,
  typography: {
    fontFamily: `'Red Hat Display', sans-serif`,
    htmlFontSize: 10,
    caption: {
      fontSize: '1.5rem',
      opacity: 0.6,
    } as TypographyStyleOptions & { opacity: number },
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
    },
  },
  components: {},
});

export default colorfulTheme;
