import { Box, Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { SlideWrapper } from './components';
import { FadeInWrapperProps } from './FadeInWrapper.types';
import { OptionalWrapper } from '../OptionalWrapper';

export const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children,
  timeout = 2000,
  display = true,
  delay = 0,
  shouldSlide = false,
  container,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showAfterDelay, setShowAfterDelay] = useState(false);
  const shouldDisplay = display && inView && showAfterDelay;

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

  console.log({ container });
  return (
    <Fade in={shouldDisplay} timeout={timeout}>
      <Box ref={ref}>
        <OptionalWrapper
          Wrapper={SlideWrapper}
          condition={shouldSlide}
          props={{ shouldDisplay, timeout, container }}
        >
          <Box>{children}</Box>
        </OptionalWrapper>
      </Box>
    </Fade>
  );
};
