import { gql } from 'graphql-request';

import { IMAGE_FRAGMENT } from './common';

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
        backgroundImage {
          ...ImageFields
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;

export const DETAILS_QUERY = gql`
  query Details($locale: String, $preview: Boolean) {
    detailsCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        title
        subtitle
        placesCollection(locale: $locale, preview: $preview, limit: 2) {
          items {
            title
            dateAndTime
            addressLine1
            addressLine2
            mapLink
            photo {
              ...ImageFields
            }
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;
