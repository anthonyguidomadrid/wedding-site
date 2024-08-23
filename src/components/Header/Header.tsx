import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Counter } from './components/Counter';
import {
  ContentWrapper,
  CtaBtn,
  DateWrapper,
  HeaderSection,
  ImageBackground,
} from './Header.styles';
import { HeaderProps } from './Header.types';
import { FadeInWrapper } from '../shared';

import { capitalizeFirstLetter, formatDate } from '~/helpers';
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
              {startingDate && (
                <Typography>{capitalizeFirstLetter(formatDate(startingDate, locale))} -</Typography>
              )}
              {finishingDate && (
                <Typography>{capitalizeFirstLetter(formatDate(finishingDate, locale))}</Typography>
              )}
            </DateWrapper>
          </FadeInWrapper>
          <FadeInWrapper delay={2000} shouldSlide={true}>
            <Typography>{place}</Typography>
          </FadeInWrapper>
          <FadeInWrapper delay={2500} shouldSlide={true}>
            <div>
              <CtaBtn to="rvsp">{t('header.cta')}</CtaBtn>
            </div>
          </FadeInWrapper>
        </ContentWrapper>
      </FadeInWrapper>
    </HeaderSection>
  );
};
