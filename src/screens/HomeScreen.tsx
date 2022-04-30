import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import axios from 'axios';
const baseUrl = 'https://www.rickandmortyapi.com/api/character';
//All the character details will be shown here.
const HomeScreen = ({navigation, route}: RootStackParamList<'Home'>) => {
  //const [name, getName] = useState('');
  const fetchDataFromAPI = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => {
        console.log(res.results);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Get Data" onPress={() => fetchDataFromAPI()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeScreen;
