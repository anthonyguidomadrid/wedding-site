import styled from '@emotion/styled';

export const Nav = styled.nav<{ isAtTop: boolean }>(({ theme, isAtTop }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  ...(!isAtTop && { backgroundColor: theme.palette.common.white }),
  transition: 'background-color 0.5s ease',
}));
