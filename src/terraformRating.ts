import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'terraformRating',
  initialState: 20,
  reducers: {
    incrementTerraformRating(state: number) {
      return state + 1;
    },
  },
});

export const {reducer} = slice;
export const {incrementTerraformRating} = slice.actions;
