import { useTranslation } from 'react-i18next';

import { MenuItemsProps } from './MenuItems.types';

import { ScrollLink } from '~/components/shared/ScrollLink';

export const MenuItems: React.FC<MenuItemsProps> = ({ itemsArray }) => {
  const { t } = useTranslation();
  return (
    <>
      {itemsArray.map(({ item }) => (
        <ScrollLink key={item} to={item}>
          {t(`menu.${item}`)}
        </ScrollLink>
      ))}
    </>
  );
};
