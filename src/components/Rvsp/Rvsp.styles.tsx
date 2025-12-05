import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const RvspWrapper = styled(Box)<{ url?: string }>(({ theme, url }) => ({
  display: 'flex',
  backgroundImage: `url(${url})`,
  flexDirection: 'row-reverse',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

export const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.whiteOverlay,
  padding: theme.spacing(5),
  textAlign: 'center',
  margin: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'height 1s ease',
  [theme.breakpoints.up('lg')]: {
    margin: theme.spacing(10),
    padding: theme.spacing(10),
  },
}));
