import {
  createSlice,
  Reducer,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit';

export interface Section {
  production: number;
}

export enum SectionNames {
  ENERGY = 'energy',
  HEAT = 'heat',
  PLANTS = 'plants',
  STEEL = 'steel',
  TITANIUM = 'titanium',
}

interface ActionsBySectionName {
  [key: string]: ActionCreatorWithoutPayload<string>;
}

export const initialState = {
  production: 0,
};

export const makeSlice = (name: string) => {
  return createSlice({
    name: name,
    initialState: initialState,
    reducers: {
      decrementProduction: (state: Section) => {
        if (state.production > 0) {
          state.production = state.production - 1;
        }
      },
      incrementProduction: (state: Section) => {
        state.production = state.production + 1;
      },
    },
  });
};

const energySlice = makeSlice(SectionNames.ENERGY);
const heatSlice = makeSlice(SectionNames.HEAT);
const plantsSlice = makeSlice(SectionNames.PLANTS);
const steelSlice = makeSlice(SectionNames.STEEL);
const titaniumSlice = makeSlice(SectionNames.TITANIUM);

export const reducers: {[key: string]: Reducer<Section>} = {
  [SectionNames.ENERGY]: energySlice.reducer,
  [SectionNames.HEAT]: heatSlice.reducer,
  [SectionNames.PLANTS]: plantsSlice.reducer,
  [SectionNames.STEEL]: steelSlice.reducer,
  [SectionNames.TITANIUM]: titaniumSlice.reducer,
};

export const actions: {[x: string]: ActionsBySectionName} = {
  [SectionNames.ENERGY]: {...energySlice.actions},
  [SectionNames.HEAT]: {...heatSlice.actions},
  [SectionNames.PLANTS]: {...plantsSlice.actions},
  [SectionNames.STEEL]: {...steelSlice.actions},
  [SectionNames.TITANIUM]: {...titaniumSlice.actions},
};
