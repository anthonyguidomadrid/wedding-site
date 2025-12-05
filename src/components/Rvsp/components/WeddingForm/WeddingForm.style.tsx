import { styled } from '@mui/material/styles';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

import { theme } from '~/theme';

export const StyledForm = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '100%',
}));

// Note: default props moved to component usage where appropriate

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const FormGridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

export const FormGridItem = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

export const ErrorTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  display: 'block',
  marginTop: theme.spacing(2),
}));
