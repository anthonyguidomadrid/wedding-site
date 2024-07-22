import styled from '@emotion/styled';

import { getFontColor } from './DesktopMenu.func';

export const DesktopMenuWrapper = styled.div<{ isAtTop: boolean }>(({ theme, isAtTop }) => {
  const commonColor = getFontColor(isAtTop);
  return {
    color: theme.palette.common[commonColor],
    display: 'flex',
    gap: theme.spacing(6),
    fontSize: '1.2rem',
    alignItems: 'center',
    transition: 'color 0.5s ease',
  };
});
