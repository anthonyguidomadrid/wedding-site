import { CssBaseline } from '@mui/material';
import React, { ReactElement } from 'react';

import { ContentfulWrapper } from '../ContentfulWrapper';
import { ScrollToTopButton } from '../ScrollToTopButton';

import { Footer } from '~/components/Footer';
import { Menu } from '~/components/Menu';
import { footerNormalizer } from '~/normalizers';
import { FOOTER_QUERY } from '~/queries/sections';

interface LayoutPropsInterface {
  preview: boolean;
  children: ReactElement;
}

export const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Menu />
      <ScrollToTopButton />
      <div>{children}</div>
      <ContentfulWrapper query={FOOTER_QUERY} Component={Footer} normalizer={footerNormalizer} />
    </>
  );
};
