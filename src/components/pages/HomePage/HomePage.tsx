// import dynamic from 'next/dynamic';
// import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AnimatedDiv } from './components/AnimatedDiv';
import { Section } from './HomePage.styles';

// import { Greeting } from '~/components/atoms/Test/component/Greeting';
// import { Hello } from '~/components/atoms/Test/component/Hello';
// import { Test } from '~/components/atoms/Test/Section';
// import { SectionProps } from '~/components/atoms/Test/Section.types';
// import {
//   greetingNormalizer,
//   helloNormalizer,
//   helloRawQuery,
//   rawQuery,
// } from '~/normalizers/sections';
// import { GREETING_QUERY, SECTION_QUERY } from '~/queries/sections';

export const HomePage = () => {
  const { t } = useTranslation();
  // const DynamicTest = dynamic<
  //   SectionProps<{ greeting?: string; label?: string }, rawQuery & helloRawQuery>
  // >(() => Promise.resolve(Test), {
  //   ssr: false,
  // });

  // interface SectionConfig<TQuery, TProps> {
  //   query: string;
  //   Component: React.ComponentType<TProps>;
  //   normalizer: (query: TQuery) => TProps;
  // }

  // const SECTIONS: Array<
  //   | SectionConfig<helloRawQuery, { greeting?: string }>
  //   | SectionConfig<rawQuery, { label?: string }>
  // > = [
  //   {
  //     query: SECTION_QUERY,
  //     Component: Greeting,
  //     normalizer: greetingNormalizer,
  //   },
  //   {
  //     query: GREETING_QUERY,
  //     Component: Hello,
  //     normalizer: helloNormalizer,
  //   },
  // ];

  return (
    <div>
      {/* {SECTIONS.map(({ query, Component, normalizer }, index) => (
        <DynamicTest key={index} query={query} Component={Component} normalizer={normalizer} />
      ))} */}

      <Section name="header" backgroundColor="#C4DFDF">
        <AnimatedDiv>{t('title.welcome')}</AnimatedDiv>
      </Section>
      <Section name="details" backgroundColor="#D2E9E9">
        <AnimatedDiv>{t('menu.details')}</AnimatedDiv>
      </Section>
      <Section name="faq" backgroundColor="#E3F4F4">
        <AnimatedDiv>{t('menu.faq')}</AnimatedDiv>
      </Section>
      <Section name="rvsp" backgroundColor="#F8F6F4">
        <AnimatedDiv>{t('menu.rvsp')}</AnimatedDiv>
      </Section>
      <Section name="honeymoon" backgroundColor="#C4DFDF">
        <AnimatedDiv>{t('menu.honeymoon')}</AnimatedDiv>
      </Section>
      <Section name="footer" backgroundColor="#D2E9E9" height="50vh">
        {t('title.footer')}
      </Section>
    </div>
  );
};
