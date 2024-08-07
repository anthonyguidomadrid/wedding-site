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

import { formatDate } from '~/helpers';
import { FadeInWrapper } from '../shared';

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
          <FadeInWrapper delay={3000}>
            <Counter endingDate={startingDate} />
          </FadeInWrapper>
          <FadeInWrapper delay={1000}>
            <Typography variant="h1">{title}</Typography>
          </FadeInWrapper>
          <FadeInWrapper delay={1500}>
            <DateWrapper>
              <Typography>{formatDate(startingDate, locale)} -</Typography>
              <Typography>{formatDate(finishingDate, locale)}</Typography>
            </DateWrapper>
          </FadeInWrapper>
          <FadeInWrapper delay={2000}>
            <Typography>{place}</Typography>
          </FadeInWrapper>
          <FadeInWrapper delay={2500}>
            <CtaBtn to="rvsp">{ctaLabel}</CtaBtn>
          </FadeInWrapper>
        </ContentWrapper>
      </FadeInWrapper>
    </HeaderSection>
  );
};
