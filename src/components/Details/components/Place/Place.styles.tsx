import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Image from 'next/image';

export const PlaceImage = styled(Image)(() => ({
  height: '50vh',
  width: '100%',
  objectFit: 'cover' as const,
  display: 'block',
}));

export const PlaceInfoGrid = styled(Box)(({ theme }) => ({
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
