import {slice, incrementGeneration} from './generation';

describe('generation reducer', () => {
  it('should increment generation', () => {
    const payload = {
      energyResources: 0,
      generation: 1,
    };
    const nextState = slice.reducer(1, incrementGeneration(payload));
    expect(nextState).toEqual(2);
  });
  it('should not increment generation over 100', () => {
    const payload = {
      energyResources: 0,
      generation: 100,
    };
    const nextState = slice.reducer(100, incrementGeneration(payload));
    expect(nextState).toEqual(100);
  });
});
