import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {RootStackParamList} from '../navigation/RootStackParamList';
import LinearGradient from 'react-native-linear-gradient';
const OnboardingScreen = ({
  navigation,
  route,
}: RootStackParamList<'Onboarding'>) => {
  return (
    <View style={styles.container}>
      <Image source={require('../img.png')} style={styles.image} />
      <Text style={[styles.buttonText, {color:'white'}]}>CHARACTERS</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <LinearGradient colors={['#008080', '#ffff00']} style={styles.button}>
          <Text style={[styles.buttonText, {color: 'purple'}]}>ENTER</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'purple',
  },
  image: {
    height: '20%',
    width: '70%',
    resizeMode: 'contain',
  },
  button: {
    marginTop: 100,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'Copperplate-Bold',
  },
});
