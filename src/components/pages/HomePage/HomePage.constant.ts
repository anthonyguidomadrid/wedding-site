import { Section } from './HomePage.types';

import { Details } from '~/components/Details';
import { DetailsProps } from '~/components/Details/Details.types';
import { Header, HeaderProps } from '~/components/Header';
import { DetailsQuery, HeaderQuery, detailsNormalizer, headerNormalizer } from '~/normalizers';
import { DETAILS_QUERY, HEADER_QUERY } from '~/queries';

export const SECTIONS: Section<HeaderQuery & DetailsQuery, Partial<HeaderProps & DetailsProps>>[] =
  [
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
