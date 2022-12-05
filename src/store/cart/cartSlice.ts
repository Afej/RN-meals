import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { IDish } from '../../typings';

// Define a type for the slice state
interface CartState {
  items: IDish[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IDish>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload.id
      );
      const modifiedCart = [...state.items];

      if (itemIndex > -1) {
        modifiedCart.splice(itemIndex, 1);
      } else {
        console.warn(`cant remove item with id ${action.payload} from cart`);
      }

      state.items = modifiedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsById = (state: RootState, id: string) =>
  state.cart.items.filter((item) => item._id === id);

export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => (total += item.price), 0);

export default cartSlice.reducer;
