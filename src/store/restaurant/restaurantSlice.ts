import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import {  IRestaurant } from '../../typings';

// Define a type for the slice state
interface RestaurantState {
  restaurant: IRestaurant;
}

// Define the initial state using that type
const initialState: RestaurantState = {
  restaurant: {} as IRestaurant,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IRestaurant>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
