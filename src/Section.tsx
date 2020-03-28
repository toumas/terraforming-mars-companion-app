import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {production} from './reducers';
import {ProductionTrack} from './ProductionTrack/ProductionTrack';

export default function Section() {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state as number;
  });

  function decrement() {
    dispatch(production.actions.decrement({}));
  }

  function increment() {
    dispatch(production.actions.increment({}));
  }

  return (
    <>
      <ProductionTrack
        handleOnDecrement={decrement}
        handleOnIncrement={increment}
        value={value}
      />
    </>
  );
}
