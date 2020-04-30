import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {Text} from 'react-native';
import {actions as sectionActions, ActionsBySectionName} from './section';
import {ProductionTrack} from './ProductionTrack/ProductionTrack';
import {RootState} from './store';
import {actions as megaCreditsActions} from './megaCredits';
import {SectionNames} from './SectionNames';
import {OperationsInput} from './OperationsInput';

interface SectionProps {
  name: string;
}

const actions: {[x: string]: ActionsBySectionName} = {
  ...sectionActions,
  [SectionNames.MEGA_CREDITS]: {...megaCreditsActions},
};

export function Section({name}: SectionProps) {
  const dispatch: Dispatch = useDispatch();
  const {
    decrementProduction,
    decrementResources,
    incrementProduction,
    incrementResources,
  } = actions[name];
  const {production, resources} = useSelector((state: RootState) => {
    return state[name];
  });

  function handleProductionDecrement() {
    dispatch(decrementProduction());
  }

  function handleResourcesDecrement() {
    dispatch(decrementResources());
  }

  function handleProductionIncrement() {
    dispatch(incrementProduction());
  }

  function handleResourcesIncrement() {
    dispatch(incrementResources());
  }

  return (
    <>
      <Text>{name}</Text>
      <OperationsInput
        handleOnDecrement={handleResourcesDecrement}
        handleOnIncrement={handleResourcesIncrement}
        value={resources}
      />
      <ProductionTrack
        handleOnDecrement={handleProductionDecrement}
        handleOnIncrement={handleProductionIncrement}
        value={production}
      />
    </>
  );
}
