import {SectionNames} from './SectionNames';
import {
  createSlice,
  Reducer,
  ActionCreatorWithoutPayload,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import {slice as generationSlice} from './generation';

export interface Section {
  production: number;
  resources: number;
}

export interface ActionsBySectionName {
  [key: string]: ActionCreatorWithoutPayload<string>;
}

interface MakeSliceOptions {
  name: string;
  initialState?: Section;
  reducers?: ReducersMapObject;
  extraReducers?: ReducersMapObject;
}

export const initialSectionState = {
  production: 0,
  resources: 0,
};

export const makeSlice = (options: MakeSliceOptions) => {
  const {
    name,
    initialState = initialSectionState,
    reducers,
    extraReducers,
  } = options;
  return createSlice({
    name,
    initialState,
    reducers: {
      decrementProduction: (state: Section) => {
        if (state.production > 0) {
          state.production = state.production - 1;
        }
      },
      incrementProduction: (state: Section) => {
        state.production = state.production + 1;
      },
      decrementResources: (state: Section) => {
        if (state.resources > 0) {
          state.resources = state.resources - 1;
        }
      },
      incrementResources: (state: Section) => {
        state.resources = state.resources + 1;
      },
      ...reducers,
    },
    extraReducers: {
      [generationSlice.actions.incrementGeneration.toString()]: (
        state: Section,
      ) => {
        state.resources = state.resources + state.production;
      },
      ...extraReducers,
    },
  });
};

const energySlice = makeSlice({name: SectionNames.ENERGY});
const heatSlice = makeSlice({name: SectionNames.HEAT});
const plantsSlice = makeSlice({name: SectionNames.PLANTS});
const steelSlice = makeSlice({name: SectionNames.STEEL});
const titaniumSlice = makeSlice({name: SectionNames.TITANIUM});

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
