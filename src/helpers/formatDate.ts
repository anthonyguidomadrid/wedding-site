import { format } from 'date-fns';
import { fr, es } from 'date-fns/locale';

const locales = {
  fr: fr,
  es: es,
};

export const formatDate = (date: string, routerLocale = 'es') => {
  const parsedDate = new Date(date);

  const formatter = routerLocale === 'es' ? "iiii d 'de' MMMM 'de' yyyy" : 'iiii d MMMM yyyy';

  return format(parsedDate, formatter, { locale: locales[routerLocale] });
};

export const formatTime = (date: string, routerLocale = 'es') => {
  return format(date, "HH'h'mm", { locale: locales[routerLocale] });
};
