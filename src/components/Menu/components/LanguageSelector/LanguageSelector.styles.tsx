import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { getMenuFontColor } from '~/components/Menu/components/DesktopMenu/DesktopMenu.func';

export const LanguageSelectorWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  textTransform: 'uppercase',
}));

export const LanguageButton = styled(Button)<{ textColor: string }>(({ textColor }) => ({
  minWidth: '10px',
  color: textColor,
  transition: 'color background-color 0.5s ease',
  fontSize: '1rem',
  borderRadius: 0,
  '&:not(:last-child)': {
    borderRight: `1px ${textColor} solid`,
    height: '20px',
  },
}));
