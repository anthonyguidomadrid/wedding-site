import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const FooterWrapper = styled.section(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.common.white,
  a: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const FooterGrip = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10),
}));
FooterGrip.defaultProps = {
  container: true,
  flexDirection: 'column',
  spacing: 3,
};
