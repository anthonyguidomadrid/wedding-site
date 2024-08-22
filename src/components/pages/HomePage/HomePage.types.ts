import { DetailsProps } from '~/components/Details';
import { FaqProps } from '~/components/Faq/Faq.types';
import { HeaderProps } from '~/components/Header';
import { ContentfulWrapperProps } from '~/components/shared/ContentfulWrapper/ContentfulWrapper.types';
import { HeaderQuery, DetailsQuery, FaqQuery } from '~/normalizers';

export type Section = ContentfulWrapperProps<
  HeaderProps & DetailsProps & FaqProps,
  HeaderQuery & DetailsQuery & FaqQuery
>;
