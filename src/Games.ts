import {RootState, selectRootState} from './store';
import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import {selectActiveGameId} from './activeGameId';

export enum State {
  Finished = 'finished',
  InProgress = 'in_progress',
}

export type Game = {
  id: string;
  name: string;
  state: State;
  boardId: string;
};

const gameAdapter = createEntityAdapter<Game>();

const gameSlice = createSlice({
  name: 'games',
  initialState: gameAdapter.getInitialState(),
  reducers: {
    startGame: gameAdapter.addOne,
  },
});

export const {actions, reducer} = gameSlice;

export const selectGamesState = (state) => state.games;
export const {selectById} = gameAdapter.getSelectors(selectGamesState);

export const selectActiveGame = createSelector(
  [(state) => state, selectActiveGameId],
  (state, id) => selectById(state, id),
);
