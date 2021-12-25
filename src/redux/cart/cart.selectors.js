import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart], // a collection of input selectors
  (cart) => cart.cartItems // a function that will return the value we want out of the selector
);

export const selectCartItemsCount = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((totalQty, item) => totalQty + item.quantity, 0)
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
