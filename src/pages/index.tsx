import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { PageProps } from './types';

import { HomePage } from '~/components/pages/HomePage';
import { Seo } from '~/components/shared';
import { fetchSeoData } from '~/lib/get-seo-metadata';
import { getServerSideTranslations } from '~/lib/get-serverside-translations';

const LandingPage: NextPage<PageProps> = ({ seo }) => {
  return (
    <>
      <Seo {...seo} />
      <HomePage />
    </>
  );
};

export const getServerSideProps = async ({ locale }: NextPageContext) => {
  try {
    const queryClient = new QueryClient();

    return {
      props: {
        ...(await getServerSideTranslations(locale)),
        ...(await fetchSeoData(locale)),
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
