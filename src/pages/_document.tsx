import Document, { DocumentContext, Head, Main, NextScript, Html } from 'next/document';
import React from 'react';

import { getServerSideTranslations } from '~/lib/get-serverside-translations';
import { theme } from '~/theme';

export default class CustomDocument extends Document {
  render() {
    const { locale } = this.props;
    return (
      <Html lang={locale} dir="ltr">
        <Head>
          <meta name="robots" content="noindex, nofollow" />

          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.text.primary} />

          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Sora:wght@100;200;300&family=Urbanist:ital,wght@0,100;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" />
          <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
          <link rel="icon" href="/favicons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async function (ctx: DocumentContext) {
  const initialProps = await Document.getInitialProps(ctx);

  const locale = ctx.locale || ctx.defaultLocale || 'en';
  let translations = {};
  try {
    translations = await getServerSideTranslations(locale);
  } catch (err) {
    console.error('Document getServerSideTranslations error:', err);
  }

  return {
    ...initialProps,
    ...translations,
    locale,
  };
};
