import React from 'react';
import {Text, Button} from 'react-native';

interface ProductionTrackProps {
  handleOnDecrement: () => void;
  handleOnIncrement: () => void;
  value: number;
};

export function ProductionTrack({
  value,
  handleOnDecrement,
  handleOnIncrement,
}: ProductionTrackProps) {
  return (
    <>
      <Button title='-' onPress={handleOnDecrement} />
      <Text>{value}</Text>
      <Button title='+' onPress={handleOnIncrement} />
    </>
  );
}
