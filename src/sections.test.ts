import {makeSlice, energySlice, heatSlice} from './section';
import {incrementGeneration} from './generation';

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
      incrementGeneration(0),
    );
    expect(nextState).toEqual({
      production: 1,
      resources: 1,
    });
  });
  it('should set energy resources equal to pro', () => {
    const state = {
      production: 1,
      resources: 2,
    };
    const nextState = energySlice.reducer(
      state,
      incrementGeneration(state.resources),
    );
    expect(nextState).toEqual({
      production: 1,
      resources: 1,
    });
  });
  it('should set heat resources equal to energy resources', () => {
    const energySlice = makeSlice({
      name: 'energy',
      initialState: {production: 0, resources: 1},
    });
    const energyResources = energySlice.reducer(undefined, {type: 'init'})
      .resources;
    const nextState = heatSlice.reducer(
      {production: 0, resources: 0},
      incrementGeneration(energyResources),
    );
    expect(nextState).toEqual({
      production: 0,
      resources: 1,
    });
  });
});
