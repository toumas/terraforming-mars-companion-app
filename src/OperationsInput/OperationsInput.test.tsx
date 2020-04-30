import React from 'react';
import {render} from '@testing-library/react-native';
import {OperationsInput} from './OperationsInput';

describe('OperationsInput', () => {
  it('should show current value of production', () => {
    const {getByText} = render(
      <OperationsInput
        handleOnDecrement={jest.fn()}
        handleOnIncrement={jest.fn()}
        value={0}
      />,
    );
    expect(getByText('0')).toBeDefined();
  });
  it('should render decrement button', () => {
    const {getByText} = render(
      <OperationsInput
        handleOnDecrement={jest.fn()}
        handleOnIncrement={jest.fn()}
        value={0}
      />,
    );
    expect(getByText('-')).toBeDefined();
  });
  it('should render increment button', () => {
    const {getByText} = render(
      <OperationsInput
        handleOnDecrement={jest.fn()}
        handleOnIncrement={jest.fn()}
        value={0}
      />,
    );
    expect(getByText('+')).toBeDefined();
  });
});
