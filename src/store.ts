import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {reducers, Section} from './section';

export type RootState = {
  [key: string]: Section;
};

const store: EnhancedStore<RootState> = configureStore({
  reducer: {
    ...reducers,
  },
});

export {store};
