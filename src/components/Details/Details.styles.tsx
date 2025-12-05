import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const DetailsWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column' as const,
}));
