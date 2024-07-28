export type rawQuery = {
  testCollection: {
    items: {
      greeting: string;
    }[];
  };
};

export type helloRawQuery = {
  greetingCollection: {
    items: {
      hello: string;
    }[];
  };
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

export type FooterQuery = {
  footerCollection: {
    items: FooterItem[];
  };
};
