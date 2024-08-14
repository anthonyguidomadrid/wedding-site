import { gql } from 'graphql-request';

export const IMAGE_FRAGMENT = gql`
  fragment ImageFields on Asset {
    url
    description
    height
    width
  }
`;
