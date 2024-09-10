import CloseIcon from '@mui/icons-material/Close';
import {
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
  return (
    <>
      <Dialog onClose={handleClose} open={open} fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <Typography>{subtitle}</Typography>
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
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Typography variant="h3">Bank transfer</Typography>
              <Grid container spacing={3}>
                {bankAccounts.map(({ fullName, iban, swiftBic, accountNumberId, dni }) => {
                  return (
                    <Grid item key={fullName}>
                      <p>Name: {fullName}</p>
                      {iban && <p>IBAN: {iban}</p>}
                      {swiftBic && <p>SWIFT/BIC: {swiftBic}</p>}
                      {accountNumberId && <p>Account number: {accountNumberId}</p>}
                      {dni && <p>DNI: {dni}</p>}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h3">Bizum</Typography>
              {bizumPhones.map(({ name, phoneNumber }) => {
                return (
                  <div key={name}>
                    <p>{name}</p>
                    <p>{phoneNumber}</p>
                  </div>
                );
              })}
              <Typography variant="h3">Paypal</Typography>
              <Link href={paypalLink} target="_blank">
                <Button>Paypal</Button>
              </Link>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Button onClick={handleOpen}>{ctaLabel}</Button>
    </>
  );
};
