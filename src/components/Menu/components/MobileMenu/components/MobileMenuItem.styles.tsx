import { styled } from '@mui/material/styles';

export const MenuItemWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
}));
