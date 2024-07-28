const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr'],
    localePath: path.resolve('./public/locales'),
  },
};
