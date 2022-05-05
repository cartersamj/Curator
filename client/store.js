import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import feedSlice from './reducers/feedReducer';
import metApi from './services/collection.js';
// console.log(feedSlice);
const reducer = {
  feedSlice: feedSlice.reducer,
  [metApi.reducerPath]: metApi.reducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(metApi.middleware),
});

setupListeners(store.dispatch);
export default store;
