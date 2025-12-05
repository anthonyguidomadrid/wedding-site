import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ContentHoneymoonGrid = styled(Box)(({ theme }) => ({
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

export const HoneymoonImage = styled(Box)<{ url: string }>(({ theme, url }) => ({
  backgroundImage: `url(${url})`,
  minHeight: '50vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    minHeight: '100vh',
  },
}));

export const HoneymoonImageWrapper = styled(Box)(() => ({ width: '100%' }));
