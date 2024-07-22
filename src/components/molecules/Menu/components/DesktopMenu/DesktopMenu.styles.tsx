import styled from '@emotion/styled';

import { getMenuFontColor } from './DesktopMenu.func';

export const DesktopMenuWrapper = styled.div<{ isAtTop: boolean }>(({ theme, isAtTop }) => {
  return {
    color: getMenuFontColor(isAtTop),
    display: 'flex',
    gap: theme.spacing(8),
    fontSize: '1.2rem',
    alignItems: 'center',
    transition: 'color 0.5s ease',
  };
});

export const MenuItemsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
}));
