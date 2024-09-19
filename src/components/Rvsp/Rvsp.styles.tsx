import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';

export const RvspWrapper = styled(Grid)<{ backgroundImageUrl?: string }>(
  ({ theme, backgroundImageUrl }) => ({
    backgroundImage: `url(${backgroundImageUrl})`,
    flexDirection: 'row-reverse',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  }),
);

RvspWrapper.defaultProps = {
  container: true,
};

export const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.whiteOverlay,
  padding: theme.spacing(5),
  textAlign: 'center',
  margin: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'height 1s ease',
  [theme.breakpoints.up('lg')]: {
    margin: theme.spacing(10),
    padding: theme.spacing(10),
  },
}));
