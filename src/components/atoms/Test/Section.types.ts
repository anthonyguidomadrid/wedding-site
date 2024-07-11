import { RequestDocument } from 'graphql-request';

export type SectionData = {
  testCollection: {
    items: {
      greeting: string;
    }[];
  };
};

export type SectionProps<T> = {
  query: RequestDocument;
  Component: React.ComponentType<T>;
};
