import styled from '@emotion/styled';

import { ScrollLink } from '../shared/ScrollLink';
import { Typography } from '@mui/material';

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

export const Date = styled(Typography)(() => ({ textTransform: 'capitalize' }));

export const CtaBtn = styled(ScrollLink)(({ theme }) => ({
  border: '1px solid white',
  padding: theme.spacing(2, 3),
  borderRadius: theme.spacing(3),
  '&:hover': {
    backgroundColor: theme.palette.background.menu,
    color: theme.palette.text.primary,
  },
}));
