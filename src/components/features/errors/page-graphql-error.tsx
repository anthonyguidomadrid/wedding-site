import { Container, Box } from '@mui/material';

import { GraphqlError } from '~/components/shared/graphql-error';
import { PageContainer } from '~/components/templates/page-container';

export const PageGraphqlError = (props: { error: any }) => (
  <PageContainer>
    <Container>
      <Box my={12}>
        <GraphqlError error={props.error} />
      </Box>
    </Container>
  </PageContainer>
);
