import styled from '@emotion/styled';
import { Box, Button, Grid, InputLabel, TextField } from '@mui/material';

import { theme } from '~/theme';

export const StyledForm = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
}));

StyledForm.defaultProps = {
  component: 'form',
};

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '100%',
}));

StyledTextField.defaultProps = {
  fullWidth: true,
  margin: 'normal',
  InputLabelProps: {
    style: {
      color: theme.palette.text.primary,
    },
  },
};

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

SubmitButton.defaultProps = {
  type: 'submit',
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
};

export const FormGridContainer = styled(Grid)();

FormGridContainer.defaultProps = {
  container: true,
  spacing: 2,
};

export const FormGridItem = styled(Grid)();

FormGridItem.defaultProps = {
  item: true,
  xs: 12,
  sm: 6,
};
