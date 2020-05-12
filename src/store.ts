import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {reducers, Section} from './section';
import {reducer as megaCreditsReducer} from './megaCredits';
import {reducer as generationReducer} from './generation';

export type RootState = {
  [key: string]: Section;
};

const store: EnhancedStore<RootState> = configureStore({
  reducer: {
    ...reducers,
    ...megaCreditsReducer,
    generation: generationReducer,
  },
});

export {store};
