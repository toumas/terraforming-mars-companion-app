import {slice} from './generation';

describe('generation reducer', () => {
  it('should increment generation', () => {
    const nextState = slice.reducer(1, slice.actions.incrementGeneration());
    expect(nextState).toEqual(2);
  });
  it('should not increment generation over 100', () => {
    const nextState = slice.reducer(100, slice.actions.incrementGeneration());
    expect(nextState).toEqual(100);
  });
});
