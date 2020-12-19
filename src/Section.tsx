import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {Text} from 'react-native';
import {actions as sectionActions, ActionsBySectionName} from './section';
import {RootState} from './store';
import {actions as megaCreditsActions} from './megaCredits';
import {OperationsInput} from './OperationsInput/OperationsInput';
import {name as MegaCreditsAndTerraformRating} from './megaCreditsAndTerraformRating';

interface SectionProps {
  name: string;
}

const actions: {[x: string]: ActionsBySectionName} = {
  ...sectionActions,
  [MegaCreditsAndTerraformRating]: {...megaCreditsActions},
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
    return state.present[name];
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
      <OperationsInput
        handleOnDecrement={handleProductionDecrement}
        handleOnIncrement={handleProductionIncrement}
        value={production}
      />
    </>
  );
}
