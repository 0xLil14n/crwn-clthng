import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
// base reducer object that represents the overarching state of our application
// all reducers will go into here

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
