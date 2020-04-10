import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {Text} from 'react-native';
import {
  actions as sectionActions,
  ActionsBySectionName,
} from './section';
import {ProductionTrack} from './ProductionTrack/ProductionTrack';
import {RootState} from './store';
import {actions as megaCreditsActions} from './megaCredits';
import { SectionNames } from './SectionNames';

interface SectionProps {
  name: string;
}

const actions: {[x: string]: ActionsBySectionName} = {
  ...sectionActions,
  [SectionNames.MEGA_CREDITS]: {...megaCreditsActions},
};

export function Section({name}: SectionProps) {
  const dispatch: Dispatch = useDispatch();
  const {decrementProduction, incrementProduction} = actions[name];
  const {production} = useSelector((state: RootState) => {
    return state[name];
  });

  function handleDecrement() {
    dispatch(decrementProduction());
  }

  function handleIncrement() {
    dispatch(incrementProduction());
  }

  return (
    <>
      <Text>{name}</Text>
      <ProductionTrack
        handleOnDecrement={handleDecrement}
        handleOnIncrement={handleIncrement}
        value={production}
      />
    </>
  );
}
