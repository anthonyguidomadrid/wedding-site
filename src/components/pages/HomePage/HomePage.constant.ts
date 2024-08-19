import { Section } from './HomePage.types';

import { Details } from '~/components/Details';
import { Header } from '~/components/Header';
import { detailsNormalizer, headerNormalizer } from '~/normalizers';
import { DETAILS_QUERY, HEADER_QUERY } from '~/queries';

export const SECTION_NAMES = {
  header: 'header',
  details: 'details',
  faq: 'faq',
  rvsp: 'rvsp',
  honeymoon: 'honeymoon',
  footer: 'footer',
};

export const SECTIONS: Section[] = [
  {
    query: HEADER_QUERY,
    Component: Header,
    normalizer: headerNormalizer,
    name: SECTION_NAMES.header,
  },
  {
    query: DETAILS_QUERY,
    Component: Details,
    normalizer: detailsNormalizer,
    name: SECTION_NAMES.details,
  },
];
