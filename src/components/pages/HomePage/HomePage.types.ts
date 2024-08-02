import { HeaderProps } from '~/components/Header';
import { HeaderQuery } from '~/normalizers/types';

interface SectionConfig<TQuery, TProps> {
  query: string;
  Component: React.ComponentType<TProps>;
  normalizer: (query: TQuery) => TProps;
}

export type Section = SectionConfig<HeaderQuery, HeaderProps>;
