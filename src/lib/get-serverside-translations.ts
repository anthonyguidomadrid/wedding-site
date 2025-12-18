import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import i18nConfig from 'next-i18next.config';

const { i18n } = i18nConfig;

export const getServerSideTranslations = async (locale?: string) => {
  try {
    return await serverSideTranslations(locale || i18n.defaultLocale, ['common'], i18nConfig);
  } catch (err) {
    console.error('serverSideTranslations error:', err);
    throw err;
  }
};
