import { MenuItems } from './components/MenuItems';
import { getMenuFontColor, splitMenuArray } from './DesktopMenu.func';
import { DesktopMenuWrapper, StyledLanguageSelector } from './DesktopMenu.styles';
import { MENU_ITEMS } from '../../Menu.constant';
import { AbsoluteWrapper } from '../../Menu.styles';
import { MenuLogo } from '../MenuLogo';

import { FadeInWrapper } from '~/components/shared/FadeInWrapper';
import { useScroll } from '~/hooks';

export const DesktopMenu = () => {
  const [firstHalfMenuArr, secondHalfMenuArr] = splitMenuArray(MENU_ITEMS);
  const { isAtTop } = useScroll();
  return (
    <FadeInWrapper>
      <DesktopMenuWrapper color={getMenuFontColor(isAtTop)}>
        <MenuItems itemsArray={firstHalfMenuArr} />
        <MenuLogo />
        <MenuItems itemsArray={secondHalfMenuArr} />
        <AbsoluteWrapper>
          <StyledLanguageSelector textColor={getMenuFontColor(isAtTop)} />
        </AbsoluteWrapper>
      </DesktopMenuWrapper>
    </FadeInWrapper>
  );
};
