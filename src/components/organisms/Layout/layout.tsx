import { CssBaseline } from '@mui/material';
import React, { ReactElement } from 'react';

import { Menu } from '~/components/molecules/Menu';

interface LayoutPropsInterface {
  preview: boolean;
  children: ReactElement;
}

export const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Menu />
      <div>{children}</div>
    </>
  );
};
