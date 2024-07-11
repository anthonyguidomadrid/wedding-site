import { gql } from 'graphql-request';

export const SECTION_QUERY = gql`
  query Test($locale: String, $preview: Boolean) {
    testCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        greeting
      }
    }
  }
`;
