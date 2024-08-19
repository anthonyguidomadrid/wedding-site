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
    padding: theme.spacing(2),
    backgroundColor: isTransparent
      ? 'transparent'
      : isMenuOpen
      ? theme.palette.common.white
      : theme.palette.background.menu,
    transition: 'background-color 0.5s ease-in-out, max-height 1s ease-in-out',
    maxHeight: isMenuOpen ? '100vh' : '100px', // Adjust '60px' to match the height when the menu is closed
    overflow: 'hidden',
  }),
);

export const AbsoluteWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
}));
