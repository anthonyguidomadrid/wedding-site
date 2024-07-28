import { RequestDocument } from 'graphql-request';

export type SectionData = {
  testCollection: {
    items: {
      greeting: string;
    }[];
  };
};

export type ContentfulWrapperProps<TProps, Tquery> = {
  query: RequestDocument;
  Component: React.ComponentType<TProps>;
  normalizer: (data: Tquery) => TProps;
};
