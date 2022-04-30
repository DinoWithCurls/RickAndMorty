import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';

import CharacterCard from '../components/characterCard';

const baseUrl = 'https://www.rickandmortyapi.com/api/character';
//All the character details will be shown here.
const HomeScreen = ({navigation, route}: RootStackParamList<'Home'>) => {
  const [characterData, setCharacterData] = useState([]);
  const fetchDataFromAPI = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => {
        setCharacterData(res.results[0]);
      });
  };
  useEffect(() => {
    fetchDataFromAPI();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={{height: '55%', width: '75%'}}>
        <CharacterCard
          name={characterData.name}
          species={characterData.species}
          gender={characterData.gender}
          imageUrl={characterData.image}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
