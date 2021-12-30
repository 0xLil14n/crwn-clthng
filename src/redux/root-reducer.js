import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // local Storage object on browser

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

// base reducer object that represents the overarching state of our application
// all reducers will go into here
const allowList = ['cart'];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: allowList, // list of string names of any reducer that we want to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
