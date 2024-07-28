import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { SectionProps } from './Section.types';
import { SpinnerWrapper } from './Sections.styles';

import { fetchContentfulData } from '~/utils/contentful';

export const Section = <TProps, Tquery>({
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
    <section ref={ref}>
      {content ? (
        <Component {...content} />
      ) : (
        <SpinnerWrapper>
          <CircularProgress />
        </SpinnerWrapper>
      )}
    </section>
  );
};
