import { Box, Typography } from '@mui/material';
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
    <Box display="flex" flexDirection={isEvenPlace ? 'row' : 'row-reverse'}>
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <FadeInWrapper>
          <PlaceImage src={url} alt={description} width={width} height={height} />
        </FadeInWrapper>
      </Box>
      <PlaceInfoGrid sx={{ width: { xs: '100%', md: '50%' } }}>
        <FadeInWrapper shouldSlide={true}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box>
              <Typography variant="h3">{title}</Typography>
            </Box>
            <Box>
              <Typography>{formatDate(dateAndTime, locale)}</Typography>
              <Typography>{formatTime(dateAndTime, locale)}</Typography>
            </Box>
            <Box>
              <Link href={mapLink} target="_blank">
                <Typography>{addressLine1}</Typography>
                <Typography>{addressLine2}</Typography>
              </Link>
            </Box>
          </Box>
        </FadeInWrapper>
      </PlaceInfoGrid>
    </Box>
  );
};
