import { combineReducers } from 'redux';

import userReducer from './user-reducer';
// base reducer object that represents the overarching state of our application
// all reducers will go into here

export default combineReducers({
    user: userReducer
});