import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloseIcon from '@mui/icons-material/Close';
import PaymentsIcon from '@mui/icons-material/Payments';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BankAccount } from './components/BankAccount';
import { BizumPhones } from './components/BizumPhones';
import { HoneymoonModalProps } from './HoneyMoonModal.types';

export const HoneymoonModal = ({
  ctaLabel,
  title,
  subtitle,
  bankAccounts,
  bizumPhones,
  paypalLink,
}: HoneymoonModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="md">
        <Box sx={{ textAlign: 'center', padding: '24px' }}>
          <DialogTitle>{title}</DialogTitle>
          <Typography>{subtitle}</Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={theme => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid container spacing={15}>
            <Grid item md={6}>
              <Typography variant="h3">
                <AccountBalanceIcon fontSize="small" sx={{ marginRight: '8px' }} />
                {t('honeymoon.modal.title.bank')}
              </Typography>
              <Grid container spacing={3}>
                {bankAccounts.map(bankAccount => {
                  return <BankAccount key={bankAccount.fullName} {...bankAccount} />;
                })}
              </Grid>
            </Grid>
            <Grid item md={6} sx={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <Box>
                <Typography variant="h3">
                  <PhonelinkRingIcon fontSize="small" sx={{ marginRight: '8px' }} />
                  {t('honeymoon.modal.title.bizum')}
                </Typography>
                <BizumPhones bizumPhones={bizumPhones} />
              </Box>
              <Box>
                <Typography variant="h3">
                  <PaymentsIcon fontSize="small" sx={{ marginRight: '8px' }} />
                  {t('honeymoon.modal.title.paypal')}
                </Typography>
                <Link href={paypalLink} target="_blank">
                  <Button variant="outlined">{t('honeymoon.modal.button.paypal')}</Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Button onClick={handleOpen} variant="outlined">
        {ctaLabel}
      </Button>
    </>
  );
};
