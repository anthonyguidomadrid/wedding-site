import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const FooterWrapper = styled.section(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  a: {
    color: theme.palette.text.secondary,
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
  padding: theme.spacing(5, 0),
  [theme.breakpoints.up('md')]: {
    padding: 0,
  },
}));

LogoGrid.defaultProps = {
  container: true,
  justifyContent: 'center',
  textAlign: 'center',
  item: true,
};
