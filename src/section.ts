import {SectionNames} from './SectionNames';
import {
  createSlice,
  Reducer,
  ActionCreatorWithoutPayload,
  ReducersMapObject,
  createSelector,
  PayloadAction,
} from '@reduxjs/toolkit';
import {incrementGeneration} from './generation';
import {RootState} from './store';

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
  extraReducers?: ReducersMapObject<any, PayloadAction<number>>;
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
      [incrementGeneration.type]: (state: Section) => {
        state.resources = state.resources + state.production;
      },
      ...extraReducers,
    },
  });
};

export const energySlice = makeSlice({
  name: SectionNames.ENERGY,
  extraReducers: {
    [incrementGeneration.type]: (state: Section) => {
      state.resources = state.production;
    },
  },
});
export const heatSlice = makeSlice({
  name: SectionNames.HEAT,
  extraReducers: {
    [incrementGeneration.type]: (
      state: Section,
      action: PayloadAction<number>,
    ) => {
      state.resources = state.resources + state.production + action.payload;
    },
  },
});
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

export const selectEnergyResources = createSelector(
  (state: RootState) => {
    return state.energy.resources;
  },
  (heatResources) => heatResources,
);
