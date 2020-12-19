import {configureStore} from '@reduxjs/toolkit';
import {reducers, Section} from './section';
import {reducer as generationReducer} from './generation';
import {
  MegaCreditsAndTerraformRatingState,
  name as megaCreditsAndTerraformRating,
  reducer as megaCreditsAndTerraformRatingReducer,
} from './megaCreditsAndTerraformRating';

export type RootState = {
  generation: number;
  megaCreditsAndTerraformRating: MegaCreditsAndTerraformRatingState | undefined;
} & {[key: string]: Section};

const store = configureStore({
  reducer: {
    ...reducers,
    generation: generationReducer,
    [megaCreditsAndTerraformRating]: megaCreditsAndTerraformRatingReducer,
  },
});

export {store};
