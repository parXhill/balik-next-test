import { configureStore } from '@reduxjs/toolkit';

import mapReducer from './slices/mapSlice';

const store = configureStore({
  reducer: {
    example: mapReducer,  // Add your slice reducers here
  },
});

export default store;