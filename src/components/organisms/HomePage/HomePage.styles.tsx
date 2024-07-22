import styled from '@emotion/styled';
import { Element } from 'react-scroll';

export const Section = styled(Element)(({ backgroundColor, height }) => ({
  height: height ?? '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  backgroundColor,
}));
