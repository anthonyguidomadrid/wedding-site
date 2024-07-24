import { MenuItemsProps } from './MenuItems.types';

import { ScrollLink } from '~/components/shared/ScrollLink';

export const MenuItems: React.FC<MenuItemsProps> = ({ itemsArray }) => (
  <>
    {itemsArray.map(({ item }) => (
      <ScrollLink key={item} label={item} to={item} />
    ))}
  </>
);
