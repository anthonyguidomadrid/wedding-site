import { Rvsp } from '~/normalizers';

export type WeddingFormData = {
  attending: 'none' | 'dinner' | 'both' | '';
  email: string;
  name: string;
  guest: string;
  phone: string;
  children: number;
  diet: string;
  playlist: string;
};

export type WeddingFormProps = Pick<Rvsp, 'email' | 'title' | 'subtitle' | 'limitDate'>;
