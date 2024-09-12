import { Grid, Typography } from '@mui/material';

import { HoneymoonModal } from './components/HoneymoonModal';
import { ContentHoneymoonGrid, ImageHoneymoonGrid } from './Honeymoon.styles';
import { HoneymoonProps } from './Honeymoon.types';
import { RichTextRenderer } from '../shared';
import { ContentfulWrapper } from '../shared/ContentfulWrapper';

import { honeymonModalNormalizer } from '~/normalizers';
import { HONEYMOON_MODAL_QUERY } from '~/queries';

export const Honeymoon = ({ title, description, backgroundImageUrl }: HoneymoonProps) => {
  return (
    <Grid container>
      <ContentHoneymoonGrid item sm={12} lg={6}>
        <Typography variant="h2">{title}</Typography>
        <RichTextRenderer richTextDocument={description!} />
        <ContentfulWrapper
          query={HONEYMOON_MODAL_QUERY}
          Component={HoneymoonModal}
          normalizer={honeymonModalNormalizer}
        />
      </ContentHoneymoonGrid>
      <ImageHoneymoonGrid backgroundImageUrl={backgroundImageUrl!} item sm={12} lg={6} />
    </Grid>
  );
};
