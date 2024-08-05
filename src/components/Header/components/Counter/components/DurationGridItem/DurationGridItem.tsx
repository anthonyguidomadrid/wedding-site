import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DurationGridProps } from './DurationGridItem.types';

export const DurationGridItem: React.FC<DurationGridProps> = ({ timeDuration, durationType }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={1.5}>
      <Typography>{timeDuration}</Typography>
      <Typography variant="small">{t(`counter.${durationType}`)}</Typography>
    </Grid>
  );
};
