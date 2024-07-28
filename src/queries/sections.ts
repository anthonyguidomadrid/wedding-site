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

export const GREETING_QUERY = gql`
  query Greeting($locale: String, $preview: Boolean) {
    greetingCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        hello
      }
    }
  }
`;

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
