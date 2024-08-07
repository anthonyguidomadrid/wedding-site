import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import { ScrollLink } from '../shared/ScrollLink';

export const HeaderSection = styled.section(({ theme }) => ({
  height: '100vh',
  textAlign: 'center',
  position: 'relative',
  color: theme.palette.common.white,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ImageBackground = styled.div<{ backgroundImageLink: string }>(
  ({ backgroundImageLink }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImageLink})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
    filter: 'brightness(50%)',
  }),
);

export const ContentWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(5),
}));

export const DateWrapper = styled.div(({ theme }) => ({
  textTransform: 'capitalize',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(1),
  },
}));

export const CtaBtn = styled(ScrollLink)(({ theme }) => ({
  border: `1px solid ${theme.palette.common.white}`,
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(3),
  '&:hover': {
    backgroundColor: theme.palette.background.menu,
    color: theme.palette.text.primary,
  },
}));
