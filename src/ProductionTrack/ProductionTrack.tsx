import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

interface ProductionTrackProps {
  handleOnDecrement: () => void;
  handleOnIncrement: () => void;
  value: number;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export function ProductionTrack({
  value,
  handleOnDecrement,
  handleOnIncrement,
}: ProductionTrackProps) {
  return (
    <View style={styles.container}>
      <Button title='-' onPress={handleOnDecrement} />
      <Text>{value}</Text>
      <Button title='+' onPress={handleOnIncrement} />
    </View>
  );
}
