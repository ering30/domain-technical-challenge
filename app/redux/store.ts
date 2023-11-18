import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;