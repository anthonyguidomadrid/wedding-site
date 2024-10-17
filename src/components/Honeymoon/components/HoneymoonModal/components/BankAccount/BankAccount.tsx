import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Trans } from 'react-i18next';

import { BankAccount as BankAccountProps } from '~/normalizers';

export const BankAccount: React.FC<BankAccountProps> = ({
  fullName: name,
  iban,
  swiftBic: swift,
  accountNumberId: number,
  dni,
  name: bankName,
}) => {
  const fields = [
    { key: 'name', value: name },
    { key: 'iban', value: iban },
    { key: 'bankName', value: bankName },
    { key: 'swift', value: swift },
    { key: 'number', value: number },
    { key: 'dni', value: dni },
  ];

  return (
    <Grid item flexDirection="column" display="flex">
      {fields.map(
        ({ key, value }) =>
          value && (
            <Typography variant="small" key={key}>
              <Trans
                i18nKey={`honeymoon.modal.bank.${key}`}
                values={{ value }}
                components={{ strong: <strong /> }}
              />
            </Typography>
          ),
      )}
    </Grid>
  );
};
