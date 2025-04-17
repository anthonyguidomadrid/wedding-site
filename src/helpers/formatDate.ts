import { format } from 'date-fns';
import { fr, es } from 'date-fns/locale';
import { toZonedTime } from 'date-fns-tz';

import { capitalizeFirstLetter } from './capitalizeFirstLetter';

const locales = {
  fr: fr,
  es: es,
};

const formatters = {
  fr: 'iiii d MMMM yyyy',
  es: "iiii d 'de' MMMM 'de' yyyy",
};

const TIMEZONE = process.env.NEXT_PUBLIC_EVENTS_TIMEZONE || 'Europe/Paris';

export const formatDate = (date: string, routerLocale = 'es') => {
  const parsedDate = toZonedTime(new Date(date), TIMEZONE);

  return capitalizeFirstLetter(
    format(parsedDate, formatters[routerLocale], { locale: locales[routerLocale] }),
  );
};

export const formatTime = (date: string, routerLocale = 'es') => {
  const parsedDate = toZonedTime(new Date(date), TIMEZONE);
  return format(parsedDate, "HH'h'mm", { locale: locales[routerLocale] });
};
