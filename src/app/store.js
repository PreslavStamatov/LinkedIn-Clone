import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import friendReducer from '../features/user/friendSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    friend: friendReducer,
  },
});