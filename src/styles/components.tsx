import {StyleSheet} from 'react-native';

const ComponentStyle = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flex: 1,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '50%',
    height: '25%',
    position: 'absolute',
    top: 25,
  },
  imageStyle: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
    borderRadius: 25,
  },
  textContainer: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
    width: '95%',
    height: '70%',
    paddingTop: 20,
    paddingLeft: 5,
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 5,
  },
});

export default ComponentStyle;
