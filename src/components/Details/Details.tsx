import { Place } from './components/Place/Place';
import { DetailsWrapper } from './Details.styles';
import { DetailsProps } from './Details.types';

export const Details: React.FC<DetailsProps> = ({ places }) => {
  return (
    <DetailsWrapper>
      {places?.map((place, index) => (
        <Place key={index} {...{ ...place, index }} />
      ))}
    </DetailsWrapper>
  );
};
