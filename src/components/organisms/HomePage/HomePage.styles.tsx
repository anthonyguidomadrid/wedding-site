import styled from '@emotion/styled';
import { Element } from 'react-scroll';

export const Nav = styled.nav(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'white',
  zIndex: 1000,
  a: {
    margin: '0 1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
}));

export const Section = styled(Element)(({ backgroundColor, height }) => ({
  height: height ?? '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  backgroundColor,
}));
