import { DetailsProps } from '~/components/Details';
import { FaqProps } from '~/components/Faq/Faq.types';
import { HeaderProps } from '~/components/Header';
import { HoneymoonProps } from '~/components/Honeymoon/Honeymoon.types';
import { RvspProps } from '~/components/Rvsp/Rvsp.types';
import { ContentfulWrapperProps } from '~/components/shared/ContentfulWrapper/ContentfulWrapper.types';
import { HeaderQuery, DetailsQuery, FaqQuery, RvspQuery, HoneymoonQuery } from '~/normalizers';

export type Section = ContentfulWrapperProps<
  HeaderProps & DetailsProps & FaqProps & RvspProps & HoneymoonProps,
  HeaderQuery & DetailsQuery & FaqQuery & RvspQuery & HoneymoonQuery
>;
