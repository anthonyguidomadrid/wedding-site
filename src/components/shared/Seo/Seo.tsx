import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
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
    <NextSeo
      title={pageTitle || undefined}
      description={pageDescription || undefined}
      canonical={canonicalUrl || url || ''}
      nofollow={noFollow}
      noindex={noIndex}
      languageAlternates={languageAlternates}
      openGraph={{
        type: 'website',
        locale: locale,
        url: url || '',
        title: pageTitle || undefined,
        description: pageDescription || undefined,
        images: shareImagesCollection?.items.map(item => ({
          url: item?.url ?? '',
          width: item?.width ?? 0,
          height: item?.height ?? 0,
          alt: item?.description ?? '',
        })),
      }}
      twitter={{
        site: url,
        cardType: 'summary_large_image',
      }}
    />
  );
};
