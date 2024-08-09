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

export type Place = {
  title: string;
  dateAndTime: string;
  addressLine1: string;
  addressLine2: string;
  mapLink: string;
  photo: Image;
};

export type DetailsItem = {
  title: string;
  subtitle: string;
  placesCollection: { items: Place[] };
};

export type DetailsQuery = {
  detailsCollection: {
    items: DetailsItem[];
  };
};
