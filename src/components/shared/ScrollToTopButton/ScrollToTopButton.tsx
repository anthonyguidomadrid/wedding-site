import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ButtonToTop } from './ScrollToTopButton.styles';
import { FadeInWrapper } from '../FadeInWrapper';

import { useMobile, useScroll } from '~/hooks';

export const ScrollToTopButton = () => {
  const { isAtTop, scrollToTop } = useScroll();
  const { isMobile } = useMobile();
  return (
    <FadeInWrapper display={!isAtTop}>
      <ButtonToTop onClick={() => scrollToTop()} isMobile={isMobile}>
        <ArrowForwardIosIcon fontSize="small" />
      </ButtonToTop>
    </FadeInWrapper>
  );
};
