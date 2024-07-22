import styled from '@emotion/styled';

export const DesktopMenuWrapper = styled.div<{ color: string }>(({ theme, color }) => ({
  color,
  display: 'flex',
  gap: theme.spacing(8),
  fontSize: '1.2rem',
  alignItems: 'center',
  transition: 'color 0.5s ease',
}));

export const MenuItemsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
}));
