import { Box, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

import { FadeInWrapperProps } from './FadeInWrapper.types';

export const FadeInWrapper = ({ children, timeout = 2000 }: FadeInWrapperProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Fade in={inView} timeout={timeout}>
      <Box ref={ref}>{children}</Box>
    </Fade>
  );
};
