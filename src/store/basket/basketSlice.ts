import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { IDish } from '../../typings';

// Define a type for the slice state
interface BasketState {
  items: IDish[];
}

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IDish>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );
      const modifiedBasket = [...state.items];

      if (itemIndex > -1) {
        modifiedBasket.splice(itemIndex, 1);
      } else {
        console.warn(`cant remove item with id ${action.payload} from basket`);
      }

      state.items = modifiedBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsById = (state: RootState, id: string) =>
  state.basket.items.filter((item) => item._id === id);

export default basketSlice.reducer;
