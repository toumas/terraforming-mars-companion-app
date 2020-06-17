import {slice, incrementGeneration} from './generation';

describe('generation reducer', () => {
  it('should increment generation', () => {
    const nextState = slice.reducer(1, incrementGeneration(0));
    expect(nextState).toEqual(2);
  });
  it('should not increment generation over 100', () => {
    const nextState = slice.reducer(100, incrementGeneration(0));
    expect(nextState).toEqual(100);
  });
});
