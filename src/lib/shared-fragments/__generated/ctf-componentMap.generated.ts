import * as Types from '../../__generated/graphql.types';

export type ComponentReferenceFieldsFragment = { __typename: 'Test', sys: { __typename?: 'Sys', id: string } };

export const ComponentReferenceFieldsFragmentDoc = `
    fragment ComponentReferenceFields on Entry {
  __typename
  sys {
    id
  }
}
    `;