import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'generation',
  initialState: 1,
  reducers: {
    incrementGeneration: (state: number) => {
      if (state < 100) {
        return state + 1;
      } else {
        return state;
      }
    },
  },
});

export const {reducer} = slice;
