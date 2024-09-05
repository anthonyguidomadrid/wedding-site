import { MenuItem, Select, FormControl, FormGroup, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  FormGridContainer,
  FormGridItem,
  StyledForm,
  StyledInputLabel,
  StyledTextField,
  SubmitButton,
} from './WeddingForm.style';

export const WeddingForm = () => {
  const {
    query: { email, name, phone, skipGuest },
  } = useRouter();
  const { t } = useTranslation();
  const shouldSkipGuest = skipGuest === 'true';

  const [formData, setFormData] = useState({
    attending: '',
    email: email ?? '',
    name: name ?? '',
    guest: '',
    phone: phone ?? '',
    children: 0,
    diet: '',
    playlist: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormGridContainer>
        <FormGridItem>
          <FormControl fullWidth margin="normal" required>
            <StyledInputLabel>{t('form.attending.title')}</StyledInputLabel>
            <Select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              label={t('form.attending.title')}
            >
              {['both', 'dinner', 'no'].map(option => (
                <MenuItem key={option} value={option}>
                  {t(`form.attending.options.${option}`)}
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
            />
          </FormGridItem>
          <FormGridItem>
            <StyledTextField
              label={t('form.children')}
              name="children"
              type="number"
              value={formData.children}
              onChange={handleChange}
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
          />
        </FormGridItem>
      </FormGridContainer>

      <SubmitButton>{t('form.submit')}</SubmitButton>
    </StyledForm>
  );
};
