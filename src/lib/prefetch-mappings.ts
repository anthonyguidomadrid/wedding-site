import {
  CtfBusinessInfoQuery,
  CtfPersonQuery,
  CtfProductQuery,
} from '~/lib/__generated/graphql.types';

export type PrefetchMappingTypeFetcher = CtfBusinessInfoQuery | CtfPersonQuery | CtfProductQuery;

/**
 * This map is used to match a generated GQL query to a Contentful model's __typename. The query is used to prefetch the data through React Query's prefetchQuery method
 */
export const prefetchMap = {};
