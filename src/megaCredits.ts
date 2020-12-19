import {PayloadAction} from '@reduxjs/toolkit';
import {incrementGeneration, IncrementGenerationPayload} from './generation';
import {
  initialState as megaCreditsAndTerraformRatingInitialState,
  MegaCreditsAndTerraformRatingState,
} from './megaCreditsAndTerraformRating';
import {makeSlice} from './section';
import {SectionNames} from './SectionNames';

export const megaCreditsSlice = makeSlice({
  name: SectionNames.MEGA_CREDITS,
  initialState: megaCreditsAndTerraformRatingInitialState,
  reducers: {
    decrementProduction: (state: MegaCreditsAndTerraformRatingState) => {
      if (state.production > -5) {
        state.production = state.production - 1;
      }
    },
  },
  extraReducers: {
    [incrementGeneration.type]: (
      state: MegaCreditsAndTerraformRatingState,
      action: PayloadAction<IncrementGenerationPayload>,
    ) => {
      if (action.payload.generation < 100) {
        state.resources =
          state.resources + state.production + state.terraformRating;
      }
      return state;
    },
  },
});

export const reducer = megaCreditsSlice.reducer;
export const actions = megaCreditsSlice.actions;
