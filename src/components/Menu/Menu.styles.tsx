import styled from '@emotion/styled';

export const Nav = styled.nav<{ isTransparent: boolean; isMenuOpen: boolean }>(
  ({ theme, isTransparent, isMenuOpen }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: isTransparent ? 'transparent' : theme.palette.background.menu,
    maxHeight: isMenuOpen ? '100vh' : '10vh',
    transition: 'background-color 0.5s ease-in-out, max-height 0.5s ease-in-out',
  }),
);
export const AbsoluteWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
}));
