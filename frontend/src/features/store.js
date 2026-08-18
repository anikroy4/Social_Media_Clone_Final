import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/users/authSlice';

const store = configureStore({
  reducer: {
    registration: authSlice,
  },
});

export default store;