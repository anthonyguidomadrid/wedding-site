import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ButtonToTop = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  opacity: 0.5,
  transition: 'opacity 0.5s ease-in-out, padding 0.5s ease-in-out',
  transform: 'rotate(-90deg)',
  zIndex: 9999,
  minWidth: 0,
  borderRadius: '24px',
  padding: '10px',
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    opacity: 0.75,
  },
  [theme.breakpoints.up('md')]: {
    borderRadius: '28px',
    padding: '14px',
  },
}));
