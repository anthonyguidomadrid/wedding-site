import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloseIcon from '@mui/icons-material/Close';
import PaymentsIcon from '@mui/icons-material/Payments';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import { Box, Button, Dialog, DialogTitle, Typography } from '@mui/material';
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
          <Box display="flex" flexWrap="wrap" gap={{ xs: 7, md: 10 }}>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <TitleWithIconWrapper>
                <AccountBalanceIcon fontSize="small" />
                <Typography variant="h3">{t('honeymoon.modal.title.bank')}</Typography>
              </TitleWithIconWrapper>
              <Box>
                {bankAccounts.map(bankAccount => (
                  <BankAccount key={bankAccount.fullName} {...bankAccount} />
                ))}
              </Box>
            </Box>
            <PaymentMethodGrid sx={{ width: { xs: '100%', md: '50%' } }}>
              <Box>
                <TitleWithIconWrapper>
                  <PhonelinkRingIcon fontSize="small" />
                  <Typography variant="h3">{t('honeymoon.modal.title.bizum')}</Typography>
                </TitleWithIconWrapper>
                <BizumPhones bizumPhones={bizumPhones} />
              </Box>
              {paypalLink && (
                <Box>
                  <TitleWithIconWrapper>
                    <PaymentsIcon fontSize="small" />
                    <Typography variant="h3">{t('honeymoon.modal.title.paypal')}</Typography>
                  </TitleWithIconWrapper>
                  <Link href={paypalLink} target="_blank">
                    <Button variant="outlined">{t('honeymoon.modal.button.paypal')}</Button>
                  </Link>
                </Box>
              )}
            </PaymentMethodGrid>
          </Box>
        </ModalContentWrapper>
      </Dialog>
      <Button onClick={handleOpen} variant="outlined">
        {ctaLabel}
      </Button>
    </>
  );
};
