import { useRouter } from 'next/router';

import { HeaderProps } from './Header.types';
import { ScrollLink } from '../shared';

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
    <section
      style={{
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImageLink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        flexDirection: 'column',
      }}
    >
      <h1>{title}</h1>
      <p>
        {formatDate(startingDate, locale)} - {formatDate(finishingDate, locale)}
      </p>
      <p>{place}</p>
      <ScrollLink to="rvsp">{ctaLabel}</ScrollLink>
    </section>
  );
};
