import { Box, styled } from '@mui/material';

export const DurationWrapper = styled(Box)(({ theme }) => ({
  width: '15%',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
  },
}));
