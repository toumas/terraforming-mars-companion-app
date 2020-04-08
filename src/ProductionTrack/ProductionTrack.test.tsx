import React from 'react';
import {render} from '@testing-library/react-native';
import {ProductionTrack} from './ProductionTrack';

describe('ProductionTrack', () => {
  it('should show current value of production', () => {
    const {getByText} = render(
      <ProductionTrack
        handleOnDecrement={jest.fn()}
        handleOnIncrement={jest.fn()}
        value={0}
      />,
    );
    expect(getByText('0')).toBeDefined();
  });
  it('should render decrement button', () => {
    const {getByText} = render(
      <ProductionTrack
        handleOnDecrement={jest.fn()}
        handleOnIncrement={jest.fn()}
        value={0}
      />,
    );
    expect(getByText('-')).toBeDefined();
  });
  it('should render increment button', () => {
    const {getByText} = render(
      <ProductionTrack
        handleOnDecrement={jest.fn()}
        handleOnIncrement={jest.fn()}
        value={0}
      />,
    );
    expect(getByText('+')).toBeDefined();
  });
});
