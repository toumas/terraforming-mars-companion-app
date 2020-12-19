import {PayloadAction} from '@reduxjs/toolkit';
import {incrementGeneration, IncrementGenerationPayload} from './generation';
import {initialState, reducer} from './megaCreditsAndTerraformRating';

describe('MegaCreditsAndTerraformRatingState', () => {
  it('should add production, resources and terraform rating together', () => {
    /* this is not a reducer from `createSlice` call, thus no action creators
     * are generated for use
     */
    const action: PayloadAction<IncrementGenerationPayload> = {
      type: incrementGeneration.type,
      payload: {
        energyResources: 0,
        generation: 1,
      },
    };
    const nextState = reducer(
      {...initialState, production: 1, resources: 1, terraformRating: 23},
      action,
    );
    expect(nextState).toEqual({
      ...initialState,
      production: 1,
      resources: 25,
      terraformRating: 23,
    });
  });
  it('should not add add production, resources and terraform rating together if generation is 100 or above', () => {
    const action: PayloadAction<IncrementGenerationPayload> = {
      type: incrementGeneration.type,
      payload: {
        energyResources: 0,
        generation: 100,
      },
    };
    const nextState = reducer(
      {...initialState, production: 1, resources: 1, terraformRating: 23},
      action,
    );
    expect(nextState).toEqual({
      ...initialState,
      production: 1,
      resources: 1,
      terraformRating: 23,
    });
  });
});
