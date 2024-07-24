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

export const helloNormalizer = (query: helloRawQuery): { greeting: string } => {
  return { greeting: query.greetingCollection.items[0].hello };
};

export const greetingNormalizer = (query: rawQuery): { label: string } => {
  return { label: query.testCollection.items[0].greeting };
};
