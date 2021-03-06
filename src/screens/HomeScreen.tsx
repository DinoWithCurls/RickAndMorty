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

import ScreenStyle from '../styles/screens';

const baseUrl = 'https://www.rickandmortyapi.com/api/character';
//All the character details will be shown here.
const HomeScreen = ({navigation, route}: RootStackParamList<'Home'>) => {
  const isCarousel = useRef(null);
  //Fetch and store data from the API into an array
  const [characterData, setCharacterData] = useState([]);
  //Get the index of the card being currently displayed on screen
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width + 80;
  //Function for fetching data from API
  const fetchDataFromAPI = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => {
        setCharacterData(res.results);
      });
  };
  useEffect(() => {
    fetchDataFromAPI();
  }, [characterData]);

  const _renderItem = ({item}: any) => (
    <CharacterCard
      name={item.name}
      species={item.species}
      gender={item.gender}
      imageUrl={item.image}
      origin={item.origin}
      location={item.location}
    />
  );

  return (
    <SafeAreaView style={ScreenStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={ScreenStyle.carousel}>
        <Carousel
          ref={isCarousel}
          layout="default"
          data={characterData}
          sliderWidth={screenWidth}
          itemWidth={Math.round(screenWidth * 0.8)}
          renderItem={_renderItem}
          onSnapToItem={({index}: any) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
