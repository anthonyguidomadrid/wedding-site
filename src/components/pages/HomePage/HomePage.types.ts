import { DetailsProps } from '~/components/Details';
import { HeaderProps } from '~/components/Header';
import { HeaderQuery, DetailsQuery } from '~/normalizers';

interface SectionInterface<TQuery, TProps> {
  query: string;
  Component: React.FC<TProps>;
  normalizer: (query: TQuery) => TProps;
}

export type Section = SectionInterface<HeaderQuery & DetailsQuery, HeaderProps | DetailsProps>;
