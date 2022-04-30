import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';

import CharacterCard from '../components/characterCard';

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple'}}>
      <Text>Home Screen</Text>
      <View style={{height: '55%', width: '75%'}}><CharacterCard /></View>
      <Button title="Get Data" onPress={() => fetchDataFromAPI()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeScreen;
