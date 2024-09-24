import { SeoQuery } from '~/normalizers';
import { SEO } from '~/queries';
import { fetchContentfulData } from '~/utils/contentful';

export const fetchSeoData = async (locale?: string) => {
  const { data, errors } = await fetchContentfulData<SeoQuery>(SEO, {
    locale,
  });
  if (errors) throw new Error(errors);
  return { seo: data.seoCollection.items[0] };
};
