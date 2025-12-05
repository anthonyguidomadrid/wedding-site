import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { DehydratedState, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProps } from 'next/app';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import nextI18nConfig from 'next-i18next.config';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

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
      enableLiveUpdates={previewActive}>
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

  useEffect(() => {
    if (router.pathname !== '/') {
      router.replace('/');
    }
  }, [router]);

  return (
    <ContentfulContentProvider router={router}>
      <LivePreviewProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <Provider store={store}>
                <Layout preview={previewActive}>
                  <GoogleAnalytics trackPageViews />
                  <Component {...pageProps} err={err} />
                </Layout>
                <SpeedInsights />
              </Provider>
            </ThemeProvider>
          </StyledEngineProvider>
        </QueryClientProvider>
      </LivePreviewProvider>
    </ContentfulContentProvider>
  );
};

export default appWithTranslation(CustomApp, nextI18nConfig);
