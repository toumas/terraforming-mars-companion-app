import {createSlice, createAction} from '@reduxjs/toolkit';

export const incrementGeneration = createAction<number>('incrementGeneration');

export const slice = createSlice({
  name: 'generation',
  initialState: 1,
  reducers: {
    [incrementGeneration.type]: (state: number) => {
      if (state < 100) {
        return state + 1;
      } else {
        return state;
      }
    },
  },
});

export const {reducer} = slice;
