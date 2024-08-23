import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import nextI18nConfig from 'next-i18next.config';
import { Layout } from '~/components/shared/Layout/layout';
import { queryConfig } from '~/lib/gql-client';
import { theme } from '~/theme';
import { useContentfulContext, ContentfulContentProvider } from '~/utils/contentful-context';
import { store } from '~/utils/store';
import '../styles/global.css';

const LivePreviewProvider = ({ children }) => {
  const { previewActive, locale } = useContentfulContext();

  return (
    <ContentfulLivePreviewProvider
      locale={locale}
      enableInspectorMode={previewActive}
      enableLiveUpdates={previewActive}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

type CustomPageProps = SSRConfig & { dehydratedState: DehydratedState; err: Error };

const CustomApp = ({
  Component,
  router,
  pageProps: originalPageProps,
}: AppProps<CustomPageProps>) => {
  const [queryClient] = useState(() => new QueryClient(queryConfig));
  const { dehydratedState, err, ...pageProps } = originalPageProps;
  const { previewActive } = useContentfulContext();

  useEffect(() => {
    // when component is mounting we remove server side rendered css:
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    router.events.on('routeChangeComplete', () => null);

    return () => {
      router.events.off('routeChangeComplete', () => null);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title key="title">Title</title>
        <meta key="og:title" property="og:title" content="Title" />
        <meta key="description" name="description" content="Description" />
        <meta key="og:description" property="og:description" content="Description" />
        <meta key="og:image" property="og:image" content="" />
        <meta key="og:image:width" property="og:image:width" content="1200" />
        <meta key="og:image:height" property="og:image:height" content="630" />
        <meta key="og:type" property="og:type" content="website" />
      </Head>

      <ContentfulContentProvider router={router}>
        <LivePreviewProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <Provider store={store}>
                  <Hydrate state={dehydratedState}>
                    <Layout preview={previewActive}>
                      <Component {...pageProps} err={err} />
                    </Layout>
                  </Hydrate>
                </Provider>
              </ThemeProvider>
            </StyledEngineProvider>
          </QueryClientProvider>
        </LivePreviewProvider>
      </ContentfulContentProvider>
    </>
  );
};

export default appWithTranslation(CustomApp, nextI18nConfig);
