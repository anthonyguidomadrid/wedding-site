import { MenuItem } from '../../Menu.types';

import { theme } from '~/theme';

export const splitMenuArray = (array: MenuItem[]): MenuItem[][] => {
  const mid = Math.floor(array.length / 2);

  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);

  return [firstHalf, secondHalf];
};

export const getMenuFontColor = (isAtTop: boolean) => {
  return isAtTop ? theme.palette.common.white : theme.palette.text.primary;
};
