import { Typography } from '@mui/material';
import { Element } from 'react-scroll';

import { Place } from './components/Place/Place';
import { DetailsProps } from './Details.types';

export const Details: React.FC<DetailsProps> = ({ title, subtitle, places }) => {
  return (
    <Element
      name="details"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <Typography>{subtitle}</Typography>
      </div>
      {places?.map((place, index) => (
        <Place key={index} {...{ ...place, index }} />
      ))}
    </Element>
  );
};
