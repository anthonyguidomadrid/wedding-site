// import dynamic from 'next/dynamic';
// import { FC } from 'react';

import { SECTIONS } from './HomePage.constant';

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
  return (
    <div>
      {SECTIONS.map(({ query, Component, normalizer, name }, index) => (
        <ContentfulWrapper
          key={index}
          query={query}
          Component={Component}
          normalizer={normalizer}
          name={name}
        />
      ))}
    </div>
  );
};
