import React from 'react';
import {View, Text, Image} from 'react-native';
import ComponentStyle from '../styles/components';
const CharacterCard = ({name, species, gender, imageUrl}: any) => {
  return (
    <View style={ComponentStyle.cardContainer}>
      <View style={ComponentStyle.imageContainer}>
        <Image source={{uri: imageUrl}} style={ComponentStyle.imageStyle} />
      </View>
      <View style={ComponentStyle.textContainer}>
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
