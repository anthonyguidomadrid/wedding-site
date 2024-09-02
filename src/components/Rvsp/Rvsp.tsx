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

import { WeddingForm } from './components/WeddingForm';
import { RvspProps } from './Rvsp.types';

import { formatDate } from '~/helpers';

export const Rvsp = ({ title, subtitle, backgroundImage, limitDate }: RvspProps) => {
  const { locale } = useRouter();
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${backgroundImage?.url})`,
        flexDirection: 'row-reverse',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        item
        sm={6}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          color: 'black',
          padding: '24px',
          textAlign: 'center',
          margin: '40px',
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <p>
          {subtitle} {formatDate(limitDate!, locale)}
        </p>
        <WeddingForm />
      </Grid>
    </Grid>
  );
};
