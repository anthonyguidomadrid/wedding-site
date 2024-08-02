import { gql } from 'graphql-request';

export const FOOTER_QUERY = gql`
  query Footer($locale: String, $preview: Boolean) {
    footerCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        email
        phonesCollection {
          items {
            phoneNumber
            name
          }
        }
      }
    }
  }
`;

export const HEADER_QUERY = gql`
  query Header($locale: String, $preview: Boolean) {
    headerCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        title
        startingDate
        finishingDate
        place
        ctaLabel
        backgroundImage {
          url
        }
      }
    }
  }
`;
