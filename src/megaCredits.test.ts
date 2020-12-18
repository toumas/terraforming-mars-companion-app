import {megaCreditsSlice} from './megaCredits';
import {initialState} from './megaCreditsAndTerraformRating';

describe('megaCredits reducer', () => {
  it('should decrement production', () => {
    const nextState = megaCreditsSlice.reducer(
      initialState,
      megaCreditsSlice.actions.decrementProduction(),
    );
    expect(nextState).toEqual({...initialState, production: -1});
  });
  it('should not decrement production below -5', () => {
    const nextState = megaCreditsSlice.reducer(
      {...initialState, production: -5},
      megaCreditsSlice.actions.decrementProduction(),
    );
    expect(nextState).toEqual({...initialState, production: -5});
  });
});
