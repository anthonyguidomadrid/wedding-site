import styled from '@emotion/styled';

export const Nav = styled.nav<{ isTransparent: boolean; isMenuOpen: boolean; isMobile: boolean }>(
  ({ theme, isTransparent, isMenuOpen, isMobile }) => ({
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
      : isMobile
      ? theme.palette.common.white
      : theme.palette.background.menu,
    height: isMenuOpen ? '100vh' : '10vh',
    transition: 'background-color 0.5s ease-in-out, height 1s ease-in-out',
  }),
);
export const AbsoluteWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
}));
