import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonToTop = styled(Button)<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  opacity: 0.5,
  transition: 'opacity 0.5s ease-in-out, padding 0.5s ease-in-out',
  transform: 'rotate(-90deg)',
  zIndex: 9999,
  minWidth: 0,
  borderRadius: isMobile ? '24px' : '28px',
  padding: isMobile ? '10px' : '14px',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    opacity: 0.75,
  },
}));
