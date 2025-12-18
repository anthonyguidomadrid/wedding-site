import { styled } from '@mui/material/styles';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

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
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.text.primary,
      opacity: 0.7,
    },
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const FormGridContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
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
