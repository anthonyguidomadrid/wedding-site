import { Theme as MuiTheme, TypeBackground } from '@mui/material';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    whiteOverlay: string;
    primary: string;
    greyDark: string;
    greyLight: string;
    greenOverlay: string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    background: TypeBackground;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }

  interface TypographyVariants {
    small: React.CSSProperties;
    tiny: React.CSSProperties;
    title: React.CSSProperties;
    bold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    small: React.CSSProperties;
    tiny: React.CSSProperties;
    title: React.CSSProperties;
    bold: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tiny: true;
    small: true;
    title: true;
    bold: true;
  }
}
