import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Section from './Section';

const App = () => {
  return (
    <Provider store={store}>
      <Section />
    </Provider>
  );
};

export default App;
