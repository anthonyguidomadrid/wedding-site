import { useMediaQuery } from '@mui/material';

import { theme } from '~/theme';

export const useMobile = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return { isMobile };
};
