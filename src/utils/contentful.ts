import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

interface FetchContentfulDataResponse<T> {
  data: T;
  errors?: any;
}

export const fetchContentfulData = async <T>(
  query: RequestDocument,
  variables?: Variables,
): Promise<FetchContentfulDataResponse<T>> => {
  try {
    const data = await client.request<T>(query, variables);
    return { data };
  } catch (errors) {
    return { data: null as any, errors };
  }
};
