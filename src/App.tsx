import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {PlayerBoard} from './PlayerBoard';

const App = () => {
  return (
    <Provider store={store}>
      <PlayerBoard />
    </Provider>
  );
};

export default App;
