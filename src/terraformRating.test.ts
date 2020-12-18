import {slice} from './terraformRating';

import {initialState} from './megaCreditsAndTerraformRating';

describe('terraformingRating reducer', () => {
  it('should increment terraform rating', () => {
    const nextState = slice.reducer(
      initialState,
      slice.actions.incrementTerraformRating(),
    );
    expect(nextState).toEqual({...initialState, terraformRating: 21});
  });
});
