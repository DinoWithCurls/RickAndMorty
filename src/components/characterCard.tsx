import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CharacterCard = ({name, species, gender, imageUrl}: any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: imageUrl}}
          style={{ resizeMode:'stretch', height: '100%', width: '100%', borderRadius: 25}}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>Name : {name}</Text>
        <Text>Species : {species}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Origin</Text>
        <View>
          <Text>Current Location</Text>
          <Text>Current Location Name</Text>
          <Text>Current Location Dimension</Text>
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
    width: '100%',
    flex: 1,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    backgroundColor:'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '50%',
    height: '30%',
    position: 'absolute',
    top: 5,
  },
  textContainer: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
    width: '95%',
    height: '60%',
    paddingTop: 20,
    paddingLeft: 5,
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 5,
    backgroundColor: 'white',
  },
});
