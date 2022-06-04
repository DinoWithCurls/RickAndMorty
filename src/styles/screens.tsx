import {StyleSheet} from 'react-native';
//All the CSS required for the screens are present here.
const ScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default ScreenStyle;
