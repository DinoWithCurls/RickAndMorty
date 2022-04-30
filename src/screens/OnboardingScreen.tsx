import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';

const OnboardingScreen = ({
  navigation,
  route,
}: RootStackParamList<'Onboarding'>) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Rick and Morty</Text>
      <Text>Onboarding Screen</Text>
      <Button title="Enter" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default OnboardingScreen;
