import { configureStore } from '@reduxjs/toolkit';
import feedSlice from './reducers/feedReducer';
// console.log(feedSlice);
const reducer = {
  feedSlice: feedSlice.reducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
