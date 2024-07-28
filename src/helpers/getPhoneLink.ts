export const getPhoneLink = (phone: string) =>
  `tel:${phone
    .replace('+', '00')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll(' ', '')
    .replaceAll('-', '')}`;

export const getMailLink = (email: string) => `mailto:${email}`;
