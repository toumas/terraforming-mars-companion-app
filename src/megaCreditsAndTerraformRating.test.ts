import {incrementGeneration} from './generation';
import {initialState, reducer} from './megaCreditsAndTerraformRating';

describe('MegaCreditsAndTerraformRatingState', () => {
  it('should add production, resources and terraform rating together', () => {
    const nextState = reducer(
      {...initialState, production: 1, resources: 1, terraformRating: 23},
      /* this is not a reducer from `createSlice` call, thus no action creators
       * are generated for use
       */
      {
        type: incrementGeneration.type,
      },
    );
    expect(nextState).toEqual({
      ...initialState,
      production: 1,
      resources: 25,
      terraformRating: 23,
    });
  });
});
