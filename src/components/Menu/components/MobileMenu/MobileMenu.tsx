import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';

import { MobileMenuItem } from './components';
import { MenuButton, MenuItemsWrapper, MobileMenuWrapper } from './MobileMenu.styles';
import { MENU_ITEMS } from '../../Menu.constant';
import { AbsoluteWrapper, MenuTypography } from '../../Menu.styles';
import { getMenuFontColor } from '../DesktopMenu/DesktopMenu.func';
import { LanguageSelector } from '../LanguageSelector';
import { MenuLogo } from '../MenuLogo';

import { FadeInWrapper } from '~/components/shared/FadeInWrapper';
import { ScrollLink } from '~/components/shared/ScrollLink';
import { useMobileMenu, useScroll } from '~/hooks';

export const MobileMenu = () => {
  const { isMobileMenuOpen, toogleMobileMenu } = useMobileMenu();
  const { isAtTop } = useScroll();
  const toogleMenu = () => toogleMobileMenu();
  const { t } = useTranslation();
  const closeMenu = () => {
    if (isMobileMenuOpen) toogleMenu();
  };

  return (
    <FadeInWrapper>
      <MobileMenuWrapper>
        <MenuLogo onClick={closeMenu} />
        <AbsoluteWrapper>
          <MenuButton
            onClick={toogleMenu}
            iconColor={getMenuFontColor(isAtTop && !isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        </AbsoluteWrapper>
      </MobileMenuWrapper>
      <FadeInWrapper timeout={isMobileMenuOpen ? 4000 : 1000} display={isMobileMenuOpen}>
        <MenuItemsWrapper isMobileMenuOpen={isMobileMenuOpen}>
          {MENU_ITEMS.map(({ item, Icon }) => (
            <MobileMenuItem key={item} Icon={Icon}>
              <ScrollLink to={item} onClick={toogleMenu}>
                <MenuTypography variant="title">{t(`menu.${item}`)}</MenuTypography>
              </ScrollLink>
            </MobileMenuItem>
          ))}
          <MobileMenuItem Icon={TranslateIcon}>
            <LanguageSelector />
          </MobileMenuItem>
        </MenuItemsWrapper>
      </FadeInWrapper>
    </FadeInWrapper>
  );
};
