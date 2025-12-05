import Head from 'next/head';
import { useRouter } from 'next/router';
import URI from 'urijs';

import { SeoItem } from '~/normalizers';

const generateUrl = (locale: string, slug: string) =>
  new URI(process.env.NEXT_PUBLIC_BASE_URL).segment([locale, slug]).toString();

export const Seo = ({
  pageTitle,
  pageDescription,
  noIndex,
  noFollow,
  canonicalUrl,
  shareImagesCollection,
}: SeoItem) => {
  const { locale, locales, asPath } = useRouter();

  const url = generateUrl(locale || '', asPath);

  const languageAlternates =
    locales?.map(locale => ({
      hrefLang: locale,
      href: generateUrl(locale, asPath),
    })) || [];

  return (
    <Head>
      <title>{pageTitle}</title>
      {pageDescription && <meta name="description" content={pageDescription} />}
      {canonicalUrl || url ? <link rel="canonical" href={canonicalUrl || url} /> : null}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      {shareImagesCollection?.items?.map((item, idx) => (
        <meta key={idx} property="og:image" content={item?.url ?? ''} />
      ))}
      {languageAlternates.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
    </Head>
  );
};
