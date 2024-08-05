import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ButtonToTop } from './ScrollToTopButton.styles';
import { FadeInWrapper } from '../FadeInWrapper';

import { useMobile, useMobileMenu, useScroll } from '~/hooks';

export const ScrollToTopButton = () => {
  const { isAtTop, scrollToTop } = useScroll();
  const { isMobile } = useMobile();
  const { isMobileMenuOpen } = useMobileMenu();
  return (
    <FadeInWrapper display={(!isMobile && !isAtTop) || (!isAtTop && !isMobileMenuOpen && isMobile)}>
      <ButtonToTop onClick={() => scrollToTop()} isMobile={isMobile}>
        <ArrowForwardIosIcon fontSize="small" />
      </ButtonToTop>
    </FadeInWrapper>
  );
};
