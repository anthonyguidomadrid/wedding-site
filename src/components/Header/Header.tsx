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
      <ImageBackground backgroundImageLink={backgroundImageLink} />
      <ContentWrapper>
        <Counter endingDate={startingDate} />
        <Typography variant="h1">{title}</Typography>
        <DateWrapper>
          <Typography>{formatDate(startingDate, locale)} -</Typography>
          <Typography>{formatDate(finishingDate, locale)}</Typography>
        </DateWrapper>
        <Typography>{place}</Typography>
        <CtaBtn to="rvsp">{ctaLabel}</CtaBtn>
      </ContentWrapper>
    </HeaderSection>
  );
};
