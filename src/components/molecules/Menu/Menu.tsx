import { DesktopMenu } from './components';
import { MobileMenu } from './components/MobileMenu';
import { Nav } from './Menu.styles';

import { useScroll } from '~/hooks';
import { useMobile } from '~/hooks/useMobile';

export const Menu = () => {
  const { isMobile } = useMobile();
  const { isAtTop } = useScroll();
  return <Nav isAtTop={isAtTop}>{isMobile ? <MobileMenu /> : <DesktopMenu />}</Nav>;
};
