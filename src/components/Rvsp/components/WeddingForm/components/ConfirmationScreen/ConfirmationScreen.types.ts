import { WeddingFormData, WeddingFormProps } from '../../WeddingForm.types';

export type ConfirmationScreenProps = WeddingFormProps & {
  formData?: WeddingFormData;
  response: 'success' | 'error';
};
