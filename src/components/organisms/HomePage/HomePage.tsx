import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

import { AnimatedDiv } from './components/AnimatedDiv';
import { CustomScrollLink } from './components/ScrollLink';
import { Nav, Section } from './HomePage.styles';

import { LanguageSelector } from '~/components/atoms/LanguageSelector';
import { Greeting } from '~/components/atoms/Test/component/Greeting';
import { Test } from '~/components/atoms/Test/Section';
import { SectionData, SectionProps } from '~/components/atoms/Test/Section.types';
import { SECTION_QUERY } from '~/queries/sections';

export const HomePage = () => {
  const { t } = useTranslation();
  const DynamicTest = dynamic<SectionProps<SectionData>>(() => Promise.resolve(Test), {
    ssr: false,
  });

  const sections = [
    {
      query: SECTION_QUERY,
      Component: Greeting,
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
      {sections.map(({ query, Component }, index) => (
        <DynamicTest key={index} query={query} Component={Component} />
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
