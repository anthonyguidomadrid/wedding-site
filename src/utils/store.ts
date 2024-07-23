import { configureStore } from '@reduxjs/toolkit';

import mobileMenu from '~/slices/mobileMenu';

export const store = configureStore({
  reducer: {
    mobileMenu,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
