import React from 'react';
import {render} from '@testing-library/react-native';
import {ProductionTrack} from './ProductionTrack';

it('should render without error', () => {
  const {getByText} = render(<ProductionTrack />);
  expect(getByText('Production track')).toBeDefined();
});
