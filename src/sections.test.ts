import {makeSlice} from './section';

describe('section reducer', () => {
  it('should increment production', () => {
    const plantsSlice = makeSlice('plants');
    const nextState = plantsSlice.reducer(
      {production: 0},
      plantsSlice.actions.incrementProduction(),
    );
    expect(nextState).toEqual({production: 1});
  });
  it('should decrement production', () => {
    const plantsSlice = makeSlice('plants');
    const nextState = plantsSlice.reducer(
      {production: 1},
      plantsSlice.actions.decrementProduction(),
    );
    expect(nextState).toEqual({production: 0});
  });
  it('should not decrement production below zero', () => {
    const plantsSlice = makeSlice('plants');
    const nextState = plantsSlice.reducer(
      {production: 0},
      plantsSlice.actions.decrementProduction(),
    );
    expect(nextState).toEqual({production: 0});
  });
});
