import { Duration } from 'date-fns';

import { NormalizedDuration } from './Counter.types';

const padWithZero = (number?: number): string => {
  return String(number).padStart(2, '0');
};

const provideFallbackValues = ({ months, days, hours, minutes, seconds }: Duration) => ({
  months: months ?? 0,
  days: days ?? 0,
  hours: hours ?? 0,
  minutes: minutes ?? 0,
  seconds: seconds ?? 0,
});

export const normalizeDuration = (duration: Duration): NormalizedDuration => {
  duration = provideFallbackValues(duration);
  return Object.entries(duration).map(([key, value]) => ({
    timeDuration: padWithZero(value),
    durationType: key,
  }));
};
