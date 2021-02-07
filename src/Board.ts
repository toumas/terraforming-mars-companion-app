import {Game, selectActiveGame} from './Games';
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import {selectRootState} from './store';
import { incrementGeneration, reducer as generationReducer } from './generation';

export type Board = {
  id: string;
};

const adapter = createEntityAdapter<Board>();

// TODO: merge all board related slices in to here (generation, section...)
console.log({incrementGeneration});
export const slice = createSlice({
  name: 'boards',
  initialState: adapter.getInitialState({
    generation: 1
  }),
  reducers: {
    addBoard: adapter.addOne,
  },
  extraReducers: {
    [incrementGeneration.type]: (state: number) => {
      console.log(JSON.stringify(state, null, 4));
      debugger;
      if (state < 100) {
        return state + 1;
      } else {
        return state;
      }
    },
  },
});

export const {actions, reducer} = slice;

export const {selectById} = adapter.getSelectors((state) => state.boards);

export const selectActiveBoard = createSelector(
  [selectRootState, selectActiveGame],
  (state, game: Game) => {
    const board = selectById(state, game.boardId);
    return board;
  },
);

export const selectGeneration = createSelector(
  [selectActiveBoard],
  (board: Board) => {
    return board?.present?.generation;
  },
  // (generation: number) => generation,
);
