import { Document } from '@contentful/rich-text-types';

export type Image = {
  url: string;
  description: string;
  width: number;
  height: number;
};

export type Phone = {
  phoneNumber: string;
  name: string;
};

export type FooterItem = {
  email: string;
  phonesCollection: {
    items: Phone[];
  };
};

export type HeaderItem = {
  title: string;
  startingDate: string;
  finishingDate: string;
  place: string;
  ctaLabel: string;
  backgroundImage: Image;
};

export type FooterQuery = {
  footerCollection: {
    items: FooterItem[];
  };
};

export type HeaderQuery = {
  headerCollection: {
    items: HeaderItem[];
  };
};

export type Place = {
  title: string;
  dateAndTime: string;
  addressLine1: string;
  addressLine2: string;
  mapLink: string;
  photo: Image;
  index: number;
};

export type DetailsItem = {
  placesCollection: { items: Place[] };
};

export type DetailsQuery = {
  detailsCollection: {
    items: DetailsItem[];
  };
};

export type QuestionItem = {
  title: string;
  answer: { json: Document };
};

export type FaqItem = {
  questionsCollection: {
    items: QuestionItem[];
  };
};

export type FaqQuery = {
  faqCollection: {
    items: FaqItem[];
  };
};

export type Rvsp = {
  title: string;
  subtitle: string;
  backgroundImage: Image;
  limitDate: string;
};

export type RvspQuery = {
  rvspCollection: {
    items: Rvsp[];
  };
};

export type HoneymoonItem = {
  description: { json: Document };
  title: string;
  backgroundImage: {
    url: string;
  };
};

export type HoneymoonQuery = {
  honeymoonCollection: {
    items: HoneymoonItem[];
  };
};

export type BankAccount = {
  fullName: string;
  iban?: string;
  swiftBic?: string;
  accountNumberId?: string;
  dni?: string;
};

export type ModalItem = {
  title: string;
  subtitle: string;
  bankAccountsCollection: { items: BankAccount[] };
  bizumPhonesCollection: {
    items: Phone[];
  };
  paypalLink: string;
  ctaLabel: string;
};

export type HoneyMoonModalQuery = {
  paymentModalCollection: {
    items: ModalItem[];
  };
};
