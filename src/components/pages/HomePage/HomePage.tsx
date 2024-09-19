import { SECTIONS } from './HomePage.constant';

import { ContentfulWrapper } from '~/components/shared/ContentfulWrapper';

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
