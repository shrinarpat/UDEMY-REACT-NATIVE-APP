import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './cartSlice';
import userReducer from './userSlice';

const appStore = configureStore({
  reducer: {
    cart: CartReducer,
    users: userReducer,
  },
});

export default appStore;
