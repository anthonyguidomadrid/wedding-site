import { Grid } from '@mui/material';

import { WeddingForm } from './components/WeddingForm';
import { FormWrapper, RvspWrapper } from './Rvsp.styles';
import { RvspProps } from './Rvsp.types';
import { FadeInWrapper } from '../shared/FadeInWrapper';

export const Rvsp: React.FC<RvspProps> = ({
  title,
  subtitle,
  backgroundImage,
  limitDate,
  email,
}) => {
  return (
    <FadeInWrapper>
      <RvspWrapper backgroundImageUrl={backgroundImage?.url}>
        <Grid item md={6}>
          <FadeInWrapper delay={1000}>
            <FormWrapper>
              <WeddingForm
                email={email!}
                title={title!}
                subtitle={subtitle!}
                limitDate={limitDate!}
              />
            </FormWrapper>
          </FadeInWrapper>
        </Grid>
      </RvspWrapper>
    </FadeInWrapper>
  );
};
