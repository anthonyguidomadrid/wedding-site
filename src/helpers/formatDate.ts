import { format } from 'date-fns';
import { fr, es } from 'date-fns/locale';

const locales = {
  fr: fr,
  es: es,
};

export const formatDate = (date: string, routerLocale = 'es') => {
  return format(date, 'eeee d MMMM yyyy', { locale: locales[routerLocale] });
};
