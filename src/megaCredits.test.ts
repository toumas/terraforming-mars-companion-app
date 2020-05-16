import {megaCreditsSlice} from './megaCredits';

describe('megaCredits reducer', () => {
  it('should decrement production', () => {
    const nextState = megaCreditsSlice.reducer(
      {production: 0, resources: 0},
      megaCreditsSlice.actions.decrementProduction,
    );
    expect(nextState).toEqual({production: -1, resources: 0});
  });
  it('should not decrement production below -5', () => {
    const nextState = megaCreditsSlice.reducer(
      {production: -5, resources: 0},
      megaCreditsSlice.actions.decrementProduction,
    );
    expect(nextState).toEqual({production: -5, resources: 0});
  });
});
