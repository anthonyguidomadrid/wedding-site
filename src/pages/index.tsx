import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { HomePage } from '~/components/organisms/HomePage';
import { getServerSideTranslations } from '~/lib/get-serverside-translations';

const LandingPage: NextPage = () => {
  return <HomePage />;
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

export default LandingPage;
