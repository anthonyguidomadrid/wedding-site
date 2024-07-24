import BookOnlineIcon from '@mui/icons-material/BookOnline';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import { MenuItem } from './Menu.types';

export const MENU_ITEMS: MenuItem[] = [
  {
    item: 'details',
    Icon: BrunchDiningIcon,
  },
  {
    item: 'faq',
    Icon: QuestionAnswerIcon,
  },
  {
    item: 'rvsp',
    Icon: BookOnlineIcon,
  },
  {
    item: 'honeymoon',
    Icon: CardTravelIcon,
  },
];
