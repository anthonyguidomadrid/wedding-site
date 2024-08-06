import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const FooterWrapper = styled.section(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.common.white,
  textAlign: 'center',
  a: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const FooterGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10),
}));
FooterGrid.defaultProps = {
  container: true,
  flexDirection: 'column',
  spacing: 3,
};

export const LogoGrid = styled(Grid)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(10),
  paddingTop: theme.spacing(20),
  [theme.breakpoints.up('md')]: {
    paddingTop: 0,
  },
}));
LogoGrid.defaultProps = {
  container: true,
  alignContent: 'center',
  justifyContent: 'center',
};
