import { DesktopMenu } from './components';
import { MobileMenu } from './components/MobileMenu';
import { Nav } from './Menu.styles';

import { useMobileMenu, useScroll } from '~/hooks';
import { useMobile } from '~/hooks/useMobile';

export const Menu = () => {
  const { isMobile } = useMobile();
  const { isAtTop } = useScroll();
  const { isMobileMenuOpen } = useMobileMenu();
  return (
    <Nav isTransparent={isAtTop && !isMobileMenuOpen} isMenuOpen={isMobileMenuOpen}>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </Nav>
  );
};
