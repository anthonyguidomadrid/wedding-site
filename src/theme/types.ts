import { Theme as MuiTheme, TypeBackground } from '@mui/material';

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
}
