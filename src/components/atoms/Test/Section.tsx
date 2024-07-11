import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { SectionProps } from './Section.types';

import { fetchContentfulData } from '~/utils/contentful';

export const Test = <T,>({ query, Component }: SectionProps<T>) => {
  const [content, setContent] = useState<T | null>(null); // Adjusted useState type
  const { ref, inView } = useInView({ triggerOnce: true });
  const { locale } = useRouter();

  useEffect(() => {
    if (inView && !content) {
      const fetchData = async () => {
        try {
          const { data, errors } = await fetchContentfulData<T>(query, {
            locale,
          });
          if (data) {
            setContent(data);
          } else {
            console.error(errors);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [inView, content, locale, query]);

  return (
    <div ref={ref} style={{ minHeight: '100vh', padding: '50px' }}>
      {content ? <Component {...content} /> : <p>Loading...</p>}
    </div>
  );
};
