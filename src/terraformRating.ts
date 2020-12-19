import {createSlice, createSelector} from '@reduxjs/toolkit';
import {
  MegaCreditsAndTerraformRatingState,
  initialState as megaCreditsAndTerraformRatingInitialState,
  name as megaCreditsAndTerraformRating,
} from './megaCreditsAndTerraformRating';
import {RootState} from './store';

export const slice = createSlice({
  name: 'terraformRating',
  initialState: megaCreditsAndTerraformRatingInitialState,
  reducers: {
    incrementTerraformRating(state: MegaCreditsAndTerraformRatingState) {
      state.terraformRating = state.terraformRating + 1;
    },
  },
});

export const {reducer} = slice;
export const {incrementTerraformRating} = slice.actions;

export const selectTerraformRating = createSelector(
  (state: RootState) => {
    const megaCreditsAndTerraformRatingState = state.present[
      megaCreditsAndTerraformRating
    ] as MegaCreditsAndTerraformRatingState;
    return megaCreditsAndTerraformRatingState.terraformRating;
  },
  (terraformRating) => terraformRating,
);
