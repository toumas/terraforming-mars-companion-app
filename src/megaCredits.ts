import {incrementGeneration} from './generation';
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
    [incrementGeneration.type]: (state: MegaCreditsAndTerraformRatingState) => {
      state.resources =
        state.resources + state.production + state.terraformRating;
    },
  },
});

export const reducer = megaCreditsSlice.reducer;
export const actions = megaCreditsSlice.actions;
