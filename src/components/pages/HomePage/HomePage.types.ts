import { DetailsProps } from '~/components/Details/Details.types';
import { HeaderProps } from '~/components/Header';
import { DetailsQuery, HeaderQuery } from '~/normalizers/types';

interface SectionConfig<TQuery, TProps> {
  query: string;
  Component: React.ComponentType<TProps>;
  normalizer: (query: TQuery) => TProps;
}

export type Section<TQuery, TProps> = {
  query: string;
  Component: React.FC<TProps>;
  normalizer: (query: TQuery) => TProps;
};
