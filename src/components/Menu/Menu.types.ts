import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type MenuItem = {
  item: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, 'svg'>>;
};
