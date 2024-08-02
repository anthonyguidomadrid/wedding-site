import { HeaderProps } from './Header.types';
import { ScrollLink } from '../shared';

export const Header: React.FC<HeaderProps> = ({
  title,
  finishingDate,
  startingDate,
  place,
  ctaLabel,
  backgroundImageLink,
}) => {
  return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImageLink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#000',
        flexDirection: 'column',
      }}
    >
      <h1>{title}</h1>
      <p>{startingDate}</p>
      <p>{finishingDate}</p>
      <p>{place}</p>
      <ScrollLink to="rvsp">{ctaLabel}</ScrollLink>
    </div>
  );
};
