import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const PhoneWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));
