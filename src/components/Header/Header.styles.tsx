import styled from '@emotion/styled';

export const HeaderSection = styled.section(({ theme }) => ({
  minHeight: '100vh',
  textAlign: 'center',
  position: 'relative',
  color: theme.palette.text.secondary,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ImageBackground = styled.div<{ backgroundImageLink?: string }>(
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
  gap: theme.spacing(7),
}));

export const DateWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(1),
  },
}));
