import React from 'react';
import {View, Text, Button} from 'react-native';

const OnboardingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Rick and Morty</Text>
      <Text>Onboarding Screen</Text>
      <Button
        title="Enter"
        onPress={() => console.log('Onboarding Button Pressed')}
      />
    </View>
  );
};
export default OnboardingScreen;
