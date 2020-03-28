import React from 'react';
import {Text, Button} from 'react-native';

type Props = {
  handleOnDecrement: () => void;
  handleOnIncrement: () => void;
  value: number;
};

export function ProductionTrack({
  value,
  handleOnDecrement,
  handleOnIncrement,
}: Props) {
  return (
    <>
      <Button title='-' onPress={handleOnDecrement}></Button>
      <Text>{value}</Text>
      <Button title='+' onPress={handleOnIncrement} />
    </>
  );
}
