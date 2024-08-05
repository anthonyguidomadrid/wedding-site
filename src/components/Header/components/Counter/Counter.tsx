import { Grid } from '@mui/material';
import { intervalToDuration } from 'date-fns';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { DurationGridItem } from './components/DurationGridItem';
import { normalizeDuration } from './Counter.func';
import { CounterProps, NormalizedDuration } from './Counter.types';

export const Counter: React.FC<CounterProps> = ({ dueDate }) => {
  const [duration, setDuration] = useState<NormalizedDuration>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const updateDuration = () => {
        const now = new Date();
        const interval = intervalToDuration({ end: new Date(dueDate), start: now });
        setDuration(normalizeDuration(interval));
      };

      updateDuration();
      const intervalId = setInterval(updateDuration, 1000);

      return () => clearInterval(intervalId);
    }
  }, [dueDate, inView]);

  return (
    <Grid container spacing={2} ref={ref} justifyContent="center">
      {duration.map((durationItem, index) => (
        <DurationGridItem key={index} {...durationItem} />
      ))}
    </Grid>
  );
};
