import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';


const store = configureStore({
  reducer: {
    table: userReducer
  },
});

export default store;