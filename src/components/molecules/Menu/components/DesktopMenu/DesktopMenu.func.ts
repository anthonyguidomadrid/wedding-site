import { MenuItem } from '../../Menu.types';

export const splitMenuArray = (array: MenuItem[]): MenuItem[][] => {
  const mid = Math.floor(array.length / 2);

  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);

  return [firstHalf, secondHalf];
};

export const getFontColor = (isAtTop: boolean) => {
  return isAtTop ? 'white' : 'black';
};
