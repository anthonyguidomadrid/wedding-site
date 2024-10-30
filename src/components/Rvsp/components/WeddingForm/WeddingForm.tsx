import {
  MenuItem,
  Select,
  FormControl,
  FormGroup,
  CircularProgress,
  Typography,
} from '@mui/material';
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

import { formatDate, getStringValue } from '~/helpers';
import { useWeddingFormApi } from '~/hooks/useWeddingFormApi';

export const WeddingForm: React.FC<WeddingFormProps> = ({
  email: adminEmail,
  title,
  subtitle,
  limitDate,
}) => {
  const { locale } = useRouter();
  const {
    query: { email, name, phone, skipGuest, guest },
  } = useRouter();
  const { t } = useTranslation();
  const shouldSkipGuest = skipGuest === 'true';
  const isOverdue = new Date(limitDate) < new Date();

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

  const { submitWeddingForm, loading, error, success } = useWeddingFormApi();
  const isDisabled = loading || isOverdue;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await submitWeddingForm(formData);
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
      <Typography variant="h2">{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Typography variant="bold">{formatDate(limitDate!, locale)}</Typography>
      <FormGridContainer>
        <FormGridItem>
          <FormControl fullWidth margin="normal" required error>
            <StyledInputLabel>{t('form.attending')}</StyledInputLabel>
            <Select
              disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
              required={formData.attending != 'none'}
              disabled={isDisabled}
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
              disabled={isDisabled}
            />
          </FormGridItem>
          <FormGridItem>
            <StyledTextField
              label={t('form.children')}
              name="children"
              type="number"
              value={formData.children}
              onChange={handleChange}
              disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
          />
        </FormGridItem>
      </FormGridContainer>

      <SubmitButton disabled={isDisabled}>
        {loading ? <CircularProgress size={24} color="inherit" /> : t('form.submit')}
      </SubmitButton>
    </StyledForm>
  );
};
