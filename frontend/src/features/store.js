import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/users/authSlice';
import { authApi } from './api/authApi';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    registration: authSlice,
  },
  devTools: import.meta.env.MODE !== 'production',
  middleware:
  (getDefaultMiddleware) =>getDefaultMiddleware().concat(authApi.middleware), 
});

export default store;