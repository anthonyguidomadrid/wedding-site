import { Slide } from '@mui/material';

import { SlideWrapperProps } from './SlideWrapper.types';

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, shouldDisplay, timeout }) => {
  return (
    <Slide direction="up" in={shouldDisplay} timeout={timeout}>
      {children}
    </Slide>
  );
};
