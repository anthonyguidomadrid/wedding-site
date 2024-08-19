import { format } from 'date-fns';
import { fr, es } from 'date-fns/locale';

const locales = {
  fr: fr,
  es: es,
};

const formatters = {
  fr: 'iiii d MMMM yyyy',
  es: "iiii d 'de' MMMM 'de' yyyy",
};

export const formatDate = (date: string, routerLocale = 'es') => {
  const parsedDate = new Date(date);

  return format(parsedDate, formatters[routerLocale], { locale: locales[routerLocale] });
};

export const formatTime = (date: string, routerLocale = 'es') => {
  return format(date, "HH'h'mm", { locale: locales[routerLocale] });
};
