import { gql } from 'graphql-request';

export const SEO = gql`
  query Footer($locale: String, $preview: Boolean) {
    seoCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        pageTitle
        pageDescription
        canonicalUrl
        noFollow
        noIndex
        shareImagesCollection {
          items {
            fileName
            description
            url
          }
        }
      }
    }
  }
`;
