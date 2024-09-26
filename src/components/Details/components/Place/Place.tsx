import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { PlaceImage, PlaceInfoGrid } from './Place.styles';

import { FadeInWrapper } from '~/components/shared/FadeInWrapper';
import { formatDate, formatTime, isEven } from '~/helpers';
import { Place as PlaceProps } from '~/normalizers';

export const Place: React.FC<PlaceProps> = ({
  title,
  dateAndTime,
  addressLine1,
  addressLine2,
  mapLink,
  photo: { url, description, height, width },
  index,
}) => {
  const { locale } = useRouter();
  const isEvenPlace = isEven(index);
  return (
    <Grid container flexDirection={isEvenPlace ? 'row' : 'row-reverse'}>
      <Grid item xs={12} md={6}>
        <FadeInWrapper>
          <PlaceImage src={url} alt={description} width={width} height={height} />
        </FadeInWrapper>
      </Grid>
      <PlaceInfoGrid item xs={12} md={6}>
        <FadeInWrapper shouldSlide={true}>
          <Grid container flexDirection="column" spacing="10">
            <Grid item>
              <Typography variant="h3">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography>{formatDate(dateAndTime, locale)}</Typography>
              <Typography>{formatTime(dateAndTime, locale)}</Typography>
            </Grid>
            <Grid item>
              <Link href={mapLink} target="_blank">
                <Typography>{addressLine1}</Typography>
                <Typography>{addressLine2}</Typography>
              </Link>
            </Grid>
          </Grid>
        </FadeInWrapper>
      </PlaceInfoGrid>
    </Grid>
  );
};
