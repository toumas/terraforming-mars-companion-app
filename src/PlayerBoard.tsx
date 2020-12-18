import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
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

export const PlayerBoard = () => {
  const dispatch = useDispatch();
  const energyResources = useSelector(selectEnergyResources);
  const generation = useSelector(selectGeneration);
  const terraformRating = useSelector(selectTerraformRating);

  function handleIncrementGeneration(): void {
    dispatch(incrementGeneration(energyResources));
  }

  function handleIncrementTerraformRating(): void {
    dispatch(incrementTerraformRating());
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
      <ActionButton
        buttonColor="#ff5252"
        renderIcon={() => <UserPlus />}
        degrees={0}
        onPress={handleIncrementGeneration}
        offsetY={100}
      />
      <ActionButton
        buttonColor="#ff5252"
        renderIcon={() => <Globe />}
        degrees={0}
        onPress={handleIncrementTerraformRating}
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
