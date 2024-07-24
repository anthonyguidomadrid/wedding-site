import { Button } from '@mui/material';
import React from 'react';

import { MenuLogoProps } from './MenuLogo.types';

import { useScroll } from '~/hooks';

export const MenuLogo: React.FC<MenuLogoProps> = ({ onClick }) => {
  const { scrollToTop } = useScroll();

  const onLogoClick = () => {
    onClick && onClick();
    scrollToTop();
  };

  return (
    <Button
      style={{
        padding: '30px',
        backgroundColor: 'beige',
        borderRadius: '30px',
      }}
      onClick={onLogoClick}
    />
  );
};
