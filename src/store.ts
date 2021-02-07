import undoable, {StateWithHistory} from 'redux-undo';
import {CombinedState, combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducers, Section} from './section';
import {reducer as generationReducer} from './generation';
import {
  MegaCreditsAndTerraformRatingState,
  name as megaCreditsAndTerraformRating,
  reducer as megaCreditsAndTerraformRatingReducer,
} from './megaCreditsAndTerraformRating';
import {reducer as gamesReducer} from './Games';
import {reducer as activeGameIdReducer} from './activeGameId';
import {reducer as boardsReducer} from './Board';
import reduceReducers from 'reduce-reducers';

export type RootState = StateWithHistory<
  CombinedState<{
    generation: number;
    megaCreditsAndTerraformRating:
      | MegaCreditsAndTerraformRatingState
      | undefined;
  }>
> &
  StateWithHistory<CombinedState<{[key: string]: Section}>>;

export const undoableRoot = undoable(
  combineReducers({
    ...reducers,
    generation: generationReducer,
    [megaCreditsAndTerraformRating]: megaCreditsAndTerraformRatingReducer,
  }),
);

const board = combineReducers({
  board: generationReducer,
});

const foo = reduceReducers(boardsReducer, generationReducer);

const store = configureStore({
  reducer: undoableRoot,
  // reducer: {
  //   foo: undoableRoot,
  //   games: gamesReducer,
  //   boards: boardsReducer,
  //   ...activeGameIdReducer,
  // },
});

export function selectRootState(state) {
  return state;
}

export {store};
