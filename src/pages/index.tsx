import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextPage, NextPageContext } from 'next';

import { HomePage } from '~/components/pages/HomePage';
import { Seo } from '~/components/shared/Seo';
import { fetchSeoData } from '~/lib/get-seo-metadata';
import { getServerSideTranslations } from '~/lib/get-serverside-translations';
import { SeoItem } from '~/normalizers';

export interface LandingPageProps {
  seo: SeoItem;
}

const LandingPage: NextPage<LandingPageProps> = ({ seo }) => {
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
