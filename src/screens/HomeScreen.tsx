import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {RootStackParamList} from '../navigation/RootStackParamList';

import CharacterCard from '../components/characterCard';

const baseUrl = 'https://www.rickandmortyapi.com/api/character';
//All the character details will be shown here.
const HomeScreen = ({navigation, route}: RootStackParamList<'Home'>) => {
  const isCarousel = useRef(null);
  const [characterData, setCharacterData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width + 80;
  const fetchDataFromAPI = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => {
        setCharacterData(res.results);
      });
  };
  useEffect(() => {
    fetchDataFromAPI();
    console.log(characterData);
  }, [characterData]);

  const _renderItem = ({item}: any) => (
    <CharacterCard
      name={item.name}
      species={item.species}
      gender={item.gender}
      imageUrl={item.image}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Carousel
          ref={isCarousel}
          layout="default"
          data={characterData}
          sliderWidth={screenWidth}
          itemWidth={Math.round(screenWidth * 0.8)}
          renderItem={_renderItem}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
