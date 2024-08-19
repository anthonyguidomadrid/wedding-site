import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

import { ContentfulWrapperProps } from './ContentfulWrapper.types';

import { fetchContentfulData } from '~/utils/contentful';

export const ContentfulWrapper = <TProps, Tquery>({
  query,
  Component,
  normalizer,
  name,
}: ContentfulWrapperProps<TProps, Tquery>) => {
  const [content, setContent] = useState<TProps | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const { locale } = useRouter();
  const DynamicComponent = dynamic<TProps>(() => Promise.resolve(Component), {
    ssr: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (inView) {
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
      }
    };
    fetchData();
  }, [inView, locale, query, normalizer, name]);

  return (
    <section ref={ref}>
      <Element name={name}>{content && <DynamicComponent {...content} />}</Element>
    </section>
  );
};
