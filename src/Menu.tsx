import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Menu({navigation}) {
  function handleNewGamePress() {
    navigation.navigate('Setup');
  }

  return (
    <View>
      <Button title="New game" onPress={handleNewGamePress} />
    </View>
  );
}
