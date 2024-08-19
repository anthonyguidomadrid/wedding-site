import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { PlaceImage, PlaceInfoGrid } from './Place.styles';

import { capitalizeFirstLetter, formatDate, formatTime, isEven } from '~/helpers';
import { Place as PlaceProps } from '~/normalizers';
import { FadeInWrapper } from '~/components/shared';

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
  const { t } = useTranslation();
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
          <Typography variant="h3">{title}</Typography>
          <Typography>{capitalizeFirstLetter(formatDate(dateAndTime, locale))}</Typography>
          <Typography>{formatTime(dateAndTime, locale)}</Typography>
          <Typography>{addressLine1}</Typography>
          <Typography>{addressLine2}</Typography>
          <Link href={mapLink} target="_blank">
            {t('place.map-link')}
          </Link>
        </FadeInWrapper>
      </PlaceInfoGrid>
    </Grid>
  );
};
