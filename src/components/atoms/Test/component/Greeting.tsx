import { SectionData } from '../Section.types';

export const Greeting: React.FC<SectionData> = ({ testCollection }) => {
  return <h2>{testCollection?.items?.[0]?.greeting}</h2>;
};
