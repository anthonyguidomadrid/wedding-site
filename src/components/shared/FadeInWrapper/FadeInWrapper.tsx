import { Box, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

import { FadeInWrapperProps } from './FadeInWrapper.types';

export const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children,
  timeout = 2000,
  display = true,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Fade in={display && inView} timeout={timeout}>
      <Box ref={ref}>{children}</Box>
    </Fade>
  );
};
