import { Section } from './HomePage.types';

import { Details } from '~/components/Details';
import { Header } from '~/components/Header';
import { detailsNormalizer, headerNormalizer } from '~/normalizers';
import { DETAILS_QUERY, HEADER_QUERY } from '~/queries';

export const SECTIONS: Section[] = [
  {
    query: HEADER_QUERY,
    Component: Header,
    normalizer: headerNormalizer,
  },
  {
    query: DETAILS_QUERY,
    Component: Details,
    normalizer: detailsNormalizer,
  },
];
