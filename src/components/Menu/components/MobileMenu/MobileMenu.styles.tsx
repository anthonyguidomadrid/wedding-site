import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const MobileMenuWrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const MenuButton = styled(Button)<{ iconColor: string }>(({ iconColor }) => ({
  color: iconColor,
}));

export const MenuItemsWrapper = styled.div<{ isMobileMenuOpen: boolean }>(
  ({ theme, isMobileMenuOpen }) => ({
    height: isMobileMenuOpen ? '90vh' : 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    gap: theme.spacing(7),
    transition: 'height 1s ease-in-out',
  }),
);
