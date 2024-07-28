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
}));
