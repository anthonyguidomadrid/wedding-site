import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const LanguageButton = styled(Button)(({ theme }) => ({
  minWidth: 'fit-content',
  borderRadius: 0,
  padding: theme.spacing(0, 4),
  '&:not(:last-child)': {
    borderRight: `1px ${theme.palette.text.primary} solid`,
    paddingLeft: 0,
  },
  ':hover': {
    opacity: 0.5,
  },
  transition: 'color 0.5s ease, background-color 0.5s ease, opacity 1s ease, borderRight 0.5s ease',
}));
