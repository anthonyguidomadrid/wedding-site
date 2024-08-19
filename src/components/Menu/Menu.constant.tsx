import BookOnlineIcon from '@mui/icons-material/BookOnline';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import { MenuItem } from './Menu.types';
import { SECTION_NAMES } from '../pages/HomePage/HomePage.constant';

export const MENU_ITEMS: MenuItem[] = [
  {
    item: SECTION_NAMES.details,
    Icon: BrunchDiningIcon,
  },
  {
    item: SECTION_NAMES.faq,
    Icon: QuestionAnswerIcon,
  },
  {
    item: SECTION_NAMES.rvsp,
    Icon: BookOnlineIcon,
  },
  {
    item: SECTION_NAMES.honeymoon,
    Icon: CardTravelIcon,
  },
];
