import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FooterWrapper = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  a: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
}));

export const LogoGrid = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  [theme.breakpoints.up('md')]: {
    padding: 0,
  },
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
}));

export const FooterNote = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `0.5px solid ${theme.palette.background.paper}`,
  color: theme.palette.text.secondary,
  a: {
    textDecoration: 'underline',
    color: theme.palette.text.secondary,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
