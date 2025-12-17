import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DurationGridProps } from './DurationGridItem.types';
import { DurationWrapper } from './DurationGridItem.styles';

export const DurationGridItem: React.FC<DurationGridProps> = ({ timeDuration, durationType }) => {
  const { t } = useTranslation();
  return (
    <DurationWrapper>
      <Typography>{timeDuration}</Typography>
      <Typography variant="tiny">{t(`counter.${durationType}`)}</Typography>
    </DurationWrapper>
  );
};
