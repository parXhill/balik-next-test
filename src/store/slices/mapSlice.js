import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRestaurant: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    }
  },
});

export const { setSelectedRestaurant } = mapSlice.actions;
export default mapSlice.reducer;