import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './store';
import {PlayerBoard} from './PlayerBoard';
import Menu from './Menu';
import GameSetup from './GameSetup';
import {Button} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Setup" component={GameSetup} />
          <Stack.Screen name="Board" component={PlayerBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
