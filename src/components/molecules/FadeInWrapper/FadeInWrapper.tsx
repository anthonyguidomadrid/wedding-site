import { Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

import { FadeInWrapperProps } from './FadeInWrapper.types';

export const FadeInWrapper = ({ children }: FadeInWrapperProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Fade in={inView} timeout={1000} ref={ref}>
      {children}
    </Fade>
  );
};
