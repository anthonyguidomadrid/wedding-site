import { createSlice } from '@reduxjs/toolkit';

interface MobileMenuState {
  isMenuOpen: boolean;
}

const initialState: MobileMenuState = {
  isMenuOpen: false,
};

export const mobileMenuSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toogleMenuOpening: state => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toogleMenuOpening } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
