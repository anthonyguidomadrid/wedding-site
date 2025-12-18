module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'fr'],
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : './public/locales',
  },
};
