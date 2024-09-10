import { BankAccount, Phone } from '~/normalizers';

export type HoneymoonModalProps = {
  title: string;
  subtitle: string;
  bankAccounts: BankAccount[];
  bizumPhones: Phone[];
  paypalLink: string;
  ctaLabel: string;
};
