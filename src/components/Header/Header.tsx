import { useRouter } from 'next/router';
import { Counter } from './components/Counter';
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
        position: 'relative',
        color: '#fff',
        flexDirection: 'column',
        overflow: 'hidden', // Ensure the overlay covers the whole section
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImageLink})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          filter: 'brightness(50%)', // Darken the image
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Counter dueDate={startingDate} />
        <h1>{title}</h1>
        <p style={{ textTransform: 'capitalize' }}>
          {formatDate(startingDate, locale)} - {formatDate(finishingDate, locale)}
        </p>
        <p>{place}</p>
        <ScrollLink to="rvsp">{ctaLabel}</ScrollLink>
      </div>
    </section>
  );
};
