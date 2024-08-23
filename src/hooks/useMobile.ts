import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

import { theme } from '~/theme';

export const useMobile = () => {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Function to check viewport height
    const checkViewportHeight = () => {
      setIsHorizontal(window.innerHeight < 600);
    };

    checkViewportHeight();

    window.addEventListener('resize', checkViewportHeight);

    return () => {
      window.removeEventListener('resize', checkViewportHeight);
    };
  }, []);

  return { isMobile, isHorizontal };
};
