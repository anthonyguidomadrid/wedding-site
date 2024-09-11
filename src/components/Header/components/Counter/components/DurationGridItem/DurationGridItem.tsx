import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DurationGridProps } from './DurationGridItem.types';

export const DurationGridItem: React.FC<DurationGridProps> = ({ timeDuration, durationType }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={2}>
      <Typography>{timeDuration}</Typography>
      <Typography variant="tiny">{t(`counter.${durationType}`)}</Typography>
    </Grid>
  );
};
