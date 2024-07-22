import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { getFontColor } from '~/components/molecules/Menu/components/DesktopMenu/DesktopMenu.func';

export const LanguageSelectorWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  textTransform: 'uppercase',
}));

export const LanguageButton = styled(Button)<{ isAtTop: boolean }>(({ theme, isAtTop }) => {
  const textColor = getFontColor(isAtTop);
  const color = theme.palette.common[textColor];
  return {
    minWidth: '10px',
    color,
    transition: 'color background-color 0.5s ease',
    fontSize: '1rem',
    borderRadius: 0,
    '&:not(:last-child)': {
      borderRight: `1px ${color} solid`,
      height: '20px',
    },
  };
});
