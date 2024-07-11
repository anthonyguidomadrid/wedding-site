import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AnimatedDiv } from './components/AnimatedDiv';
import { CustomScrollLink } from './components/ScrollLink';
import { Nav, Section } from './HomePage.styles';

import { LanguageSelector } from '~/components/atoms/LanguageSelector';
import { Greeting } from '~/components/atoms/Test/component/Greeting';
import { Hello } from '~/components/atoms/Test/component/Hello';
import { Test } from '~/components/atoms/Test/Section';
import { SectionProps } from '~/components/atoms/Test/Section.types';
import {
  greetingNormalizer,
  helloNormalizer,
  helloRawQuery,
  rawQuery,
} from '~/normalizers/sections';
import { GREETING_QUERY, SECTION_QUERY } from '~/queries/sections';

export const HomePage = () => {
  const { t } = useTranslation();
  const DynamicTest = dynamic<
    SectionProps<{ greeting?: string; label?: string }, rawQuery & helloRawQuery>
  >(() => Promise.resolve(Test), {
    ssr: false,
  });

  interface SectionConfig<TQuery, TProps> {
    query: string;
    Component: React.ComponentType<TProps>;
    normalizer: (query: TQuery) => TProps;
  }

  const SECTIONS: Array<
    | SectionConfig<helloRawQuery, { greeting?: string }>
    | SectionConfig<rawQuery, { label?: string }>
  > = [
    {
      query: SECTION_QUERY,
      Component: Greeting,
      normalizer: greetingNormalizer,
    },
    {
      query: GREETING_QUERY,
      Component: Hello,
      normalizer: helloNormalizer,
    },
  ];

  return (
    <div>
      <Nav>
        <CustomScrollLink to="section1">{t('menu.details')}</CustomScrollLink>
        <CustomScrollLink to="section2">{t('menu.faq')}</CustomScrollLink>
        <CustomScrollLink to="section3">{t('menu.rvsp')}</CustomScrollLink>
        <CustomScrollLink to="section4">{t('menu.gift')}</CustomScrollLink>
        <LanguageSelector />
      </Nav>
      {SECTIONS.map(({ query, Component, normalizer }, index) => (
        <DynamicTest key={index} query={query} Component={Component} normalizer={normalizer} />
      ))}

      <Section name="header" backgroundColor="red">
        <AnimatedDiv>{t('title.welcome')}</AnimatedDiv>
      </Section>
      <Section name="section1" backgroundColor="green">
        <AnimatedDiv>{t('menu.details')}</AnimatedDiv>
      </Section>
      <Section name="section2" backgroundColor="blue">
        <AnimatedDiv>{t('menu.faq')}</AnimatedDiv>
      </Section>
      <Section name="section3" backgroundColor="yellow">
        <AnimatedDiv>{t('menu.rvsp')}</AnimatedDiv>
      </Section>
      <Section name="section4" backgroundColor="purple">
        <AnimatedDiv>{t('menu.gift')}</AnimatedDiv>
      </Section>
      <Section name="footer" backgroundColor="lightBlue" height="50vh">
        {t('title.footer')}
      </Section>
    </div>
  );
};
