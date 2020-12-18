import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {reducers, Section} from './section';
import {reducer as generationReducer} from './generation';
import {
  MegaCreditsAndTerraformRatingState,
  name as megaCreditsAndTerraformRating,
  reducer as megaCreditsAndTerraformRatingReducer,
} from './megaCreditsAndTerraformRating';

export type RootState = {
  [key: string]: Section | MegaCreditsAndTerraformRatingState;
};

const store: EnhancedStore<RootState> = configureStore({
  reducer: {
    ...reducers,
    generation: generationReducer,
    [megaCreditsAndTerraformRating]: megaCreditsAndTerraformRatingReducer,
  },
});

export {store};
