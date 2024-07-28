import { Box, Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { FadeInWrapperProps } from './FadeInWrapper.types';

export const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children,
  timeout = 2000,
  display = true,
  delay = 0,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showAfterDelay, setShowAfterDelay] = useState(false);

  useEffect(() => {
    if (display && inView && delay) {
      const timer = setTimeout(() => {
        setShowAfterDelay(true);
      }, delay);

      return () => clearTimeout(timer);
    } else if (delay === 0) {
      setShowAfterDelay(true);
    }
  }, [delay, display, inView]);

  return (
    <Fade in={display && inView && showAfterDelay} timeout={timeout}>
      <Box ref={ref}>{children}</Box>
    </Fade>
  );
};
