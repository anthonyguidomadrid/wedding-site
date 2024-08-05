import { Theme as MuiTheme, TypeBackground } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    menu: string;
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
  }

  interface TypographyVariantsOptions {
    small: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    small: true;
  }
}
