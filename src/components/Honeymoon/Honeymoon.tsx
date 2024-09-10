import { Grid, Typography } from '@mui/material';

import { HoneymoonModal } from './components/HoneymoonModal';
import { HoneymoonProps } from './Honeymoon.types';
import { RichTextRenderer } from '../shared';
import { ContentfulWrapper } from '../shared/ContentfulWrapper';

import { honeymonModalNormalizer } from '~/normalizers';
import { HONEYMOON_MODAL_QUERY } from '~/queries';

export const Honeymoon = ({ title, description, backgroundImageUrl }: HoneymoonProps) => {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid
        item
        sm={12}
        md={6}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          textAlign: 'center',
          padding: '30px',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <RichTextRenderer richTextDocument={description!} />
        <ContentfulWrapper
          query={HONEYMOON_MODAL_QUERY}
          Component={HoneymoonModal}
          normalizer={honeymonModalNormalizer}
        />
      </Grid>
      <Grid item sm={12} md={6} sx={{ backgroundImage: `url(${backgroundImageUrl})` }} />
    </Grid>
  );
};
