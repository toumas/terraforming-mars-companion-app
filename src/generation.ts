import {createSlice, createAction, createSelector} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface IncrementGenerationPayload {
  energyResources: number;
  generation: number;
}

export const incrementGeneration = createAction<IncrementGenerationPayload>(
  'incrementGeneration',
);

export const slice = createSlice({
  name: 'generation',
  initialState: 1,
  reducers: {},
  extraReducers: {
    [incrementGeneration.type]: (state: number) => {
      if (state < 100) {
        return state + 1;
      } else {
        return state;
      }
    },
  },
});

export const {reducer} = slice;

export const selectGeneration = createSelector(
  (state: RootState) => state.generation,
  (generation: number) => generation,
);
