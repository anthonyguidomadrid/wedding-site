import styled from '@emotion/styled';

import { LanguageSelector } from '../LanguageSelector';

export const DesktopMenuWrapper = styled.div<{ color: string }>(({ theme, color }) => ({
  color,
  display: 'flex',
  gap: theme.spacing(8),
  alignItems: 'center',
  transition: 'color 0.5s ease',
}));

export const MenuItemsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
}));

export const StyledLanguageSelector = styled(LanguageSelector)<{ textColor: string }>(
  ({ textColor, theme }) => ({
    color: textColor,
    transition: 'color background-color 0.5s ease',
    padding: theme.spacing(0, 2),
    '&:not(:last-child)': {
      borderRight: `1px ${textColor} solid`,
    },
  }),
);
