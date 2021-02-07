import {createSlice, createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

export const initialState = '';

export const slice = createSlice({
  name: 'activeGameId',
  initialState,
  reducers: {},
  extraReducers: {
    ['games/startGame']: (state, action) => {
      return action.payload.id;
    },
  },
});

export const reducer = {activeGameId: slice.reducer};

export const selectActiveGameId = createSelector(
  (state: RootState) => state.activeGameId,
  (id) => id,
);
