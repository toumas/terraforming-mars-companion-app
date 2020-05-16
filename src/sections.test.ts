import {makeSlice} from './section';
import {slice as generationSlice} from './generation';

describe('section reducer', () => {
  it('should increment production', () => {
    const plantsSlice = makeSlice({name: 'plants'});
    const nextState = plantsSlice.reducer(
      {
        production: 0,
        resources: 0,
      },
      plantsSlice.actions.incrementProduction(),
    );
    expect(nextState).toEqual({
      production: 1,
      resources: 0,
    });
  });
  it('should decrement production', () => {
    const plantsSlice = makeSlice({name: 'plants'});
    const nextState = plantsSlice.reducer(
      {
        production: 1,
        resources: 0,
      },
      plantsSlice.actions.decrementProduction(),
    );
    expect(nextState).toEqual({
      production: 0,
      resources: 0,
    });
  });
  it('should not decrement production below zero', () => {
    const plantsSlice = makeSlice({name: 'plants'});
    const nextState = plantsSlice.reducer(
      {
        production: 0,
        resources: 0,
      },
      plantsSlice.actions.decrementProduction(),
    );
    expect(nextState).toEqual({
      production: 0,
      resources: 0,
    });
  });
  it('should decrement resources', () => {
    const plantsSlice = makeSlice({name: 'plants'});
    const nextState = plantsSlice.reducer(
      {
        production: 0,
        resources: 1,
      },
      plantsSlice.actions.decrementResources(),
    );
    expect(nextState).toEqual({
      production: 0,
      resources: 0,
    });
  });
  it('should not decrement resources below zero', () => {
    const plantsSlice = makeSlice({name: 'plants'});
    const nextState = plantsSlice.reducer(
      {
        production: 0,
        resources: 0,
      },
      plantsSlice.actions.decrementResources(),
    );
    expect(nextState).toEqual({
      production: 0,
      resources: 0,
    });
  });
  it('should produce resources based on production count', () => {
    const plantsSlice = makeSlice({name: 'plants'});
    const nextState = plantsSlice.reducer(
      {
        production: 1,
        resources: 0,
      },
      generationSlice.actions.incrementGeneration(),
    );
    expect(nextState).toEqual({
      production: 1,
      resources: 1,
    });
  });
});
