import {
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

import { RvspProps } from './Rvsp.types';

import { formatDate } from '~/helpers';
import { WeddingForm } from './components/WeddingForm';

export const Rvsp = ({ title, subtitle, backgroundImage, limitDate }: RvspProps) => {
  const { locale } = useRouter();
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${backgroundImage?.url})`,
        minHeight: '100vh',
        flexDirection: 'row-reverse',
      }}
    >
      <Grid item sm={6}>
        <Typography variant="h2">{title}</Typography>
        <p>
          {subtitle} {formatDate(limitDate!, locale)}
        </p>
        <WeddingForm />
      </Grid>
    </Grid>
  );
};
