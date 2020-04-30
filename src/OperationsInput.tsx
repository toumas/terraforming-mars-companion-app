import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface OperationsInputProps {
  handleOnDecrement: () => void;
  handleOnIncrement: () => void;
  value: number;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const OperationsInput = ({
  handleOnDecrement,
  handleOnIncrement,
  value,
}: OperationsInputProps) => {
  return (
    <View style={styles.container}>
      <Button title="-" onPress={handleOnDecrement} />
      <Text>{value}</Text>
      <Button title="+" onPress={handleOnIncrement} />
    </View>
  );
};
