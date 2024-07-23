import { MenuItems } from './components/MenuItems';
import { getMenuFontColor, splitMenuArray } from './DesktopMenu.func';
import { DesktopMenuWrapper } from './DesktopMenu.styles';
import { MENU_ITEMS } from '../../Menu.func';
import { AbsoluteWrapper } from '../../Menu.styles';
import { Logo } from '../Logo';

import { LanguageSelector } from '~/components/Menu/components/LanguageSelector';
import { FadeInWrapper } from '~/components/shared/FadeInWrapper';
import { useScroll } from '~/hooks';

export const DesktopMenu = () => {
  const [firstHalfMenuArr, secondHalfMenuArr] = splitMenuArray(MENU_ITEMS);
  const { isAtTop } = useScroll();
  return (
    <FadeInWrapper>
      <DesktopMenuWrapper color={getMenuFontColor(isAtTop)}>
        <MenuItems itemsArray={firstHalfMenuArr} />
        <Logo />
        <MenuItems itemsArray={secondHalfMenuArr} />
        <AbsoluteWrapper>
          <LanguageSelector />
        </AbsoluteWrapper>
      </DesktopMenuWrapper>
    </FadeInWrapper>
  );
};
