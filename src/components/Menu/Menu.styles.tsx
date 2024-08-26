import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Nav = styled.nav<{ isTransparent: boolean; isMenuOpen: boolean }>(
  ({ theme, isTransparent, isMenuOpen }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: isTransparent
      ? 'transparent'
      : isMenuOpen
      ? theme.palette.text.secondary
      : theme.palette.background.overlay,
    transition: 'background-color 0.5s ease-in-out, max-height 1s ease-in-out',
    maxHeight: isMenuOpen ? '100vh' : '100px',
    overflow: 'hidden',
  }),
);

export const AbsoluteWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
}));

export const MenuTypography = styled(Typography)(() => ({
  ':hover': {
    opacity: 0.5,
  },
  transition: 'opacity 1s ease',
}));
