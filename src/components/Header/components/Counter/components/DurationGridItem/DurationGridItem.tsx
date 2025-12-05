import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DurationGridProps } from './DurationGridItem.types';

export const DurationGridItem: React.FC<DurationGridProps> = ({ timeDuration, durationType }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: { xs: 'auto', sm: '16.6667%' } }}>
      <Typography>{timeDuration}</Typography>
      <Typography variant="tiny">{t(`counter.${durationType}`)}</Typography>
    </Box>
  );
};
