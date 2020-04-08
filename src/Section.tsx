import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {Text} from 'react-native';
import {actions} from './section';
import {ProductionTrack} from './ProductionTrack/ProductionTrack';
import {RootState} from './store';

interface SectionProps {
  name: string;
}

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
