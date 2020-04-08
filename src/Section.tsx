import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from './section';
import {ProductionTrack} from './ProductionTrack/ProductionTrack';
import {RootState} from './store';
import {Dispatch} from '@reduxjs/toolkit';

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
      <ProductionTrack
        handleOnDecrement={handleDecrement}
        handleOnIncrement={handleIncrement}
        value={production}
      />
    </>
  );
}
