import { MenuItems } from './components/MenuItems';
import { splitMenuArray } from './DesktopMenu.func';
import { DesktopMenuWrapper } from './DesktopMenu.styles';
import { MENU_ITEMS } from '../../Menu.func';
import { Logo } from '../Logo';

import { FadeInWrapper } from '~/components/molecules/FadeInWrapper';
import { LanguageSelector } from '~/components/molecules/Menu/components/LanguageSelector';
import { useScroll } from '~/hooks';

export const DesktopMenu = () => {
  const [firstHalfMenuArr, secondHalfMenuArr] = splitMenuArray(MENU_ITEMS);
  const { isAtTop } = useScroll();
  return (
    <FadeInWrapper>
      <DesktopMenuWrapper isAtTop={isAtTop}>
        <MenuItems itemsArray={firstHalfMenuArr} />
        <Logo />
        <MenuItems itemsArray={secondHalfMenuArr} />
        <LanguageSelector />
      </DesktopMenuWrapper>
    </FadeInWrapper>
  );
};
