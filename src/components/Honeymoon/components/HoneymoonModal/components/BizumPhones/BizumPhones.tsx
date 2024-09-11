import { Box, Typography } from '@mui/material';
import { Trans } from 'react-i18next';

import { BizumPhonesProps } from './BizumPhones.types';

export const BizumPhones = ({ bizumPhones }: BizumPhonesProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
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
    </Box>
  );
};
