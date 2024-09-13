import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';

export const ContentHoneymoonGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  textAlign: 'center',
  padding: theme.spacing(12),
  flexDirection: 'column',
  minHeight: '100vh',
  gap: theme.spacing(2),
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(0, 24),
    gap: theme.spacing(4),
  },
}));

ContentHoneymoonGrid.defaultProps = {
  item: true,
  sm: 12,
  lg: 6,
};

export const HoneymoonImage = styled(Box)<{ backgroundImageUrl: string }>(
  ({ theme, backgroundImageUrl }) => ({
    backgroundImage: `url(${backgroundImageUrl})`,
    minHeight: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      minHeight: '100vh',
    },
  }),
);

export const HoneymoonImageWrapper = styled(Grid)(() => ({ width: '100%' }));
HoneymoonImageWrapper.defaultProps = {
  item: true,
  sm: 12,
  lg: 6,
};
