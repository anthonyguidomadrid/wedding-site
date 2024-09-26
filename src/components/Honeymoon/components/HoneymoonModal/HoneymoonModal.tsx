import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloseIcon from '@mui/icons-material/Close';
import PaymentsIcon from '@mui/icons-material/Payments';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import { Box, Button, Dialog, DialogTitle, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BankAccount } from './components/BankAccount';
import { BizumPhones } from './components/BizumPhones';
import {
  CloseIconButton,
  TitleWithIconWrapper,
  ModalContentWrapper,
  ModalTitleWrapper,
  PaymentMethodGrid,
} from './HoneymoonModal.styles';
import { HoneymoonModalProps } from './HoneyMoonModal.types';

export const HoneymoonModal: React.FC<HoneymoonModalProps> = ({
  ctaLabel,
  title,
  subtitle,
  bankAccounts,
  bizumPhones,
  paypalLink,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="md">
        <ModalTitleWrapper>
          <DialogTitle>{title}</DialogTitle>
          <Typography>{subtitle}</Typography>
        </ModalTitleWrapper>
        <CloseIconButton onClick={handleClose}>
          <CloseIcon />
        </CloseIconButton>
        <ModalContentWrapper>
          <Grid container spacing={{ xs: 7, md: 14 }}>
            <Grid item md={6}>
              <TitleWithIconWrapper>
                <AccountBalanceIcon fontSize="small" />
                <Typography variant="h3">{t('honeymoon.modal.title.bank')}</Typography>
              </TitleWithIconWrapper>
              <Grid container spacing={3}>
                {bankAccounts.map(bankAccount => {
                  return <BankAccount key={bankAccount.fullName} {...bankAccount} />;
                })}
              </Grid>
            </Grid>
            <PaymentMethodGrid item md={6}>
              <Box>
                <TitleWithIconWrapper>
                  <PhonelinkRingIcon fontSize="small" />
                  <Typography variant="h3">{t('honeymoon.modal.title.bizum')}</Typography>
                </TitleWithIconWrapper>
                <BizumPhones bizumPhones={bizumPhones} />
              </Box>
              <Box>
                <TitleWithIconWrapper>
                  <PaymentsIcon fontSize="small" />
                  <Typography variant="h3">{t('honeymoon.modal.title.paypal')}</Typography>
                </TitleWithIconWrapper>
                <Link href={paypalLink} target="_blank">
                  <Button variant="outlined">{t('honeymoon.modal.button.paypal')}</Button>
                </Link>
              </Box>
            </PaymentMethodGrid>
          </Grid>
        </ModalContentWrapper>
      </Dialog>
      <Button onClick={handleOpen} variant="outlined">
        {ctaLabel}
      </Button>
    </>
  );
};
