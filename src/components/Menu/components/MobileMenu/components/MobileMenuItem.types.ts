import { MenuItem } from '~/components/Menu/Menu.types';

export type MobileMenuItemProps = Pick<MenuItem, 'Icon'> & {
  children: React.ReactNode;
};
