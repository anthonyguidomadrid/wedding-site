import styled from '@emotion/styled';
import { Box, DialogContent, Grid, IconButton } from '@mui/material';

export const ModalTitleWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12),
  },
}));

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: theme.palette.grey[500],
}));

export const ModalContentWrapper = styled(DialogContent)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12),
  },
}));

export const TitleWithIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const PaymentMethodGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(12),
  },
}));
