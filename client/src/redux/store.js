import { configureStore } from '@reduxjs/toolkit';
import planesSlice from './slices/planesSlice';
import planeSlice from './slices/planeSlice';

export const store = configureStore({
  reducer: {
    planes: planesSlice,
    plane: planeSlice,
  },
});
