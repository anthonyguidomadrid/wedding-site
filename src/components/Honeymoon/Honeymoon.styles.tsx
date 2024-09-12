import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const HoneymoonGrid = styled(Grid)();

export const ContentHoneymoonGrid = styled(HoneymoonGrid)(({ theme }) => ({
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

export const ImageHoneymoonGrid = styled(HoneymoonGrid)<{ backgroundImageUrl: string }>(
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

HoneymoonGrid.defaultProps = {
  item: true,
};
