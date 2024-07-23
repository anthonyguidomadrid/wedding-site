import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';

import { MenuButton, MenuItemsWrapper, MobileMenuWrapper } from './MobileMenu.styles';
import { AbsoluteWrapper } from '../../Menu.styles';
import { getMenuFontColor } from '../DesktopMenu/DesktopMenu.func';
import { Logo } from '../Logo';

import { FadeInWrapper } from '~/components/shared';
import { useMobileMenu, useScroll } from '~/hooks';

export const MobileMenu = () => {
  const { isMobileMenuOpen, toogleMobileMenu } = useMobileMenu();
  const { isAtTop } = useScroll();
  const toogleMenu = () => toogleMobileMenu();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <FadeInWrapper>
      <MobileMenuWrapper>
        <Logo />
        <AbsoluteWrapper>
          <MenuButton
            onClick={toogleMenu}
            iconColor={getMenuFontColor(isAtTop && !isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        </AbsoluteWrapper>
      </MobileMenuWrapper>
      {isMobileMenuOpen && (
        <MenuItemsWrapper>
          <p>Menu 1</p>
          <p>Menu 2</p>
          <p>Menu 3</p>
          <p>Menu 4</p>
          <p>Menu 5</p>
        </MenuItemsWrapper>
      )}
    </FadeInWrapper>
  );
};
