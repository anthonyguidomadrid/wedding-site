import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';

import { PhoneWrapper } from './BizumPhone.styles';
import { BizumPhonesProps } from './BizumPhones.types';

export const BizumPhones: React.FC<BizumPhonesProps> = ({ bizumPhones }) => {
  return (
    <PhoneWrapper>
      {bizumPhones.map(({ name, phoneNumber }) => {
        return (
          <Typography variant="small" key={name} sx={{ display: 'block' }}>
            <Trans
              i18nKey={'honeymoon.modal.phone'}
              values={{ name, phone: phoneNumber }}
              components={{ strong: <strong /> }}
            />
          </Typography>
        );
      })}
    </PhoneWrapper>
  );
};
