import * as Types from '../../__generated/graphql.types';

export type MenuGroupFieldsFragment = { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<(
    { __typename?: 'Page' }
  ) | null> };

export const MenuGroupFieldsFragmentDoc = `
    fragment MenuGroupFields on MenuGroupFeaturedPagesCollection {
  items {
    ...PageLinkFields
  }
}
    `;