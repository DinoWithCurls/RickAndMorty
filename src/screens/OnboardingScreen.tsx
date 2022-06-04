/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import LinearGradient from 'react-native-linear-gradient';
import ScreenStyle from '../styles/screens';
const OnboardingScreen = ({
  navigation,
  route,
}: RootStackParamList<'Onboarding'>) => {
  return (
    <View style={[ScreenStyle.container, {flexDirection: 'column'}]}>
      <Image source={require('../img.png')} style={ScreenStyle.image} />
      <Text style={[ScreenStyle.buttonText, {color: 'white'}]}>CHARACTERS</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <LinearGradient
          colors={['#008080', '#ffff00']}
          style={ScreenStyle.button}>
          <Text style={[ScreenStyle.buttonText, {color: 'purple'}]}>ENTER</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default OnboardingScreen;
