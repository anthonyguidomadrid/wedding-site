import { Grid, Typography } from '@mui/material';

import { HoneymoonModal } from './components/HoneymoonModal';
import { ContentHoneymoonGrid, HoneymoonImage, HoneymoonImageWrapper } from './Honeymoon.styles';
import { HoneymoonProps } from './Honeymoon.types';
import { FadeInWrapper, RichTextRenderer } from '../shared';
import { ContentfulWrapper } from '../shared/ContentfulWrapper';

import { honeymonModalNormalizer } from '~/normalizers';
import { HONEYMOON_MODAL_QUERY } from '~/queries';

export const Honeymoon = ({ title, description, backgroundImageUrl }: HoneymoonProps) => {
  return (
    <Grid container>
      <ContentHoneymoonGrid>
        <FadeInWrapper shouldSlide={true}>
          <Typography variant="h2">{title}</Typography>
          <RichTextRenderer richTextDocument={description!} />
          <ContentfulWrapper
            query={HONEYMOON_MODAL_QUERY}
            Component={HoneymoonModal}
            normalizer={honeymonModalNormalizer}
          />
        </FadeInWrapper>
      </ContentHoneymoonGrid>
      <HoneymoonImageWrapper>
        <FadeInWrapper delay={500}>
          <HoneymoonImage backgroundImageUrl={backgroundImageUrl!} />
        </FadeInWrapper>
      </HoneymoonImageWrapper>
    </Grid>
  );
};
