import { RequestDocument } from 'graphql-request';

export type ContentfulWrapperProps<TProps, Tquery> = {
  query: RequestDocument;
  Component: React.ComponentType<TProps>;
  normalizer: (data: Tquery) => TProps;
  name?: string;
};
