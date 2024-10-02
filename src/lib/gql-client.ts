import { QueryCache } from '@tanstack/query-core';

export const queryConfig = {
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
};
