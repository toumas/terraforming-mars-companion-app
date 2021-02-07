import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ActionButton from 'react-native-action-button';
import {Section} from './Section';
import {SectionNames} from './SectionNames';
import {incrementGeneration, selectGeneration} from './generation';
import {selectEnergyResources} from './section';
import {
  incrementTerraformRating,
  selectTerraformRating,
} from './terraformRating';

import Globe from './globe.svg';
import UserPlus from './user-plus.svg';
import {name as megaCreditsAndTerraformRating} from './megaCreditsAndTerraformRating';
import {ActionCreators} from 'redux-undo';
import {ScreenProps} from 'react-native-screens';
import {Route, RouteProp} from '@react-navigation/native';
import {selectById, selectActiveGame, Game} from './Games';
// import {selectGeneration} from './Board';

const BottomScreen = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  button: {
    flexBasis: `${(5 / 12) * 100}%`,
  },
});

type PlayerBoardRouteParams = {
  id: string;
  initialMegaCredits: number;
};

export const PlayerBoard = ({route: {params}}) => {
  const dispatch = useDispatch();
  const energyResources = useSelector(selectEnergyResources);
  const generation = useSelector(selectGeneration);
  const terraformRating = useSelector(selectTerraformRating);

  function handleIncrementGeneration(): void {
    dispatch(incrementGeneration({energyResources, generation}));
  }

  function handleIncrementTerraformRating(): void {
    dispatch(incrementTerraformRating());
  }

  function handleUndo() {
    dispatch(ActionCreators.undo());
  }

  function handleRedo() {
    dispatch(ActionCreators.redo());
  }

  return (
    <>
      <View style={styles.globalsContainer}>
        <Text>Generation: {generation}</Text>
        <Text>Terraform rating: {terraformRating}</Text>
      </View>
      <Section name={megaCreditsAndTerraformRating} />
      <Section name={SectionNames.STEEL} />
      <Section name={SectionNames.TITANIUM} />
      <Section name={SectionNames.PLANTS} />
      <Section name={SectionNames.ENERGY} />
      <Section name={SectionNames.HEAT} />
      <View style={BottomScreen.container}>
        <View style={BottomScreen.button}>
          <Button onPress={handleUndo} title="Undo" />
        </View>
        <View style={BottomScreen.button}>
          <Button onPress={handleRedo} title="Redo" />
        </View>
      </View>
      <ActionButton
        buttonColor="#ff5252"
        renderIcon={() => <UserPlus />}
        degrees={0}
        onPress={handleIncrementGeneration}
        offsetY={120}
        elevation={4}
      />
      <ActionButton
        buttonColor="#ff5252"
        renderIcon={() => <Globe />}
        degrees={0}
        onPress={handleIncrementTerraformRating}
        offsetY={50}
        elevation={4}
      />
    </>
  );
};

const styles = StyleSheet.create({
  globalsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
