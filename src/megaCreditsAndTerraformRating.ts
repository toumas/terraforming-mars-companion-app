import reduceReducers from 'reduce-reducers';
import {reducer as megaCreditsReducer} from './megaCredits';
import {reducer as terraformRatingReducer} from './terraformRating';
import {Section} from './section';

export interface MegaCreditsAndTerraformRatingState extends Section {
  terraformRating: number;
}

export const initialState: MegaCreditsAndTerraformRatingState = {
  production: 0,
  resources: 0,
  terraformRating: 20,
};

export const name = 'megaCreditsAndTerraformRating';

const reducer = reduceReducers(
  initialState,
  megaCreditsReducer,
  terraformRatingReducer,
);

export {reducer};
