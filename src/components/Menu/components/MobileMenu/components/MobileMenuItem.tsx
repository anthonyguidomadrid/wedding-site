import { Box } from '@mui/material';

import { MenuItemWrapper } from './MobileMenuItem.styles';
import { MobileMenuItemProps } from './MobileMenuItem.types';

import { useMobileMenu } from '~/hooks';

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ children, Icon }) => {
  const { toogleMobileMenu } = useMobileMenu();

  return (
    <MenuItemWrapper>
      <Icon />
      <Box onClick={() => toogleMobileMenu()}>{children}</Box>
    </MenuItemWrapper>
  );
};
