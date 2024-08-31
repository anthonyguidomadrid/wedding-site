import { Slide } from '@mui/material';

import { SlideWrapperProps } from './SlideWrapper.types';

export const SlideWrapper: React.FC<SlideWrapperProps> = ({
  children,
  shouldDisplay,
  timeout,
  container,
}) => (
  <Slide direction="up" in={shouldDisplay} timeout={timeout} container={container}>
    {children}
  </Slide>
);
