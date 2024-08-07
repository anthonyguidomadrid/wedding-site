import { intervalToDuration } from 'date-fns';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { DurationGridItem } from './components/DurationGridItem';
import { normalizeDuration } from './Counter.func';
import { GridContainer } from './Counter.styles';
import { CounterProps, NormalizedDuration } from './Counter.types';

export const Counter: React.FC<CounterProps> = ({ endingDate }) => {
  const [duration, setDuration] = useState<NormalizedDuration>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const updateDuration = () => {
        const now = new Date();
        const interval = intervalToDuration({ end: new Date(endingDate), start: now });
        setDuration(normalizeDuration(interval));
      };

      updateDuration();
      const intervalId = setInterval(updateDuration, 1000);

      return () => clearInterval(intervalId);
    }
  }, [endingDate, inView]);

  return (
    <GridContainer ref={ref}>
      {duration.map((durationItem, index) => (
        <DurationGridItem key={index} {...durationItem} />
      ))}
    </GridContainer>
  );
};
