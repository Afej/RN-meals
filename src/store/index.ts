import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import restaurantReducer from './restaurant/restaurantSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
