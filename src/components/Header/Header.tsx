import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Counter } from './components/Counter';
import { ContentWrapper, DateWrapper, HeaderSection, ImageBackground } from './Header.styles';
import { HeaderProps } from './Header.types';
import { FadeInWrapper } from '../shared/FadeInWrapper';
import { ScrollLink } from '../shared/ScrollLink';

import { formatDate } from '~/helpers';
import { useMobile } from '~/hooks';

export const Header: React.FC<HeaderProps> = ({
  title,
  finishingDate,
  startingDate,
  place,
  backgroundImageLink,
}) => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const { isHorizontal } = useMobile();
  return (
    <HeaderSection>
      <FadeInWrapper>
        <ImageBackground backgroundImageLink={backgroundImageLink} />
        <ContentWrapper>
          {!isHorizontal && (
            <FadeInWrapper delay={3500}>
              <Counter endingDate={startingDate} />
            </FadeInWrapper>
          )}
          <FadeInWrapper delay={1000} shouldSlide={true}>
            <Typography variant="h1">{title}</Typography>
          </FadeInWrapper>
          <FadeInWrapper delay={1500} shouldSlide={true}>
            <DateWrapper>
              {startingDate && <Typography>{formatDate(startingDate, locale)} -</Typography>}
              {finishingDate && <Typography>{formatDate(finishingDate, locale)}</Typography>}
            </DateWrapper>
          </FadeInWrapper>
          <FadeInWrapper delay={2000} shouldSlide={true}>
            <Typography>{place}</Typography>
          </FadeInWrapper>
          <FadeInWrapper delay={2500} shouldSlide={true}>
            <Box>
              <ScrollLink to="rvsp">
                <Button color="secondary" variant="outlined">
                  {t('header.cta')}
                </Button>
              </ScrollLink>
            </Box>
          </FadeInWrapper>
        </ContentWrapper>
      </FadeInWrapper>
    </HeaderSection>
  );
};
