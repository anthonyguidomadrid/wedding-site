import { WeddingFormData } from '../../WeddingForm.types';

export type ConfirmationScreenProps = {
  email: string;
  formData?: WeddingFormData;
  response: 'success' | 'error';
};
