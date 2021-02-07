import React, {useCallback, useLayoutEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {actions as boardActions} from './Board';
import {actions as gameActions, State} from './Games';
import {undoableRoot} from './store';

function uniqueId() {
  return Math.random()
    .toString()
    .split('.')[1];
}

export default function GameSetup({navigation}) {
  const dispatch = useDispatch();

  const handleStartPress = useCallback(() => {
    const boardId = uniqueId();
    dispatch(
      boardActions.addBoard({
        id: boardId,
        // ...undoableRoot(undefined, {type: 'init'}),
      }),
    );

    const gameId = uniqueId();
    const game = {
      boardId,
      id: gameId,
      name: 'foo',
      state: State.InProgress,
    };
    dispatch(gameActions.startGame(game));

    navigation.replace('Board', {id: gameId, initialMegaCredits: 50});
  }, [dispatch, navigation]);

  const headerRight = useCallback(() => {
    return <Button onPress={handleStartPress} title="Start" />;
  }, [handleStartPress]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight,
    });
  }, [headerRight, navigation]);

  return (
    <View>
      <Text style={{color: 'black'}}>GameSetup</Text>
    </View>
  );
}
