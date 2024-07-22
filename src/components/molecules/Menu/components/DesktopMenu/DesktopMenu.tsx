import { Button } from '@mui/material';

import { splitMenuArray } from './DesktopMenu.func';
import { DesktopMenuWrapper } from './DesktopMenu.styles';
import { MENU_ITEMS } from '../../Menu.func';
import { MenuItem } from '../../Menu.types';

import { LanguageSelector } from '~/components/atoms/LanguageSelector';
import { FadeInWrapper } from '~/components/molecules/FadeInWrapper';
import { CustomScrollLink } from '~/components/molecules/Menu/components/DesktopMenu/components/ScrollLink';
import { useScroll } from '~/hooks';

export const DesktopMenu = () => {
  const [firstHalfMenuArr, secondHalfMenuArr] = splitMenuArray(MENU_ITEMS);
  const { scrollToTop, isAtTop } = useScroll();
  return (
    <DesktopMenuWrapper isAtTop={isAtTop}>
      {firstHalfMenuArr.map(({ item }: MenuItem) => (
        <CustomScrollLink key={item} label={item} to={item} />
      ))}
      <FadeInWrapper>
        <Button
          style={{
            padding: '30px',
            backgroundColor: 'beige',
            borderRadius: '30px',
          }}
          onClick={() => scrollToTop()}
        />
      </FadeInWrapper>
      {secondHalfMenuArr.map(({ item }: MenuItem) => (
        <CustomScrollLink key={item} label={item} to={item} />
      ))}
      <LanguageSelector />
    </DesktopMenuWrapper>
  );
};
