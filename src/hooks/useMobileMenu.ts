import { useDispatch, useSelector } from 'react-redux';

import { toogleMenuOpening } from '~/slices';
import { RootState } from '~/utils';

export const useMobileMenu = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen: boolean = useSelector((state: RootState) => state.mobileMenu.isMenuOpen);
  const toogleMobileMenu = () => dispatch(toogleMenuOpening());
  return { isMobileMenuOpen, toogleMobileMenu };
};
