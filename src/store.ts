import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {reducers, Section} from './section';
import {reducer as megaCreditsReducer} from './megaCredits';

export type RootState = {
  [key: string]: Section;
};

const store: EnhancedStore<RootState> = configureStore({
  reducer: {
    ...reducers,
    ...megaCreditsReducer,
  },
});

export {store};
