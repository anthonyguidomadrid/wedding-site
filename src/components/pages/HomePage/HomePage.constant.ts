import { Section } from './HomePage.types';

import { Header } from '~/components/Header';
import { headerNormalizer } from '~/normalizers';
import { HEADER_QUERY } from '~/queries';

export const SECTIONS: Section[] = [
  {
    query: HEADER_QUERY,
    Component: Header,
    normalizer: headerNormalizer,
  },
];
