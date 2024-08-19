import { DetailsProps } from '~/components/Details';
import { HeaderProps } from '~/components/Header';
import { ContentfulWrapperProps } from '~/components/shared/ContentfulWrapper/ContentfulWrapper.types';
import { HeaderQuery, DetailsQuery } from '~/normalizers';

export type Section = ContentfulWrapperProps<
  HeaderProps & DetailsProps,
  HeaderQuery & DetailsQuery
>;
