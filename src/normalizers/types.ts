export type Image = {
  url: string;
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
