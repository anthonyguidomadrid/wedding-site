import { FooterQuery, helloRawQuery, rawQuery } from './types';

import { FooterProps } from '~/components/Footer';

export const helloNormalizer = (query: helloRawQuery): { greeting: string } => {
  return { greeting: query.greetingCollection.items[0].hello };
};

export const greetingNormalizer = (query: rawQuery): { label: string } => {
  return { label: query.testCollection.items[0].greeting };
};

export const footerNormalizer = (query: FooterQuery): FooterProps => {
  const footerItem = query.footerCollection.items[0];
  return {
    email: footerItem.email,
    phones: footerItem.phonesCollection.items,
  };
};
