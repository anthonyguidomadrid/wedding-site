import { MenuItemsProps } from './MenuItems.types';
import { CustomScrollLink } from '../ScrollLink';

export const MenuItems = ({ itemsArray }: MenuItemsProps) => (
  <>
    {itemsArray.map(({ item }) => (
      <CustomScrollLink key={item} label={item} to={item} />
    ))}
  </>
);
