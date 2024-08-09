import { Element } from 'react-scroll';

import { DetailsProps } from './Details.types';

export const Details: React.FC<DetailsProps> = props => {
  console.log({ props });

  return (
    <Element
      name="details"
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <h2>Details</h2>
    </Element>
  );
};
