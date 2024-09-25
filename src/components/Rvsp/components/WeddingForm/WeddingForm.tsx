import { MenuItem, Select, FormControl, FormGroup, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

import { ConfirmationScreen } from './components/ConfirmationScreen/ConfirmationScreen';
import {
  FormGridContainer,
  FormGridItem,
  StyledForm,
  StyledInputLabel,
  StyledTextField,
  SubmitButton,
} from './WeddingForm.style';
import { WeddingFormData, WeddingFormProps } from './WeddingForm.types';

import { getStringValue } from '~/helpers';

export const WeddingForm: React.FC<WeddingFormProps> = ({ email: adminEmail }) => {
  const {
    query: { email, name, phone, skipGuest, guest },
  } = useRouter();
  const { t } = useTranslation();
  const shouldSkipGuest = skipGuest === 'true';

  const [formData, setFormData] = useState<WeddingFormData>({
    attending: '',
    email: getStringValue(email),
    name: getStringValue(name),
    guest: getStringValue(guest),
    phone: getStringValue(phone),
    children: 0,
    diet: '',
    playlist: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('/api/mailchimp', {
        body: JSON.stringify(formData),

        headers: {
          'Content-Type': 'application/json',
        },

        method: 'POST',
      });
      if (!response.ok) {
        throw new Error(JSON.stringify(response) || 'Something went wrong');
      }

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  if (success || error) {
    scroller.scrollTo('rvsp', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    return (
      <ConfirmationScreen
        formData={success ? formData : undefined}
        response={success ? 'success' : 'error'}
        email={adminEmail}
      />
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGridContainer>
        <FormGridItem>
          <FormControl fullWidth margin="normal" required>
            <StyledInputLabel>{t('form.attending')}</StyledInputLabel>
            <Select
              disabled={loading}
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              label={t('form.attending')}
            >
              {['both', 'dinner', 'none'].map(option => (
                <MenuItem key={option} value={option}>
                  {t(`form.options.${option}`)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGridItem>

        <FormGridItem>
          <StyledTextField
            label={t('form.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </FormGridItem>
      </FormGridContainer>
      <FormGridContainer>
        <FormGridItem>
          <StyledTextField
            label={t('form.email')}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </FormGridItem>
        <FormGridItem>
          <FormGroup>
            <StyledTextField
              label={t('form.phone')}
              name="phone"
              value={formData.phone}
              placeholder="+34 XXX XXX XXX"
              onChange={handleChange}
              required
              disabled={loading}
            />
          </FormGroup>
        </FormGridItem>
      </FormGridContainer>
      {!shouldSkipGuest && (
        <FormGridContainer>
          <FormGridItem>
            <StyledTextField
              label={t('form.guest')}
              name="guest"
              value={formData.guest}
              onChange={handleChange}
              disabled={loading}
            />
          </FormGridItem>
          <FormGridItem>
            <StyledTextField
              label={t('form.children')}
              name="children"
              type="number"
              value={formData.children}
              onChange={handleChange}
              disabled={loading}
            />
          </FormGridItem>
        </FormGridContainer>
      )}
      <FormGridContainer>
        <FormGridItem>
          <StyledTextField
            label={t('form.playlist')}
            name="playlist"
            value={formData.playlist}
            onChange={handleChange}
            multiline
            rows={2}
            disabled={loading}
          />
        </FormGridItem>
        <FormGridItem>
          <StyledTextField
            fullWidth
            margin="normal"
            label={t('form.diet')}
            name="diet"
            value={formData.diet}
            onChange={handleChange}
            multiline
            rows={2}
            disabled={loading}
          />
        </FormGridItem>
      </FormGridContainer>

      <SubmitButton disabled={loading}>
        {loading ? <CircularProgress size={24} color="inherit" /> : t('form.submit')}
      </SubmitButton>
    </StyledForm>
  );
};
