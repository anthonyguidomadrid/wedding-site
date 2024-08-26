import { Button } from '@mui/material';
import React from 'react';

import { MenuLogoProps } from './MenuLogo.types';

import { useMobile, useMobileMenu, useScroll } from '~/hooks';

import LogoDark from '/public/svg/logo-dark.svg';
import LogoWhite from '/public/svg/logo-white.svg';

export const MenuLogo: React.FC<MenuLogoProps> = ({ onClick }) => {
  const { scrollToTop, isAtTop } = useScroll();
  const { isMobile } = useMobile();
  const { isMobileMenuOpen } = useMobileMenu();

  const onLogoClick = () => {
    onClick && onClick();
    scrollToTop();
  };

  return (
    <Button onClick={onLogoClick}>
      {(isAtTop && !isMobile) || (isMobile && isAtTop && !isMobileMenuOpen) ? (
        <LogoWhite height="50" width="70" />
      ) : (
        <LogoDark height="50" width="70" />
      )}
    </Button>
  );
};
