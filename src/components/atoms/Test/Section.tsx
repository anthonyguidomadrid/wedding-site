import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { SectionProps } from './Section.types';

import { fetchContentfulData } from '~/utils/contentful';

export const Test = <TProps, Tquery>({
  query,
  Component,
  normalizer,
}: SectionProps<TProps, Tquery>) => {
  const [content, setContent] = useState<TProps | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const { locale } = useRouter();

  useEffect(() => {
    if (inView && !content) {
      const fetchData = async () => {
        try {
          const { data, errors } = await fetchContentfulData<Tquery>(query, {
            locale,
          });
          if (data) {
            setContent(normalizer(data));
          } else {
            console.error(errors);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [inView, content, locale, query, normalizer]);

  return (
    <div ref={ref} style={{ minHeight: '100vh', padding: '50px' }}>
      {content ? <Component {...content} /> : <p>Loading...</p>}
    </div>
  );
};
