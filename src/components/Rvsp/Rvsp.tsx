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
import { FormWrapper, RvspWrapper } from './Rvsp.styles';
import { RvspProps } from './Rvsp.types';
import { FadeInWrapper } from '../shared';

import { formatDate } from '~/helpers';

export const Rvsp = ({ title, subtitle, backgroundImage, limitDate }: RvspProps) => {
  const { locale } = useRouter();
  return (
    <FadeInWrapper>
      <RvspWrapper backgroundImageUrl={backgroundImage?.url}>
        <Grid item md={6}>
          <FadeInWrapper delay={1000}>
            <FormWrapper>
              <Typography variant="h2">{title}</Typography>
              <Typography>{subtitle}</Typography>
              <Typography variant="bold">{formatDate(limitDate!, locale)}</Typography>
              <WeddingForm />
            </FormWrapper>
          </FadeInWrapper>
        </Grid>
      </RvspWrapper>
    </FadeInWrapper>
  );
};
