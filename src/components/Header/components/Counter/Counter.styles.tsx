import { styled } from '@mui/material/styles';

export const GridContainer = styled('div')(() => ({
  minWidth: '350px',
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  flexWrap: 'wrap' as const,
}));
