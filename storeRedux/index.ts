import {
  Action,
  configureStore,
  
  ThunkAction,
} from '@reduxjs/toolkit';
import contactUsSlice from './contactUsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { chefApi } from './services/chefApi';
import { articleApi } from './services/aticleApi';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
     message: contactUsSlice,  [chefApi.reducerPath]: chefApi.reducer,[articleApi.reducerPath]:articleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([chefApi.middleware, articleApi.middleware,thunkMiddleware]),
    
})
setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;