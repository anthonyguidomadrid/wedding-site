import { useEffect } from 'react';

import { DesktopMenu } from './components';
import { MobileMenu } from './components/MobileMenu';
import { Nav } from './Menu.styles';

import { useMobileMenu, useScroll } from '~/hooks';
import { useMobile } from '~/hooks/useMobile';

export const Menu = () => {
  const { isMobile } = useMobile();
  const { isAtTop } = useScroll();
  const { isMobileMenuOpen } = useMobileMenu();
  const isTransparent = isAtTop && (isMobile ? !isMobileMenuOpen : true);
  const isMenuOpen = isMobile && isMobileMenuOpen;

  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isMobile]);

  return (
    <Nav isTransparent={isTransparent} isMenuOpen={isMenuOpen} isMobile={isMobile}>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </Nav>
  );
};
