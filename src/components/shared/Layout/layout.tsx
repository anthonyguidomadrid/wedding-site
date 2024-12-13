import { CssBaseline } from '@mui/material';
import React, { ReactElement } from 'react';

import { ContentfulWrapper } from '../ContentfulWrapper';
import { ScrollToTopButton } from '../ScrollToTopButton';

import { Footer } from '~/components/Footer';
import { Menu } from '~/components/Menu';
import { SECTION_NAMES } from '~/components/pages/HomePage/HomePage.constant';
import { footerNormalizer } from '~/normalizers';
import { FOOTER_QUERY } from '~/queries/sections';

interface LayoutPropsInterface {
  preview: boolean;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Menu />
      <ScrollToTopButton />
      <div>{children}</div>
      <ContentfulWrapper
        query={FOOTER_QUERY}
        Component={Footer}
        normalizer={footerNormalizer}
        name={SECTION_NAMES.footer}
      />
    </>
  );
};
