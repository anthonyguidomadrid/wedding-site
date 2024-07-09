const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
