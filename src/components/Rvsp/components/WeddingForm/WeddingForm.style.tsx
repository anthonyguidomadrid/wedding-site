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
    fontSize: '1rem',
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
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const FormGridItem = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    width: '50%',
    marginTop: 0,
  },
}));

export const ErrorTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  display: 'block',
  marginTop: theme.spacing(2),
}));
