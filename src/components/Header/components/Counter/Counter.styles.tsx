import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const GridContainer = styled(Grid)(() => ({ minWidth: '350px' }));
GridContainer.defaultProps = {
  justifyContent: 'center',
  spacing: 2,
  container: true,
};
