import { Section } from './HomePage.types';

import { Details } from '~/components/Details';
import { Faq } from '~/components/Faq';
import { Header } from '~/components/Header';
import { Honeymoon } from '~/components/Honeymoon';
import { Rvsp } from '~/components/Rvsp';
import {
  detailsNormalizer,
  faqNormalizer,
  headerNormalizer,
  honeymoonNormalizer,
  rvspNormalizer,
} from '~/normalizers';
import { DETAILS_QUERY, FAQ_QUERY, HEADER_QUERY, HONEYMOON_QUERY, RVSP_QUERY } from '~/queries';

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
  {
    query: FAQ_QUERY,
    Component: Faq,
    normalizer: faqNormalizer,
    name: SECTION_NAMES.faq,
  },
  {
    query: RVSP_QUERY,
    Component: Rvsp,
    normalizer: rvspNormalizer,
    name: SECTION_NAMES.rvsp,
  },
  {
    query: HONEYMOON_QUERY,
    Component: Honeymoon,
    normalizer: honeymoonNormalizer,
    name: SECTION_NAMES.honeymoon,
  },
];
