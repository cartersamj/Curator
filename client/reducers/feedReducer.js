import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    gallery: [],
  },
  reducers: {
    push: (state) => {
      state.gallery.push('hi');
    },
  },
});

export default feedSlice;
