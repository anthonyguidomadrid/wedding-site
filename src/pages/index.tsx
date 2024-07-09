import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';
import { useTranslation } from 'react-i18next';

import { getServerSideTranslations } from '~/lib/get-serverside-translations';

const LangPage: NextPage = () => {
  const { t } = useTranslation();
  return <h1>{t('title')}</h1>;
};

export const getServerSideProps = async ({ locale }: NextPageContext) => {
  try {
    const queryClient = new QueryClient();

    // Default queries
    const prefetchPromises = [];

    await Promise.all([...prefetchPromises]);

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default LangPage;
