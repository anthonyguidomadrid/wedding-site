import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { SpinnerWrapper } from './ContentfulWrapper.styles';
import { ContentfulWrapperProps } from './ContentfulWrapper.types';

import { fetchContentfulData } from '~/utils/contentful';

export const ContentfulWrapper = <TProps, Tquery>({
  query,
  Component,
  normalizer,
}: ContentfulWrapperProps<TProps, Tquery>) => {
  const [content, setContent] = useState<TProps | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const { locale } = useRouter();
  const DynamicComponent = dynamic<TProps>(() => Promise.resolve(Component), {
    ssr: false,
  });

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
    <section ref={ref}>
      {content ? (
        <DynamicComponent {...content} />
      ) : (
        <SpinnerWrapper>
          <CircularProgress />
        </SpinnerWrapper>
      )}
    </section>
  );
};
