import undoable, {StateWithHistory} from 'redux-undo';
import {CombinedState, combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducers, Section} from './section';
import {reducer as generationReducer} from './generation';
import {
  MegaCreditsAndTerraformRatingState,
  name as megaCreditsAndTerraformRating,
  reducer as megaCreditsAndTerraformRatingReducer,
} from './megaCreditsAndTerraformRating';

export type RootState = StateWithHistory<
  CombinedState<{
    generation: number;
    megaCreditsAndTerraformRating:
      | MegaCreditsAndTerraformRatingState
      | undefined;
  }>
> &
  StateWithHistory<CombinedState<{[key: string]: Section}>>;

const undoableRoot = undoable(
  combineReducers({
    ...reducers,
    generation: generationReducer,
    [megaCreditsAndTerraformRating]: megaCreditsAndTerraformRatingReducer,
  }),
);

const store = configureStore({
  reducer: undoableRoot,
});

export {store};
