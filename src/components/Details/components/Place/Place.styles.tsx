import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import Image from 'next/image';

export const PlaceImage = styled(Image)(() => ({
  height: '50vh',
  width: '100%',
  objectFit: 'cover',
  display: 'block',
}));

export const PlaceInfoGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  a: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    ':hover': {
      textDecoration: 'none',
    },
  },
}));
