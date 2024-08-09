import { Place } from '~/normalizers';

export type DetailsProps = Partial<{
  title: string;
  subtitle: string;
  places: Place[];
}>;
