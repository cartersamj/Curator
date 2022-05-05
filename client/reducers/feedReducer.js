import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    collection: [],
    gallery: [],
    galleryCache: [],
  },
  reducers: {
    setCollection: (state, action) => {
      state.collection = [...action.payload];
    },
    /** FILL, adds x paintings to gallery. can add more? */
    fill: (state) => {
      for (let i = 0; i < 10; i++) {
        state.gallery.push(
          state.collection[Math.floor(Math.random() * state.collection.length)]
        );
      }
    },
    /** SHUFFLE, grabs new group of paintings, and adds prev
     * gallery to gallery cache;
     */

    /** CACHE: caches ccurrent gallery wihtout grabbing more */
  },
});

export default feedSlice;
