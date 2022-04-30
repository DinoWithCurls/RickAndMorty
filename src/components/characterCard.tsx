import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CharacterCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Text>Character Image</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Character Name</Text>
        <Text>Character Species</Text>
        <Text>Character Gender</Text>
        <Text>Character Origin</Text>
        <View>
          <Text>Current Location</Text>
          <Text>Character Current Location Name</Text>
          <Text>Character Current Location Dimension</Text>
          <Text>No of residents</Text>
        </View>
        <Text>Name of Chapters they were in</Text>
      </View>
    </View>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '95%',
    height: '35%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
  },
  textContainer: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
    width: '95%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
  },
});
