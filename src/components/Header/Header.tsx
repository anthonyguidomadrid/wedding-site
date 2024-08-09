import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

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

import { formatDate } from '~/helpers';

export const Header: React.FC<HeaderProps> = ({
  title,
  finishingDate,
  startingDate,
  place,
  ctaLabel,
  backgroundImageLink,
}) => {
  const { locale } = useRouter();
  return (
    <HeaderSection>
      <FadeInWrapper>
        <ImageBackground backgroundImageLink={backgroundImageLink} />
        <ContentWrapper>
          <FadeInWrapper delay={3500}>
            <Counter endingDate={startingDate} />
          </FadeInWrapper>
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
            <div>
              <CtaBtn to="rvsp">{ctaLabel}</CtaBtn>
            </div>
          </FadeInWrapper>
        </ContentWrapper>
      </FadeInWrapper>
    </HeaderSection>
  );
};
