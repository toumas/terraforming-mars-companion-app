import React from 'react';
import {useDispatch} from 'react-redux';
import {FloatingAction} from 'react-native-floating-action';
import {Section} from './Section';
import {SectionNames} from './SectionNames';
import {slice as generationSlice} from './generation';

const actions = [
  {
    icon: require('./cross.png'),
    name: 'add',
  },
];

export const PlayerBoard = () => {
  const dispatch = useDispatch();

  function handleFABPress(): void {
    dispatch(generationSlice.actions.incrementGeneration());
  }

  return (
    <>
      <Section name={SectionNames.MEGA_CREDITS} />
      <Section name={SectionNames.STEEL} />
      <Section name={SectionNames.TITANIUM} />
      <Section name={SectionNames.PLANTS} />
      <Section name={SectionNames.ENERGY} />
      <Section name={SectionNames.HEAT} />
      <FloatingAction
        overrideWithAction={true}
        actions={actions}
        onPressItem={handleFABPress}
      />
    </>
  );
};
