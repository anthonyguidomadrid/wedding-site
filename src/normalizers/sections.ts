import { DetailsQuery, FaqQuery, FooterQuery, HeaderQuery } from './types';

import { DetailsProps } from '~/components/Details/Details.types';
import { FaqProps } from '~/components/Faq/Faq.types';
import { FooterProps } from '~/components/Footer';
import { HeaderProps } from '~/components/Header';

export const footerNormalizer = (query: FooterQuery): FooterProps => {
  const footerItem = query.footerCollection.items[0];
  return {
    email: footerItem.email,
    phones: footerItem.phonesCollection.items,
  };
};

export const headerNormalizer = (query: HeaderQuery): HeaderProps => {
  const headerItem = query.headerCollection.items[0];

  const { title, startingDate, finishingDate, place, backgroundImage } = headerItem;

  return {
    title,
    startingDate,
    finishingDate,
    place,
    backgroundImageLink: backgroundImage.url,
  };
};

export const detailsNormalizer = (query: DetailsQuery): DetailsProps => ({
  places: query.detailsCollection?.items[0]?.placesCollection.items,
});

export const faqNormalizer = (query: FaqQuery): FaqProps => {
  return {
    questions: query.faqCollection.items[0].questionsCollection.items,
  };
};
