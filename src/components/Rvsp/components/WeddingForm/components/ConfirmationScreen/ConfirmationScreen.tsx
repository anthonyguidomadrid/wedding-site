import { Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DataWrapper, ScreenWrapper } from './ConfirmationScreen.styles';
import { ConfirmationScreenProps } from './ConfirmationScreen.types';

import { getMailLink } from '~/helpers';

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({
  formData,
  response,
  email,
}) => {
  const transformedArray = formData
    ? Object.entries(formData).map(([key, value]) => ({
        key,
        value,
      }))
    : [];
  const { t } = useTranslation();
  return (
    <ScreenWrapper>
      <Typography variant="h3">{t(`form.${response}.title`)}</Typography>
      <Typography>
        {t(`form.${response}.subtitle`)} <Link href={getMailLink(email)}>{email}</Link>
      </Typography>
      {transformedArray.map(({ key, value }) => {
        if (value) {
          value = key === 'attending' ? t(`form.options.${value}`) : value;
          return (
            value && (
              <DataWrapper>
                <Typography key={key} variant="bold">
                  {t(`form.${key}`)}
                </Typography>
                <Typography>{value}</Typography>
              </DataWrapper>
            )
          );
        }
      })}
    </ScreenWrapper>
  );
};
