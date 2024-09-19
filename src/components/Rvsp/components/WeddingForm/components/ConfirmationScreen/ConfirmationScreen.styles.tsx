import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ScreenWrapper = styled(Box)(({ theme }) => ({
  margin: theme.spacing(10, 0),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

export const DataWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  flexDirection: 'column',
}));
