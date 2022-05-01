import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import ComponentStyle from '../styles/components';
import SubHeader from './subHeader';
const CharacterCard = ({
  name,
  species,
  gender,
  imageUrl,
  origin,
  location,
  episode,
}: any) => { 
  ``
  const [dimension, getDimension] = useState('');
  const [noOfResidents, getNoOfResidents] = useState(0);
  //Get details from the location endpoint, such as the dimension, and the no of residents in that dimension
  const getLocationDetails = loc => {
    fetch(loc.url)
      .then(res => res.json())
      .then(res => {
        getDimension(res.dimension);
        getNoOfResidents(res.residents.length);
      });
  };
  //Get the names of the episodes the character has featured in
  //const getEpisodeName = epi => { let result;fetch(epi).then(res => res.json()).then(res => { result = res.name; });console.log(result);};
  //episode.map(chapter => getEpisodeName(chapter));
  //Make the function calls inside useEffect hook, to make sure data is available before rendering.
  useEffect(() => {
    getLocationDetails(location);
  });
  return (
    <View style={ComponentStyle.cardContainer}>
      <View style={ComponentStyle.imageContainer}>
        <Image source={{uri: imageUrl}} style={ComponentStyle.imageStyle} />
      </View>
      <View style={ComponentStyle.textContainer}>
        <Text style={ComponentStyle.headerText}>{name}</Text>
        <Text style={ComponentStyle.contentText}>Species: {species}</Text>
        <Text style={ComponentStyle.contentText}>Gender: {gender}</Text>
        <SubHeader title={'Origin'} />
        <Text style={ComponentStyle.contentText}>{origin.name}</Text>
        <SubHeader title={'Current Location'} />
        <Text style={ComponentStyle.contentText}>Name: {location.name}</Text>
        <Text style={ComponentStyle.contentText}>Dimension: {dimension}</Text>
        <Text style={ComponentStyle.contentText}>
          Residents: {noOfResidents}
        </Text>
        <SubHeader title={'Chapters'} />
        <View>
          <Text>{episode}</Text>
        </View>
      </View>
    </View>
  );
};

export default CharacterCard;
