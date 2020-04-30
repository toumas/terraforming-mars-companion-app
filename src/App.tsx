import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {Section} from './Section';
import {SectionNames} from './SectionNames';

const App = () => {
  return (
    <Provider store={store}>
      <Section name={SectionNames.MEGA_CREDITS} />
      <Section name={SectionNames.STEEL} />
      <Section name={SectionNames.TITANIUM} />
      <Section name={SectionNames.PLANTS} />
      <Section name={SectionNames.ENERGY} />
      <Section name={SectionNames.HEAT} />
    </Provider>
  );
};

export default App;
