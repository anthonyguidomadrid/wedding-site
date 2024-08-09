// import dynamic from 'next/dynamic';
// import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AnimatedDiv } from './components/AnimatedDiv';
import { SECTIONS } from './HomePage.constant';
import { Section } from './HomePage.styles';

import { ContentfulWrapper } from '~/components/shared/ContentfulWrapper';

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

  return (
    <div>
      {SECTIONS.map(({ query, Component, normalizer }, index) => (
        <ContentfulWrapper
          key={index}
          query={query}
          Component={Component}
          normalizer={normalizer}
        />
      ))}
      <Section name="faq" backgroundColor="#E3F4F4">
        <AnimatedDiv>{t('menu.faq')}</AnimatedDiv>
      </Section>
      <Section name="rvsp" backgroundColor="#F8F6F4">
        <AnimatedDiv>{t('menu.rvsp')}</AnimatedDiv>
      </Section>
      <Section name="honeymoon" backgroundColor="#C4DFDF">
        <AnimatedDiv>{t('menu.honeymoon')}</AnimatedDiv>
      </Section>
    </div>
  );
};
