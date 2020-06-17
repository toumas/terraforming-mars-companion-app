import {createSlice, createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

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

export const selectTerraformRating = createSelector(
  (state: RootState) => state.terraformRating,
  (terraformRating) => terraformRating,
);
