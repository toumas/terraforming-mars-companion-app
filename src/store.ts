import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {production} from './reducers';

const store: EnhancedStore = configureStore({
  reducer: production.reducer,
});

export {store};
