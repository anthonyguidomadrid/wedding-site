import { Button } from '@mui/material';
import React from 'react';

import { MenuLogoProps } from './MenuLogo.types';

import { useMobile, useMobileMenu, useScroll } from '~/hooks';

// using public assets via <img> to avoid SVGR/Turbopack import issues

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
        <img src="/svg/logo-white.svg" alt="logo" height={50} width={70} />
      ) : (
        <img src="/svg/logo-dark.svg" alt="logo" height={50} width={70} />
      )}
    </Button>
  );
};
