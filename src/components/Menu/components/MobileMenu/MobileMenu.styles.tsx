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

export const MenuItemsWrapper = styled.div(() => ({
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
}));
