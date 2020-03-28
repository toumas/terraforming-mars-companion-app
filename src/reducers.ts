import {createSlice, Slice} from '@reduxjs/toolkit';

export const production: Slice = createSlice({
  name: 'production',
  initialState: 0,
  reducers: {
    decrement: (state) => state - 1,
    increment: (state) => state + 1,
  },
});
